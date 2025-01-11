import Head from "next/head";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { customConfig } from "@/project.custom.config";
import { WhyNowSection } from "@/components/sections/WhyNowSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={customConfig.seo.description} />
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <TestimonialsSection />
          <WhyNowSection />
          <HowItWorksSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
