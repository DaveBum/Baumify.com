import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink, Github, Linkedin, MapPin, Calendar, Zap, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import davidImage from "@/assets/david.png";
import omerImage from "@/assets/omer.jpg";
import akivaImage from "@/assets/akiva.jpg";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Mouse tracking for card tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const davidLanguages = [
    "JavaScript", "TypeScript", "Python", "C#", "C++", "Go", "Rust", "PHP", "Ruby", 
    "Swift", "Objective-C", "Dart", "Scala", "Elixir", "Haskell", "R", "Julia", "Lua", 
    "C", "MATLAB", "Perl", "OCaml", "Clojure", "F#", "Erlang", "VB.NET", "Nim", "Solidity"
  ];

  const davidFrameworks = [
    "React", "Next.js", "Django", "ASP.NET Core", "Qt", "Gin", "Axum", "Laravel", "Rails", 
    "SwiftUI", "UIKit", "Flutter", "Play Framework", "Phoenix", "Yesod", "Shiny", "Genie.jl", "LÖVE", 
    "SDL2", "App Designer", "Mojolicious", "Dream", "Ring", "Giraffe", "Cowboy", "WPF", "Jester", "Hardhat"
  ];

  const omerLanguages = [
    "Java", "Kotlin", "Python", "JavaScript", "C++"
  ];

  const toggleDropdown = (type: string) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const teamMembers = [
    {
      name: "David Baum",
      title: "Founder & Lead Architect", 
      role: "System architect and frontend engineer",
      image: davidImage,
      bio: "Builder who wrote a minimal OS, now building a self-hosting C compiler. Currently employed at Sud Scrub as a hardware/software/firmware & AI solutions engineer/marketer; ex co-head architect of machine learning applications at bash, a Johns Hopkins affiliated startup, did not launch.",
      skills: ["Everything"],
      contact: {
        phone: "+19015176300",
        email: "david.baum461@gmail.com"
      },
      stats: [
        { label: "Languages", value: "28+", type: "languages" },
        { label: "Frameworks", value: "28+", type: "frameworks" },
        { label: "Systems I can build", value: "∞" }
      ],
      accent: "text-blue-400",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-purple-500/20"
    },
    {
      name: "Omer Zalman", 
      title: "Senior AI Engineer & Co-Founder",
      role: "AI & Full-Stack Development",
      image: omerImage,
      bio: "Senior AI engineer and full-stack developer with five years of experience building intelligent digital solutions. Specializes in training neural networks, fine-tuning models in PyTorch and TensorFlow, and crafting systems in C++ and modern web frameworks. Blends creativity with technical precision to solve complex problems with clarity and originality. Passionate about AI research, chess strategy, and quantum computing.",
      skills: ["Python", "C++", "PyTorch", "TensorFlow", "Full-Stack Development", "AI/ML", "Web & App Development", "Neural Networks"],
      contact: {
        email: "chunklingo@gmail.com"
      },
      stats: [],
      accent: "text-emerald-400",
      gradientFrom: "from-emerald-500/20",
      gradientTo: "to-teal-500/20"
    },
    {
      name: "Akiva Levine",
      title: "AI Architect & Automation Engineer",
      role: "AI Research & Product Development",
      image: akivaImage,
      bio: "Brings hands-on experience in artificial intelligence, software development, and automation to the team. Has built multiple AI-driven projects, including medical applications that analyze data through API-based machine learning, as well as a personal blog platform coded in HTML, Python, and CSS. Background spans applied AI research, automation design, and product development, with a focus on integrating intelligent systems into real-world business solutions. Blends technical skill and creative problem-solving to help clients transform complex technology into clear, scalable advantage.",
      skills: ["Python", "AI/ML", "Automation"],
      contact: {
        phone: "+19177348531",
        email: undefined
      },
      stats: [],
      accent: "text-purple-400",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-pink-500/20"
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
          backgroundSize: "100% 100%"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-20">
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
              <span className="text-sm font-mono text-muted-foreground">Leadership Team</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Meet the{" "}
              <motion.span 
                className="text-primary relative"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)", 
                    "0 0 20px rgba(255,255,255,0.4)", 
                    "0 0 0px rgba(255,255,255,0)"
                  ] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                architects
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Three developers, one relentless focus: architect and ship elite software that scales. 
              Combined decades of experience distilled into rapid, reliable execution.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Team Cards */}
        <div className="max-w-4xl mx-auto space-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Team Member Row */}
              <div className="flex flex-col items-center gap-6">
                {/* Profile Image */}
                <motion.div 
                  className="flex-shrink-0 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <motion.img 
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className={`w-28 h-28 rounded-full object-cover grayscale hover:grayscale-0 border-2 border-white/20 hover:border-white/40 transition-all duration-500 ${
                        member.name === "David Baum" ? "object-[50%_5%]" : "object-[center_10%]"
                      }`}
                    />
                    {/* Role Badge */}
                    <motion.div 
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className={`text-[9px] font-mono font-semibold ${member.accent}`}>
                        {member.name === "David Baum" ? "CEO & Founder" : 
                         member.name === "Omer Zalman" ? "Chief AI Officer" : 
                         "Chief Automation Officer"}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <motion.div 
                    className="glass-strong rounded-xl p-4 hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-white/20"
                    whileHover={{ y: -2 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col items-center text-center gap-3 mb-4">
                        <div>
                          <motion.h3 
                            className="text-lg font-bold text-white mb-1"
                            whileHover={{ scale: 1.02 }}
                          >
                            {member.name}
                          </motion.h3>
                          <div className="text-xs text-white/60 font-medium">
                            {member.title}
                          </div>
                        </div>
                        
                        <motion.div 
                          className="inline-flex items-center px-2 py-1 bg-white/10 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="text-[10px] font-mono text-white/80">{member.role}</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Bio */}
                    <motion.p 
                      className="text-white/70 mb-4 leading-relaxed text-sm"
                      initial={{ opacity: 0.7 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {member.bio}
                    </motion.p>

                    {/* Stats */}
                    {member.stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-white/10">
                      {member.stats.map((stat, statIndex) => (
                        <motion.div 
                          key={stat.label}
                          className="text-center relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: statIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`cursor-pointer ${stat.type ? "hover:bg-white/5 rounded-lg p-2 -m-2" : ""}`}
                            onClick={() => stat.type && toggleDropdown(stat.type)}
                            whileHover={stat.type ? { scale: 1.05 } : {}}
                          >
                            <div className={`text-base font-bold text-white mb-1 flex items-center justify-center gap-1 ${
                              stat.type ? "hover:text-blue-400" : ""
                            }`}>
                              {stat.value}
                              {stat.type && (
                                <ChevronDown className={`h-3 w-3 transition-transform ${
                                  activeDropdown === stat.type ? "rotate-180" : ""
                                }`} />
                              )}
                            </div>
                            <div className="text-xs text-white/60 font-medium">
                              {stat.label}
                            </div>
                          </motion.div>
                          
                          {/* Dropdown */}
                          {stat.type && activeDropdown === stat.type && (
                            <motion.div
                              className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50 bg-black/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl p-4 w-64 max-h-40 overflow-y-auto"
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="text-xs text-blue-400 font-semibold mb-2 text-center">
                                {stat.type === "languages" ? "Programming Languages" : 
                                 stat.type === "frameworks" ? "Frameworks & Technologies" :
                                 "Programming Languages"}
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                {(stat.type === "languages" ? davidLanguages : 
                                  stat.type === "frameworks" ? davidFrameworks :
                                  stat.type === "omer-languages" ? omerLanguages : []).map((item, i) => (
                                  <motion.div
                                    key={item}
                                    className="text-xs text-white/90 py-1 px-2 bg-white/5 rounded hover:bg-white/10 transition-colors"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.02 }}
                                  >
                                    {item}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    )}
                    
                    {/* Skills */}
                    <div className={`mb-4 ${member.stats.length === 0 ? 'pt-4 border-t border-white/10' : ''}`}>
                      <div className="text-xs font-semibold text-white/80 mb-2">Expertise</div>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {member.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skill} 
                            className="px-2 py-0.5 bg-white/10 text-white/90 text-[10px] rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all cursor-default"
                            whileHover={{ scale: 1.05, y: -1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="flex flex-col gap-2">
                      {member.contact.phone && (
                        <motion.div 
                          whileHover={{ scale: 1.02, y: -1 }} 
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Button 
                            size="sm" 
                            variant="minimal" 
                            asChild 
                            className="w-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 text-white text-xs"
                          >
                            <a href={`tel:${member.contact.phone}`} className="flex items-center justify-center space-x-1.5">
                              <Phone className="h-3 w-3" />
                              <span>Call {member.name.split(' ')[0]}</span>
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      
                      {member.contact.email && (
                        <motion.div 
                          whileHover={{ scale: 1.02, y: -1 }} 
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Button 
                            size="sm" 
                            variant="glass" 
                            asChild 
                            className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white hover:text-white text-xs"
                          >
                            <a href={`mailto:${member.contact.email}`} className="flex items-center justify-center space-x-1.5 text-white hover:text-white">
                              <Mail className="h-3 w-3" />
                              <span>Email {member.name.split(' ')[0]}</span>
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <motion.div 
            className="glass-strong rounded-2xl p-4 max-w-4xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileInView={{ scale: [0.8, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Philosophy
            </motion.h3>
            <motion.p 
              className="text-muted-foreground leading-relaxed text-sm px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Craft.
              </motion.span> Every line of code matters. 
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                {" "}Velocity.
              </motion.span> Ship fast, iterate faster. 
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                {" "}Clarity.
              </motion.span> Clear specs, clear code, clear results. 
              <motion.span 
                className="font-semibold text-foreground"
                whileHover={{ scale: 1.05 }}
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