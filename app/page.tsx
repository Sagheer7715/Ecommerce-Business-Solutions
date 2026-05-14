import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <WhyChooseUs />
        <Process />
        <CaseStudies />
        <Industries />
        <Testimonials />
        <About />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
