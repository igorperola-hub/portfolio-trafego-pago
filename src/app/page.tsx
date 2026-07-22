import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformsMarquee from "@/components/PlatformsMarquee";
import Services from "@/components/Services";
import NameMarquee from "@/components/NameMarquee";
import Deliverables from "@/components/Deliverables";
import Testimonials from "@/components/Testimonials";
import ClientsPortfolio from "@/components/ClientsPortfolio";
import Certification from "@/components/Certification";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PlatformsMarquee />
        <Services />
        <NameMarquee />
        <Deliverables />
        <Testimonials />
        <ClientsPortfolio />
        <Certification />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
