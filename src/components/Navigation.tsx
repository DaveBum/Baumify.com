import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(8, 8, 8, 0)", "rgba(8, 8, 8, 0.95)"]
  );
  
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.2]
  );

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

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.nav
      style={{
        backgroundColor,
        borderBottomColor: `rgba(255, 255, 255, ${borderOpacity})`,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${
        scrolled ? "py-2 shadow-elegant" : "py-4"
      }`}
    >
        <motion.div
          variants={itemVariants}
          className="container mx-auto px-6 flex items-center justify-between"
        >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.img 
            src={logo} 
            alt="Baumify" 
            className="h-8 w-auto filter invert transition-transform duration-300 group-hover:scale-110" 
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          />
          <motion.span 
            className="text-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Baumify
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
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
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground/30 scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="hidden lg:flex items-center space-x-3"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="glass" size="sm" asChild>
              <a href="tel:+19015176300" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="minimal" size="sm" asChild>
              <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </Button>
        </motion.div>
        </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden glass-strong border-t border-border/20"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium py-2 transition-all duration-200 hover:scale-105 hover:translate-x-2 ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="flex flex-col space-y-3 pt-4 border-t border-border/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Button variant="glass" size="sm" asChild className="justify-start">
                <a href="tel:+19015176300" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="minimal" size="sm" asChild className="justify-start">
                <a href="mailto:david.baum461@gmail.com" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;