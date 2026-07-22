import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUp, Bath, Car, Heart, MessageCircle, MapPin, Clock,
  PawPrint, Quote, Scissors, ShieldCheck, Sparkles, Star, Instagram, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

// ─── Constants ──────────────────────────────────────────────────
const WHATSAPP_URL = "https://wa.me/5521979302170?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20banho%20e%20tosa%20para%20meu%20pet!";
const HERO_IMAGE = "/images/hero/dog-hero-pexels2.jpg";

const services = [
  { title: "Banho Completo", desc: "Banho com produtos hipoalergênicos, secção e escovação. Seu pet sai limpinho e cheiroso.", highlight: "A partir de R$ 59" },
  { title: "Tosa Higiênica", desc: "Tosa personalizada conforme a raça e o estilo do seu pet. Paciência e carinho em cada tesourada.", highlight: "A partir de R$ 79" },
  { title: "Hidratação Capilar", desc: "Tratamento hidratante profundo para pelos ressecados. Maciez e brilho que duram dias.", highlight: "A partir de R$ 49" },
  { title: "Banho Terapêutico", desc: "Produtos medicinais indicados para peles sensíveis ou alérgicas. Cuidado especial com a saúde.", highlight: "A partir de R$ 89" },
  { title: "SPA Pet", desc: "Pacote completo: banho, tosa, hidratação, aromaterapia e muito mimo. O dia de spa do seu pet!", highlight: "A partir de R$ 149" },
  { title: "Pacote Fidelidade", desc: "5 sessões de banho ou tosa com 15% de desconto. Seu pet sempre limpo e você economiza.", highlight: "Economia de até 15%" },
  { title: "UberPet", desc: "Buscamos e levamos seu pet com todo conforto e segurança. Transporte exclusivo com hora marcada.", highlight: "Consulte valores" },
];

const iconMap = [Bath, Scissors, Sparkles, ShieldCheck, Heart, PawPrint, Car] as const;

// ─── Real gallery images from Google Drive ──────────────────────
const galleryImages = [
  { url: "/images/banho_tosa/3924455596934638504_3924455532429443327.webp", pet: "Toddy", service: "Banho & Tosa" },
  { url: "/images/banho_tosa/3924456336449198575_3924456238632809790.webp", pet: "Luna", service: "Banho Premium" },
  { url: "/images/banho_tosa/3924456723809895286_3924456654070197647.webp", pet: "Bob", service: "Tosa Higiênica" },
  { url: "/images/banho_tosa/3924457258499783633_3924457168543431874.webp", pet: "Mel", service: "Banho & Tosa" },
  { url: "/images/banho_tosa/3924458195012389415_3924458107539030109.webp", pet: "Thor", service: "Hidratação" },
  { url: "/images/banho_tosa/3924462841252643268_3924462779884727124.webp", pet: "Nina", service: "Banho Terapêutico" },
  { url: "/images/banho_tosa/3924576650243208625_3924576534180301694.webp", pet: "Pipoca", service: "Beleza & Estilo" },
  { url: "/images/banho_tosa/3924577552286963761_3924577410831798653.webp", pet: "Fred", service: "Banho Premium" },
  { url: "/images/banho_tosa/3924578401163791126_3924578337622055691.webp", pet: "Belinha", service: "Tosa Completa" },
  { url: "/images/banho_tosa/3924579846705458825_3924579794110681192.webp", pet: "Rex", service: "Banho & Tosa" },
  { url: "/images/banho_tosa/3924580167158717812_3924580109321023408.webp", pet: "Pirata", service: "SPA Pet" },
  { url: "/images/banho_tosa/3941361790375841277.webp", pet: "Amora", service: "Banho Premium" },
  { url: "/images/banho_tosa/3942796707758673218_3942796626189697645.webp", pet: "Tufão", service: "Tosa Higiênica" },
  { url: "/images/banho_tosa/3946086034660763122_3946085933388340049.webp", pet: "Brisa", service: "Beleza & Estilo" },
];

const testimonials = [
  { name: "Ana Clara", petName: "Toddy", text: "O Toddy sai de lá parecendo outro cachorro! O cuidado que eles têm com cada detalhe é incrível. Super recomendo!", rating: 5 },
  { name: "Ricardo Mendes", petName: "Luna", text: "A Luna é super estressada, mas a equipe da Chique Pra Cachorro tem uma paciência de ouro. Ela sai calma e linda!", rating: 5 },
  { name: "Juliana Costa", petName: "Bob", text: "O pacote de fidelidade valeu super a pena. O Bob vai toda semana e está sempre maravilhoso. Profissionais nota 10!", rating: 5 },
];

// ─── Navbar ─────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#top" className="flex items-center gap-2 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30 md:h-10 md:w-10">
            <PawPrint className="h-5 w-5" />
          </div>
          <span className={`text-base font-bold tracking-tight drop-shadow-sm md:text-xl ${scrolled ? "" : "text-white"}`}>
            Chique <span className="text-amber-400">Pra Cachorro</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: "Serviços", id: "services" },
            { label: "Galeria", id: "gallery" },
            { label: "Depoimentos", id: "testimonials" },
            { label: "Localização", id: "location" },
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`}
              className={`text-sm font-medium transition-colors no-underline ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
            >{item.label}</a>
          ))}
          <Button size="sm" className="rounded-full shadow-sm" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
            Agendar Agora <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground shadow-sm md:hidden"
          aria-label="Agendar pelo WhatsApp">
          <MessageCircle className="h-3.5 w-3.5" /> Agendar
        </a>
      </div>
    </motion.header>
  );
}

// ─── Hero Section ───────────────────────────────────────────────
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center justify-center overflow-hidden sm:min-h-screen">
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 overflow-hidden">
        <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover blur-2xl scale-110 opacity-60" />
      </motion.div>
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Pet feliz após o banho" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      <motion.div style={{ opacity: overlayOpacity }} className="relative z-10 mx-auto max-w-4xl px-6 pt-16 text-center md:pt-0">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm md:h-16 md:w-16">
            <PawPrint className="h-7 w-7 text-white md:h-8 md:w-8" />
          </motion.div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
            Chique <span className="text-amber-400">Pra Cachorro</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base md:mt-5 md:text-lg">
            Seu pet merece um banho de carinho
          </p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="mt-8">
            <Button size="lg" className="h-12 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 md:h-14 md:text-lg"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}>Agendar Agora</Button>
          </motion.div>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 md:mt-10">
            <span className="h-px w-8 bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="h-px w-8 bg-white/30" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-white/50">Role</span>
          <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/30 p-1">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Services Section ───────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary md:px-4 md:py-1.5 md:text-xs">
            Nossos Serviços
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Cuidamos do seu pet com excelência
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base">
            Do banho relaxante à tosa mais estilosa, cada serviço é pensado para o bem-estar e a beleza do seu cachorro.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14 md:gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[index] ?? PawPrint;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:h-12 md:w-12">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-base font-semibold md:text-lg">{service.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:mt-2 md:text-sm">{service.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary md:mt-4 md:text-sm">{service.highlight}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery Section ────────────────────────────────────────────
function GallerySection() {
  return (
    <section id="gallery" className="relative py-16 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary md:px-4 md:py-1.5 md:text-xs">
            Galeria
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Nossos clientes mais <span className="text-primary">chiques</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base">
            Cada pet que passa por aqui sai de cara lavada — e a gente registra esse momento especial.
          </p>
        </motion.div>
        <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3 md:mt-14 md:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative mb-3 overflow-hidden rounded-2xl break-inside-avoid md:mb-4">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={img.url} alt={`${img.pet} — ${img.service}`} loading="lazy"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-3 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:p-5">
                <p className="text-base font-semibold text-white md:text-lg">{img.pet}</p>
                <p className="text-xs text-white/80 md:text-sm">{img.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ───────────────────────────────────────
function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary md:px-4 md:py-1.5 md:text-xs">
            Depoimentos
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">O que nossos clientes dizem</h2>
        </motion.div>
        <div className="mt-10 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-border/50 bg-card p-5 shadow-sm md:p-6">
              <Quote className="absolute right-5 top-5 h-6 w-6 text-primary/10 md:right-6 md:top-6 md:h-8 md:w-8" />
              <div className="mb-3 flex gap-0.5 md:mb-4 md:gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary md:h-4 md:w-4" />
                ))}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-3 border-t border-border/30 pt-3 md:mt-4 md:pt-4">
                <p className="text-xs font-semibold md:text-sm">{t.name}</p>
                {t.petName && <p className="text-[10px] text-muted-foreground md:text-xs">Tutora do {t.petName}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Location Section ───────────────────────────────────────────
function LocationSection() {
  return (
    <section id="location" className="relative py-16 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary md:px-4 md:py-1.5 md:text-xs">
              Onde Estamos
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Venha nos visitar</h2>
            <p className="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base">
              Estamos em um local de fácil acesso, com ambiente aconchegante para você e seu pet.
            </p>
            <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
              {[
                { icon: MapPin, label: "Endereço", value: "São Gonçalo — RJ" },
                { icon: Clock, label: "Horários", value: "Seg—Sext: 08:00 — 19:00\nSáb: 08:00 — 16:00" },
                { icon: MessageCircle, label: "Contato", value: "(21) 97930-2170", isLink: true },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:h-10 md:w-10">
                    <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium md:text-base">{item.label}</p>
                    {item.isLink ? (
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                        className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary md:text-sm">
                        {item.value} <MessageCircle className="h-3 w-3 text-[#25D366]" />
                      </a>
                    ) : (
                      item.value.split("\n").map((line, i) => (
                        <p key={i} className="mt-0.5 text-xs text-muted-foreground md:text-sm">{line}</p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-6 h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 sm:w-auto md:mt-8 md:h-12 md:text-base"
              onClick={() => window.open("https://www.google.com/maps/search/Chique+pra+cachorro+S%C3%A3o+Gon%C3%A7alo+RJ", "_blank")}>
              <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Ver no Google Maps
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
            <iframe title="Localização CHIQUE Pra Cachorro" loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5208987269496!2d-43.0044!3d-22.7419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99811e0a3b1b7f%3A0x7c98c3c3c3c3c3c3!2sS%C3%A3o%20Gon%C3%A7alo!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%" height="100%" style={{ minHeight: "280px" }} allowFullScreen
              referrerPolicy="no-referrer-when-downgrade" className="aspect-[4/3] w-full rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer Section ─────────────────────────────────────────────
function FooterSection() {
  return (
    <footer className="border-t border-border/50 bg-background py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground md:h-8 md:w-8">
              <PawPrint className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </div>
            <span className="text-xs font-semibold md:text-sm">Chique <span className="text-primary">Pra Cachorro</span></span>
          </div>
          <p className="text-center text-[10px] text-muted-foreground md:text-left md:text-xs">
            &copy; {new Date().getFullYear()} Chique Pra Cachorro. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://www.instagram.com/paulamonteirobanhoetosa/" target="_blank" rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary md:h-9 md:w-9" aria-label="Instagram">
              <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary md:h-9 md:w-9" aria-label="WhatsApp">
              <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ───────────────────────────────────
function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40 md:bottom-6 md:right-6 md:h-14 md:w-14"
      aria-label="Agendar pelo WhatsApp">
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center md:h-4 md:w-4">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white md:h-3 md:w-3" />
      </span>
    </motion.a>
  );
}

// ─── Main Landing ───────────────────────────────────────────────
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
        aria-label="Voltar ao topo">
        <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
      </motion.button>
    </div>
  );
}
