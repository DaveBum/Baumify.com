import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink, Github, Linkedin } from "lucide-react";
import davidImage from "@/assets/david.png";
import omerImage from "@/assets/omer.jpg";

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-panel/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="text-primary">architects</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Two developers, one relentless focus: ship elite software that scales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* David Baum - Senior Developer */}
          <motion.div
            variants={cardVariants}
            className="glass-strong rounded-xl overflow-hidden hover:shadow-subtle transition-all duration-500 group"
          >
            <div className="relative">
              <img 
                src={davidImage} 
                alt="David Baum - Senior Developer"
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-mono text-primary">Senior Developer</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">David Baum</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I reduce complex systems to clear, testable plans and ship relentlessly—frontend, backend, ML, and iOS. 
                20+ iOS apps, advanced ML/AI systems, self-landing rocket simulator, high-scale web platforms.
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-primary mb-2">Core Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {["Systems Architecture", "ML/AI", "iOS Development", "Scalable Backends"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="sm" variant="minimal" asChild className="flex-1">
                  <a href="tel:+19015176300" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call David</span>
                  </a>
                </Button>
                <Button size="sm" variant="glass" asChild className="flex-1">
                  <a href="mailto:david.baum461@gmail.com" className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Omer Zalman - Junior Developer */}
          <motion.div
            variants={cardVariants}
            className="glass-strong rounded-xl overflow-hidden hover:shadow-subtle transition-all duration-500 group"
          >
            <div className="relative">
              <img 
                src={omerImage} 
                alt="Omer Zalman - Junior Developer"
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-mono text-secondary">Junior Developer</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Omer Zalman</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Speed with precision. I turn specs into ship-ready features, keep pipelines green, and sweat the edge cases. 
                Pixel-perfect implementation with a CI/CD obsession.
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-secondary mb-2">Specializations</div>
                <div className="flex flex-wrap gap-2">
                  {["Frontend Engineering", "CI/CD Pipelines", "Quality Assurance", "API Integration"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="sm" variant="minimal" asChild className="flex-1">
                  <a href="mailto:omer@baumify.com" className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Omer</span>
                  </a>
                </Button>
                <Button size="sm" variant="glass" asChild className="flex-1">
                  <a href="#" className="flex items-center justify-center space-x-2">
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-strong rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Our Philosophy</h3>
            <p className="text-secondary leading-relaxed">
              <span className="font-semibold text-foreground">Craft.</span> Every line of code matters. 
              <span className="font-semibold text-foreground"> Velocity.</span> Ship fast, iterate faster. 
              <span className="font-semibold text-foreground"> Clarity.</span> Clear specs, clear code, clear results. 
              <span className="font-semibold text-foreground"> Ownership.</span> We build it, we ship it, we stand by it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;