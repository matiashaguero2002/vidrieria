"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Presupuesto", href: "/presupuesto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sf-bg/95 backdrop-blur border-b border-sf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-1 text-2xl font-extrabold"
          >
            <span className="text-sf-primary">SF</span>
            <span className="text-red-700">Aberturas</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-colors group ${
                    active
                      ? "text-sf-accent"
                      : "text-sf-text hover:text-sf-accent"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-sf-accent transition-all ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/presupuesto"
            className="hidden lg:inline-flex items-center bg-sf-accent hover:bg-sf-accent-hover text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            Pedir Presupuesto
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-sf-primary text-2xl"
            aria-label="Menú"
          >
            ☰
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-sf-text hover:text-sf-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/presupuesto"
              onClick={() => setOpen(false)}
              className="bg-sf-accent text-white font-semibold px-5 py-2.5 rounded-xl text-center"
            >
              Pedir Presupuesto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
