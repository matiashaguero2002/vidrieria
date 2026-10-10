"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/data/projects";
import { Lightbox } from "./Lightbox";

type ProjectGalleryModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectGalleryModal({
  project,
  onClose,
}: ProjectGalleryModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.cover];

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Cerrar con Escape (cuando el lightbox está cerrado)
  useEffect(() => {
    if (lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, onClose]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* MODAL MOSAICO */}
      <div
        className="fixed inset-0 z-[9999] bg-slate-950/97 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div
          className="w-full max-w-7xl h-[92vh] flex flex-col gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start text-white shrink-0">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-white/60 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  📷 {images.length} fotografías
                </span>
                <span className="flex items-center gap-1.5">
                  📍 {project.location}
                </span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-sf-accent hover:border-sf-accent transition-all hover:rotate-90 shrink-0"
              aria-label="Cerrar galería"
            >
              ✕
            </button>
          </div>

          {/* Grid mosaico */}
          <div
            className="flex-1 overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((src, i) => (
              <div
                key={src + i}
                onClick={() => openLightbox(i)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-black ${
                  i % 6 === 0 || i % 6 === 3 ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.name} - Foto ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 bg-sf-accent/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    🔍 Foto {i + 1}
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white text-sm opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  ⤢
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX (reutiliza Lightbox.tsx existente) */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          alt={project.name}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex((i) => (i - 1 + images.length) % images.length)
          }
          onNext={() => setLightboxIndex((i) => (i + 1) % images.length)}
          onSelect={(i) => setLightboxIndex(i)}
        />
      )}
    </>
  );
}

export default ProjectGalleryModal;
