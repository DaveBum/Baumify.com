import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Code2, Zap, Target } from "lucide-react";
import TechMarquee from "./TechMarquee";
import AnimatedBackground from "./AnimatedBackground";
import TerminalTypewriter from "./TerminalTypewriter";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8
      },
    },
  };

  const title = "We architect, design, and ship elite software—fast.";
  
  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-20"
      >
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-[120%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Animated Background Elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 -z-10"
      >
        <AnimatedBackground />
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        {/* Animated Badge */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full group cursor-pointer">
            <motion.div 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
            <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Terminal Welcome Message */}
        <div className="mb-8">
          <motion.div 
            className="bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg p-6 max-w-4xl mx-auto font-mono text-left shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-white/60 text-sm">terminal</span>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="space-y-2">
              <motion.div 
                className="text-green-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                user@baumify:~$ whoami
              </motion.div>
              
              <motion.div 
                className="text-white text-sm ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Elite software architects
              </motion.div>
              
              <motion.div 
                className="text-green-400 text-sm mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                user@baumify:~$ cat mission.txt
              </motion.div>
              
              <motion.div 
                className="text-white/90 ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <TerminalTypewriter 
                  text="We architect, design, and ship elite software—fast."
                  delay={3000}
                />
              </motion.div>
              
              <motion.div 
                className="text-green-400 text-sm mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6 }}
              >
                user@baumify:~$ ls -la services/
              </motion.div>
              
              <motion.div 
                className="text-white/80 text-sm ml-4 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6.5 }}
              >
                <div>drwxr-xr-x design_that_converts/</div>
                <div>drwxr-xr-x systems_that_scale/</div>
                <div>drwxr-xr-x velocity_that_compounds/</div>
              </motion.div>
              
              <motion.div 
                className="flex items-center text-green-400 text-sm mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7.5 }}
              >
                <span>user@baumify:~$ </span>
                <motion.span
                  className="inline-block w-2 h-4 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons with Animations */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="minimal"
                asChild 
                className="min-w-[160px] animate-glow-pulse"
              >
                <a href="tel:+19015176300" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="glass" 
                asChild 
                className="min-w-[160px]"
              >
                <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Email Us</span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="minimal"
                asChild 
                className="min-w-[180px]"
              >
                <a href="/contact" className="flex items-center space-x-2">
                  <ArrowRight className="h-5 w-5" />
                  <span>Start a Project</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Value Cards with 3D Effects */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Design that converts", description: "User-centered experiences that drive measurable results" },
              { icon: Code2, title: "Systems that scale", description: "Architecture built for growth and performance" },
              { icon: Zap, title: "Velocity that compounds", description: "Ship MVPs in weeks, iterate at lightning speed" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-strong rounded-xl p-6 hover:shadow-elegant transition-all duration-500 group cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.2, duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex p-3 rounded-lg bg-gradient-subtle mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Tech Stack Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <TechMarquee />
      </motion.div>
    </section>
  );
};

export default Hero;