import { ProjectCard } from "../components/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata = {
  title: "Proyectos | SF Aberturas",
  description:
    "Trabajos finalizados de SF Aberturas: viviendas, oficinas y comercios en Encarnación y alrededores. Galería de proyectos en aluminio y vidrio.",
};

export default function ProyectosPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sf-primary mb-4">
            Proyectos <span className="text-sf-accent">realizados</span>
          </h1>
          <div className="w-16 h-1 bg-sf-accent mx-auto rounded-full mb-6" />
          <p className="text-sf-text-muted max-w-2xl mx-auto text-lg">
            Algunos de nuestros trabajos finalizados en Encarnación y
            alrededores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} priority={i < 3} />
          ))}
        </div>
      </div>
    </div>
  );
}
