import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Project inquiry submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });
    }, 3000);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-strong rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        </motion.div>
          <h3 className="text-2xl font-bold mb-2 text-primary">
            Thank you for your inquiry!
          </h3>
        <p className="text-muted-foreground mb-6">
          We've received your project details and will respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="minimal" asChild>
              <a href="tel:+19015176300" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call us now</span>
              </a>
            </Button>
          <Button variant="glass" asChild>
            <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Send email</span>
            </a>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="glass-strong rounded-xl p-8 space-y-6"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-primary">
          Start a Project
        </h3>
        <p className="text-muted-foreground">
          Tell us about your vision. We'll turn it into reality.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            className="glass"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="glass"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className="glass"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="projectType">Project Type *</Label>
          <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
            <SelectTrigger className="glass">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-app">Web Application</SelectItem>
              <SelectItem value="mobile-app">Mobile App (iOS)</SelectItem>
              <SelectItem value="saas">SaaS Platform</SelectItem>
              <SelectItem value="api">API & Backend</SelectItem>
              <SelectItem value="ai-ml">AI/ML Integration</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
            <SelectTrigger className="glass">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-5k">Under $5k</SelectItem>
              <SelectItem value="5k-10k">$5k - $10k</SelectItem>
              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
              <SelectItem value="25k-50k">$25k - $50k</SelectItem>
              <SelectItem value="50k+">$50k+</SelectItem>
              <SelectItem value="discuss">Let's discuss</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="timeline">Timeline</Label>
        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
          <SelectTrigger className="glass">
            <SelectValue placeholder="When do you need this launched?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="1-2-months">1-2 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
            <SelectItem value="6-12-months">6-12 months</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="description">Project Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Describe your project, key features, target users, and success criteria..."
          required
          rows={5}
          className="glass resize-none"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          type="submit"
          variant="minimal"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              <span>Submitting...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Send Project Details</span>
            </div>
          )}
        </Button>
      </motion.div>

      <motion.div variants={itemVariants} className="text-center pt-4">
        <p className="text-sm text-muted-foreground mb-3">
          Prefer to talk directly? We're always available.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="glass" size="sm" asChild>
            <a href="tel:+19015176300" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (901) 517-6300</span>
            </a>
          </Button>
          <Button variant="glass" size="sm" asChild>
            <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>david.baum461@gmail.com</span>
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;