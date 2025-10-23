import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Brain, 
  Layers, 
  Zap, 
  Shield, 
  Database,
  Globe,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  Phone
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Services = () => {
  const ref = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web applications built with modern tech stacks. React, Next.js, TypeScript on the frontend. Node, Django, or custom backends. Postgres, Redis, real-time features.",
      features: [
        "Single Page Applications (SPAs)",
        "Progressive Web Apps (PWAs)",
        "RESTful & GraphQL APIs",
        "Real-time WebSocket systems",
        "Authentication & Authorization"
      ],
      gradient: "from-blue-500/20 to-purple-500/20",
      accent: "text-blue-400",
      borderColor: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/40"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native iOS applications with Swift and SwiftUI. Performance-first approach with pixel-perfect UI. Deep system integrations and platform-specific features.",
      features: [
        "Native iOS apps (Swift/SwiftUI)",
        "Cross-platform (Flutter/React Native)",
        "App Store deployment",
        "Push notifications & deep linking",
        "Offline-first architecture"
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      borderColor: "border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/40"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure that scales. AWS, Docker, Kubernetes. CI/CD pipelines that ship fast. Monitoring, logging, and alerting built in from day one.",
      features: [
        "AWS/GCP/Azure deployment",
        "Docker & Kubernetes",
        "CI/CD automation (GitHub Actions)",
        "Infrastructure as Code (Terraform)",
        "Performance monitoring & logging"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-400",
      borderColor: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/40"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "AI systems that deliver real results. From proof of concept to production. Computer vision, NLP, generative AI. Custom models trained on your data.",
      features: [
        "Custom ML model development",
        "LLM integration & fine-tuning",
        "Computer vision systems",
        "Natural language processing",
        "AI-powered automation"
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      accent: "text-orange-400",
      borderColor: "border-orange-500/20",
      hoverBorder: "hover:border-orange-500/40"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data pipelines that don't break. ETL workflows, real-time processing, analytics infrastructure. Make your data work for you.",
      features: [
        "Data pipeline architecture",
        "Real-time data processing",
        "Database optimization",
        "Analytics & reporting systems",
        "Data warehouse solutions"
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      accent: "text-cyan-400",
      borderColor: "border-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/40"
    },
    {
      icon: Cpu,
      title: "Systems & Hardware",
      description: "Low-level systems work. Firmware development, embedded systems, hardware integration. From IoT devices to custom OS development.",
      features: [
        "Firmware development (C/C++)",
        "Embedded systems",
        "Hardware/software integration",
        "IoT device development",
        "Custom OS & compiler work"
      ],
      gradient: "from-yellow-500/20 to-orange-500/20",
      accent: "text-yellow-400",
      borderColor: "border-yellow-500/20",
      hoverBorder: "hover:border-yellow-500/40"
    }
  ];

  const techStack = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "SwiftUI"],
    "Backend": ["Node.js", "NestJS", "Django", "FastAPI", "Go", "Rust"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQLite"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    "AI/ML": ["PyTorch", "TensorFlow", "OpenAI", "Hugging Face", "LangChain"],
    "Mobile": ["Swift", "SwiftUI", "UIKit", "Flutter", "React Native"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Hero Background */}
      <div ref={heroRef} className="relative">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 -z-20"
        >
          <AnimatedBackground />
        </motion.div>
      </div>

      {/* Multiple Orbs */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <div 
        className="absolute top-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div 
        className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
      />

      <div ref={ref} className="container mx-auto px-6 py-24 relative z-10">
        {/* Animated Header with Particles */}
        <motion.div 
          className="text-center mb-24 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating particles around header */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}

          <motion.div 
            className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Elite Services</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Services that{" "}
            <motion.span 
              className="text-primary relative inline-block"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)", 
                  "0 0 30px rgba(59, 130, 246, 0.6)", 
                  "0 0 0px rgba(59, 130, 246, 0)"
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981, #3b82f6)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                dominate
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-white rounded-full"
                animate={{
                  x: ["0%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ width: "30%" }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From concept to production. Full-stack web apps, mobile applications, AI systems, 
            cloud infrastructure - we build it all.{" "}
            <motion.span 
              className="text-foreground font-semibold"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              Fast. Reliable. Scalable.
            </motion.span>
          </motion.p>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-10 left-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code2 className="h-8 w-8 text-blue-400/30" />
            </motion.div>
            <motion.div
              className="absolute top-20 right-32"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Rocket className="h-10 w-10 text-purple-400/30" />
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-1/3"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 15, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Zap className="h-7 w-7 text-emerald-400/30" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, type: "spring" },
                },
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform' }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                animate={hoveredService === index ? {
                  scale: [1, 1.05, 1],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <div className={`relative glass-strong rounded-xl p-8 h-full border ${service.borderColor} ${service.hoverBorder} transition-all duration-300 overflow-hidden`}>
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={hoveredService === index ? {
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                {/* Particle effects */}
                {hoveredService === index && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 ${service.accent} rounded-full`}
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 1
                        }}
                        animate={{
                          x: `${50 + (Math.random() - 0.5) * 200}%`,
                          y: `${50 + (Math.random() - 0.5) * 200}%`,
                          opacity: 0,
                          scale: [0, 2, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Icon */}
                <motion.div 
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 overflow-hidden`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={hoveredService === index ? {
                      scale: [1, 2, 1],
                      opacity: [0, 0.5, 0],
                    } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <service.icon className={`h-8 w-8 ${service.accent} relative z-10`} />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="relative text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors"
                  animate={hoveredService === index ? {
                    x: [0, 5, 0],
                  } : {}}
                  transition={{
                    duration: 0.5
                  }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="relative text-white/70 mb-6 leading-relaxed"
                  animate={hoveredService === index ? {
                    opacity: [0.7, 1, 0.7],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  {service.description}
                </motion.p>

                {/* Features with stagger animation */}
                <ul className="relative space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature}
                      className="flex items-start space-x-2 text-sm text-white/60 group-hover:text-white/90 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.8 + featureIndex * 0.1,
                        duration: 0.5
                      }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        animate={hoveredService === index ? {
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{
                          delay: featureIndex * 0.1,
                          duration: 0.6
                        }}
                      >
                        <CheckCircle2 className={`h-4 w-4 ${service.accent} flex-shrink-0 mt-0.5`} />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section with Matrix Effect */}
        <motion.div 
          className="mb-32 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <motion.div
              className="inline-block"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Cpu className="h-12 w-12 text-primary/30 mx-auto mb-4" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our{" "}
              <motion.span
                className="text-primary"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(59, 130, 246, 0.5)",
                    "0 0 30px rgba(59, 130, 246, 0.8)",
                    "0 0 10px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                Arsenal
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Battle-tested technologies we've mastered. 
              <motion.span
                className="text-foreground font-semibold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {" "}We pick the right tool for the job, every time.
              </motion.span>
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
              <motion.div
                key={category}
                className="relative glass-strong rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all overflow-hidden group"
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: categoryIndex * 0.1, 
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2), rgba(16, 185, 129, 0.2))",
                    backgroundSize: "200% 100%"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                </motion.div>

                <motion.h3 
                  className="relative text-lg font-bold text-white mb-4 flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-primary mr-3"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: categoryIndex * 0.2
                    }}
                  />
                  {category}
                </motion.h3>
                
                <div className="relative flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 bg-white/10 text-white/90 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all cursor-default relative overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.5 + techIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{
                          x: "100%",
                          transition: { duration: 0.6 }
                        }}
                      />
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section with Timeline Animation */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Target className="h-12 w-12 text-primary/30 mx-auto mb-4" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our{" "}
              <motion.span
                className="text-primary"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981, #3b82f6)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Process
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              No fluff. Just clear process and{" "}
              <motion.span
                className="text-foreground font-semibold"
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                rapid execution.
              </motion.span>
            </motion.p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <motion.div
              className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 hidden lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { 
                  step: "01", 
                  title: "Discovery", 
                  desc: "Understand your needs, define the scope, architect the solution.",
                  icon: Target,
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  step: "02", 
                  title: "Build", 
                  desc: "Rapid development with regular check-ins. See progress daily.",
                  icon: Code2,
                  color: "from-purple-500 to-pink-500"
                },
                { 
                  step: "03", 
                  title: "Test", 
                  desc: "Rigorous QA. Performance optimization. Security hardening.",
                  icon: Shield,
                  color: "from-orange-500 to-red-500"
                },
                { 
                  step: "04", 
                  title: "Ship", 
                  desc: "Deploy to production. Monitor. Iterate. Support post-launch.",
                  icon: Rocket,
                  color: "from-emerald-500 to-green-500"
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  className="relative glass-strong rounded-xl p-8 text-center border border-white/10 hover:border-primary/40 transition-all group overflow-hidden"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                  />

                  {/* Step number with pulse */}
                  <motion.div 
                    className={`relative text-6xl font-bold bg-gradient-to-br ${phase.color} bg-clip-text text-transparent mb-6`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {phase.step}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="relative mb-4 flex justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <phase.icon className="h-12 w-12 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="relative text-xl font-bold text-white mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {phase.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="relative text-sm text-white/60 group-hover:text-white/90 transition-colors"
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {phase.desc}
                  </motion.p>

                  {/* Completion indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.2, type: "spring" }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.7)",
                        "0 0 0 10px rgba(59, 130, 246, 0)",
                      ]
                    }}
                    style={{
                      animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Epic CTA Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative glass-strong rounded-3xl p-12 md:p-16 max-w-5xl mx-auto overflow-hidden border border-white/10">
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8">
                <Rocket className="h-10 w-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to build?
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's talk about your project. We'll give you a clear plan and timeline.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                {[
                  { value: "< 24h", label: "Response Time" },
                  { value: "100%", label: "Commitment" },
                  { value: "∞", label: "Possibilities" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-white hover:bg-white/90 text-black text-lg px-8 py-6"
                >
                  <a href="/contact" className="flex items-center space-x-2">
                    <span>Start a Project</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="glass" 
                  asChild 
                  className="text-lg px-8 py-6"
                >
                  <a href="tel:+19015176300" className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>+1 (901) 517-6300</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
