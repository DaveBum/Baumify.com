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

  const title = "We architect, design, and ship elite software - fast.";
  
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
        className="container mx-auto px-4 py-20 text-center relative z-10"
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

        {/* Enhanced Terminal Welcome Message */}
        <div className="mb-12">
          <motion.div 
            className="relative bg-black/95 backdrop-blur-lg border-2 border-green-500/60 rounded-xl p-4 max-w-5xl mx-auto font-mono text-left overflow-hidden text-sm"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            whileHover={{ 
              borderColor: "rgba(34,197,94,0.8)",
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated Matrix Background */}
            <motion.div 
              className="absolute inset-0 opacity-5"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: "radial-gradient(2px 2px at 20px 30px, #22c55e, transparent), radial-gradient(2px 2px at 40px 70px, #22c55e, transparent)",
                backgroundSize: "80px 80px"
              }}
            />
            
            {/* Terminal Header */}
            <motion.div 
              className="flex items-center justify-between mb-6 pb-3 border-b border-green-500/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <motion.div 
                    className="w-3.5 h-3.5 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2, boxShadow: "0 0 10px #ef4444" }}
                  />
                  <motion.div 
                    className="w-3.5 h-3.5 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2, boxShadow: "0 0 10px #eab308" }}
                  />
                  <motion.div 
                    className="w-3.5 h-3.5 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2, boxShadow: "0 0 10px #22c55e" }}
                  />
                </div>
                <span className="text-green-400/80 text-sm font-semibold">baumify-terminal v2.1.0</span>
              </div>
              <div className="text-green-400/60 text-xs">
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ● CONNECTED
                </motion.span>
              </div>
            </motion.div>
            
            {/* Terminal Content */}
            <div className="space-y-2 text-xs"
>
              <motion.div 
                className="flex items-center text-green-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="text-cyan-400">root@baumify</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="ml-2">whoami</span>
              </motion.div>
              
              <motion.div 
                className="text-white ml-6 text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <span className="text-green-300">{'>'}</span> Elite Software Architects
              </motion.div>
              
              <motion.div 
                className="flex items-center text-green-400 mt-6"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 }}
              >
                <span className="text-cyan-400">root@baumify</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="ml-2">cat company_mission.txt</span>
              </motion.div>
              
              <motion.div 
                className="text-white/95 ml-6 text-base font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
              >
                <span className="text-green-300">{'>'}</span>
                <TerminalTypewriter 
                  text=" We architect, design, and ship elite software - fast."
                  delay={3800}
                  speed={40}
                />
              </motion.div>
              
              <motion.div 
                className="flex items-center text-green-400 mt-6"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 6.5 }}
              >
                <span className="text-cyan-400">root@baumify</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="ml-2">ls -la ./services</span>
              </motion.div>
              
              <motion.div 
                className="text-white/90 ml-6 space-y-1 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7.2 }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">drwxr-xr-x</span>
                  <span className="text-yellow-400">design_that_converts/</span>
                  <span className="text-green-400 text-xs">- User-centered experiences that drive results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">drwxr-xr-x</span>
                  <span className="text-yellow-400">systems_that_scale/</span>
                  <span className="text-green-400 text-xs">- Architecture built for growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">drwxr-xr-x</span>
                  <span className="text-yellow-400">velocity_that_compounds/</span>
                  <span className="text-green-400 text-xs">- Ship MVPs, iterate at light speed</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center text-green-400 mt-8 pt-4 border-t border-green-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8.5 }}
              >
                <span className="text-cyan-400">root@baumify</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <motion.span
                  className="inline-block w-3 h-5 bg-green-400 ml-2"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Terminal-Style CTA Commands */}
        <motion.div 
          variants={itemVariants} 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9.5, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto bg-black/80 backdrop-blur-sm border-2 border-green-500/60 rounded-lg p-4 font-mono hover:border-green-500/80 transition-colors duration-300 text-xs">
            <div className="flex items-center mb-3 text-green-400/80 text-xs">
              <span className="text-cyan-400">root@baumify</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$</span>
              <span className="ml-2">./execute_contact.sh</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[
                { 
                  command: "call --now", 
                  description: "Direct voice connection", 
                  icon: Phone, 
                  href: "tel:+19015176300",
                  color: "text-green-400"
                },
                { 
                  command: "mail --send", 
                  description: "Digital communication", 
                  icon: Mail, 
                  href: "mailto:omer@baumify.com",
                  color: "text-blue-400"
                },
                { 
                  command: "project --start", 
                  description: "Initialize new build", 
                  icon: ArrowRight, 
                  href: "/contact",
                  color: "text-yellow-400"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.command}
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 10 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.a
                    href={item.href}
                    className="block bg-black/60 border border-white/10 rounded-lg p-3 hover:border-green-500/40 transition-all duration-300 hover:bg-black/80"
                    whileHover={{ 
                      boxShadow: "0 0 20px rgba(34,197,94,0.2)",
                      y: -3
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-green-400 text-xs">$</span>
                      <item.icon className={`h-3 w-3 ${item.color}`} />
                      <span className={`font-semibold text-xs ${item.color}`}>{item.command}</span>
                    </div>
                    
                    <div className="text-white/70 text-[10px] ml-5 group-hover:text-white/90 transition-colors leading-tight">
                      {item.description}
                    </div>
                    
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex items-center mt-3 pt-2 border-t border-white/10 text-green-400/60 text-[10px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 11 }}
            >
              <span>Process completed. Select execution method above ↗</span>
              <motion.span
                className="inline-block w-1.5 h-2.5 bg-green-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Value Cards with 3D Effects */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Design that converts", description: "User-centered experiences that drive measurable results" },
              { icon: Code2, title: "Systems that scale", description: "Architecture built for growth and performance" },
              { icon: Zap, title: "Velocity that compounds", description: "Ship MVPs in weeks, iterate at lightning speed" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-strong rounded-xl p-4 hover:shadow-elegant transition-all duration-500 group cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.2, duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex p-2 rounded-lg bg-gradient-subtle mb-3"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
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