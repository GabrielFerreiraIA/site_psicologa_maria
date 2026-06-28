import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Globe, MapPin, Check, ExternalLink } from "lucide-react";

export default function BentoFooter() {
  const handleWhatsappCTA = () => {
    const textMsg = encodeURIComponent(
      "Olá, Maria! Cheguei ao fim da página e gostaria de dar esse primeiro passo agendando uma conversa clínica inicial com foco em TCC."
    );
    window.open(`https://wa.me/5511956307990?text=${textMsg}`, "_blank");
  };

  const avatarInitials = [
    { initials: "AM", color: "#C58874" },
    { initials: "SG", color: "#7A9E8A" },
    { initials: "JB", color: "#B89A7A" },
    { initials: "LB", color: "#8A7EA0" },
  ];

  return (
    <footer id="localizacao" className="w-full relative bg-[#F9F7F3]">
      
      {/* 1. Curve Wave Top Divider - smooth asymmetrical organic curve */}
      <div className="curve-wave-top-divider w-full overflow-hidden leading-none relative z-[3] select-none pointer-events-none -mt-20 md:-mt-32 lg:-mt-[150px] -mb-1">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[110px] md:h-[160px] lg:h-[200px] block"
        >
          <path
            d="M 0,140 C 300,30 700,170 1100,45 C 1240,15 1360,85 1440,70 L 1440,200 L 0,200 Z"
            fill="#3A473D"
          />
        </svg>
      </div>

      {/* 2. Main Section Body (Deep Sage Green) */}
      <div className="bg-[#3A473D] text-[#FAFAFA] pt-3 md:pt-4 pb-16 px-6 md:px-12 relative z-[4]">
        
        {/* Subtle decorative fine grain texture for maximum tactile high-end feel */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat"
          }}
        />

        {/* Ambient subtle color orbs inside the deep green container */}
        <div className="absolute left-[-10%] bottom-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#BA7E6A]/10 blur-[130px] pointer-events-none" />
        <div className="absolute right-[-10%] top-[-10%] w-[35rem] h-[35rem] rounded-full bg-sand/5 blur-[130px] pointer-events-none" />

        {/* Content Container Grid */}
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LADO ESQUERDO: copywriting and prominent interactive Whatsapp click */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-6 text-left"
          >
            <div className="space-y-3">
              <span className="font-sans text-xs md:text-[13px] tracking-[0.2em] text-[#C58874] uppercase font-[600] inline-block">
                O PRIMEIRO PASSO É SEM PRESSA
              </span>
              <h2 className="font-serif text-3.5xl md:text-4xl lg:text-[45px] font-[400] leading-[1.15] text-[#F9F7F3] tracking-tight">
                Pronta para <span className="italic text-[#BA7E6A] font-serif font-normal">soltar esse peso?</span>
              </h2>
              <p className="font-sans text-[14px] md:text-[14.5px] text-[#F9F7F3]/90 leading-relaxed font-[300] max-w-sm antialiased">
                Você não precisa dar conta de tudo sozinha. Vamos construir juntas uma nova história sob a luz de um acompanhamento científico, acolhedor e focado no seu respiro.
              </p>
            </div>

            {/* Interactive button trigger with custom Framer Motion hover animation */}
            <div className="pt-1">
              <motion.button
                onClick={handleWhatsappCTA}
                whileHover="hover"
                className="group flex items-center justify-between bg-[#BA7E6A] hover:bg-[#A96C57] text-white text-[13px] md:text-[13.5px] font-medium tracking-wide px-6 py-3.5 rounded-full transition-colors duration-300 shadow-md cursor-pointer w-full sm:w-auto max-w-[290px] text-left"
              >
                <span>Agendar minha consulta</span>
                <motion.div 
                  variants={{
                    hover: { x: 4 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-white/12 border border-white/20 ml-3 shrink-0"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </motion.div>
              </motion.button>
            </div>

            {/* Micro proof stack overlay */}
            <div className="pt-5 border-t border-white/10 flex items-center space-x-3.5 max-w-sm">
              <div className="flex -space-x-2">
                {avatarInitials.map((av, i) => (
                  <div
                    key={i}
                    className="w-[32px] h-[32px] rounded-full border-2 border-[#3A473D] flex items-center justify-center shrink-0 select-none"
                    style={{ backgroundColor: av.color }}
                  >
                    <span className="font-sans text-[9px] font-bold text-white tracking-wide">{av.initials}</span>
                  </div>
                ))}
              </div>
              <span className="font-sans text-[12px] text-[#F9F7F3]/75 font-[300] leading-tight">
                <strong className="text-white font-[500]">+ de 300 mulheres</strong> já transformaram suas vidas.
              </span>
            </div>
          </motion.div>

          {/* LADO DIREITO: cards de logística */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch relative"
          >
            
            {/* CARD 1: Atendimento Online */}
            <div className="bg-[#F9F7F3] text-[#382F2D] border border-stone-200 rounded-2xl p-5 md:p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10 select-none">
              
              <div className="space-y-3">
                {/* Globe/Earth icon in pure outline circular wrapper */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 w-10 h-10 rounded-full border border-[#BA7E6A]/20 text-[#BA7E6A] flex items-center justify-center bg-[#BA7E6A]/5">
                    <Globe className="w-[18px] h-[18px] stroke-[1.4]" />
                  </div>
                  <h3 className="font-serif text-lg md:text-[19px] font-normal leading-none text-[#382F2D]">
                    Atendimento Online
                  </h3>
                </div>

                <p className="font-sans text-[12.5px] text-[#382F2D]/80 leading-relaxed font-[300] antialiased">
                  Sessões por videochamada com conforto, segurança e sigilo, de onde você preferir estar.
                </p>
              </div>

              {/* Checkmark custom items */}
              <ul className="text-[12px] space-y-2.5 font-sans font-[300] text-[#382F2D]/95 pt-2.5 border-t border-stone-200/50">
                <li className="flex items-center space-x-2">
                  <Check className="w-[14px] h-[14px] text-[#BA7E6A] shrink-0 stroke-[2.2]" />
                  <span>Onde você estiver</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-[14px] h-[14px] text-[#BA7E6A] shrink-0 stroke-[2.2]" />
                  <span>Mais flexibilidade</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-[14px] h-[14px] text-[#BA7E6A] shrink-0 stroke-[2.2]" />
                  <span>Mesma qualidade e acolhimento</span>
                </li>
              </ul>
            </div>

            {/* CARD 2: Consultório Presencial */}
            <div className="bg-[#F9F7F3] text-[#382F2D] border border-stone-200 rounded-2xl p-5 md:p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10 select-none">
              
              <div className="space-y-3 md:pr-14 lg:pr-16 xl:pr-20">
                {/* Location/Map pin outline circular wrapper */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 w-10 h-10 rounded-full border border-[#BA7E6A]/20 text-[#BA7E6A] flex items-center justify-center bg-[#BA7E6A]/5">
                    <MapPin className="w-[18px] h-[18px] stroke-[1.4]" />
                  </div>
                  <h3 className="font-serif text-lg md:text-[19px] font-normal leading-tight text-[#382F2D]">
                    Consultório Presencial <br />
                    em Osasco
                  </h3>
                </div>

                <p className="font-sans text-[12.5px] text-[#382F2D]/80 leading-relaxed font-[300] antialiased">
                  Um espaço acolhedor e planejado no coração de Osasco para o seu processo acontecer.
                </p>
              </div>

              {/* Exact address with second mini pins */}
              <div className="space-y-2 pt-3 border-t border-stone-200/50 md:pr-14 lg:pr-16 xl:pr-20">
                <div className="flex items-start space-x-2 text-[12px] text-[#382F2D]/90 font-sans font-[300]">
                  <MapPin className="w-[14px] h-[14px] text-[#C58874] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-[#382F2D]">Chronos Office Osasco</strong>
                    <span className="text-[#382F2D]/75">Rua Narciso Sturlini, 62 - Sala 807</span>
                    <span className="block text-[#382F2D]/60 text-[11px] mt-0.5">Centro - Osasco/SP</span>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=Rua+Narciso+Sturlini,+62+Osasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-1.5 text-[11px] font-[600] tracking-wider uppercase font-sans text-[#BA7E6A] hover:text-[#A96C57] transition-colors"
                  >
                    <span>Ver no mapa</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Vaso Artístico e Ramos Folhagens Secas - Real image replacement */}
            <div className="absolute right-[-32px] md:right-[-45px] lg:right-[-70px] xl:right-[-90px] bottom-[-25px] md:bottom-[-30px] lg:bottom-[-40px] z-20 w-[190px] md:w-[240px] lg:w-[290px] h-[350px] md:h-[440px] lg:h-[530px] pointer-events-none hidden md:flex items-end justify-center select-none">
              <img
                src="https://res.cloudinary.com/dxpfoolyp/image/upload/q_auto/f_auto/v1779618065/jarro_de_planta_2_-_Edited_lfeqac.png"
                alt="Jarro de planta decorativa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_12px_24px_rgba(20,10,5,0.18)]"
              />
            </div>

          </motion.div>

        </div>

        {/* 4. Ethical corporate details, compliance info and bottom references */}
        <div className="max-w-7xl mx-auto mt-16 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-4 gap-8 text-[#FAFAFA]/70 text-left relative z-10">
          
          <div className="space-y-3.5">
            <h4 className="font-serif text-[17px] font-normal leading-tight text-[#F9F7F3]">
              Maria Soares
            </h4>
            <p className="font-sans text-[12.5px] leading-relaxed font-[300] text-white/60">
              Atendimento clínico ativo baseado em TCC focado no alívio da ansiedade, exaustão emocional de mulheres e reconstrução assertiva de limites.
            </p>
            <p className="font-mono text-[9px] tracking-widest text-[#BA7E6A] font-semibold uppercase block pt-1">
              CRP 06/151465
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-sans text-[10.5px] tracking-wider uppercase text-white/40 font-[600]">
              Contato Direto
            </h5>
            <div className="space-y-2 font-sans text-[12.5px] font-[300] text-white/70">
              <p className="hover:text-[#BA7E6A] transition-colors cursor-default select-all">
                (11) 95630-7990
              </p>
              <p className="hover:text-[#BA7E6A] transition-colors cursor-default select-all break-all">
                psimariasoaresonline@gmail.com
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-sans text-[10.5px] tracking-wider uppercase text-white/40 font-[600]">
              Navegação
            </h5>
            <div className="grid grid-cols-2 gap-y-2 gap-x-1 font-sans text-[12.5px] font-[300] text-white/70">
              <a href="#sobre" className="hover:text-[#BA7E6A] transition-colors">Sobre mim</a>
              <a href="#abordagem" className="hover:text-[#BA7E6A] transition-colors">Abordagem</a>
              <a href="#servicos" className="hover:text-[#BA7E6A] transition-colors">Serviços</a>
              <a href="#depoimentos" className="hover:text-[#BA7E6A] transition-colors">Depoimentos</a>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-sans text-[10.5px] tracking-wider uppercase text-white/40 font-[600]">
              Canais
            </h5>
            <div className="space-y-1 text-white/70 font-sans text-[12.5px] font-[300]">
              <a 
                href="https://instagram.com/psimariasoares" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#BA7E6A] transition-colors inline-flex items-center gap-1.5"
              >
                <span>@psimariasoares</span>
                <ExternalLink className="w-3 h-3 text-[#BA7E6A]" />
              </a>
              <p className="text-[11.5px] text-white/45 leading-relaxed pt-1 font-[300]">
                Conversas, insights diários e respiros práticos de autoconhecimento.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright statement complying with CFP guidelines */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans font-[300] text-white/40 space-y-3 sm:space-y-0 text-center relative z-10">
          <p>© 2026 Maria Soares • Psicóloga Clínica. Todos os direitos reservados.</p>
          <p className="inline-flex items-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="w-3.5 h-3.5 text-[#CDDBCC] shrink-0"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
            <span>Código de Ética do Psicólogo • CFP Garantido</span>
          </p>
        </div>

      </div>

    </footer>
  );
}
