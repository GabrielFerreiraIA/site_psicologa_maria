import { HeadlineOption, PainPoint, ApproachStep, ServiceCard, Testimonial } from "./types";

export const HEADLINE_OPTIONS: HeadlineOption[] = [
  {
    id: "mulheres-sobrecarregadas",
    label: "Mulheres exaustas",
    tagline: "Psicóloga Clínica TCC • CRP 06/151465",
    headline: "Para mulheres que cansaram de sustentar o mundo",
    coloredWord: "sozinhas.",
    subheadline: "Um acompanhamento clínico acolhedor e estratégico para ansiedade, exaustão emocional e reorganização de relacionamentos.",
    demographic: "Mulheres sobrecarregadas ou que priorizam os outros acima de si mesmas."
  },
  {
    id: "funcionando-limite",
    label: "Ansiedade crônica",
    tagline: "Psicóloga Clínica TCC • CRP 06/151465",
    headline: "Um espaço seguro para quem aprendeu a funcionar no",
    coloredWord: "limite.",
    subheadline: "Encontre um ponto de respiro e aprenda a desatar os nós da ansiedade, recuperando o sono e a presença no seu dia a dia.",
    demographic: "Profissionais, mães ou adultos que vivem sob alta demanda psicológica."
  },
  {
    id: "sobrecarga-clareza",
    label: "Autoestima & Limites",
    tagline: "Psicóloga Clínica TCC • CRP 06/151465",
    headline: "Transformando sobrecarga emocional em clareza, limites e",
    coloredWord: "presença.",
    subheadline: "Aprenda a dizer os nãos necessários para restabelecer a harmonia com suas próprias vontades e fortalecer sua identidade.",
    demographic: "Mulheres e adultos que têm dificuldade em colocar limites saudáveis."
  },
  {
    id: "ser-forte",
    label: "Respiro imediato",
    tagline: "Psicóloga Clínica TCC • CRP 06/151465",
    headline: "Você não precisa ser forte o tempo inteiro. O respiro começa",
    coloredWord: "aqui.",
    subheadline: "Uma psicoterapia estruturada que oferece alívio real e duradouro, sem julgamento, respeitando o seu tempo de cura.",
    demographic: "Se você se cobra perfeição e sente o peso invisível de dar conta de tudo."
  },
  {
    id: "cuidar-de-si",
    label: "Autoconhecimento",
    tagline: "Psicóloga Clínica TCC • CRP 06/151465",
    headline: "Psicoterapia para quem cuida de tudo, menos de si",
    coloredWord: "mesma.",
    subheadline: "Reconquiste a sua autonomia emocional. Um plano integrado de autocuidado clínico para resgatar sua essência única.",
    demographic: "Mulheres que sustentam a engrenagem familiar e profissional esquecendo-se da terapia."
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "mente-acelerada",
    title: "Mente que não desliga",
    subtitle: "Pensamentos acelerados",
    description: "Pensamentos constantes, preocupações infindáveis sobre o amanhã e a sensação persistente de que nada do que você faz é suficiente para dar conta de tudo."
  },
  {
    id: "dificuldade-nao",
    title: "Dificuldade de dizer não",
    subtitle: "O peso invisível do sim",
    description: "O medo constante de desagradar ou falhar faz você carregar responsabilidades que não são suas, anulando suas próprias necessidades para manter a paz dos outros."
  },
  {
    id: "caos-silencioso",
    title: "Caos silencioso",
    subtitle: "Por fora, uma rocha",
    description: "Externamente, você resolve tudo e passa uma força inabalável. Internamente, lida com cobranças asfixiantes, cansaço acumulado e a sensação de que está prestes a quebrar."
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    id: "acolhimento",
    title: "Acolhimento",
    badge: "01",
    iconName: "heart",
    details: "Um espaço seguro, ético e empático para você ser ouvida em suas dores reais, sem fórmulas prontas ou julgamentos morais."
  },
  {
    id: "consciencia",
    title: "Consciência",
    badge: "02",
    iconName: "brain",
    details: "Compreensão aprofundada dos seus gatilhos emocionais, pensamentos automáticos e dos padrões invisíveis que te mantêm presa à sobrecarga."
  },
  {
    id: "posicionamento",
    title: "Posicionamento",
    badge: "03",
    iconName: "user-check",
    details: "Desenvolvimento de novos comportamentos na prática: assertividade para impor limites, resgatar seu espaço e redefinir relacionamentos saudáveis."
  },
  {
    id: "leveza",
    title: "Leveza",
    badge: "04",
    iconName: "sun",
    details: "Equilíbrio emocional maduro, clareza sobre o que é verdadeiramente seu, e autonomia mental para caminhar de forma conectada aos seus valores."
  }
];

export const SERVICES: ServiceCard[] = [
  {
    id: "mulheres",
    title: "Psicoterapia para Mulheres",
    subtitle: "Resgate de limites e exaustão",
    tag: "Foco Principal",
    description: "Para quem busca se reconectar consigo mesma, superar a sobrecarga exaustiva do cotidiano, deitar novos limites produtivos e viver relações com equilíbrio de poder.",
    image: "https://res.cloudinary.com/dxpfoolyp/image/upload/q_auto/f_auto/v1779894101/Foto_Para_Blog_isqvgi.webp",
    whatsappMsg: "Olá, Maria! Gostaria de agendar ou saber mais detalhes sobre a Psicoterapia para Mulheres."
  },
  {
    id: "casais",
    title: "Terapia de Casal",
    subtitle: "Reconstruindo pontes",
    tag: "Relacionamentos",
    description: "Quando o orgulho afasta ou o diálogo parece em crise. Uma intervenção clínica acolhedora focada em restabelecer a comunicação saudável e reacender o amor maduro.",
    image: "/images/couples_therapy.png",
    whatsappMsg: "Olá, Maria! Gostaria de obter informações sobre o funcionamento do atendimento de Terapia de Casal."
  },
  {
    id: "adultos",
    title: "Psicoterapia para Adultos",
    subtitle: "Tratamento estruturado p/ ansiedade",
    tag: "Clínica Geral",
    description: "Para lidar de forma científica e assertiva com crises de ansiedade, sobrecarga profissional (Burnout), transições de carreira desafiadoras e regulação das emoções profundas.",
    image: "/images/clinic_office.png",
    whatsappMsg: "Olá, Maria! Gostaria de receber informações sobre o atendimento clínico para Adultos com queixa de ansiedade ou estresse."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Eu não queria um profissional com um bloco de notas que só ficasse balançando a cabeça. Com a Maria foi totalmente diferente. Ela traz clareza imediata, me ensinou a caminhar moldando minhas vulnerabilidades. Houve transformação concreta na minha rotina.",
    author: "Ana Matos",
    role: "Administradora, 34 anos",
    stars: 5
  },
  {
    id: "t2",
    quote: "Ela tem uma sensibilidade única para ler as entrelinhas. Consegue pinçar detalhes que eu mesma esquecia de narrar e traz uma perspectiva de compreensão teórica que acalma e rítmica nosso autoexame.",
    author: "Ariane",
    role: "Arquiteta, 31 anos",
    stars: 5
  },
  {
    id: "t3",
    quote: "De fato ter feito a terapia de casal foi uma escolha maravilhosa para o nosso casamento. O método prático da TCC nos auxiliou a compreender as discussões cíclicas e hoje nos serve de base estrutural para todos os desafios diários.",
    author: "Lucas e Letícia",
    role: "Pacientes de Terapia de Casal",
    stars: 5
  }
];

export const OFFICE_GALLERY = {
  address: "R. Narciso Sturlini, 62 - Sala 807",
  buildingName: "Chronos Coworking - Osasco/SP",
  googleMapsUrl: "https://maps.google.com/?q=Rua+Narciso+Sturlini,+62+Osasco",
  instagramUrl: "https://instagram.com/psimariasoares",
  phone: "(11) 91222-3346",
  email: "psimariasoaresonline@gmail.com",
  crp: "CRP 06/151465"
};
