"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Lightbox } from "./Lightbox";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <>
      <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
        <button
          type="button"
          onClick={() => {
            setIdx(0);
            setOpen(true);
          }}
          className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100"
          aria-label={`Abrir galería ${project.name}`}
        >
          <Image
            src={project.cover}
            alt={project.name}
            width={600}
            height={450}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            loading={priority ? "eager" : undefined}
          />
        </button>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold text-zinc-900">{project.name}</h3>
          <p className="mt-1 text-xs font-medium text-zinc-500">
            {project.type} · {project.location}
          </p>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-zinc-600">
            {project.description}
          </p>
          <Link
            href={`/proyectos/${project.id}`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 hover:text-zinc-600"
          >
            Ver proyecto
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {open && (
        <Lightbox
          images={project.images}
          index={idx}
          alt={project.name}
          onClose={() => setOpen(false)}
          onPrev={() => setIdx((v) => (v - 1 + project.images.length) % project.images.length)}
          onNext={() => setIdx((v) => (v + 1) % project.images.length)}
          onSelect={setIdx}
        />
      )}
    </>
  );
}
