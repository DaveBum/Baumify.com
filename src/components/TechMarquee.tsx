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
    <div className="relative overflow-hidden py-6 bg-card/50">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      <motion.div 
        className="flex space-x-8"
        animate={{ x: [-1000, 0] }}
        transition={{ 
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <motion.div
            key={`${tech}-${index}`}
            className="flex items-center space-x-2 whitespace-nowrap group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {tech}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;