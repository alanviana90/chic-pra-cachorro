import { Instagram, MapPin, MessageCircle, PawPrint, Star } from "lucide-react";
import { ADDRESS, WHATSAPP_URL, GOOGLE_REVIEW_URL } from "./constants";

export function FooterSection() {
  return (
    <footer className="border-t border-border/50 bg-background py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo & Endereço */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground md:h-8 md:w-8">
                <PawPrint className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </div>
              <span className="text-xs font-semibold md:text-sm">
                Chique <span className="text-primary">Pra Cachorro</span>
              </span>
            </div>
            <div className="mt-1 flex items-start gap-1.5 text-center text-[10px] text-muted-foreground md:text-left md:text-xs">
              <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
              <span className="leading-relaxed">
                Rua Tibiriça, 100 — Quadra 163, Lote 12, Loja 02<br />
                Marambaia, São Gonçalo — RJ — CEP 24.724-310
              </span>
            </div>
          </div>

          <p className="text-center text-[10px] text-muted-foreground md:text-left md:text-xs">
            &copy; {new Date().getFullYear()} Chique Pra Cachorro. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-yellow-600 transition-colors hover:border-yellow-400/30 hover:text-yellow-500 md:h-9 md:w-9"
              aria-label="Avaliar no Google"
              title="Avaliar no Google"
            >
              <Star className="h-3.5 w-3.5 fill-yellow-500 md:h-4 md:w-4" />
            </a>
            <a
              href="https://www.instagram.com/paulamonteirobanhoetosa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary md:h-9 md:w-9"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary md:h-9 md:w-9"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
