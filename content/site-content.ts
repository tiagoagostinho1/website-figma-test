export type NavItem = { label: string; href: `#${string}` };

export type ContactField = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "textarea";
  required?: boolean;
  placeholder?: string;
};

export type OrganizationJsonLd = {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: Array<{
    telephone?: string;
    contactType: string;
    areaServed?: string;
    availableLanguage?: string[];
  }>;
};

export type SiteContent = {
  seo: {
    siteName: string;
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
  };
  brand: {
    logo: string;
  };
  nav: NavItem[];
  hero: {
    title: string;
    titleItalic: string;
    description: string;
    ctaLabel: string;
    ctaHref: `#${string}`;
    trustItems: string[];
  };
  logos: {
    title: string;
    items: string[];
  };
  numbers: {
    title: string;
    titleAccent: string;
    description: string;
    items: Array<{ value: string; label: string }>;
  };
  caseStudies: {
    title: string;
    intro: string;
    ctaLabel: string;
    items: Array<{
      tags: string[];
      metric: string;
      title: string;
      subtitle: string;
      variant: "dark" | "light";
      accent: string;
    }>;
  };
  services: {
    title: string;
    items: Array<{
      index: string;
      title: string;
      description: string;
    }>;
  };
  about: {
    kicker: string;
    titleStart: string;
    titleItalic: string;
    titleEnd: string;
    teamImage: string;
    leader: {
      ledBy: string;
      name: string;
      role: string;
      specialty: string;
      photo: string;
    };
  };
  testimonials: {
    title: string;
    intro: string;
    items: Array<{
      quote: string;
      name: string;
      country: string;
      initial: string;
      highlighted?: boolean;
    }>;
  };
  contact: {
    title: string;
    intro: string;
    fields: ContactField[];
    submitLabel: string;
  };
  footer: {
    copyright: string;
  };
};

export const siteContent: SiteContent = {
  seo: {
    siteName: "Kaya Digital",
    title: "Kaya Digital | Marketing Digital de Performance",
    description:
      "Marketing digital de performance para escalar negocios com campanhas pagas, websites otimizados, SEO e analytics.",
    canonical: "https://example.com",
    ogImage: "https://www.figma.com/api/mcp/asset/0d97db04-eb62-4277-a240-242fd59971fb",
  },
  brand: {
    logo: "https://www.figma.com/api/mcp/asset/d01cb48c-6ab9-47fb-aacb-ddacdee031a0",
  },
  nav: [
    { label: "Servicos", href: "#services" },
    { label: "Casos de Estudo", href: "#case-studies" },
    { label: "Sobre Nos", href: "#about" },
    { label: "Contactos", href: "#contact" },
  ],
  hero: {
    title: "Marketing Digital de Performance",
    titleItalic: "feito para escalar negocios",
    description:
      "Ajudamos empresas a aumentar as vendas atraves de campanhas publicitarias no digital. Quando necessario, apoiamos no desenvolvimento e otimizacao de websites, SEO, Web Analytics e qualquer outra area de suporte a performance.",
    ctaLabel: "Pede a tua Auditoria Gratuita",
    ctaHref: "#contact",
    trustItems: ["Desde 2013", "100% Transparencia", "Focados em Resultados"],
  },
  logos: {
    title: "Pequenas e grandes empresas ja confiam em nos",
    items: ["TechFlow", "Meridian", "Zenith", "Luminar", "Praxis", "Orbita", "Vectis"],
  },
  numbers: {
    title: "Numeros que falam",
    titleAccent: "por si mesmos",
    description:
      "Resultados consistentes construidos com transparencia, estrategia e dedicacao ao longo de mais de uma decada.",
    items: [
      { value: "+10", label: "Anos de Experiencia" },
      { value: "+50", label: "Clientes Ativos" },
      { value: "+2M€", label: "Em Budget Gerido" },
      { value: "+300%", label: "ROAS Medio" },
    ],
  },
  caseStudies: {
    title: "Casos Selecionados",
    intro: "Resultados reais de clientes reais. Cada caso e uma historia de crescimento.",
    ctaLabel: "Ver todos os casos",
    items: [
      {
        tags: ["Google Ads", "E-commerce"],
        metric: "+80% ROAS",
        title: "Como Escalamos um E-commerce de Parafarmacia com Google Ads",
        subtitle: "E-commerce de Parafarmacia",
        variant: "dark",
        accent: "#ff9941",
      },
      {
        tags: ["Meta Ads · Google Ads · CRO", "E-commerce"],
        metric: "+1500% Vendas",
        title: "Como Transformamos um E-commerce de Moda de Luxo com uma Estrategia Multi-Canal",
        subtitle: "E-commerce de Moda de Luxo",
        variant: "light",
        accent: "#e8d5c0",
      },
      {
        tags: ["Google Ads", "Saude"],
        metric: "+35% Leads",
        title: "Como Otimizamos a Geracao de Leads para Cuidadores Domiciliarios",
        subtitle: "Cuidadores Domiciliarios",
        variant: "dark",
        accent: "#d4c4b0",
      },
      {
        tags: ["Google Ads · Meta Ads", "Educacao"],
        metric: "+44% Alunos",
        title: "Como Aumentamos as Inscricoes de um Colegio Privado com Google Ads e Facebook Ads",
        subtitle: "Colegio Privado",
        variant: "light",
        accent: "#b8c9a3",
      },
    ],
  },
  services: {
    title: "O que podemos fazer pelo teu negocio",
    items: [
      {
        index: "01",
        title: "Publicidade Digital",
        description:
          "Gestao de campanhas no Google Ads, Meta Ads, TikTok Ads e LinkedIn Ads com foco em performance e retorno do investimento.",
      },
      {
        index: "02",
        title: "Desenvolvimento Web",
        description:
          "Criacao e otimizacao de websites e landing pages focados em conversao, velocidade e experiencia do utilizador.",
      },
      {
        index: "03",
        title: "SEO",
        description:
          "Estrategias de otimizacao para motores de busca que aumentam a visibilidade organica e geram trafego qualificado.",
      },
      {
        index: "04",
        title: "Web Analytics",
        description:
          "Implementacao de tracking avancado e dashboards de dados para tomada de decisoes informadas e mensuraveis.",
      },
    ],
  },
  about: {
    kicker: "Sobre Nos",
    titleStart: "Somos um",
    titleItalic: "coletivo digital",
    titleEnd:
      "baseado em Portugal que une estrategia, performance e criatividade para que cada disciplina do digital trabalhe como uma so.",
    teamImage: "https://www.figma.com/api/mcp/asset/0d97db04-eb62-4277-a240-242fd59971fb",
    leader: {
      ledBy: "Led by",
      name: "Afonso Monteiro",
      role: "Managing Director",
      specialty: "Performance Marketing Expert",
      photo: "https://www.figma.com/api/mcp/asset/388d5dac-8343-4be6-80b0-00bf374ad507",
    },
  },
  testimonials: {
    title: "Palavra dos nossos clientes",
    intro: "A confianca constroi-se com resultados e transparencia.",
    items: [
      {
        quote:
          '"Great experience from start to finish. Clear communication, fast delivery, and very professional throughout the project. The work was completed exactly as requested with a strong attention to detail. Highly recommended!"',
        name: "huzaifa 🇵🇹",
        country: "Portugal",
        initial: "H",
      },
      {
        quote:
          '"Excellent Google Ads audit. Provided clear insights to improve my campaign performance."',
        name: "salesspy 🇬🇧",
        country: "United Kingdom",
        initial: "S",
        highlighted: true,
      },
      {
        quote:
          '"O Afonso foi muito Professional do inicio ao fim, soube entender o que eu de facto queria e ajudar-me a encontrar uma solucao para tal. Tem um metodo de trabalho excepcional, fazendo videos a cada etapa mostrando os diferentes problemas e possiveis solucoes. Recomendo, excelente profissional !"',
        name: "rafaelnferreira 🇫🇷",
        country: "France",
        initial: "R",
      },
    ],
  },
  contact: {
    title: "Pede a tua auditoria gratuita e comeca ja a ganhar clientes online",
    intro: "Preenche o formulario e a nossa equipa entrara em contacto brevemente.",
    fields: [
      { id: "name", label: "Nome", type: "text", required: true, placeholder: "Nome" },
      { id: "email", label: "Email", type: "email", required: true, placeholder: "Email" },
      { id: "phone", label: "Telefone", type: "tel", placeholder: "Telefone" },
      { id: "company", label: "Empresa", type: "text", placeholder: "Empresa" },
      { id: "website", label: "Website", type: "url", placeholder: "Website" },
      {
        id: "message",
        label: "Mensagem (opcional)",
        type: "textarea",
        placeholder: "Mensagem (opcional)",
      },
    ],
    submitLabel: "Pedir Auditoria Gratuita",
  },
  footer: {
    copyright: "© 2026 Kaya Digital Collective. Todos os direitos reservados.",
  },
};
