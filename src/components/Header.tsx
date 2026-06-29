import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#localizacao" }
  ];

  const handleWhatsappCTA = () => {
    const textMsg = encodeURIComponent("Olá, Maria! Vi o seu site e gostaria de saber as informações sobre disponibilidade e agendamento de consulta.");
    window.open(`https://wa.me/551194228846?text=${textMsg}`, "_blank");
  };

  return (
    <header id="header-brand" className="sticky top-0 z-40 bg-sand/90 backdrop-blur-md border-b border-beige-gray/50 py-4 px-6 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#header-brand" className="group flex items-center focus:outline-none">
          <img
            src="https://res.cloudinary.com/dxpfoolyp/image/upload/q_auto/f_auto/v1779894090/_Nova_logo_Maria_Soares_f7swwm.webp"
            alt="Maria Soares Psicóloga"
            referrerPolicy="no-referrer"
            className="h-[52px] w-auto object-contain select-none"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-sm text-espresso/85 font-medium hover:text-terracota transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terracota after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={handleWhatsappCTA}
            className="group bg-[#353D32] hover:bg-espresso text-sand text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow active:scale-95"
          >
            Agendar consulta
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-espresso hover:text-terracota focus:outline-none focus:ring-1 focus:ring-terracota/20 rounded"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden w-full bg-sand border-t border-beige-gray/50 overflow-hidden"
          >
            <div className="py-6 px-4 space-y-4 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-base text-espresso/90 hover:text-terracota font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-[1px] bg-beige-gray/50 w-full my-2" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsappCTA();
                }}
                className="w-full text-center bg-[#353D32] hover:bg-espresso text-sand text-sm font-medium py-4 rounded-full transition-transform active:scale-95"
              >
                Agendar consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
