import Image from "next/image";
import Link from "next/link";

import { NavItem } from "@/content/site-content";

type FooterProps = {
  logo: string;
  nav: NavItem[];
  copyright: string;
};

export function Footer({ logo, nav, copyright }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="site-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Image src={logo} alt="Kaya Digital" width={66} height={40} className="h-10 w-auto" />
          <p className="mt-4 text-sm text-[var(--color-muted)]">{copyright}</p>
        </div>
        <nav aria-label="Links do rodape">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--color-muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-[var(--color-accent-strong)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
