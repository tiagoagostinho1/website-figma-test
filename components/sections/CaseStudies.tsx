import Link from "next/link";

import { SiteContent } from "@/content/site-content";

type CaseStudiesProps = {
  caseStudies: SiteContent["caseStudies"];
};

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="scroll-mt-24 py-6 pb-20">
      <div className="site-container">
        <h2 className="text-center text-[56px] font-medium leading-[1] tracking-[-0.03em]">{caseStudies.title}</h2>
        <p className="mx-auto mt-8 max-w-[512px] text-center text-[32px] leading-[1.5] text-[var(--color-muted)]">
          {caseStudies.intro}
        </p>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {caseStudies.items.map((item) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-[14px] p-8 ${
                item.variant === "dark"
                  ? "bg-[var(--color-dark)] text-white"
                  : "border border-black/8 bg-[var(--color-panel)] text-[var(--color-heading)]"
              }`}
            >
              <div
                className="absolute -right-12 -top-16 h-48 w-48 rounded-full opacity-10"
                style={{ backgroundColor: item.accent }}
              />
              <div
                className="absolute -left-12 bottom-0 h-32 w-32 rounded-full opacity-10"
                style={{ backgroundColor: item.accent }}
              />
              <div className="relative">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-[10.4px] uppercase tracking-[0.025em] ${
                        item.variant === "dark"
                          ? "border-white/15 text-white/70"
                          : "border-black/10 bg-black/6 text-[#6b6b6b]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-[32px] font-bold leading-none tracking-[-0.025em] text-[var(--color-accent-strong)]">
                  {item.metric}
                </p>
                <h3
                  className={`mt-3 max-w-[400px] text-[22px] leading-[1.35] tracking-[-0.02em] ${
                    item.variant === "dark" ? "text-white/85" : "text-[var(--color-heading)]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`mt-2 text-sm ${item.variant === "dark" ? "text-white/40" : "text-[var(--color-muted)]"}`}>
                  {item.subtitle}
                </p>

                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm text-[var(--color-accent-strong)]"
                >
                  Ver caso
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent-strong)] text-white">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/60 px-6 py-3 text-2xl"
          >
            {caseStudies.ctaLabel}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
