import Image from "next/image";

import { SiteContent } from "@/content/site-content";

type AboutProps = {
  about: SiteContent["about"];
};

export function About({ about }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="site-container">
        <p className="text-center text-sm uppercase tracking-[0.1em] text-[var(--color-accent-strong)]">
          {about.kicker}
        </p>
        <h2 className="mx-auto mt-8 max-w-[770px] text-center text-[36px] font-medium leading-[1.38] tracking-[-0.025em]">
          {about.titleStart}{" "}
          <span className="font-[var(--font-serif)] italic">{about.titleItalic}</span> {about.titleEnd}
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-[2fr_1fr]">
          <div className="overflow-hidden rounded-[14px]">
            <Image
              src={about.teamImage}
              alt="Equipa Kaya Digital"
              width={654}
              height={340}
              className="h-full w-full object-cover"
            />
          </div>
          <aside className="flex h-full flex-col justify-between rounded-[14px] border border-black/8 bg-white p-7">
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#999]">{about.leader.ledBy}</p>
              <p className="mt-4 text-[44px] leading-[1.02] tracking-[-0.03em] font-[var(--font-serif)]">
                {about.leader.name}
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="overflow-hidden rounded-full shadow-[0_4px_20px_rgba(255,153,65,0.18)]">
                <Image
                  src={about.leader.photo}
                  alt={about.leader.name}
                  width={88}
                  height={88}
                  className="h-[88px] w-[88px] object-cover"
                />
              </div>
            </div>
            <div className="mt-8 border-t border-black/6 pt-4">
              <p className="text-sm text-[var(--color-heading)]">{about.leader.role}</p>
              <p className="text-sm text-[var(--color-muted)]">{about.leader.specialty}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
