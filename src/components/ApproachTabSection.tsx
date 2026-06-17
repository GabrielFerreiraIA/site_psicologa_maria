import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Eye, RefreshCw, Zap, Moon } from "lucide-react";

interface DistortionItem {
  id: string;
  tabLabel: string;
  distortionLabel: string;
  distortedThought: string;
  interpretation: string;
  healthierThought: string;
  strategyName: string;
  strategyDetail: string;
}

const DISTORTION_DATA: DistortionItem[] = [
  {
    id: "tudo-ou-nada",
    tabLabel: "Tudo ou Nada",
    distortionLabel: "Pensamento Polarizado",
    distortedThought: "Se eu não der conta de todas as tarefas perfeitamente, eu falhei como profissional e mãe.",
    interpretation: "Você divide a vida em extremos (fracasso vs. perfeição), excluindo os caminhos salutares do centro.",
    healthierThought: "Não dar conta de tudo não invalida minha integridade. Sou imperfeita, humana, e faço o meu melhor.",
    strategyName: "Critério Flexível",
    strategyDetail: "Substituímos cobranças asfixiantes ('eu tenho que') por intenções compassivas ('eu escolho focar em')."
  },
  {
    id: "leitura-mentes",
    tabLabel: "Leitura de Mente",
    distortionLabel: "Premissa Insegura",
    distortedThought: "Disse não ao convite dela e agora ela me detesta. Tenho certeza que todos me acham egoísta.",
    interpretation: "Presumir saber as motivações negativas das pessoas sem evidências sólidas.",
    healthierThought: "As pessoas têm suas próprias preocupações. Meu não foi um limite saudável necessário para minha saúde mental.",
    strategyName: "Teste de Evidências",
    strategyDetail: "Analisamos na sessão fatos reais vs. fantasias de culpa, construindo autoafirmação sólida."
  },
  {
    id: "catastrofizar",
    tabLabel: "Catastrofização",
    distortionLabel: "Previsão do Caos",
    distortedThought: "Estou me sentindo tão sobrecarregada hoje... Com certeza vou quebrar emocionalmente e perder o controle.",
    interpretation: "Tratar pequenos sinais de cansaço ou ansiedade como prenúncio do absoluto colapso.",
    healthierThought: "O cansaço de hoje é apenas um sinal físico temporário. Posso descansar agora e reajustar amanhã.",
    strategyName: "Regulação da Emoção",
    strategyDetail: "Ensino técnicas de aterramento e autoacolhimento para respirar e desarmar o alarme de sobrevivência."
  }
];

export default function ApproachTabSection() {
  const [activeTabId, setActiveTabId] = useState("tudo-ou-nada");
  const [isShowingRestructured, setIsShowingRestructured] = useState(false);

  const activeItem = DISTORTION_DATA.find((item) => item.id === activeTabId) || DISTORTION_DATA[0];

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setIsShowingRestructured(false); // Reset restructured toggle
  };

  return (
    <section className="relative py-20 lg:py-24 px-6 md:px-12 bg-sand overflow-hidden border-b border-beige-gray/40">
      
      {/* Decorative details */}
      <div className="absolute right-[-10%] top-[30%] w-[25rem] h-[25rem] bg-terracota/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-5%] w-[25rem] h-[25rem] bg-sage/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-[0.25em] text-terracota uppercase font-bold">
            Simulador de Reestruturação
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-espresso">
            Entenda como funciona o <span className="italic text-terracota font-light">Seu Pensar</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-espresso/70 font-light max-w-xl mx-auto">
            A forma como interpretamos as situações dita como nos sentimos. Clique nas distorções cognitivas abaixo e veja na prática como reestruturamos padrões no divã.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex justify-center border-b border-beige-gray/50 pb-px max-w-xl mx-auto">
          {DISTORTION_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex-1 text-center font-serif text-sm py-4 border-b-2 transition-all duration-300 relative focus:outline-none ${
                activeTabId === item.id
                  ? "border-terracota text-terracota font-medium"
                  : "border-transparent text-espresso/45 hover:text-espresso"
              }`}
            >
              {item.tabLabel}
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4 text-left">
          
          {/* Distorted Thought Card */}
          <div className="bg-[#FAF8F5] border border-beige-gray/50 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block bg-[#E5E0D8] text-espresso/60 text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">
                Distorção Cognitiva Comum
              </span>
              
              <h3 className="font-serif text-lg font-medium text-espresso italic">
                "{activeItem.distortedThought}"
              </h3>
              
              <p className="font-sans text-xs text-espresso/75 font-light leading-relaxed">
                <span className="font-semibold text-espresso">Interpretação Clínica:</span> {activeItem.interpretation}
              </p>
            </div>

            <div className="pt-4 border-t border-beige-gray/50 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-wider uppercase text-espresso/40">
                Padrão Sabotador
              </span>
              <button
                onClick={() => setIsShowingRestructured(true)}
                className="flex items-center space-x-1 text-xs font-semibold text-terracota hover:text-espresso transition-colors font-mono uppercase"
              >
                <span>Reestruturar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Restructured Outcome Card */}
          <div className="bg-[#FAF8F5] border border-sage/20 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            
            {/* Visual gradient to highlight the change */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sage/[0.01] via-transparent to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              {!isShowingRestructured ? (
                // Hidden initial view of restructurer
                <motion.div
                  key="locked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <div className="p-3 bg-sage/10 text-sage rounded-full">
                    <Eye className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-medium text-espresso">Visualizar Reestruturação TCC</h4>
                    <p className="font-sans text-xs text-espresso/60 font-light max-w-xs">
                      Clique no botão para ver como reconstruímos este contorno com novos limites.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsShowingRestructured(true)}
                    className="font-mono text-[10px] tracking-widest uppercase font-semibold text-sage hover:text-terracota border-b border-sage/40 pb-0.5"
                  >
                    Ativar Ferramenta
                  </button>
                </motion.div>
              ) : (
                // Active restructured view
                <motion.div
                  key="unlocked"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <span className="inline-block bg-sage/15 text-sage text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full font-bold">
                      Foco Restruturado
                    </span>
                    
                    <h3 className="font-serif text-lg font-medium text-sage">
                      "{activeItem.healthierThought}"
                    </h3>

                    <div className="p-4 bg-sage/[0.04] border border-sage/10 rounded-xl space-y-1.5">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-sage flex items-center">
                        <Zap className="w-3 h-3 mr-1" /> Estratégia de Sessão • {activeItem.strategyName}
                      </span>
                      <p className="font-sans text-xs text-espresso/75 leading-relaxed font-light">
                        {activeItem.strategyDetail}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-beige-gray/50 flex items-center justify-between">
                    <button
                      onClick={() => setIsShowingRestructured(false)}
                      className="font-mono text-[9px] tracking-wider uppercase text-espresso/40 hover:text-terracota transition-colors flex items-center space-x-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Voltar padrão antigo</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}
