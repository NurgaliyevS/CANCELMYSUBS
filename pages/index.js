import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { customConfig } from "@/project.custom.config";
import { Noto_Sans } from "next/font/google";
import Head from "next/head";

const lato = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={customConfig.seo.description} />
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <header className={lato.className}>
        {/* <Header /> */}
      </header>
      <main className={`flex flex-col min-h-screen mx-auto ${lato.className}`}>
      </main>
      <footer className={lato.className}>
        {/* <Footer /> */}
      </footer>
    </>
  );
}
