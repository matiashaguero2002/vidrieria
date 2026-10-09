"use client";

import { useEffect, useState } from "react";

type ProductRotatorProps = {
  items: string[];
  interval?: number;
};

export function ProductRotator({
  items,
  interval = 3000,
}: ProductRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  if (items.length === 0) {
    return <div className="h-60 bg-sf-primary" />;
  }

  return (
    <div className="relative h-60 overflow-hidden bg-sf-primary">
      <div
        className="flex flex-col transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`min-h-60 flex items-center justify-center text-white font-semibold text-lg px-4 text-center ${
              i === 0
                ? "bg-sf-primary"
                : i === 1
                ? "bg-sf-primary-light"
                : "bg-sf-accent"
            }`}
          >
            <span className="drop-shadow-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductRotator;
