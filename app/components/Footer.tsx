import Link from "next/link";
import { contact } from "@/lib/data/contact";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Pedir presupuesto", href: "/presupuesto" },
];

export function Footer() {
  return (
    <footer className="bg-sf-primary text-white/75 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1 text-2xl font-extrabold mb-4">
              <span className="text-white">SF</span>
              <span className="text-red-400">Aberturas</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Instalación de aberturas de aluminio y vidrio en Paraguay.
              Calidad y confianza para tu hogar o empresa.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook-f", "whatsapp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-sf-accent flex items-center justify-center transition-colors"
                  aria-label={s}
                >
                  <i className={`fab fa-${s}`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 pb-3 border-b-2 border-sf-accent inline-block">
              Contacto
            </h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-sf-accent mt-1" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-sf-accent mt-1" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-sf-accent mt-1" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 pb-3 border-b-2 border-sf-accent inline-block">
              Navegación
            </h5>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-sf-accent hover:pl-1 transition-all"
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 pb-3 border-b-2 border-sf-accent inline-block">
              Horarios de atención
            </h5>
            <ul className="space-y-3 text-sm mb-6">
              {contact.hours.map((h) => (
                <li key={h.days} className="flex items-start gap-3">
                  <i className="fas fa-clock text-sf-accent mt-1" />
                  <span>
                    {h.days}: {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/presupuesto"
              className="block text-center bg-sf-accent hover:bg-sf-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          © 2025 SF Aberturas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
