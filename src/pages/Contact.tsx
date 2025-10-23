import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

const Contact = () => {
  useSEO(SEO_CONFIG.contact);

  return (
    <div className="min-h-screen pt-16 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something{" "}
            <span className="text-primary">extraordinary</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Ready to ship elite software? Call, email, or submit your project
            details below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Direct Contact CTAs */}
            <div className="glass-strong rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                Get in touch immediately
              </h2>
              <div className="space-y-4">
                <Button
                  variant="minimal"
                  size="lg"
                  asChild
                  className="w-full justify-start"
                >
                  <a
                    href="tel:+19015176300"
                    className="flex items-center space-x-3"
                  >
                    <Phone className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Call now</div>
                      <div className="text-sm opacity-90">
                        +1 (901) 517-6300
                      </div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>

            {/* Response Times */}
            <div className="glass-strong rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Response Times</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone calls</span>
                  <span className="text-primary">Immediate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emails</span>
                  <span className="text-foreground">Within 2-4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project inquiries</span>
                  <span className="text-foreground">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="glass-strong rounded-xl p-6">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <div className="space-y-4 text-sm">
                <div className="flex space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-mono">
                    1
                  </div>
                  <div>
                    <div className="font-medium">Discovery call (15-30 min)</div>
                    <div className="text-muted-foreground">
                      Understand your vision and requirements
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-mono">
                    2
                  </div>
                  <div>
                    <div className="font-medium">Detailed proposal (1-2 days)</div>
                    <div className="text-muted-foreground">
                      Technical approach, timeline, and investment
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-mono">
                    3
                  </div>
                  <div>
                    <div className="font-medium">Start building (within 1 week)</div>
                    <div className="text-muted-foreground">
                      Sprint planning and development kickoff
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;