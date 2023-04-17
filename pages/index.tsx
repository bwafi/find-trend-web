import About from '@/components/About';
import ConnectSection from '@/components/ConnectSection';
import Hero from '@/components/Hero';
import HowWork from '@/components/HowWork';
import Layout from '@/components/Layout';
import PartnerSection from '@/components/PartnerSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <HowWork />
      <PartnerSection />
      <ConnectSection />
    </Layout>
  );
}
