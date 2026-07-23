import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADDRESS, GOOGLE_MAPS_URL, GOOGLE_MAPS_SEARCH_URL, GOOGLE_MAPS_CEP_URL, WHATSAPP_URL } from "./constants";

export function LocationSection() {
  return (
    <section id="location" className="relative py-16 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary md:px-4 md:py-1.5 md:text-xs">
              Onde Estamos
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Venha nos visitar
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base">
              Estamos em um local de fácil acesso, com ambiente
              aconchegante para você e seu pet.
            </p>

            <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:h-10 md:w-10">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium md:text-base">Endereço</p>
                  <p className="mt-0.5 whitespace-pre-line text-xs text-muted-foreground md:text-sm">
                    Rua Tibiriça, 100 — Quadra 163, Lote 12, Loja 02
                  </p>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    Marambaia, São Gonçalo — RJ
                  </p>
                  <a
                    href={GOOGLE_MAPS_CEP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary md:text-sm"
                  >
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span className="underline underline-offset-2 decoration-dotted">
                      CEP: {ADDRESS.cep}
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:h-10 md:w-10">
                  <Clock className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium md:text-base">Horários</p>
                  <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">
                    Seg—Sext: 08:00 — 19:00
                  </p>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    Sáb: 08:00 — 16:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:h-10 md:w-10">
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium md:text-base">Contato</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary md:text-sm"
                  >
                    (21) 97930-2170
                    <MessageCircle className="h-3 w-3 text-[#25D366]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <Button
                size="lg"
                className="h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 sm:w-auto md:h-12 md:text-base"
                onClick={() => window.open(GOOGLE_MAPS_URL, "_blank")}
              >
                <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Abrir no Maps
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 w-full rounded-full text-sm font-medium sm:w-auto md:h-12 md:text-base"
                onClick={() => window.open(GOOGLE_MAPS_SEARCH_URL, "_blank")}
              >
                <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Rota para o endereço
              </Button>
            </div>
          </motion.div>

          {/* Right - Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm"
          >
            <iframe
              title="Localização CHIQUE Pra Cachorro"
              src="https://www.google.com/maps/embed?q=Rua+Tibiri%C3%A7a+100+Quadra+163+Lote+12+Loja+02+Marambaia+S%C3%A3o+Gon%C3%A7alo+RJ+CEP+24724310&center=-22.798699,-42.9550819&zoom=16&maptype=roadmap"
              width="100%"
              height="100%"
              style={{ minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
