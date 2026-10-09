"use client";

import type { Project } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";

type ProjectsCarouselProps = {
  projects: Project[];
};

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  if (projects.length === 0) return null;

  const list = [...projects, ...projects];

  return (
    <div className="overflow-hidden py-4">
      <div className="flex gap-6 w-max animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
        {list.map((project, i) => (
          <ProjectCard key={`${project.id}-${i}`} project={project} />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectsCarousel;
