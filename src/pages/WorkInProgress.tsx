import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";

interface WorkInProgressProps {
  pageName?: string;
}

const WorkInProgress = ({ pageName = "This Feature" }: WorkInProgressProps) => {
  const planets = [
    { name: "Mercury", size: 6, color: "#8C7853", orbitSize: 40, duration: 8 },
    { name: "Venus", size: 9, color: "#FFC649", orbitSize: 60, duration: 12 },
    { name: "Earth", size: 10, color: "#4A90E2", orbitSize: 80, duration: 16 },
    { name: "Mars", size: 8, color: "#E27B58", orbitSize: 100, duration: 20 },
    { name: "Jupiter", size: 20, color: "#C88B3A", orbitSize: 130, duration: 30 },
    { name: "Saturn", size: 18, color: "#F4D03F", orbitSize: 160, duration: 38 },
    { name: "Uranus", size: 14, color: "#4FD0E7", orbitSize: 185, duration: 45 },
    { name: "Neptune", size: 14, color: "#4169E1", orbitSize: 210, duration: 52 },
  ];

  // Generate stable star positions once
  const [stars] = useState(() => 
    Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5
    }))
  );

  // Load or initialize planet rotations
  const [planetRotations, setPlanetRotations] = useState<Record<string, number>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('solarSystemRotations');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    // Initialize with random starting positions
    const initial: Record<string, number> = {};
    planets.forEach(planet => {
      initial[planet.name] = Math.random() * 360;
    });
    return initial;
  });

  // Save rotations periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setPlanetRotations(prev => {
        const updated = { ...prev };
        planets.forEach(planet => {
          // Calculate how much rotation has occurred (360 degrees per duration in seconds)
          const degreesPerSecond = 360 / planet.duration;
          updated[planet.name] = (updated[planet.name] + degreesPerSecond * 0.1) % 360;
        });
        localStorage.setItem('solarSystemRotations', JSON.stringify(updated));
        return updated;
      });
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Stars Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
      <div className="container mx-auto px-6 py-2 min-h-screen flex flex-col items-center justify-center relative z-10">
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-black mb-2 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Under Cosmic Construction
        </motion.h1>

        {/* Solar System Container */}
        <div className="relative w-full max-w-[480px] h-[480px] mb-2 mx-auto">
          {/* Sun */}
          <motion.div
            className="absolute rounded-full z-20"
            style={{
              left: '50%',
              top: '50%',
              width: '60px',
              height: '60px',
              marginLeft: '-30px',
              marginTop: '-30px',
              background: 'radial-gradient(circle, #FDB813 0%, #FF8C00 50%, #FF4500 100%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Sun rays */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-1 h-20 bg-gradient-to-t from-yellow-500/50 to-transparent origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  height: ['60px', '100px', '60px'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
          {/* Planets with Orbits */}
          {planets.map((planet) => (
            <div key={planet.name}>
              {/* Orbit Ring */}
              <div
                className="absolute border border-white/10 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${planet.orbitSize * 2}px`,
                  height: `${planet.orbitSize * 2}px`,
                  marginLeft: `-${planet.orbitSize}px`,
                  marginTop: `-${planet.orbitSize}px`,
                }}
              />
              {/* Planet */}
              <motion.div
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: [planetRotations[planet.name] || 0, planetRotations[planet.name] + 360 || 360],
                }}
                transition={{
                  duration: planet.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  className="rounded-full absolute"
                  style={{
                    width: `${planet.size}px`,
                    height: `${planet.size}px`,
                    left: `${planet.orbitSize}px`,
                    top: '0px',
                    marginLeft: `-${planet.size / 2}px`,
                    marginTop: `-${planet.size / 2}px`,
                    background: `radial-gradient(circle at 30% 30%, ${planet.color}, ${planet.color}DD)`,
                    boxShadow: `0 0 ${planet.size}px ${planet.size / 4}px ${planet.color}66, inset -${planet.size / 4}px -${planet.size / 4}px ${planet.size / 2}px rgba(0, 0, 0, 0.5)`,
                  }}
                >
                  {/* Saturn's Ring */}
                  {planet.name === "Saturn" && (
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-yellow-600/60 rounded-full"
                      style={{
                        width: `${planet.size * 1.8}px`,
                        height: `${planet.size * 0.4}px`,
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%) rotateX(75deg)',
                      }}
                    />
                  )}
                  {/* Planet Label */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 text-white/70 text-xs font-mono whitespace-nowrap"
                    style={{
                      top: `${planet.size + 8}px`,
                    }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {planet.name}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-slate-300 text-center mb-3 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {pageName} is orbiting through development. Our elite team is engineering something out of this world.
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => (window.location.href = "/")}
            variant="default"
          >
            <span className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Return to Earth (Home)
            </span>
          </Button>
        </motion.div>

        {/* Fun Cosmic Stats */}
        <motion.div
          className="mt-3 text-center text-slate-400 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            🚀 Building at light speed... 🌟
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkInProgress;
