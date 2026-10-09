import Link from "next/link";
import { Hero } from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ServiceCard from "./components/ServiceCard";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const productsToShow =
    featuredProducts.length >= 4 ? featuredProducts : products.slice(0, 4);

  return (
    <>
      <Hero />

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-sf-primary mb-4">
              Productos <span className="text-sf-accent">destacados</span>
            </h2>
            <div className="w-16 h-1 bg-sf-accent mx-auto rounded-full mb-6" />
            <p className="text-sf-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Las categorías más elegidas, fabricadas a medida con materiales
              de primera calidad y terminaciones de excelencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsToShow.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 bg-sf-primary hover:bg-sf-primary-light text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-sf-primary mb-4">
              Nuestros <span className="text-sf-accent">servicios</span>
            </h2>
            <div className="w-16 h-1 bg-sf-accent mx-auto rounded-full mb-6" />
            <p className="text-sf-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Acompañamos tu proyecto de principio a fin, desde la medición
              hasta la instalación y el postventa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="py-24 border-y border-sf-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-sf-primary mb-4">
              Proyectos <span className="text-sf-accent">realizados</span>
            </h2>
            <div className="w-16 h-1 bg-sf-accent mx-auto rounded-full mb-6" />
            <p className="text-sf-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Algunos de nuestros trabajos finalizados en Encarnación y
              alrededores. Pasá el mouse para pausar.
            </p>
          </div>
        </div>

        <ProjectsCarousel projects={projects.slice(0, 8)} />

        <div className="text-center mt-16">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 border-2 border-sf-primary text-sf-primary hover:bg-sf-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </section>
    </>
  );
}
