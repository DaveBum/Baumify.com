import { motion } from "framer-motion";

const techStack = [
  "React/Next.js",
  "Node/Nest (TypeScript)", 
  "Postgres/Prisma",
  "Redis",
  "WebSockets",
  "Stripe",
  "AWS (ECS/Lambda/CDK)",
  "Docker/Kubernetes",
  "Swift/iOS",
  "Python",
  "Go",
  "Rust",
  "C/C++",
];

const TechMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8 bg-card/30 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      <motion.div 
        className="flex space-x-12"
        animate={{ x: [-1000, 0] }}
        transition={{ 
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={`${tech}-${index}`}
            className="flex items-center space-x-3 whitespace-nowrap group cursor-pointer"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-3 h-3 rounded-full bg-secondary"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.1 
              }}
            />
            <motion.span 
              className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-all duration-300"
              whileHover={{
                textShadow: "0 0 8px rgba(255,255,255,0.8)",
                letterSpacing: "1px"
              }}
            >
              {tech}
            </motion.span>
            <motion.div
              className="w-px h-8 bg-border/50"
              animate={{ 
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: index * 0.2 
              }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated Border */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default TechMarquee;