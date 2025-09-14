import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-2" : "py-4"
      }`}
    >
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="container mx-auto px-6 flex items-center justify-between"
        >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="The Byte Effect" className="h-8 w-auto filter invert" />
          <span className="text-xl font-semibold text-gradient-primary">
            The Byte Effect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-secondary hover:text-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="glass" size="sm" asChild>
            <a href="tel:+19015176300" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Email Us</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass-strong border-t border-border/20"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium py-2 transition-colors ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
              <Button variant="glass" size="sm" asChild className="justify-start">
                <a href="tel:+19015176300" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="hero" size="sm" asChild className="justify-start">
                <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;