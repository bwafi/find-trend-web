import About from "@/components/About";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWork from "@/components/HowWork";
import JoinSection from "@/components/JoinSection";
import Layout from "@/components/Layout";
import PartnerSection from "@/components/PartnerSection";
import PriceSection from "@/components/PriceSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <HowWork />
      <PartnerSection />
      <ConnectSection />
      <PriceSection />
      <JoinSection />
      <Footer />
    </Layout>
  );
}
