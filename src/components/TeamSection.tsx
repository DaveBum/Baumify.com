import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink, Github, Linkedin } from "lucide-react";
import { useRef, useEffect } from "react";
import davidImage from "@/assets/david.png";
import omerImage from "@/assets/omer.jpg";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Mouse tracking for card tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      rotateX: -15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      },
    },
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <section ref={ref} className="py-20 bg-panel/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
          backgroundSize: "100% 100%"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              whileInView={{ scale: [0.8, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Meet the <span className="text-primary animate-pulse">architects</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Two developers, one relentless focus: ship elite software that scales.
            </motion.p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.3} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* David Baum - Senior Developer */}
          <StaggerItem>
            <motion.div
              className="glass-strong rounded-xl overflow-hidden hover:shadow-subtle transition-all duration-500 group cursor-pointer relative"
              style={{ 
                rotateX,
                rotateY,
                transformStyle: "preserve-3d" 
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
            >
              {/* Floating Badge */}
              <motion.div
                className="absolute top-4 right-4 z-20"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <div className="glass px-3 py-1 rounded-full">
                  <span className="text-xs font-mono text-primary">Senior Dev</span>
                </div>
              </motion.div>

              <div className="relative">
                <motion.img 
                  src={davidImage} 
                  alt="David Baum - Senior Developer"
                  className="w-full h-64 object-cover object-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <motion.div 
                  className="absolute bottom-4 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-primary"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity 
                      }}
                    />
                    <span className="text-sm font-mono text-primary">Senior Developer</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="p-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  David Baum
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  I reduce complex systems to clear, testable plans and ship relentlessly—frontend, backend, ML, and iOS. 
                  20+ iOS apps, advanced ML/AI systems, self-landing rocket simulator, high-scale web platforms.
                </motion.p>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary mb-2">Core Expertise</div>
                  <div className="flex flex-wrap gap-2">
                    {["Systems Architecture", "ML/AI", "iOS Development", "Scalable Backends"].map((skill, index) => (
                      <motion.span 
                        key={skill} 
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="minimal" asChild className="flex-1">
                      <a href="tel:+19015176300" className="flex items-center justify-center space-x-2">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Phone className="h-4 w-4" />
                        </motion.div>
                        <span>Call David</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="glass" asChild className="flex-1">
                      <a href="mailto:david.baum461@gmail.com" className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ transform: "skewX(-25deg)" }}
              />
            </motion.div>
          </StaggerItem>

          {/* Omer Zalman - Junior Developer */}
          <StaggerItem>
            <motion.div
              className="glass-strong rounded-xl overflow-hidden hover:shadow-subtle transition-all duration-500 group cursor-pointer relative"
              style={{ 
                rotateX,
                rotateY,
                transformStyle: "preserve-3d" 
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
            >
              {/* Floating Badge */}
              <motion.div
                className="absolute top-4 right-4 z-20"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <div className="glass px-3 py-1 rounded-full">
                  <span className="text-xs font-mono text-secondary">Junior Dev</span>
                </div>
              </motion.div>

              <div className="relative">
                <motion.img 
                  src={omerImage} 
                  alt="Omer Zalman - Junior Developer"
                  className="w-full h-64 object-cover object-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <motion.div 
                  className="absolute bottom-4 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-secondary"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: 0.5 
                      }}
                    />
                    <span className="text-sm font-mono text-secondary">Junior Developer</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="p-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  Omer Zalman
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  Speed with precision. I turn specs into ship-ready features, keep pipelines green, and sweat the edge cases. 
                  Pixel-perfect implementation with a CI/CD obsession.
                </motion.p>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-secondary mb-2">Specializations</div>
                  <div className="flex flex-wrap gap-2">
                    {["Frontend Engineering", "CI/CD Pipelines", "Quality Assurance", "API Integration"].map((skill, index) => (
                      <motion.span 
                        key={skill} 
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="minimal" asChild className="flex-1">
                      <a href="mailto:omer@baumify.com" className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Omer</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="glass" asChild className="flex-1">
                      <a href="#" className="flex items-center justify-center space-x-2">
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ transform: "skewX(-25deg)" }}
              />
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Philosophy Section */}
        <ScrollReveal delay={0.4} className="mt-20 text-center">
          <motion.div 
            className="glass-strong rounded-xl p-8 max-w-3xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.h3 
              className="text-xl font-semibold mb-4"
              whileInView={{ scale: [0.8, 1.1, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Philosophy
            </motion.h3>
            <motion.p 
              className="text-secondary leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                Craft.
              </motion.span> Every line of code matters. 
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                {" "}Velocity.
              </motion.span> Ship fast, iterate faster. 
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                {" "}Clarity.
              </motion.span> Clear specs, clear code, clear results. 
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                {" "}Ownership.
              </motion.span> We build it, we ship it, we stand by it.
            </motion.p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TeamSection;