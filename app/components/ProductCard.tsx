import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data/products";
import { ProductCarousel } from "./ProductCarousel";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const hasMultipleImages = product.images && product.images.length > 1;

  return (
    <div className="group bg-sf-card border border-sf-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-sf-accent transition-all duration-300 flex flex-col">
      <div className="relative h-60 overflow-hidden bg-sf-primary">
        {hasMultipleImages ? (
          <ProductCarousel images={product.images!} alt={product.alt} />
        ) : (
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-sf-primary mb-3">
          {product.name}
        </h3>
        <p className="text-sf-text-muted text-sm leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>
        <Link
          href="/catalogo"
          className="text-sf-accent font-semibold text-sm inline-flex items-center gap-2 hover:gap-4 transition-all"
        >
          Consultar sin compromiso →
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
