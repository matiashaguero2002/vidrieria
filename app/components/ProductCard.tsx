import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "@/lib/data/products";
import ProductSlideshow from "./ProductSlideshow";

type ProductCardProps = {
  product: Product;
};

function CategoryIcon({ category }: { category: string }) {
  const common = {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8 as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (category.toLowerCase()) {
    case "ventanas":
      // Ventana: rectángulo con cruz (marcos)
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
    case "puertas":
      // Puerta: rectángulo con círculo (picaporte)
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="1" />
          <circle cx="15" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mamparas":
      // Mampara: rectángulo dividido vertical
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9.3 3v18M14.7 3v18" />
        </svg>
      );
    case "cerramientos":
      // Cerramientos: rectángulos apilados (edificio)
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M4 9h16M4 15h16M10 3v18" />
        </svg>
      );
    default:
      // Fallback: cuadrado con rombo
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M12 8l4 4-4 4-4-4z" />
        </svg>
      );
  }
}

const iconByCategory: Record<string, ReactNode> = {};

export function ProductCard({ product }: ProductCardProps) {
  // Lista de imágenes: `images` si existe, si no la principal
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <Link
      href="/catalogo"
      className="group relative block rounded-2xl overflow-hidden h-[380px] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      {/* Slideshow de imágenes de fondo */}
      <div className="absolute inset-0">
        <ProductSlideshow images={images} alt={product.alt || product.name} />
      </div>

      {/* Overlay degradado oscuro para legibilidad */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

      {/* Icono flotante arriba a la derecha */}
      <div className="absolute top-5 right-5 z-20 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl transition-all duration-300 group-hover:bg-sf-accent group-hover:border-sf-accent">
        {iconByCategory[product.category?.toLowerCase() ?? ""] ?? (
          <CategoryIcon category={product.category ?? ""} />
        )}
      </div>

      {/* Contenido inferior */}
      <div className="relative z-20 h-full p-7 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-extrabold mb-2 font-display">
          {product.name}
        </h3>
        <p className="text-sm text-white/85 leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3">
          Ver más
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;
