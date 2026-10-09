import { contact } from "@/lib/data/contact";
import MapWrapper from "./MapWrapper";

export const metadata = {
  title: "Pedir presupuesto | SF Aberturas",
  description:
    "Contactá a SF Aberturas en Encarnación. Email, WhatsApp, teléfono, mapa, horarios y zonas de cobertura.",
};

const contactItems = [
  { icon: "phone", label: "Teléfono / WhatsApp", value: contact.phone },
  { icon: "envelope", label: "Correo", value: contact.email },
  { icon: "map-marker-alt", label: "Ubicación", value: contact.address },
];

export default function PresupuestoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sf-primary mb-4">
            Pedir <span className="text-sf-accent">presupuesto</span>
          </h1>
          <div className="w-16 h-1 bg-sf-accent mx-auto rounded-full mb-6" />
          <p className="text-sf-text-muted max-w-2xl mx-auto text-lg">
            Contactate con nosotros y te asesoramos sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-sf-card border border-sf-border rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-sf-accent rounded-xl flex items-center justify-center text-white">
                  <i className={`fas fa-${item.icon}`} />
                </div>
                <div>
                  <p className="text-sm text-sf-text-muted">{item.label}</p>
                  <p className="font-semibold text-sf-primary">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-sf-card border border-sf-border rounded-2xl p-6">
              <h3 className="font-bold text-sf-primary mb-4">
                Horarios de atención
              </h3>
              <ul className="space-y-2 text-sm text-sf-text-muted">
                {contact.hours.map((h) => (
                  <li key={h.days} className="flex items-start gap-3">
                    <i className="fas fa-clock text-sf-accent mt-1" />
                    <span>
                      {h.days}: {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sf-card border border-sf-border rounded-2xl p-6">
              <h3 className="font-bold text-sf-primary mb-4">
                Zonas que cubrimos
              </h3>
              <div className="flex flex-wrap gap-2">
                {contact.coverage.map((zone) => (
                  <span
                    key={zone}
                    className="rounded-full border border-sf-border bg-sf-bg px-3 py-1 text-xs font-medium text-sf-text"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
            <MapWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
