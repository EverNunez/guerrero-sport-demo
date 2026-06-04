import Logo from "@/components/ui/Logo";
import { Icon } from "@/components/icons";
import { CONTACTO, NAV_LINKS, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-carbon-950">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Indumentaria deportiva personalizada para clubes, equipos y
              empresas. Diseñamos y confeccionamos con identidad propia en
              Presidente Franco.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONTACTO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-white/25 hover:text-white"
                aria-label="Instagram"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-spartan/40 hover:text-spartan-400"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegacion */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-center gap-2.5">
                <Icon name="pin" className="h-4 w-4 text-spartan-400" />
                {CONTACTO.direccion}
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="whatsapp" className="h-4 w-4 text-spartan-400" />
                {CONTACTO.telefonoVisible}
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="instagram" className="h-4 w-4 text-spartan-400" />
                {CONTACTO.instagram}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Guerrero Sport. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-white/30">
            Demo visual diseñado por{" "}
            <span className="font-semibold text-white/55">Ever Núñez</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
