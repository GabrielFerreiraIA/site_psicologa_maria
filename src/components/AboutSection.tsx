import React from "react";
import { motion } from "motion/react";

const CREDENTIALS = [
  "Graduada em Psicologia",
  "Pós-graduada em Gestão de Pessoas",
  "Especialista em TCC",
  "Consultora em Análise Comportamental",
  "Consultora Organizacional",
];

export default function AboutSection() {
  const handleWhatsappCTA = () => {
    const textMsg = encodeURIComponent(
      "Olá, Maria! Li sobre você no site e gostaria de agendar uma conversa inicial."
    );
    window.open(`https://wa.me/5511956307990?text=${textMsg}`, "_blank");
  };

  return (
    <section
      id="sobre"
      className="relative py-20 md:py-28 px-6 md:px-12 bg-[#F2EDE5] overflow-hidden"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute left-[-8%] top-[20%] w-[30rem] h-[30rem] rounded-full bg-terracota/6 blur-[130px] pointer-events-none" />
      <div className="absolute right-[-8%] bottom-[10%] w-[25rem] h-[25rem] rounded-full bg-sage/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Coluna da imagem ── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[400px] lg:max-w-none mx-auto">

            {/* Fundo decorativo rotacionado */}
            <div className="absolute inset-0 bg-terracota/10 rounded-3xl rotate-[3deg] scale-[1.03] pointer-events-none" />

            {/* Foto */}
            <img
              src="https://res.cloudinary.com/dxpfoolyp/image/upload/v1781696541/foto_maria_v5yqmo.jpg"
              alt="Maria Soares, Psicóloga Clínica TCC"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-auto rounded-3xl object-cover shadow-xl aspect-[4/5] object-top"
            />

            {/* Badge flutuante: 17 anos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-6 right-[-16px] md:right-[-24px] z-20 bg-[#3A473D] text-white rounded-2xl px-5 py-4 shadow-xl select-none"
            >
              <span className="font-serif text-[34px] font-medium text-[#BA7E6A] block leading-none">17</span>
              <span className="font-sans text-[11px] font-light text-white/70 tracking-wide leading-none">anos de</span>
              <span className="font-sans text-[12px] font-semibold text-white tracking-wide">experiência</span>
            </motion.div>

            {/* Badge CRP */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-5 left-[-14px] z-20 bg-[#F2EDE5] border border-beige-gray/70 rounded-full px-4 py-2 shadow-md select-none"
            >
              <span className="font-mono text-[10px] font-bold text-terracota tracking-widest uppercase">CRP 06/151465</span>
            </motion.div>

          </div>
        </motion.div>

        {/* ── Coluna de conteúdo ── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Label */}
          <span className="font-mono text-xs tracking-[0.28em] text-terracota uppercase font-bold block">
            Quem cuida de você
          </span>

          {/* Título */}
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-medium leading-[1.15] text-espresso tracking-tight">
            17 anos ao lado de quem sempre{" "}
            <span className="italic text-terracota font-normal">cuidou dos outros.</span>
          </h2>

          {/* Textos */}
          <div className="space-y-4 font-sans text-[14.5px] md:text-[15px] text-espresso/80 leading-relaxed font-light max-w-xl">
            <p>
              Meu nome é <strong className="font-semibold text-espresso">Maria Soares</strong>. Escolhi a psicologia porque acredito que o autoconhecimento é o ato mais corajoso que uma pessoa pode praticar. Em quase duas décadas ao lado de mulheres, casais e adultos que carregavam mais do que conseguiam suportar sozinhos, aprendi que a transformação não acontece quando você "resolve" tudo — ela começa no instante em que você decide ser honesta consigo mesma.
            </p>
            <p>
              Minha abordagem é a{" "}
              <strong className="text-espresso font-semibold">
                Terapia Cognitivo-Comportamental (TCC)
              </strong>{" "}
              — um método com respaldo científico, prático e orientado a mudanças concretas e duradouras. Atendo presencialmente em Osasco/SP e online para todo o Brasil, adultos, casais e idosos.
            </p>
            <p>
              Além do atendimento clínico, atuo como Consultora Organizacional em empresas, realizando avaliações admissionais, periódicas e comportamentais com aplicação de testes de personalidade, avaliação psíquica e emissão de laudo técnico detalhado.
            </p>
          </div>

          {/* Credenciais */}
          <div className="pt-1">
            <span className="font-mono text-[10px] tracking-[0.22em] text-espresso/40 uppercase font-bold block mb-3">
              Formação &amp; Especialidades
            </span>
            <div className="flex flex-wrap gap-2">
              {CREDENTIALS.map((label, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/70 text-espresso/75 text-[11.5px] font-sans font-medium px-3.5 py-2 rounded-full border border-beige-gray/60 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-terracota shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <button
              onClick={handleWhatsappCTA}
              className="group inline-flex items-center justify-between bg-[#353D32] hover:bg-espresso text-sand text-[13px] font-medium px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Agendar uma conversa inicial</span>
              <div className="ml-3 flex items-center justify-center w-5 h-5 rounded-full border border-sand/40 group-hover:border-sand/75 transition-colors shrink-0">
                <span className="text-[11px] transform transition-transform group-hover:translate-x-[1px]">→</span>
              </div>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
