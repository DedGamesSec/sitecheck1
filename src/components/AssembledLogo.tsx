import React from "react";

interface AssembledLogoProps {
  progress: number; // scroll assembly progress (0 to 1)
  className?: string;
  isStatic?: boolean;
  ecoMode?: boolean;
}

interface CircleNode {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  offX: number;
  offY: number;
}

// Exactly 17 circular nodes parsed from your company's SVG file
const CIRCLE_NODES: CircleNode[] = [
  { cx: 144, cy: 12, r: 12, fill: "#0698FE", offX: -250, offY: -350 },
  { cx: 144, cy: 93, r: 14, fill: "#0289FD", offX: 300, offY: -400 },
  { cx: 276.5, cy: 53.5, r: 11.5, fill: "#F6FAFB", offX: 400, offY: -200 },
  { cx: 248.5, cy: 229.5, r: 11.5, fill: "#F7FBFC", offX: 350, offY: 450 },
  { cx: 143.5, cy: 295.5, r: 11.5, fill: "#F5F9FC", offX: -50, offY: 500 },
  { cx: 222.5, cy: 197.5, r: 11.5, fill: "#0594FD", offX: 450, offY: 200 },
  { cx: 276.5, cy: 136.5, r: 11.5, fill: "#0897FE", offX: 500, offY: -50 },
  { cx: 191.5, cy: 162.5, r: 11.5, fill: "#F5F9FC", offX: 280, offY: -280 },
  { cx: 238.5, cy: 116.5, r: 11.5, fill: "#F6FAFD", offX: 350, offY: -150 },
  { cx: 39.5, cy: 229.5, r: 11.5, fill: "#0593FF", offX: -450, offY: 400 },
  { cx: 65.5, cy: 197.5, r: 11.5, fill: "#0287FE", offX: -400, offY: 150 },
  { cx: 95.5, cy: 162.5, r: 11.5, fill: "#F6FAFD", offX: -300, offY: -300 },
  { cx: 11.5, cy: 136.5, r: 11.5, fill: "#F6FAFD", offX: -500, offY: -100 },
  { cx: 50.5, cy: 116.5, r: 11.5, fill: "#038CFE", offX: -350, offY: -200 },
  { cx: 207.5, cy: 72.5, r: 11.5, fill: "#F6FAFD", offX: 180, offY: -450 },
  { cx: 80.5, cy: 73.5, r: 11.5, fill: "#F6FAFD", offX: -180, offY: -450 },
  { cx: 11.5, cy: 53.5, r: 11.5, fill: "#099BFE", offX: -450, offY: -350 },
];

// Exactly 47 line paths representing the shield wireframe
const SHIELD_PATHS = [
  { d: "M71.8826 71.1328L71.0004 74.0001L19 58L19.8823 55.1327L71.8826 71.1328Z", fill: "#3EC7F1" },
  { d: "M45.5584 108.433L42.9999 110L13 61L15.5585 59.4335L45.5584 108.433Z", fill: "#21A9E3" },
  { d: "M136.944 17.8151L139 19.9997L88 68L85.9439 65.8154L136.944 17.8151Z", fill: "#FAFAFB" },
  { d: "M73.5302 79.2971L75.9999 81.0003L56 110L53.5304 108.297L73.5302 79.2971Z", fill: "#23B7F3" },
  { d: "M132.892 89.1356L132 92.0001L87 78L87.8912 75.1354L132.892 89.1356Z", fill: "#33C4F2" },
  { d: "M41.6124 119.34L43.0001 122L20 134L18.6123 131.34L41.6124 119.34Z", fill: "#22AFF0" },
  { d: "M74.044 139.924L90.5439 155.923L88.4559 158.077L71.9356 142.057L54.9804 124.981L57.1091 122.866L74.044 139.924Z", fill: "white" },
  { d: "M133.191 94.1111L134 96.9999L59 118L58.1911 115.111L133.191 94.1111Z", fill: "#0AA5F7" },
  { d: "M62.0041 189.019L55.0356 157.827L55.0276 157.788L48.996 126.981L51.9402 126.403L57.9678 157.192L64.932 188.365L62.0041 189.019Z", fill: "#0D57E8" },
  { d: "M136.533 102.293L139 104L103 156L100.533 154.292L136.533 102.293Z", fill: "#FDFDFD" },
  { d: "M88.7752 168.987L90.9998 171L72 192L69.7754 189.987L88.7752 168.987Z", fill: "#32BDF4" },
  { d: "M58.7055 203.067L61.0002 205L45 224L42.7053 222.068L58.7055 203.067Z", fill: "#21B2F3" },
  { d: "M137.593 291.458L136 294L45 237L46.5925 234.458L137.593 291.458Z", fill: "#FAFBFC" },
  { d: "M137.432 294.243L135 296L70 206L72.4321 204.244L137.432 294.243Z", fill: "#FAFAFB" },
  { d: "M146 81H142L142 23H146L146 81Z", fill: "#0877E5" },
  { d: "M61.2097 189.971L59.0001 192L14 143L16.2096 140.971L61.2097 189.971Z", fill: "white" },
  { d: "M202.077 65.8356L200 67.9998L150 20L152.078 17.8358L202.077 65.8356Z", fill: "#F2F2F4" },
  { d: "M200.109 75.1353L201 77.9999L156 92L155.109 89.1354L200.109 75.1353Z", fill: "#1DB3FA" },
  { d: "M268.118 55.1326L269 57.9999L217 74L216.118 71.1327L268.118 55.1326Z", fill: "#FCFDFE" },
  { d: "M230.799 115.108L230 118L154 97L154.799 94.1084L230.799 115.108Z", fill: "#17A3E8" },
  { d: "M187.466 154.292L185 156L149 104L151.467 102.292L187.466 154.292Z", fill: "#199BF1" },
  { d: "M230.912 122.846L233 125L200 157L197.912 154.846L230.912 122.846Z", fill: "white" },
  { d: "M235.446 109.263L233 111L211 80L213.447 78.2638L235.446 109.263Z", fill: "white" },
  { d: "M271.447 60.4249L274 62.0002L245 109L242.447 107.425L271.447 60.4249Z", fill: "#F8F9FB" },
  { d: "M269.388 131.34L268 134L245 122L246.388 119.34L269.388 131.34Z", fill: "white" },
  { d: "M218.224 189.987L216 192L197 171L199.225 168.987L218.224 189.987Z", fill: "white" },
  { d: "M244.316 221.093L242 223L228 206L230.316 204.093L244.316 221.093Z", fill: "white" },
  { d: "M236.06 125.403L239 126L226 190L223.06 189.403L236.06 125.403Z", fill: "#14A9F0" },
  { d: "M240.394 234.466L242 237L152 294L150.395 291.466L240.394 234.466Z", fill: "#18AAF6" },
  { d: "M269.765 141.999L272 144L229 192L226.766 189.998L269.765 141.999Z", fill: "#0677F8" },
  { d: "M216.584 203.221L219 205L152 296L149.584 294.221L216.584 203.221Z", fill: "#0AA2EF" },
  { d: "M216.584 203.221L219 205L152 296L149.584 294.221L216.584 203.221Z", fill: "#1173E1" },
  { d: "M280 126H276V63H280V126Z", fill: "#FCFDFE" },
  { d: "M12 127H8L8 63H12L12 127Z", fill: "#0A9DED" },
  { d: "M134.755 12.1988L136 16L20 54L18.7548 50.1988L134.755 12.1988Z", fill: "#10A1F2" },
  { d: "M269.265 50.2054L268 54.0001L154 16L155.265 12.2053L269.265 50.2054Z", fill: "#0DA8FA" },
  { d: "M85.427 221.055L85.9996 224L50 231L49.4274 228.055L85.427 221.055Z", fill: "#FAFBFD" },
  { d: "M144.419 210.029L144 213L73 203L73.4184 200.029L144.419 210.029Z", fill: "#094EDE" },
  { d: "M213.576 200.03L214 203L144 213L143.576 210.03L213.576 200.03Z", fill: "#0768EB" },
  { d: "M204.032 225.018L177.806 211.33L177.769 211.31L151.77 196.81L151.759 196.804L100.986 167.992L102.466 165.383L153.24 194.195L153.239 194.196L179.23 208.689L205.421 222.357L204.032 225.018Z", fill: "#028EF2" },
  { d: "M240.618 229.064L240 232L202 224L202.618 221.064L240.618 229.064Z", fill: "#19B2EC" },
  { d: "M33.08 222.215L25.1706 204.308L25.1357 204.229L25.1074 204.148L18.6078 185.147L18.5885 185.092L18.573 185.036L13.5726 167.036L13.5502 166.954L13.5343 166.87L9.94465 147.776L13.8751 147.037L17.4496 166.042L22.4119 183.91L28.8664 202.775L36.7399 220.599L33.08 222.215Z", fill: "white" },
  { d: "M254.83 221.808L262.739 203.902L262.774 203.823L262.802 203.741L269.302 184.741L269.321 184.686L269.337 184.629L274.337 166.629L274.36 166.547L274.376 166.463L277.965 147.369L274.035 146.631L270.46 165.636L265.498 183.503L259.043 202.368L251.17 220.192L254.83 221.808Z", fill: "white" },
  { d: "M64.2035 261.9L75.6766 275.368L88.6775 288.868L102.678 301.868L117.67 314.361L146.287 335.449L143.914 338.669L115.203 317.513L115.157 317.475L100.071 304.904L100.03 304.869L99.9906 304.833L85.9107 291.758L85.8699 291.72L85.8304 291.68L72.756 278.102L72.7137 278.059L72.6747 278.012L61.0643 264.383L61.0238 264.328L40.9089 237.174L44.1235 234.793L64.2035 261.9Z", fill: "#0BA0FA" },
  { d: "M223.635 261.889L212.14 275.382L199.163 288.859L185.151 301.87L170.144 314.375L141.539 335.454L143.911 338.673L172.576 317.552L172.623 317.517L172.669 317.479L187.757 304.907L187.797 304.872L187.837 304.835L201.918 291.76L201.959 291.723L201.998 291.683L215.072 278.104L215.115 278.06L215.155 278.014L226.765 264.384L226.806 264.33L246.921 237.173L243.707 234.793L223.635 261.889Z", fill: "#027CFB" },
  { d: "M84.4544 224.624L82.9997 222L184 166L185.455 168.624L84.4544 224.624Z", fill: "#FAFBFD" },
  { d: "M146 336H142V305H146V336Z", fill: "#FAFCFE" },
];

export default function AssembledLogo({ progress, className, isStatic = false, ecoMode = false }: AssembledLogoProps) {
  const isEcoOrStatic = isStatic || ecoMode;

  // 1. Circles assembly progress (reaches 100% when global progress is at 0.7)
  const circleProgress = isEcoOrStatic ? 1 : Math.min(1, progress / 0.72);
  
  // Ease-out equation for circles trajectory: high initial speed, smooth settling
  const easeOutFactor = isEcoOrStatic ? 0 : Math.pow(1 - circleProgress, 2.5);

  // 2. Line mask reveal progress (starts at progress 0.3, ends at 1.0)
  const lineProgress = isEcoOrStatic ? 1 : Math.max(0, (progress - 0.28) / 0.72);
  
  // Outer radius of circular reveal mask centered at shield centroid (144, 172)
  const maskRadius = lineProgress * 300; 

  return (
    <div 
      className={className || "relative flex items-center justify-center scale-[0.75] min-[375px]:scale-[0.85] sm:scale-100 transition-transform duration-300 origin-center"}
      style={{
        width: "288px",
        height: "344px",
        overflow: "visible",
      }}
      id="assembled-logo-wrapper"
    >
      {/* Soft, beautiful radial glow strictly behind the logo */}
      {!isStatic && !ecoMode && (
        <div 
          className="absolute bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.25)_0%,rgba(10,10,11,0)_70%)] pointer-events-none transition-opacity duration-300"
          style={{
            width: "600px",
            height: "600px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: progress,
          }}
        />
      )}

      <svg 
        width="288" 
        height="344" 
        viewBox="0 0 288 344" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
        id="assembled-logo-svg"
      >
        <defs>
          {/* Dynamic clipping path centered on shield centroid (144, 172) */}
          <clipPath id="line-reveal-clip">
            <circle cx="144" cy="172" r={maskRadius} />
          </clipPath>
          <style>{`
            @keyframes logo-node-pulse {
              0%, 100% { opacity: 0.75; }
              50% { opacity: 1; }
            }
            .pulsing-node {
              will-change: opacity;
            }
          `}</style>
        </defs>

        {/* SECTION A: Structural Shield Lines (Connected together outwardly via Mask) */}
        <g 
          clipPath={lineProgress < 0.98 ? "url(#line-reveal-clip)" : undefined} 
          style={{ 
            opacity: Math.min(1, lineProgress * 1.5),
            transform: `scale(${0.9 + lineProgress * 0.1})`,
            transformOrigin: "144px 172px",
            willChange: isEcoOrStatic ? "auto" : "transform, opacity"
          }}
        >
          {SHIELD_PATHS.map((path, idx) => (
            <path 
              key={`line-path-${idx}`}
              d={path.d} 
              fill={path.fill}
            />
          ))}
        </g>

        {/* SECTION B: Flying Circular Nodes (Forming the Constellations core slots) */}
        <g 
          id="assembled-logo-nodes" 
          style={{ willChange: isEcoOrStatic ? "auto" : "transform" }}
        >
          {CIRCLE_NODES.map((node, idx) => {
            // Calculate dynamic position based on scroll progress
            const currentX = node.cx + node.offX * easeOutFactor;
            const currentY = node.cy + node.offY * easeOutFactor;
            
            const isPulsing = isEcoOrStatic || circleProgress > 0.95;

            return (
              <circle 
                key={`node-circle-${idx}`}
                cx={currentX} 
                cy={currentY} 
                r={node.r} 
                fill={node.fill}
                opacity={0.15 + circleProgress * 0.85}
                className={isPulsing && !ecoMode ? "pulsing-node" : undefined}
                style={{
                  animation: isPulsing && !ecoMode ? `logo-node-pulse 4s ease-in-out infinite` : "none",
                  animationDelay: isPulsing && !ecoMode ? `${(idx * 0.23).toFixed(2)}s` : "none",
                  willChange: isEcoOrStatic ? "auto" : "transform, opacity"
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
