import { SiteContent } from "@/content/site-content";

type ServicesProps = {
  services: SiteContent["services"];
};

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 bg-[var(--color-dark)] py-20">
      <div className="site-container grid gap-12 lg:grid-cols-[0.95fr_1.7fr]">
        <h2 className="max-w-[290px] text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white">
          {services.title}
        </h2>
        <div>
          {services.items.map((item) => (
            <article key={item.index} className="border-t border-white/10 py-8 first:pt-8">
              <div className="grid gap-3 md:grid-cols-[4rem_1fr]">
                <span className="pt-1 text-sm text-[var(--color-accent-strong)]">{item.index}</span>
                <div>
                  <h3 className="text-[32px] font-medium tracking-[-0.02em] text-white">{item.title}</h3>
                  <p className="mt-3 max-w-[520px] text-[22px] leading-[1.5] text-white/60">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
