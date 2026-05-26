import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { Language } from "../types";

interface ScrollToTopProps {
  language: Language;
}

export default function ScrollToTop({ language }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-24 right-6 z-40 w-11 h-11 bg-gradient-to-tr from-[#1E2538] via-[#1A1A2E] to-[#00D4FF] text-[#00D4FF] hover:text-white flex items-center justify-center shadow-lg border border-[#00D4FF]/30 hover:border-[#00D4FF] cursor-pointer group"
          id="scroll-to-top-btn"
          title={language === "en" ? "Scroll to top" : "Retour en haut"}
          aria-label={language === "en" ? "Scroll to elite top of page" : "Retourner au sommet de la page"}
        >
          {/* Neon Glow Hover Underlay */}
          <div className="absolute inset-0 bg-[#00D4FF] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          
          {/* Subtle bilingual hover badge helper */}
          <span className="absolute right-14 bg-[#1A1A2E]/95 text-[#00D4FF] border border-[#00D4FF]/20 text-[9px] font-mono tracking-widest uppercase py-1 px-2.5 rounded-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-250 whitespace-nowrap hidden sm:block">
            {language === "en" ? "TOP ↑" : "HAUT ↑"}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
