import { motion } from "framer-motion";
import { Target, Zap, Shield, Users, Code2, Rocket, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamSection from "../components/TeamSection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollAnimations";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Rocket },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "2", label: "Elite Developers", icon: Users },
    { number: "24/7", label: "Continuous Delivery", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every line of code serves a purpose. We architect systems that are both elegant and efficient, with zero tolerance for technical debt."
    },
    {
      icon: Zap,
      title: "Velocity & Quality",
      description: "Ship fast without sacrificing craftsmanship. Our CI/CD obsession ensures rapid iteration while maintaining bulletproof reliability."
    },
    {
      icon: Shield,
      title: "Battle-Tested Solutions",
      description: "We don't just write code—we forge systems that withstand real-world chaos. Scalable, secure, and maintainable by design."
    },
    {
      icon: Code2,
      title: "Full-Stack Mastery",
      description: "From iOS apps to ML pipelines, from frontend finesse to backend architecture—we speak every layer of the stack fluently."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            backgroundSize: "100% 100%"
          }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <motion.div 
              className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8"
              whileHover={{ scale: 1.05, y: -2 }}
            >
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
              <span className="text-sm font-mono text-muted-foreground">About Baumify</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We are software{" "}
              <motion.span 
                className="text-primary"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)", 
                    "0 0 10px rgba(255,255,255,0.3)", 
                    "0 0 0px rgba(255,255,255,0)"
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                architects
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Founded on the principle that elite software requires both{" "}
              <span className="text-foreground font-semibold">relentless precision</span> and{" "}
              <span className="text-foreground font-semibold">uncompromising speed</span>. 
              We don't just build applications—we forge digital experiences that scale, perform, and endure.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-panel/20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <motion.div 
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="inline-flex p-4 rounded-xl bg-gradient-subtle mb-4"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)", 
                        "0 0 5px rgba(255,255,255,0.2)", 
                        "0 0 0px rgba(255,255,255,0)"
                      ] 
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8"
                whileInView={{ scale: [0.8, 1.05, 1] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              <motion.div 
                className="glass-strong rounded-xl p-8 md:p-12 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  To democratize elite software engineering. Every startup, every enterprise, every ambitious project 
                  deserves{" "}
                  <motion.span 
                    className="text-foreground font-semibold"
                    whileHover={{ scale: 1.1, color: "#ffffff" }}
                  >
                    architect-level thinking
                  </motion.span>
                  {" "}without the enterprise overhead. We compress decades of engineering wisdom into 
                  rapid execution—delivering systems that don't just work today, but scale for tomorrow.
                </motion.p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-panel/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                whileInView={{ scale: [0.8, 1.05, 1] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                What Drives Us
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Core principles that shape every line of code, every architectural decision, every client interaction.
              </motion.p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <motion.div 
                  className="glass-strong rounded-xl p-8 hover:shadow-subtle transition-all duration-500 group cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.03, y: -8 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div 
                    className="inline-flex p-4 rounded-xl bg-gradient-subtle mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 6, repeat: Infinity, delay: index * 1.5 }}
                  >
                    {value.description}
                  </motion.p>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-25deg)" }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%"
          }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              whileInView={{ scale: [0.8, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Build Something Elite?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's architect your next breakthrough. From concept to deployment, we deliver software that scales.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="minimal" 
                  asChild 
                  className="min-w-[200px] bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <a href="/contact" className="flex items-center space-x-2">
                    <Rocket className="h-5 w-5" />
                    <span>Start Your Project</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="glass" 
                  asChild 
                  className="min-w-[160px] bg-white/5 text-white border-white/10"
                >
                  <a href="tel:+19015176300" className="flex items-center space-x-2">
                    <span>Call Now</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;