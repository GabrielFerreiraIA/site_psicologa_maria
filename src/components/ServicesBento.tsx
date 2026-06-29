import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Heart, ShieldAlert, Sparkles, MessageSquare, Check, Calendar } from "lucide-react";
import { SERVICES } from "../data";
import { ServiceCard } from "../types";

export default function ServicesBento() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const handleWhatsappRoute = (service: ServiceCard) => {
    const textMsg = encodeURIComponent(service.whatsappMsg);
    window.open(`https://wa.me/5511942288846?text=${textMsg}`, "_blank");
  };

  return (
    <section id="servicos" className="grain-noise relative py-20 md:py-28 px-6 md:px-12 bg-sand overflow-hidden">
      
      {/* Abstract Design Lines */}
      <div className="absolute right-[-15%] top-[-5%] w-[35rem] h-[35rem] rounded-full bg-terracota/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-15%] bottom-[-5%] w-[35rem] h-[35rem] rounded-full bg-sage/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="font-mono text-xs tracking-[0.25em] text-terracota uppercase font-bold mb-4">
            Como posso guiar sua caminhada
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.2] text-espresso tracking-tight">
            Áreas de atuação e suportes <span className="italic text-terracota font-light">especializados</span>
          </h2>
          <p className="font-sans text-base text-espresso/70 mt-4 max-w-xl font-light">
            Cuidado clínico rigoroso traduzido em aconchego. Escolha o formato de atendimento ideal para reestruturar seu momento de vida.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Service 1: Psicoterapia para Mulheres - Big focus (takes Col span 7) */}
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            onClick={() => setSelectedService(SERVICES[0])}
            className="md:col-span-7 group relative overflow-hidden rounded-3xl border border-beige-gray/50 bg-[#E5E0D8]/40 h-[260px] md:h-[380px] lg:h-[420px] flex flex-col justify-end p-6 md:p-10 cursor-pointer shadow-sm transition-all duration-300"
          >
            {/* Background absolute Image with zoom scaling */}
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0"
            >
              <img
                src={SERVICES[0].image}
                alt={SERVICES[0].title}
                className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-[5%] transition-all duration-1000 object-top pointer-events-none"
                referrerPolicy="no-referrer"
              />
              {/* Radial gradient shading for elegant overlay contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-transparent" />
            </motion.div>

            {/* Service details over image */}
            <div className="relative z-10 space-y-3 text-sand">
              <span className="inline-block bg-badge px-3 py-1 bg-terracota text-white text-[10px] font-mono tracking-widest uppercase rounded-full">
                {SERVICES[0].tag}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
                {SERVICES[0].title}
              </h3>
              <p className="font-sans text-sm text-sand/80 font-light max-w-md line-clamp-2">
                {SERVICES[0].description}
              </p>
              
              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-sand/90 hover:text-white transition-colors flex items-center space-x-1.5 border-b border-sand/30 pb-0.5">
                  <span>Conhecer formato e agendamento</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Service 2: Terapia de Casal (takes Col span 5) */}
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            onClick={() => setSelectedService(SERVICES[1])}
            className="md:col-span-5 group relative overflow-hidden rounded-3xl border border-beige-gray/50 bg-[#E5E0D8]/40 h-[240px] md:h-[380px] lg:h-[420px] flex flex-col justify-end p-6 md:p-8 cursor-pointer shadow-sm transition-all duration-300"
          >
            {/* Background Absolute Image */}
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0"
            >
              <img
                src={SERVICES[1].image}
                alt={SERVICES[1].title}
                className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-[5%] transition-all duration-1000 object-center pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 space-y-3 text-sand">
              <span className="inline-block bg-badge px-3 py-1 bg-sage text-white text-[10px] font-mono tracking-widest uppercase rounded-full">
                {SERVICES[1].tag}
              </span>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {SERVICES[1].title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-sand/80 font-light max-w-sm line-clamp-2">
                {SERVICES[1].description}
              </p>
              
              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-sand/90 hover:text-white transition-colors flex items-center space-x-1.5 border-b border-sand/30 pb-0.5">
                  <span>Conhecer formato</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Service 3: Psicoterapia para Adultos (takes full Col span 12) */}
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            onClick={() => setSelectedService(SERVICES[2])}
            className="md:col-span-12 group relative overflow-hidden rounded-3xl border border-beige-gray/50 bg-[#E5E0D8]/40 h-[260px] md:h-[220px] lg:h-[240px] flex flex-col justify-end p-8 md:p-10 cursor-pointer shadow-sm transition-all duration-300"
          >
            {/* Background Absolute Image */}
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0"
            >
              <img
                src={SERVICES[2].image}
                alt={SERVICES[2].title}
                className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-[5%] transition-all duration-1000 object-center pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/35 to-transparent md:bg-gradient-to-r md:from-espresso/90 md:via-espresso/60 md:to-transparent" />
            </motion.div>

            {/* Content optimized for wide block */}
            <div className="relative z-10 text-sand max-w-2xl space-y-3">
              <span className="inline-block bg-badge px-3 py-1 bg-espresso text-white text-[10px] font-mono tracking-widest uppercase rounded-full border border-sand/15">
                {SERVICES[2].tag}
              </span>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {SERVICES[2].title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-sand/80 font-light max-w-sm sm:max-w-xl">
                {SERVICES[2].description}
              </p>
              
              <div className="pt-2">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-sand/90 hover:text-white transition-colors flex items-center space-x-1.5 border-b border-sand/30 pb-0.5 inline-block">
                  <span>Conhecer formato</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Modal Details / Slide Over for interactive appointment explanation */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
              
              {/* Slinky Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-espresso/70 backdrop-blur-md"
              />

              {/* Modal Card content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-sand border border-beige-gray/50 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 text-espresso"
              >
                
                {/* Header Image Header on top inside modal */}
                <div className="relative h-[200px] md:h-[240px] overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover grayscale-[15%] pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sand via-sand/20 to-transparent" />
                  
                  {/* Close icon button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-2 bg-sand/85 text-espresso rounded-full hover:bg-terracota hover:text-sand transition-all shadow-md focus:outline-none"
                    aria-label="Minimizar"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-6">
                    <span className="inline-block px-3 py-1 bg-terracota text-white text-[9px] font-mono tracking-widest uppercase rounded-full mb-2">
                      {selectedService.tag}
                    </span>
                    <h4 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-espresso">
                      {selectedService.title}
                    </h4>
                  </div>
                </div>

                {/* Body details content */}
                <div className="p-6 md:p-8 space-y-6 text-left">
                  
                  <div className="space-y-3">
                    <h5 className="font-mono text-xs tracking-wider uppercase text-terracota font-semibold">Proposta Terapêutica</h5>
                    <p className="font-sans text-sm md:text-base font-light text-espresso/80 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-beige-gray/50">
                    <div className="space-y-2">
                      <h5 className="font-mono text-[10px] tracking-widest uppercase text-espresso/50">Sintomas comuns tratados:</h5>
                      <ul className="text-xs space-y-1.5 font-sans text-espresso/80 font-light list-disc list-inside">
                        <li>Fadiga e cansaço profundo</li>
                        <li>Cobrança interna constante</li>
                        <li>Crises de pânico / Palpitações</li>
                        <li>Desgaste de comunicação</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-mono text-[10px] tracking-widest uppercase text-espresso/50">Modelo de Sessões:</h5>
                      <ul className="text-xs space-y-1.5 font-sans text-espresso/80 font-light">
                        <li className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                          <span>Atendimento 100% sigiloso</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                          <span>Sessões de 50 minutos</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                          <span>Foco prático-estratégico</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                    <span className="font-sans text-xs text-espresso/50 flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-terracota shrink-0" />
                      <span>Atendimento síncrono online & presencial</span>
                    </span>

                    <button
                      onClick={() => handleWhatsappRoute(selectedService)}
                      className="flex items-center justify-center space-x-2 bg-sage hover:bg-sage-light text-sand text-[11px] font-semibold tracking-wider uppercase px-6 py-3.5 rounded-full transition shadow-sm active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agendar pelo WhatsApp</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
