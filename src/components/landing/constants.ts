// ─── WhatsApp Config ────────────────────────────────────────────
export const WHATSAPP_NUMBER = "5521979302170";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um banho e tosa para meu pet!";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ─── Address ────────────────────────────────────────────────────
export const ADDRESS = {
  full: "Rua Tibiriça, 100 — Quadra 163, Lote 12, Loja 02 — Marambaia, São Gonçalo — RJ — CEP 24.724-310",
  cep: "24.724-310",
  cepSearch: "24724310+Marambaia+S%C3%A3o+Gon%C3%A7alo+RJ",
};
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/KKDskTBaiBLFp3EP9";
export const GOOGLE_MAPS_SEARCH_URL = "https://www.google.com/maps/search/Rua+Tibiri%C3%A7a+100+Quadra+163+Lote+12+Loja+02+Marambaia+S%C3%A3o+Gon%C3%A7alo+RJ+CEP+24724310/";
export const GOOGLE_MAPS_CEP_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS.cepSearch}`;

// ─── Gallery Images (fotos reais dos pets) ───────────────────────
export interface GalleryImage {
  id: number;
  url: string;
  pet: string;
  service: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, url: "/images/banho_tosa/3924455596934638504_3924455532429443327.webp", pet: "Toddy", service: "Banho & Tosa" },
  { id: 2, url: "/images/banho_tosa/3924456336449198575_3924456238632809790.webp", pet: "Luna", service: "Banho Premium" },
  { id: 3, url: "/images/banho_tosa/3924456723809895286_3924456654070197647.webp", pet: "Bob", service: "Tosa Higiênica" },
  { id: 4, url: "/images/banho_tosa/3924457258499783633_3924457168543431874.webp", pet: "Mel", service: "Banho & Tosa" },
  { id: 5, url: "/images/banho_tosa/3924458195012389415_3924458107539030109.webp", pet: "Thor", service: "Hidratação" },
  { id: 6, url: "/images/banho_tosa/3924462841252643268_3924462779884727124.webp", pet: "Nina", service: "Banho Terapêutico" },
  { id: 7, url: "/images/banho_tosa/3924576650243208625_3924576534180301694.webp", pet: "Pipoca", service: "Beleza & Estilo" },
  { id: 8, url: "/images/banho_tosa/3924577552286963761_3924577410831798653.webp", pet: "Fred", service: "Banho Premium" },
  { id: 9, url: "/images/banho_tosa/3924578401163791126_3924578337622055691.webp", pet: "Belinha", service: "Tosa Completa" },
  { id: 10, url: "/images/banho_tosa/3924579846705458825_3924579794110681192.webp", pet: "Rex", service: "Banho & Tosa" },
  { id: 11, url: "/images/banho_tosa/3924580167158717812_3924580109321023408.webp", pet: "Pirata", service: "SPA Pet" },
  { id: 12, url: "/images/banho_tosa/3941361790375841277.webp", pet: "Amora", service: "Banho Premium" },
  { id: 13, url: "/images/banho_tosa/3942796707758673218_3942796626189697645.webp", pet: "Tufão", service: "Tosa Higiênica" },
  { id: 14, url: "/images/banho_tosa/3946086034660763122_3946085933388340049.webp", pet: "Brisa", service: "Beleza & Estilo" },
];

// ─── Services ───────────────────────────────────────────────────
export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
}

export const services: Omit<Service, "icon">[] = [
  {
    title: "Banho Completo",
    description:
      "Banho com produtos hipoalergênicos, secção e escovação. Seu pet sai limpinho e cheiroso.",
    highlight: "A partir de R$ 59",
  },
  {
    title: "Tosa Higiênica",
    description:
      "Tosa personalizada conforme a raça e o estilo do seu pet. Paciência e carinho em cada tesourada.",
    highlight: "A partir de R$ 79",
  },
  {
    title: "Hidratação Capilar",
    description:
      "Tratamento hidratante profundo para pelos ressecados. Maciez e brilho que duram dias.",
    highlight: "A partir de R$ 49",
  },
  {
    title: "Banho Terapêutico",
    description:
      "Produtos medicinais indicados para peles sensíveis ou alérgicas. Cuidado especial com a saúde.",
    highlight: "A partir de R$ 89",
  },
  {
    title: "SPA Pet",
    description:
      "Pacote completo: banho, tosa, hidratação, aromaterapia e muito mimo. O dia de spa do seu pet!",
    highlight: "A partir de R$ 149",
  },
  {
    title: "Pacote Fidelidade",
    description:
      "5 sessões de banho ou tosa com 15% de desconto. Seu pet sempre limpo e você economiza.",
    highlight: "Economia de até 15%",
  },
  {
    title: "UberPet",
    description:
      "Buscamos e levamos seu pet com todo conforto e segurança. Transporte exclusivo com hora marcada para sua tranquilidade.",
    highlight: "Consulte valores",
  },
];

// ─── Static Testimonials (fallback) ─────────────────────────────
export interface Testimonial {
  name: string;
  petName?: string;
  text: string;
  rating: number;
}

export const fallbackTestimonials: Testimonial[] = [
  {
    name: "Ana Clara",
    petName: "Toddy",
    text: "O Toddy sai de lá parecendo outro cachorro! O cuidado que eles têm com cada detalhe é incrível. Super recomendo!",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    petName: "Luna",
    text: "A Luna é super estressada, mas a equipe da Chique Pra Cachorro tem uma paciência de ouro. Ela sai calma e linda!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    petName: "Bob",
    text: "O pacote de fidelidade valeu super a pena. O Bob vai toda semana e está sempre maravilhoso. Profissionais nota 10!",
    rating: 5,
  },
];
