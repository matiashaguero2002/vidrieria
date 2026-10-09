"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="relative flex-shrink-0 w-[340px] h-[240px] rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] block"
    >
      <Image
        src={project.cover}
        alt={project.name}
        fill
        sizes="340px"
        priority={priority}
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="absolute top-[-20px] right-6 w-11 h-11 bg-sf-accent rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/40">
          ⤢
        </div>
        <h4 className="text-lg font-bold mb-1">{project.name}</h4>
        <p className="text-sm text-white/80">{project.location}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
