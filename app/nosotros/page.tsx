import Image from "next/image";
import { company } from "@/lib/data/company";

export const metadata = {
  title: "Nosotros | SF Aberturas",
  description:
    "Conocé a SF Aberturas: historia, experiencia y valores. Aberturas de aluminio y vidrio en Encarnación, Paraguay.",
};

export default function NosotrosPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sf-primary mb-4">
            Sobre <span className="text-sf-accent">nosotros</span>
          </h1>
          <div className="w-16 h-1 bg-sf-accent mx-auto rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/img/collage-proyectos.png"
              alt="SF Aberturas"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-sf-primary mb-6">
              {company.name}
            </h2>
            <p className="text-sf-text-muted leading-relaxed mb-4">
              {company.shortDescription}
            </p>
            <h3 className="text-xl font-bold text-sf-primary mt-8 mb-4">
              {company.history.title}
            </h3>
            {company.history.paragraphs.map((p, i) => (
              <p key={i} className="text-sf-text-muted leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {company.experience.stats.map((s) => (
            <div
              key={s.label}
              className="bg-sf-card border border-sf-border rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-sf-accent">{s.value}</p>
              <p className="mt-2 text-sm text-sf-text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.values.map((v) => (
            <div
              key={v.title}
              className="bg-sf-card border border-sf-border rounded-2xl p-6"
            >
              <h4 className="font-bold text-sf-primary mb-2">{v.title}</h4>
              <p className="text-sm text-sf-text-muted leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
