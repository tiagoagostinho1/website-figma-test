import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Numbers } from "@/components/sections/Numbers";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { siteContent } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          name: siteContent.seo.siteName,
          url: siteContent.seo.canonical,
          logo: "/assets/icon-dot.png",
          contactPoint: [
            {
              contactType: "customer support",
              telephone: "+351000000000",
              areaServed: "PT",
              availableLanguage: ["pt-PT", "en"],
            },
          ],
        }}
      />
      <Header logo={siteContent.brand.logo} items={siteContent.nav} />
      <main>
        <Hero hero={siteContent.hero} />
        <ClientLogos logos={siteContent.logos} />
        <Numbers numbers={siteContent.numbers} />
        <CaseStudies caseStudies={siteContent.caseStudies} />
        <Services services={siteContent.services} />
        <About about={siteContent.about} />
        <Testimonials testimonials={siteContent.testimonials} />
        <Contact contact={siteContent.contact} />
      </main>
      <Footer logo={siteContent.brand.logo} nav={siteContent.nav} copyright={siteContent.footer.copyright} />
    </>
  );
}
