import React from "react";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  
  const handleWhatsappCTA = () => {
    const textMsg = encodeURIComponent("Olá, Maria! Vi o seu site terapeutico de Clean Luxury, me identifiquei e gostaria de marcar uma conversa inicial.");
    window.open(`https://wa.me/5511912223346?text=${textMsg}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <motion.button
        onClick={handleWhatsappCTA}
        whileHover={{ 
          scale: 1.04,
          boxShadow: "0 10px 25px -5px rgba(74, 93, 78, 0.3)"
        }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center space-x-2.5 bg-sage hover:bg-sage-light text-sand px-5 py-3.5 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sage/40 font-sans text-xs md:text-sm font-semibold tracking-wider uppercase"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sand"></span>
        </span>
        
        <MessageSquare className="w-4 h-4 text-sand shrink-0 stroke-[2.2px]" />
        
        <span className="tracking-widest">Fale com a Maria</span>
      </motion.button>
    </motion.div>
  );
}
