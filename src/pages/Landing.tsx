import { motion } from "framer-motion";
import { PawPrint, Bath, Scissors, Sparkles, ShieldCheck, Heart, Car, Quote, Star, MessageCircle, MapPin, Clock, Instagram, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5521979302170?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20banho%20e%20tosa%20para%20meu%20pet!";
const HERO_IMAGE = "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&q=80";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80", pet: "Toddy", service: "Banho & Tosa" },
  { url: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=400&q=80", pet: "Luna", service: "Banho Premium" },
  { url: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80", pet: "Bob", service: "Tosa Higiênica" },
  { url: "https://images.unsplash.com/photo-1517423738875-4f2c9e7c2f2b?w=400&q=80", pet: "Mel", service: "Banho & Tosa" },
  { url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", pet: "Thor", service: "Hidratação" },
  { url: "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=400&q=80", pet: "Nina", service: "Banho Terapêutico" },
  { url: "https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&q=80", pet: "Pipoca", service: "Beleza & Estilo" },
  { url: "https://images.unsplash.com/photo-1598136494009-ea1775e1e3b0?w=400&q=80", pet: "Fred", service: "Banho Premium" },
  { url: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&q=80", pet: "Belinha", service: "Tosa Completa" },
  { url: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=400&q=80", pet: "Rex", service: "Banho & Tosa" },
  { url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80", pet: "Pirata", service: "SPA Pet" },
  { url: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&q=80", pet: "Amora", service: "Banho Premium" },
];

const services = [
  { icon: Bath, title: "Banho Completo", desc: "Banho com produtos hipoalergênicos, secção e escovação.", price: "A partir de R$ 59" },
  { icon: Scissors, title: "Tosa Higiênica", desc: "Tosa personalizada conforme a raça e o estilo do seu pet.", price: "A partir de R$ 79" },
  { icon: Sparkles, title: "Hidratação Capilar", desc: "Tratamento hidratante profundo para pelos ressecados.", price: "A partir de R$ 49" },
  { icon: ShieldCheck, title: "Banho Terapêutico", desc: "Produtos medicinais para peles sensíveis ou alérgicas.", price: "A partir de R$ 89" },
  { icon: Heart, title: "SPA Pet", desc: "Pacote completo de banho, tosa, hidratação e aromaterapia!", price: "A partir de R$ 149" },
  { icon: Car, title: "UberPet", desc: "Buscamos e levamos seu pet com conforto e segurança.", price: "Consulte valores" },
];

const testimonials = [
  { name: "Ana Clara", pet: "Toddy", text: "O Toddy sai de lá parecendo outro cachorro! Super recomendo!" },
  { name: "Ricardo Mendes", pet: "Luna", text: "A Luna é super estressada, mas a equipe tem uma paciência de ouro." },
  { name: "Juliana Costa", pet: "Bob", text: "O pacote de fidelidade valeu super a pena. Profissionais nota 10!" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm" : "bg-gradient-to-b from-black/40 to-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#top" className="flex items-center gap-2 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground md:h-10 md:w-10">
            <PawPrint className="h-5 w-5" />
          </div>
          <span className={`text-base font-bold drop-shadow-sm md:text-xl ${scrolled ? "" : "text-white"}`}>
            Chique <span className="text-amber-400">Pra Cachorro</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Serviços", "Galeria", "Depoimentos", "Localização"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className={`text-sm font-medium no-underline transition-colors ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"}`}>{item}</a>
          ))}
          <Button size="sm" className="rounded-full" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
            Agendar Agora <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-white shadow-sm md:hidden">
          <MessageCircle className="h-3.5 w-3.5" /> Agendar
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden sm:min-h-screen">
      <img src={HERO_IMAGE} alt="Pet feliz após o banho" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 text-center md:pt-0">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm md:h-16 md:w-16">
          <PawPrint className="h-7 w-7 text-white" />
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
          Chique <span className="text-amber-400">Pra Cachorro</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/80 sm:text-base md:mt-5 md:text-lg">Seu pet merece um banho de carinho</p>
        <div className="mt-8">
          <Button size="lg" className="h-12 rounded-full bg-primary px-8 text-base font-medium shadow-lg hover:bg-primary/90 md:h-14 md:text-lg"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}>Agendar Agora</Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Nossos Serviços</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Cuidamos do seu pet com excelência</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow md:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white md:h-12 md:w-12">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold md:text-lg">{s.title}</h3>
              <p className="mt-1.5 text-xs text-gray-500 md:text-sm">{s.desc}</p>
              <p className="mt-3 text-xs font-medium text-primary md:text-sm">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="galeria" className="py-16 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Galeria</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Pets que já passaram por aqui</h2>
        </div>
        <div className="columns-2 gap-3 md:columns-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="group mb-3 overflow-hidden rounded-xl md:mb-4 break-inside-avoid">
              <div className="relative overflow-hidden rounded-xl">
                <img src={img.url} alt={`${img.pet} - ${img.service}`} loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium text-white">{img.pet}</p>
                  <p className="text-xs text-white/70">{img.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Depoimentos</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">O que nossos clientes dizem</h2>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (<Star key={j} className={`h-4 w-4 ${j < 5 ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} />))}
              </div>
              <p className="text-sm text-gray-600">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">Tutora do {t.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="localizacao" className="py-16 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Onde Estamos</span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Venha nos visitar</h2>
            <p className="mt-3 text-sm text-gray-500 md:text-base">Estamos em São Gonçalo — RJ, em um local de fácil acesso.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div><p className="text-sm font-medium">Endereço</p><p className="text-xs text-gray-500">São Gonçalo — RJ</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div><p className="text-sm font-medium">Horários</p><p className="text-xs text-gray-500">Seg—Sext: 08:00 — 19:00</p><p className="text-xs text-gray-500">Sáb: 08:00 — 16:00</p></div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                <div><p className="text-sm font-medium">Contato</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-primary">(21) 97930-2170</a></div>
              </div>
            </div>
            <Button className="mt-6 rounded-full" onClick={() => window.open("https://www.google.com/maps/search/Chique+pra+cachorro+Sao+Goncalo+RJ", "_blank")}>
              <MapPin className="mr-2 h-4 w-4" /> Ver no Google Maps
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 h-[350px] bg-gray-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235198.641845287!2d-43.12826799374999!3d-22.82282565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9986b672242c1d%3A0x7baf14d8869c9ed!2sS%C3%A3o+Gon%C3%A7alo%2C+RJ!5e0!3m2!1spt-BR!2sbr!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de São Gonçalo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <PawPrint className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">Chique <span className="text-primary">Pra Cachorro</span></span>
        </div>
        <p className="text-xs text-gray-500">&copy; 2024 Chique Pra Cachorro. Todos os direitos reservados.</p>
        <div className="flex gap-2">
          <a href="https://www.instagram.com/paulamonteirobanhoetosa/" target="_blank" rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-primary hover:border-primary/30 transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-primary hover:border-primary/30 transition-colors">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a
      href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 md:bottom-6 md:right-6 md:h-14 md:w-14"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center md:h-4 md:w-4">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white md:h-3 md:w-3" />
      </span>
    </motion.a>
  );
}

export default function Landing() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="top">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <FooterSection />
      <WhatsAppButton />
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={showBackToTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 left-5 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 text-foreground/60 backdrop-blur-sm transition-colors hover:bg-foreground/20 hover:text-foreground md:bottom-6 md:left-6 md:h-10 md:w-10"
        aria-label="Voltar ao topo"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </motion.button>
    </div>
  );
}
