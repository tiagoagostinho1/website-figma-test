import { SiteContent } from "@/content/site-content";

type ContactProps = {
  contact: SiteContent["contact"];
};

export function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="site-container max-w-[672px]">
        <h2 className="text-center text-[40px] font-medium leading-[1.25] tracking-[-0.025em]">{contact.title}</h2>
        <p className="mt-7 text-center text-base text-[var(--color-muted)]">{contact.intro}</p>

        <form className="mt-7" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            {contact.fields.slice(0, 4).map((field) => (
              <label key={field.id} className="block">
                <span className="sr-only">{field.label}</span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="h-[54px] w-full rounded-[10px] border border-black/10 bg-white px-5 text-base placeholder:text-[rgba(26,26,26,0.5)] focus:border-[var(--color-accent-strong)] focus:outline-none"
                />
              </label>
            ))}
          </div>

          <label className="mt-4 block">
            <span className="sr-only">{contact.fields[4]?.label}</span>
            <input
              id={contact.fields[4]?.id}
              name={contact.fields[4]?.id}
              type={contact.fields[4]?.type}
              placeholder={contact.fields[4]?.placeholder}
              className="h-[54px] w-full rounded-[10px] border border-black/10 bg-white px-5 text-base placeholder:text-[rgba(26,26,26,0.5)] focus:border-[var(--color-accent-strong)] focus:outline-none"
            />
          </label>

          <label className="mt-4 block">
            <span className="sr-only">{contact.fields[5]?.label}</span>
            <textarea
              id={contact.fields[5]?.id}
              name={contact.fields[5]?.id}
              rows={5}
              placeholder={contact.fields[5]?.placeholder}
              className="h-[126px] w-full rounded-[10px] border border-black/10 bg-white px-5 py-3 text-base placeholder:text-[rgba(26,26,26,0.5)] focus:border-[var(--color-accent-strong)] focus:outline-none"
            />
          </label>

          <button
            type="button"
            className="mt-9 h-[52px] w-full rounded-full bg-[var(--color-dark)] text-base font-medium text-white transition hover:bg-black"
          >
            {contact.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
