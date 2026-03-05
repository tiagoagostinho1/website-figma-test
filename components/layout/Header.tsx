"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NavItem } from "@/content/site-content";

type HeaderProps = {
  logo: string;
  items: NavItem[];
};

export function Header({ logo, items }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-lg">
      <div className="site-container flex h-[89px] items-center justify-between">
        <Link href="#home" className="inline-flex items-center">
          <Image src={logo} alt="Kaya Digital" width={79} height={48} priority className="h-12 w-auto" />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Abrir menu"
        >
          <span className="sr-only">Abrir menu</span>
          <span className="block h-0.5 w-5 bg-[var(--color-text)]" />
        </button>

        <nav className="hidden lg:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-8 text-[16px] font-normal">
            {items.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-[var(--color-accent-strong)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-nav"
        className={`overflow-hidden border-t border-[var(--color-border)] transition-[max-height] duration-300 lg:hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
        aria-label="Navegação móvel"
      >
        <ul className="site-container py-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
