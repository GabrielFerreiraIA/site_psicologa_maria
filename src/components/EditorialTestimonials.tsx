import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LetterTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const ALL_TESTIMONIALS: LetterTestimonial[] = [
  {
    id: "t1",
    quote: "Nunca imaginei que uma sessão de terapia pudesse me deixar tão acolhida e ao mesmo tempo tão desafiada a crescer. A Maria tem uma sensibilidade única — ela enxerga o que eu nem consigo colocar em palavras. Cada encontro foi uma transformação silenciosa, mas real. Hoje me reconheço em escolhas que antes nem conseguia enxergar.",
    author: "Ariane Delfino",
    role: "Arquiteta"
  },
  {
    id: "t2",
    quote: "O que mais me marcou foi o respeito. Nunca me senti julgada, nunca ouvi um conselho vazio. A Maria escuta de verdade e devolve tudo com uma clareza que reorganiza o que estava bagunçado por dentro. Me sinto grata por ter encontrado uma profissional assim.",
    author: "Silvana Gonçalves",
    role: "Educadora"
  },
  {
    id: "t3",
    quote: "Sou apaixonada pelo meu trabalho, mas estava me perdendo nele. A terapia com a Maria me ajudou a separar quem eu sou de o que eu faço — e isso mudou tudo. Hoje trabalho com mais leveza e, de verdade, cuido de mim também.",
    author: "Janaina Biyikian",
    role: "Designer"
  },
  {
    id: "t4",
    quote: "A Maria chegou na minha vida como uma bênção. Eu estava num momento muito difícil e ela me ajudou a ver que havia saída, que havia possibilidade. Fica aqui minha gratidão enorme por tudo o que aprendi e ainda aprendo.",
    author: "Larissa Barsotti",
    role: "Administradora"
  },
  {
    id: "t5",
    quote: "Me sinto super acolhida e respeitada em cada sessão. A Maria cria um espaço seguro de verdade, onde posso ser honesta comigo mesma sem medo. Recomendo de olhos fechados para qualquer mulher que precise de um suporte real.",
    author: "Emily Yoshinaga",
    role: "Engenheira"
  },
  {
    id: "t6",
    quote: "Ela está sempre me ajudando a ver os ângulos que eu não consigo ver sozinha. É como ter alguém que torce genuinamente por você, mas com embasamento clínico real. Tenho crescido muito desde que comecei.",
    author: "Danyela Viana",
    role: "Empreendedora"
  },
  {
    id: "t7",
    quote: "Terapia não é para loucos — precisei aprender isso na prática. Demorei anos para buscar ajuda porque achava que era fraqueza. A Maria me mostrou que é exatamente o contrário: é coragem. E o que encontrei aqui foi alívio, clareza e ferramentas que uso todo dia.",
    author: "Tatiane Dantas",
    role: "Professora"
  },
  {
    id: "t8",
    quote: "Eu não queria uma profissional que ficasse apenas balançando a cabeça e anotando. Com a Maria foi diferente — ela não me mostrou só o caminho, ela me ensinou a caminhar. Encontrei aqui um ambiente de acolhimento genuíno, onde minhas vulnerabilidades se tornaram pontos de partida. Houve transformação real e concreta na minha rotina.",
    author: "Ana Matos",
    role: "Administradora"
  },
  {
    id: "t9",
    quote: "Comecei a terapia com a Maria no período mais difícil da minha vida. Com o tempo, e com muito trabalho, consegui reduzir a medicação para ansiedade que tomava há anos. Não foi milagre, foi processo — e ter ela ao meu lado fez toda a diferença.",
    author: "Camila Lima",
    role: "Nutricionista"
  },
];

const PAGE_SIZE = 3;
const CARD_ROTATIONS = [-1.8, 0.9, -1.2];

export default function EditorialTestimonials() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(ALL_TESTIMONIALS.length / PAGE_SIZE);
  const currentTestimonials = ALL_TESTIMONIALS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const goToPage = (nextPage: number) => {
    setDirection(nextPage >= page ? 1 : -1);
    setPage(nextPage);
  };

  const handleVerMais = () => {
    goToPage((page + 1) % totalPages);
  };

  return (
    <section
      id="depoimentos"
      className="relative pt-16 md:pt-20 pb-6 md:pb-8 px-6 md:px-12 bg-[#F9F7F3] overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute left-[8%] top-[-5%] w-[32rem] h-[32rem] rounded-full bg-terracota/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[8%] bottom-[-5%] w-[32rem] h-[32rem] rounded-full bg-sage/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs tracking-[0.32em] text-terracota font-[600] mb-5 uppercase"
          >
            HISTÓRIAS REAIS, TRANSFORMAÇÕES POSSÍVEIS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl md:text-4xl lg:text-[45px] font-medium leading-[1.2] text-espresso tracking-tight"
          >
            O que dizem sobre o{" "}
            <span className="italic font-serif font-normal text-terracota">processo</span>
          </motion.h2>
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/60 border border-[#EBE8E2] shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="#BA7E6A" strokeWidth="1.8" className="w-[17px] h-[17px]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
            <span className="font-sans text-[12.5px] font-[400] text-espresso/75 tracking-tight antialiased">
              Ambiente ético, sigiloso e acolhedor.
            </span>
          </div>
        </div>

        {/* Animated testimonial grid */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, x: dir * 36 }),
              center: { opacity: 1, x: 0 },
              exit: (dir: number) => ({ opacity: 0, x: dir * -36 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12"
          >
            {currentTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 28, rotate: CARD_ROTATIONS[i] }}
                animate={{ opacity: 1, y: 0, rotate: CARD_ROTATIONS[i] }}
                whileHover={{
                  y: -6,
                  rotate: 0,
                  scale: 1.015,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col cursor-default"
                style={{
                  background: "linear-gradient(150deg, #FEFCF7 0%, #FAF4E8 100%)",
                  boxShadow: "0 6px 28px rgba(56,47,45,0.10), 0 1px 4px rgba(56,47,45,0.05)",
                  borderRadius: "3px",
                  border: "1px solid rgba(210,198,178,0.65)",
                  padding: "1.9rem 1.9rem 1.7rem",
                }}
              >
                {/* Folded corner */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
                  style={{
                    background: "linear-gradient(225deg, #E5DECE 50%, transparent 50%)",
                    borderBottomLeftRadius: "4px",
                  }}
                />

                {/* Letterhead rule */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="h-px flex-1 bg-terracota/22" />
                  <div className="w-1.5 h-1.5 bg-terracota/45 rotate-45 shrink-0" />
                  <div className="h-px flex-1 bg-terracota/22" />
                </div>

                {/* Handwritten quote */}
                <p className="font-cursive text-[18.5px] md:text-[19px] leading-[1.72] text-espresso/82 flex-1 mb-6">
                  {'“'}{testimonial.quote}{'”'}
                </p>

                {/* Sign-off */}
                <div className="mt-auto">
                  <div className="w-9 h-px bg-terracota/40 mb-3.5" />
                  <p className="font-cursive text-[17px] text-espresso font-normal leading-tight">
                    {testimonial.author}
                  </p>
                  <p className="font-mono text-[9.5px] tracking-[0.2em] text-espresso/45 uppercase mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination controls */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === page
                    ? "w-6 bg-terracota"
                    : "w-1.5 bg-espresso/20 hover:bg-espresso/40"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={handleVerMais}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-1 font-mono text-[11px] tracking-[0.28em] text-espresso/50 hover:text-terracota uppercase transition-colors duration-300 cursor-pointer pb-0.5 border-b border-espresso/20 hover:border-terracota/50"
          >
            {page < totalPages - 1 ? "Ver mais depoimentos" : "Ver desde o início"}
          </motion.button>
        </div>


      </div>
    </section>
  );
}
