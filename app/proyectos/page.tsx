import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard";

export const metadata = {
  title: "Proyectos | SF Aberturas",
  description:
    "Trabajos finalizados de SF Aberturas: viviendas, oficinas y comercios en Encarnación y alrededores. Galería de proyectos en aluminio y vidrio.",
};

export default function ProyectosPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Proyectos
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            Galería de trabajos finalizados. Cada proyecto incluye imagen
            principal, descripción y ubicación. Tocá para ver el detalle.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx === 0} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
