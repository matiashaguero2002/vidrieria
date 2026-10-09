"use client";

import Image from "next/image";
import { useEffect } from "react";

export function Lightbox({
  images,
  index,
  alt,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect?: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg hover:bg-white sm:right-6 sm:top-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <div
        className="relative flex w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex w-full items-center justify-center">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Anterior"
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg backdrop-blur hover:bg-white sm:-left-2 sm:h-11 sm:w-11"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="mx-12 flex max-h-[65vh] w-full items-center justify-center rounded-2xl bg-white p-2 shadow-2xl sm:mx-14 sm:p-3">
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}/${images.length}`}
              width={1200}
              height={900}
              className="max-h-[60vh] w-auto max-w-full object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            type="button"
            onClick={onNext}
            aria-label="Siguiente"
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg backdrop-blur hover:bg-white sm:-right-2 sm:h-11 sm:w-11"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex w-full max-w-4xl flex-col items-center gap-2">
          <p className="text-xs font-medium text-white/80">
            {index + 1} / {images.length} · {alt}
          </p>
          <div className="flex max-w-full gap-2 overflow-x-auto rounded-xl bg-white/10 p-2 backdrop-blur">
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => (onSelect ? onSelect(i) : i > index ? onNext() : onPrev())}
                className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 bg-white transition ${
                  i === index ? "border-white ring-2 ring-white" : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`Ver ${alt} ${i + 1}`}
                aria-current={i === index}
              >
                <Image src={src} alt="" width={120} height={80} className="h-full w-full object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
