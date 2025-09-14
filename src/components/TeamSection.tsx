import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink, Github, Linkedin, MapPin, Calendar, Zap } from "lucide-react";
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
  
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const teamMembers = [
    {
      name: "David Baum",
      title: "Senior Developer & Co-Founder",
      role: "Systems Architect",
      image: davidImage,
      bio: "I reduce complex systems to clear, testable plans and ship relentlessly—frontend, backend, ML, and iOS. 20+ iOS apps, advanced ML/AI systems, self-landing rocket simulator, high-scale web platforms.",
      skills: ["Systems Architecture", "ML/AI Engineering", "iOS Development", "Backend Systems"],
      contact: {
        phone: "+19015176300",
        email: "david.baum461@gmail.com"
      },
      stats: [
        { label: "Projects", value: "20+" },
        { label: "Years Exp.", value: "8+" },
        { label: "Specialties", value: "4" }
      ],
      accent: "text-blue-400",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-purple-500/20"
    },
    {
      name: "Omer Zalman", 
      title: "Junior Developer & Co-Founder",
      role: "Implementation Specialist",
      image: omerImage,
      bio: "Speed with precision. I turn specs into ship-ready features, keep pipelines green, and sweat the edge cases. Pixel-perfect implementation with a CI/CD obsession.",
      skills: ["Frontend Engineering", "CI/CD Pipelines", "Quality Assurance", "API Integration"],
      contact: {
        email: "omer@baumify.com"
      },
      stats: [
        { label: "Deploys/Day", value: "15+" },
        { label: "Test Coverage", value: "98%" },
        { label: "Uptime", value: "99.9%" }
      ],
      accent: "text-emerald-400",
      gradientFrom: "from-emerald-500/20",
      gradientTo: "to-teal-500/20"
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
              className="text-4xl md:text-6xl font-bold mb-6"
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
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Two developers, one relentless focus: architect and ship elite software that scales. 
              Combined decades of experience distilled into rapid, reliable execution.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Team Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
                style={{ 
                  rotateX: index === 0 ? rotateX : rotateY,
                  rotateY: index === 0 ? rotateY : rotateX,
                  transformStyle: "preserve-3d" 
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                  mouseX.set(0);
                  mouseY.set(0);
                }}
              >
                {/* Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Status Badge */}
                <motion.div
                  className="absolute top-6 right-6 z-20"
                  animate={{ 
                    y: [0, -3, 0],
                    rotate: [0, 2, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <div className="glass px-4 py-2 rounded-full flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <span className="text-xs font-mono text-green-400">Available</span>
                  </div>
                </motion.div>

                {/* Hero Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    src={member.image} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Role Badge */}
                  <motion.div 
                    className="absolute bottom-6 left-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-strong px-4 py-2 rounded-xl">
                      <div className={`text-sm font-semibold ${member.accent}`}>{member.role}</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 relative" style={{ transform: "translateZ(20px)" }}>
                  {/* Name & Title */}
                  <div className="mb-6">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-white transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.div 
                      className={`text-lg font-medium ${member.accent} mb-1`}
                    >
                      {member.title}
                    </motion.div>
                  </div>

                  {/* Bio */}
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base"
                  >
                    {member.bio}
                  </motion.p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {member.stats.map((stat, statIndex) => (
                      <motion.div 
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + statIndex * 0.1 + index * 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className={`text-lg md:text-xl font-bold ${member.accent} mb-1`}
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(255,255,255,0)", 
                              "0 0 8px rgba(255,255,255,0.3)", 
                              "0 0 0px rgba(255,255,255,0)"
                            ] 
                          }}
                          transition={{ duration: 5, repeat: Infinity, delay: statIndex * 0.7 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-8">
                    <div className={`text-sm font-semibold ${member.accent} mb-3`}>Core Expertise</div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skill} 
                          className="px-3 py-1.5 bg-white/5 border border-white/10 text-white text-xs rounded-full hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + skillIndex * 0.1 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {member.contact.phone && (
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -2 }} 
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button 
                          size="default" 
                          variant="minimal" 
                          asChild 
                          className={`w-full bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 ${member.accent}`}
                        >
                          <a href={`tel:${member.contact.phone}`} className="flex items-center justify-center space-x-2">
                            <motion.div
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <Phone className="h-4 w-4" />
                            </motion.div>
                            <span>Call {member.name.split(' ')[0]}</span>
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }} 
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button 
                        size="default" 
                        variant="glass" 
                        asChild 
                        className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white"
                      >
                        <a href={`mailto:${member.contact.email}`} className="flex items-center justify-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>Email {member.name.split(' ')[0]}</span>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ transform: "skewX(-25deg)" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <ScrollReveal delay={0.4} className="mt-24 text-center">
          <motion.div 
            className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
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
              className="text-2xl md:text-3xl font-bold mb-6"
              whileInView={{ scale: [0.8, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Philosophy
            </motion.h3>
            <motion.p 
              className="text-muted-foreground leading-relaxed text-lg"
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