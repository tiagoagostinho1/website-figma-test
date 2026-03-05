import { SiteContent } from "@/content/site-content";

type TestimonialsProps = {
  testimonials: SiteContent["testimonials"];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20">
      <div className="site-container">
        <h2 className="text-center text-[50px] font-medium leading-[1] tracking-[-0.03em]">
          {testimonials.title}
        </h2>
        <p className="mx-auto mt-7 max-w-[427px] text-center text-base text-[var(--color-muted)]">
          {testimonials.intro}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className={`relative overflow-hidden rounded-[14px] border p-6 ${
                item.highlighted
                  ? "border-black/8 bg-[var(--color-dark)] text-white"
                  : "border-black/8 bg-white text-[var(--color-heading)]"
              }`}
            >
              <div className="flex gap-1 text-[var(--color-accent-strong)]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className={`mt-6 leading-[1.62] ${item.highlighted ? "text-white/80" : "text-[var(--color-text)]"}`}>
                {item.quote}
              </p>
              <div className="mt-10 border-t border-black/8 pt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                      item.highlighted ? "bg-[var(--color-accent-strong)] text-white" : "bg-[var(--color-panel)]"
                    }`}
                  >
                    {item.initial}
                  </div>
                  <div>
                    <p className={`text-base ${item.highlighted ? "text-white" : "text-[var(--color-heading)]"}`}>
                      {item.name}
                    </p>
                    <p className={`text-sm ${item.highlighted ? "text-white/40" : "text-[var(--color-muted)]"}`}>
                      {item.country}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-[var(--color-accent-strong)]/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
