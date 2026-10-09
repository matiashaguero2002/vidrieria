import ProductCard from "../components/ProductCard";
import { products } from "@/lib/data/products";

export const metadata = {
  title: "Catálogo | SF Aberturas",
  description:
    "Catálogo completo de SF Aberturas: puertas, ventanas, mamparas, cerramientos y más. Productos en aluminio y vidrio en Encarnación.",
};

export default function CatalogoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sf-primary mb-4">
            Catálogo de <span className="text-sf-accent">productos</span>
          </h1>
          <div className="w-16 h-1 bg-sf-accent mx-auto rounded-full mb-6" />
          <p className="text-sf-text-muted max-w-2xl mx-auto text-lg">
            Todas las soluciones en aluminio y vidrio que ofrecemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
