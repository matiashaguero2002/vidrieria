import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-sf-primary">
      <Image
        src="/img/collage-proyectos.png"
        alt="Proyectos SF Aberturas"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-950/90 via-blue-900/75 to-slate-900/65" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-transparent to-sf-bg" />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="text-sf-yellow font-semibold tracking-[4px] uppercase text-xs mb-6">
            Aluminio y Vidrios San Francisco
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            Soluciones en{" "}
            <span className="text-sf-yellow">aluminio y vidrio</span> para tu
            espacio
          </h1>

          <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
            Fabricación e instalación de aberturas de aluminio, vidrios
            templados, mamparas, cerramientos y más. Más de dos décadas
            transformando espacios en Encarnación y la región.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/catalogo"
              className="bg-sf-accent hover:bg-sf-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Ver Productos
            </Link>
            <Link
              href="/presupuesto"
              className="border-2 border-white/70 hover:bg-white hover:text-sf-primary text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Contactanos
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/85">
            {[
              "Asesoramiento sin costo",
              "Instalación profesional",
              "Garantía de calidad",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-sf-yellow">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
