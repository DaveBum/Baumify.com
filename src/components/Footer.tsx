// button component for call to action buttons
import { Button } from "@/components/ui/button";
// lucide icons for contact information
import { Phone, Mail, ArrowRight } from "lucide-react";
// company logo image asset
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Baumify" className="h-8 w-auto filter invert" />
              <span className="text-xl font-semibold">
                Baumify
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We architect, design, and ship elite software - fast. Surgical precision. 
              Systems thinking. Relentless shipping.
            </p>
            {/* Always-visible CTAs */}
            <div className="flex flex-row gap-3">
              <Button variant="minimal" asChild>
                <a href="tel:+19015176300" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="glass" asChild>
                <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </Button>
              <Button variant="minimal" asChild>
                <a href="/contact" className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4" />
                  <span>Start Project</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Specializations */}
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Specializations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Full-Stack Web Applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Mobile-First Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Cloud Architecture & DevOps</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>API Design & Integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>Real-Time Systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span>E-commerce & Payment Solutions</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/work-in-progress" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/work-in-progress" className="text-muted-foreground hover:text-primary transition-colors">Work</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="/work-in-progress" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Our Stack</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "React/Next.js", "TypeScript", "Node/Nest", "Postgres/Prisma", 
              "Redis", "WebSockets", "Stripe", "AWS", "Docker/K8s", "Swift/iOS"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © 2025 Baumify. All rights reserved.
        </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="/work-in-progress" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/work-in-progress" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="tel:+19015176300" className="text-primary hover:text-white transition-colors font-mono">
              +1 (901) 517-6300
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;