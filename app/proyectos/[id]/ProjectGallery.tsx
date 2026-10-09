"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/app/components/Lightbox";

export function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            aria-label={`Abrir ${alt} imagen ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              width={600}
              height={450}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {open && (
        <Lightbox
          images={images}
          index={idx}
          alt={alt}
          onClose={() => setOpen(false)}
          onPrev={() => setIdx((v) => (v - 1 + images.length) % images.length)}
          onNext={() => setIdx((v) => (v + 1) % images.length)}
          onSelect={setIdx}
        />
      )}
    </>
  );
}
