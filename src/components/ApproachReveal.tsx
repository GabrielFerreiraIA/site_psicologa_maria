import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ApproachReveal() {
  const steps = [
    {
      title: "Acolhimento",
      description: "Um espaço seguro para você ser ouvida sem julgamentos.",
      iconSrc: "/svgs/s3-icone1.svg"
    },
    {
      title: "Consciência",
      description: "Compreensão dos seus padrões e do que te mantém presa.",
      iconSrc: "/svgs/s3-icone2.svg"
    },
    {
      title: "Posicionamento",
      description: "Novas escolhas, limites saudáveis e relações mais verdadeiras.",
      iconSrc: "/svgs/s3-icone3.svg"
    },
    {
      title: "Leveza",
      description: "Mais clareza, equilíbrio e uma vida que faz sentido para você.",
      iconSrc: "/svgs/s3-icone4.svg"
    }
  ];

  const handleWhatsappCTA = () => {
    const textMsg = encodeURIComponent(
      "Olá, Maria! Li sobre o seu método de TCC e gostaria de agendar uma consulta ou entender melhor como iniciar a psicoterapia."
    );
    window.open(`https://wa.me/5511956307990?text=${textMsg}`, "_blank");
  };

  return (
    <section
      id="abordagem"
      className="relative py-14 lg:py-20 px-6 md:px-12 overflow-hidden transition-all duration-300 min-h-[520px]"
    >
      {/* Imagem de fundo da seção */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dxpfoolyp/image/upload/q_auto/f_auto/v1779894090/Fundo_Sess%C3%A3o_xxvmrg.webp"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-terracota/30" />
      </div>

      {/* Jarro — posicionado absolutamente na borda direita da seção, fora do grid */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 bottom-0 z-[5] hidden lg:block"
        style={{ top: "5%", width: "clamp(220px, 22vw, 310px)" }}
      >
        {/* Arco simétrico no topo: lado direito some contra a borda da seção */}
        <div
          className="w-full h-full overflow-hidden shadow-[0_32px_80px_-16px_rgba(30,10,5,0.40)]"
          style={{ borderRadius: "50% 50% 0 0 / 120px 120px 0 0" }}
        >
          <img
            src="/jarro2.png"
            alt="Jarro decorativo"
            className="w-full h-full object-cover object-top pointer-events-none"
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-9 gap-10 lg:gap-14 items-center">
        
        {/* Left Column (5/12): Authentic TCC Scientific Copywriting / Headline & Body */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 space-y-8 text-left"
        >
          
          <div className="space-y-4">
            <h2 
              className="font-serif text-[28px] md:text-[38px] lg:text-[43px] font-[400] leading-[1.2] text-[#F9F7F3] tracking-tight"
              id="approach-title"
            >
              Terapia não é só desabafo. <br />
              É construção de <span className="italic font-normal">novos contornos.</span>
            </h2>
          </div>

          <p className="font-sans text-[14.5px] md:text-[15.5px] text-[#F9F7F3]/90 leading-relaxed font-[300] antialiased">
            Através da Terapia Cognitivo-Comportamental (TCC), meu papel não é apenas ouvir seu silêncio, mas te ajudar a identificar os padrões que te adoecem. Vamos entender como você pensa, para mudar como você sente e, principalmente, como você se posiciona na vida e nos relacionamentos.
          </p>

          <div className="pt-4">
            <button
              onClick={handleWhatsappCTA}
              className="group inline-flex items-center justify-between border border-[#F9F7F3]/30 bg-sand/10 hover:bg-sand/20 text-[#F9F7F3] text-[13px] tracking-wide font-light px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm max-w-[280px] w-full text-left cursor-pointer"
            >
              <span>Entenda como a TCC funciona</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-sand/20 text-white group-hover:bg-sand/30 transition-colors shrink-0 ml-3">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </motion.div>

        {/* Middle Column (5/9): Timeline */}
        <div className="lg:col-span-5 py-4 flex justify-start lg:justify-center">
          <div className="relative pl-0 py-2 w-full max-w-[380px]" id="approach-timeline-container">
            
            {/*
              Continuous Vertical Dotted Connector Line — animated draw from top to bottom on scroll
            */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ originY: 0 }}
              className="absolute left-[5px] top-[48px] bottom-[48px] w-[2px] border-l-2 border-dotted border-[#FAF8F5]/30 pointer-events-none"
            />
            
            <div className="flex flex-col space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.0, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center relative min-h-[82px] group"
                  id={`timeline-row-${index}`}
                >
                  
                  {/* 
                    Solid Node Coordinate Anchor 
                    Mathematically guarantees perfect vertical center alignment with both the timeline dot and the horizontal line.
                  */}
                  <div className="absolute left-[0px] top-1/2 -translate-y-1/2 flex items-center z-10 pointer-events-none">
                    {/* Tiny visual node dot exactly intersecting the vertical line */}
                    <div className="w-2.5 h-2.5 bg-[#FAF8F5] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                    {/* Horizontal connection line extending to the large glassmorphic circle */}
                    <div className="w-10 border-t border-dashed border-[#FAF8F5]/35" />
                  </div>
                  
                  {/* 
                    Row Content Block 
                    pl-[54px] elegantly offsets the content so the circle begins exactly where the connector ends 
                  */}
                  <div className="pl-[54px] flex items-center gap-5 w-full">
                    
                    {/* 
                      Highly Polished Floating / Detached Glassmorphic Circle 
                      Features delicate border, background translucence, and custom 3D shadows to separate it from the clay background 
                    */}
                    <div
                      className="w-[70px] h-[70px] md:w-[74px] md:h-[74px] rounded-full shrink-0 flex items-center justify-center border border-[#FAF8F5]/22 bg-white/[0.08] backdrop-blur-md overflow-hidden transition-all duration-500 hover:scale-[1.05] shadow-[0_16px_36px_-6px_rgba(30,12,6,0.3),_inset_0_1px_3px_rgba(255,255,255,0.18)] hover:shadow-[0_24px_50px_-8px_rgba(30,12,6,0.38),_inset_0_1px_4px_rgba(255,255,255,0.24)]"
                      id={`timeline-circle-${index}`}
                    >
                      <img src={step.iconSrc} alt="" className="w-[58px] h-[58px] object-contain" />
                    </div>
                    
                    {/* Step Headings & Explanatory Metadata block */}
                    <div className="flex flex-col text-left">
                      <h4 className="font-serif text-[18px] md:text-[20px] font-normal leading-snug text-[#FAF8F5] tracking-tight">
                        {step.title}
                      </h4>
                      <p className="font-sans text-[13px] md:text-[13.5px] leading-relaxed text-[#FAF8F5]/80 font-[300] max-w-[210px] md:max-w-[245px]">
                        {step.description}
                      </p>
                    </div>

                  </div>

                </motion.div>
              ))}
            </div>

          </div>
        </div>


      </div>

    </section>
  );
}
