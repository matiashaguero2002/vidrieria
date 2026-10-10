"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectSlideshowProps = {
  images: string[];
  alt: string;
  interval?: number;
  priority?: boolean;
};

export function ProjectSlideshow({
  images,
  alt,
  interval = 3200,
  priority = false,
}: ProjectSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${alt} - ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={priority && i === 0}
          />
        </div>
      ))}
    </>
  );
}

export default ProjectSlideshow;
