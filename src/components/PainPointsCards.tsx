import React from "react";
import { motion } from "motion/react";

export default function PainPointsCards() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="sobre" className="relative py-16 md:py-20 px-6 md:px-12 bg-[#EDE5DB] border-b border-beige-gray/40 overflow-hidden">

      {/* Textura de papel/linho no fundo */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px"
        }}
      />

      {/* Glow quente esquerda */}
      <div className="absolute left-[-10%] top-[-10%] w-[35rem] h-[35rem] rounded-full bg-terracota/6 blur-[130px] pointer-events-none z-0" />

      {/* Flor inclinada — fica atrás dos cards (z-0), rotacionada e maior */}
      <div
        className="absolute right-[-60px] md:right-[-80px] bottom-[-60px] w-[180px] sm:w-[280px] md:w-[500px] lg:w-[580px] pointer-events-none select-none z-0"
        style={{ transform: "rotate(-18deg)", transformOrigin: "bottom right" }}
      >
        <img
          src="https://res.cloudinary.com/dxpfoolyp/image/upload/q_auto/f_auto/v1779894090/Flor_sess%C3%A3o_seotgs.webp"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain opacity-[0.32]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs tracking-[0.32em] text-terracota font-[600] mb-5 uppercase"
          >
            QUANDO A ANSIEDADE VIR A ROTINA
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl md:text-4xl lg:text-[45px] font-medium leading-[1.2] text-espresso tracking-tight md:px-12"
          >
            Você não está exagerando. Está <span className="italic font-serif font-normal text-terracota">sobrevivendo.</span>
          </motion.h2>
        </div>

        {/* Cards — z-10 garante que ficam na frente da planta */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12 cursor-default relative z-10"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card flex items-start gap-4 md:gap-6 p-5 md:p-8 lg:p-9 rounded-2xl transition-all duration-500 cursor-default"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(16px) saturate(160%)",
              WebkitBackdropFilter: "blur(16px) saturate(160%)",
              borderTop: "1px solid rgba(255,255,255,0.55)",
              borderLeft: "1px solid rgba(255,255,255,0.28)",
              borderRight: "1px solid rgba(255,255,255,0.18)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(186,126,106,0.08), inset 0 1px 0 rgba(255,255,255,0.55)",
            }}
          >
            <div className="w-[62px] h-[62px] md:w-[82px] md:h-[82px] rounded-full bg-[#EFE9E0]/60 flex items-center justify-center shrink-0 border border-white/50 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <img src="/svgs/s2-icone1.svg" alt="" className="w-[46px] h-[46px] md:w-[62px] md:h-[62px] object-contain" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif text-[20px] font-normal leading-tight text-espresso mb-3">
                Mente que não desliga
              </h3>
              <p className="font-sans text-[13.5px] leading-relaxed text-espresso/75 font-[300]">
                Pensamentos acelerados, preocupações constantes e a sensação de que nada é suficiente.
              </p>
              <div className="w-10 h-[1.5px] bg-[#BA7E6A] mt-5 self-start opacity-70" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card flex items-start gap-4 md:gap-6 p-5 md:p-8 lg:p-9 rounded-2xl transition-all duration-500 cursor-default"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(16px) saturate(160%)",
              WebkitBackdropFilter: "blur(16px) saturate(160%)",
              borderTop: "1px solid rgba(255,255,255,0.55)",
              borderLeft: "1px solid rgba(255,255,255,0.28)",
              borderRight: "1px solid rgba(255,255,255,0.18)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(186,126,106,0.08), inset 0 1px 0 rgba(255,255,255,0.55)",
            }}
          >
            <div className="w-[62px] h-[62px] md:w-[82px] md:h-[82px] rounded-full bg-[#EFE9E0]/60 flex items-center justify-center shrink-0 border border-white/50 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <img src="/svgs/s2-icone2.svg" alt="" className="w-[46px] h-[46px] md:w-[62px] md:h-[62px] object-contain" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif text-[20px] font-normal leading-tight text-espresso mb-3">
                Dificuldade de dizer não
              </h3>
              <p className="font-sans text-[13.5px] leading-relaxed text-espresso/75 font-[300]">
                Você se anula para agradar, carrega responsabilidades que não são suas e se esquece de si.
              </p>
              <div className="w-10 h-[1.5px] bg-[#BA7E6A] mt-5 self-start opacity-70" />
            </div>
          </motion.div>

          {/* Card 3 — planta passa por baixo deste card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card flex items-start gap-4 md:gap-6 p-5 md:p-8 lg:p-9 rounded-2xl transition-all duration-500 cursor-default"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(16px) saturate(160%)",
              WebkitBackdropFilter: "blur(16px) saturate(160%)",
              borderTop: "1px solid rgba(255,255,255,0.55)",
              borderLeft: "1px solid rgba(255,255,255,0.28)",
              borderRight: "1px solid rgba(255,255,255,0.18)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(186,126,106,0.08), inset 0 1px 0 rgba(255,255,255,0.55)",
            }}
          >
            <div className="w-[62px] h-[62px] md:w-[82px] md:h-[82px] rounded-full bg-[#EFE9E0]/60 flex items-center justify-center shrink-0 border border-white/50 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <img src="/svgs/s2-icone3.svg" alt="" className="w-[46px] h-[46px] md:w-[62px] md:h-[62px] object-contain" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif text-[20px] font-normal leading-tight text-espresso mb-3">
                Caos silencioso
              </h3>
              <p className="font-sans text-[13.5px] leading-relaxed text-espresso/75 font-[300]">
                Por fora, tudo parece bem. Por dentro, exaustão, cobrança e um vazio que ninguém vê.
              </p>
              <div className="w-10 h-[1.5px] bg-[#BA7E6A] mt-5 self-start opacity-70" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
