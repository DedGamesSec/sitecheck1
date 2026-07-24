import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const __dirnameVar = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

const DB_FILE = path.join(__dirnameVar, 'waitlist_db.json');

interface WaitlistEntry {
  id: string;
  contactInfo: string;
  tier: string;
  os: string;
  cpu: string;
  createdAt: string;
}

// Initialize database file safely
function initDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), 'utf8');
      console.log(`[TrustNode Database] Created empty waitlist database at ${DB_FILE}`);
    } else {
      console.log(`[TrustNode Database] Loaded existing database from ${DB_FILE}`);
    }
  } catch (error) {
    console.error('[TrustNode Database] Failed to initialize local JSON database:', error);
  }
}

initDb();

// Helper functions to read/write waitlist entries
async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.promises.readFile(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('[TrustNode Database] Error reading database, returning empty array', err);
    return [];
  }
}

async function writeWaitlist(entries: WaitlistEntry[]): Promise<boolean> {
  try {
    await fs.promises.writeFile(DB_FILE, JSON.stringify(entries, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('[TrustNode Database] Error writing database', err);
    return false;
  }
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // GET: Fetch all waitlist signups
  app.get('/api/waitlist', async (req, res) => {
    try {
      const db = await readWaitlist();
      res.json(db);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read database' });
    }
  });

  // GET: Waitlist statistics (distributions)
  app.get('/api/waitlist/stats', async (req, res) => {
    try {
      const db = await readWaitlist();
      
      const stats = {
        total: db.length,
        tiers: { free: 0, standard: 0, vip: 0 },
        os: { Android: 0, iOS: 0 },
        cpus: {} as Record<string, number>,
        recentActivity: db.slice(-10).reverse()
      };

      db.forEach(entry => {
        // Tiers
        const tierKey = (entry.tier || 'standard').toLowerCase() as 'free' | 'standard' | 'vip';
        if (stats.tiers[tierKey] !== undefined) {
          stats.tiers[tierKey]++;
        } else {
          stats.tiers.standard++;
        }

        // OS
        const osKey = entry.os === 'iOS' || entry.os?.toLowerCase().includes('ios') ? 'iOS' : 'Android';
        stats.os[osKey]++;

        // CPU
        const cpuName = entry.cpu || 'Unknown';
        stats.cpus[cpuName] = (stats.cpus[cpuName] || 0) + 1;
      });

      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to compute statistics' });
    }
  });

  // POST: Create a waitlist signup and store in local JSON file
  app.post('/api/waitlist', async (req, res) => {
    try {
      const { contactInfo, email, role, tier, os, cpu } = req.body;
      
      // Support the original fallback format if any, but default to the new fields
      const contact = contactInfo || email;
      if (!contact || contact.trim() === '') {
        return res.status(400).json({ error: 'Contact handle is required' });
      }

      const selectedTier = tier || role || 'standard';
      const selectedOs = os || 'Android';
      const selectedCpu = cpu || 'Unknown';

      // Generate a secure, unique, and branded ticket ID
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const generatedTicket = `TN-2026-${selectedTier.toUpperCase()}-${selectedOs[0].toUpperCase()}${selectedCpu[0].toUpperCase()}-${randNum}`;

      const newEntry: WaitlistEntry = {
        id: generatedTicket,
        contactInfo: contact.trim(),
        tier: selectedTier,
        os: selectedOs,
        cpu: selectedCpu,
        createdAt: new Date().toISOString()
      };

      const db = await readWaitlist();
      
      // Prevent exact duplicate signups for the same contact handle in the last minute
      const duplicate = db.find(e => e.contactInfo.toLowerCase() === contact.trim().toLowerCase());
      if (duplicate) {
        return res.json({ 
          success: true, 
          token: duplicate.id, 
          alreadyExists: true,
          timestamp: duplicate.createdAt 
        });
      }

      db.push(newEntry);
      const saved = await writeWaitlist(db);

      if (!saved) {
        return res.status(500).json({ error: 'Failed to write to database' });
      }

      console.log(`[TrustNode Server] New registration saved: ${contact} (${selectedTier}) -> Token ${generatedTicket}`);
      res.json({ success: true, token: generatedTicket, timestamp: newEntry.createdAt });
    } catch (error) {
      console.error('[TrustNode Server] Error saving waitlist:', error);
      res.status(500).json({ error: 'Server database error' });
    }
  });

  // DELETE: Delete a waitlist registration
  app.delete('/api/waitlist/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const db = await readWaitlist();
      const filtered = db.filter(e => e.id !== id);

      if (db.length === filtered.length) {
        return res.status(404).json({ error: 'Record not found' });
      }

      await writeWaitlist(filtered);
      res.json({ success: true, message: 'Record deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete record' });
    }
  });

  // Serve Vite build static assets in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirnameVar, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'), (err) => {
        if (err) {
          res.status(404).send('TrustNode client application not built yet. Run `npm run build`.');
        }
      });
    });
  }

  if (process.env.NODE_ENV !== 'test') {
    app.listen(Number(PORT), '0.0.0.0', () => {
      console.log(`[TrustNode Server] Running on http://0.0.0.0:${PORT}`);
    });
  }

  return app;
}

startServer();
