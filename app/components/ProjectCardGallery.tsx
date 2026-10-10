"use client";

import { useState } from "react";
import type { Project } from "@/lib/data/projects";
import ProjectSlideshow from "./ProjectSlideshow";
import ProjectGalleryModal from "./ProjectGalleryModal";

type ProjectCardGalleryProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCardGallery({
  project,
  priority,
}: ProjectCardGalleryProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.cover];

  // Solo mostramos las primeras 3 imágenes en el slideshow de la tarjeta
  const previewImages = images.slice(0, 3);

  return (
    <>
      <div
        onClick={() => setGalleryOpen(true)}
        className="group relative rounded-2xl overflow-hidden h-[380px] w-full cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Slideshow de fondo */}
        <ProjectSlideshow
          images={previewImages}
          alt={project.name}
          priority={priority}
        />

        {/* Gradiente oscuro */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

        {/* Badge con número de fotos */}
        <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all group-hover:bg-sf-accent group-hover:border-sf-accent">
          <span>📷</span>
          <span>{images.length} fotos</span>
        </div>

        {/* Contenido inferior */}
        <div className="relative z-20 h-full p-7 flex flex-col justify-end text-white">
          <h3 className="font-display text-2xl font-extrabold mb-2 leading-tight">
            {project.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-white/85 mb-3">
            <span>📍</span>
            <span>{project.location}</span>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Ver galería
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>

      {/* Modal de galería */}
      {galleryOpen && (
        <ProjectGalleryModal
          project={project}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}

export default ProjectCardGallery;
