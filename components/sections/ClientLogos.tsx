import { SiteContent } from "@/content/site-content";

type ClientLogosProps = {
  logos: SiteContent["logos"];
};

export function ClientLogos({ logos }: ClientLogosProps) {
  return (
    <section className="border-t border-[var(--color-border)] py-12">
      <div className="site-container">
        <p className="text-center text-base text-[var(--color-muted)]">{logos.title}</p>
        <ul className="mt-8 grid grid-cols-2 gap-y-4 text-center text-[20px] tracking-[-0.025em] text-black/40 sm:grid-cols-4 lg:grid-cols-7">
          {logos.items.map((logo) => (
            <li key={logo}>{logo}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
