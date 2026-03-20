import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu first
      setIsOpen(false);
      
      // Small delay to ensure menu animation doesn't interfere
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-amber-900 ${
        scrolled
          ? "bg-orange-400 shadow-lg"
          : "bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-2xl font-bold text-amber-900 tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            ARIA FIRMANSYAH
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-amber-900 hover:text-red-600 transition-colors font-bold uppercase text-sm relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-900 hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-amber-100 border-t-2 border-amber-900"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-amber-900 hover:text-red-600 transition-colors font-bold uppercase text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}