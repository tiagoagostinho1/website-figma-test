import Image from "next/image";
import Link from "next/link";

import { SiteContent } from "@/content/site-content";

const HERO_LINES = "https://www.figma.com/api/mcp/asset/12708976-8d69-44fb-a14e-56c1d938f847";

type HeroProps = {
  hero: SiteContent["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pb-16 pt-20 md:pb-20 md:pt-24">
      <Image
        src={HERO_LINES}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-50"
      />
      <div className="site-container relative z-10 flex flex-col items-center">
        <h1 className="max-w-[900px] text-center text-[44px] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-heading)] md:text-[72px]">
          {hero.title}
          <span className="block font-[var(--font-serif)] text-[0.95em] italic">{hero.titleItalic}</span>
        </h1>
        <p className="mt-8 max-w-[642px] text-center text-base leading-[1.625] text-[var(--color-muted)]">
          {hero.description}
        </p>
        <Link
          href={hero.ctaHref}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-accent-strong)] px-8 py-2 text-base font-semibold text-[var(--color-heading)] transition hover:brightness-95"
        >
          {hero.ctaLabel}
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg">→</span>
        </Link>
        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-base">
          {hero.trustItems.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <span className="text-[var(--color-accent-strong)]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
