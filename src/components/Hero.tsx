import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Code2, Zap, Target } from "lucide-react";
import TechMarquee from "./TechMarquee";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-muted/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We architect, design,{" "}
            <br className="hidden md:block" />
            and ship{" "}
            <span className="text-primary">elite software</span>
            —fast.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            React/Next, Node/Nest, Postgres/Prisma, Redis, WebSockets, Stripe, AWS, Docker/K8s, Swift/iOS.
            <br className="hidden md:block" />
            <span className="text-muted-foreground">Surgical precision. Systems thinking. Relentless shipping.</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              variant="minimal"
              asChild 
              className="min-w-[160px]"
            >
              <a href="tel:+19015176300" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
            
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
          </div>
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Design that converts",
                  description: "User-centered experiences that drive measurable results",
                },
                {
                  icon: Code2,
                  title: "Systems that scale", 
                  description: "Architecture built for growth and performance",
                },
                {
                  icon: Zap,
                  title: "Velocity that compounds",
                  description: "Ship MVPs in weeks, iterate at lightning speed",
                },
              ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-strong rounded-xl p-6 hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-subtle mb-4`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <TechMarquee />
      </motion.div>
    </section>
  );
};

export default Hero;