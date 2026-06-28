import React from "react";
import { motion } from "motion/react";

export default function HeroImmersive() {
  const handleWhatsappCTA = () => {
    const textMsg = encodeURIComponent(
      "Olá, Maria! Vi o seu site e me identifiquei muito com a sua abordagem de psicoterapia para mulheres sobrecarregadas. Gostaria de receber mais informações sobre o atendimento clínico."
    );
    window.open(`https://wa.me/5511956307990?text=${textMsg}`, "_blank");
  };

  const MouseIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[28px] text-[#BA7E6A] mr-2 shrink-0 select-none" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="2" width="12" height="20" rx="6" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" className="animate-bounce" />
    </svg>
  );

  return (
    <section className="grain-noise relative bg-sand pt-10 pb-6 px-6 md:px-12 xl:px-20 flex flex-col overflow-hidden">
      
      {/* Background radial warmth */}
      <div className="absolute right-[-10%] top-[15%] w-[38rem] h-[38rem] rounded-full bg-terracota/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-5%] w-[28rem] h-[28rem] rounded-full bg-sage/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-12 items-center my-auto">
        
        {/* Left column: High-end clinical messaging & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left pr-0 lg:pr-6">
          
          {/* Tagline showing professional credentials */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[13px] md:text-sm font-semibold tracking-wider text-[#BA7E6A] uppercase mb-4 block"
          >
            Psicóloga Clínica TCC • CRP 06/151465
          </motion.span>

          {/* Headline - Exact styling with italics & custom text spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[30px] sm:text-[44px] md:text-[58px] lg:text-[62px] xl:text-[68px] font-medium leading-[1.08] text-espresso tracking-tight max-w-2xl"
          >
            Para mulheres que <br />
            cansaram de sustentar <br />
            o <span className="italic text-terracota font-[400] font-serif">mundo sozinhas.</span>
          </motion.h1>

          {/* Earthy flat line spacing separator */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="w-[120px] md:w-[140px] h-[2.5px] bg-terracota mt-5 mb-6 rounded-full"
          />

          {/* Subheadline and clinical insights */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm md:text-[15.5px] text-espresso/90 max-w-[540px] leading-relaxed mb-8"
          >
            Ansiedade, sobrecarga emocional e relações que adoecem não são fraqueza.
            São sinais de que é hora de olhar para você com verdade e construir novos contornos.
          </motion.p>

          {/* Action Area: Button group */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-6 md:mb-10"
          >
            {/* Primary CTA button with circular arrow */}
            <button
              onClick={handleWhatsappCTA}
              className="group flex items-center justify-center bg-[#353D32] hover:bg-espresso text-sand text-[14px] font-medium px-8 py-4.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] shrink-0"
            >
              <span>Iniciar minha jornada</span>
              <div className="ml-3 flex items-center justify-center w-[22px] h-[22px] rounded-full border border-sand/40 group-hover:border-sand/75 transition-colors">
                <span className="text-[12px] transform transition-transform group-hover:translate-x-[1px]">→</span>
              </div>
            </button>

            {/* Geographical offline indicator alongside CTA */}
            <div className="flex items-center space-x-3 text-espresso/90 py-1">
              <div className="text-terracota shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[22px] h-[22px]">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="font-sans text-[13px] md:text-sm leading-snug">
                <div className="font-semibold text-espresso">Atendimento online e</div>
                <div className="text-espresso/75">presencial em Osasco</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right column: Image with asymmetrical organic framing and layered overlapping elements */}
        <div className="lg:col-span-5 relative flex justify-center items-center px-4 lg:px-0 mt-2 lg:mt-0 select-none">
          
          {/* Portrait of Dra. Maria Soares without frame (pre-cropped as requested) - slightly enlarged */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
            transition={{
              opacity: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              scale:   { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "loop", delay: 1.8 }
            }}
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[470px] lg:max-w-none lg:w-[490px] xl:w-[530px] relative z-0 flex justify-center items-end"
          >
            <img
              src="https://res.cloudinary.com/dxpfoolyp/image/upload/v1782614175/Foto_Maria_Hero_xtkdz0.webp"
              alt="Dra. Maria Soares, Psicóloga Clínica TCC"
              className="w-full h-auto max-h-[260px] sm:max-h-[380px] md:max-h-[560px] lg:max-h-[640px] object-contain transition-all duration-1000 pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>

      </div>

      {/* Down arrow scroll helper */}
      <div className="flex justify-between items-center max-w-7xl w-full border-t border-beige-gray/30 pt-4 mt-4 md:mt-6">
        <div className="flex items-center text-espresso/70 hover:text-espresso transition-colors select-none">
          <MouseIcon />
          <span className="font-mono text-[9.5px] md:text-[10px] tracking-[0.25em] uppercase font-bold text-espresso/75">
            ROLAR PARA EXPLORAR
          </span>
        </div>

        <a
          href="#sobre"
          className="group hidden sm:flex items-center space-x-2 font-sans text-xs tracking-widest text-[#BA7E6A] uppercase font-bold hover:text-espresso transition-colors duration-300"
        >
          <span className="animate-bounce inline-block text-[15px]">↓</span>
          <span>Role para explorar seu momento</span>
        </a>
      </div>

    </section>
  );
}
