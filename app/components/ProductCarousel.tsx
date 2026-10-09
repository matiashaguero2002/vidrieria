"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Lightbox } from "./Lightbox";

export function ProductCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || open || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2800);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, open, images.length]);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div
        className="relative h-full w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label={alt}
      >
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openLightbox(i)}
              className="relative h-full w-full flex-shrink-0 cursor-zoom-in"
              aria-label={`Abrir galería ${alt} imagen ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}/${images.length}`}
                width={600}
                height={800}
                className="h-full w-full object-contain p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={i === 0}
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          alt={alt}
          onClose={() => setOpen(false)}
          onPrev={() =>
            setLightboxIndex((v) => (v - 1 + images.length) % images.length)
          }
          onNext={() => setLightboxIndex((v) => (v + 1) % images.length)}
          onSelect={setLightboxIndex}
        />
      )}
    </>
  );
}
