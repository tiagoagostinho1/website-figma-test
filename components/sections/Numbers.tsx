import { SiteContent } from "@/content/site-content";

type NumbersProps = {
  numbers: SiteContent["numbers"];
};

export function Numbers({ numbers }: NumbersProps) {
  return (
    <section className="py-20">
      <div className="site-container rounded-2xl bg-[var(--color-dark)] px-8 py-14 md:px-14">
        <div className="grid gap-6 border-b border-white/10 pb-10 md:grid-cols-[1fr_320px] md:items-end">
          <h2 className="text-[44px] font-medium leading-[1] tracking-[-0.025em] text-white">
            {numbers.title}
            <span className="block font-[var(--font-serif)] text-[var(--color-accent-strong)] italic">
              {numbers.titleAccent}
            </span>
          </h2>
          <p className="text-sm leading-[1.6] text-white/50">{numbers.description}</p>
        </div>

        <dl className="grid gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.items.map((item) => (
            <div key={item.label}>
              <dt className="text-sm text-white/50">{item.label}</dt>
              <dd className="mt-2 text-5xl tracking-[-0.025em] text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
