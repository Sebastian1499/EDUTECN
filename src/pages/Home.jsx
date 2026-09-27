import Seo from '../components/Seo';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import FeatureGrid from '../components/FeatureGrid';
import ProgramsCarousel from '../components/ProgramsCarousel';
import BadgesBar from '../components/BadgesBar';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Seo
        title="Inicio"
        description="EDUTECN: calidad educativa que enciende sueños e ilumina vidas. Educación técnica para transformar tus oportunidades."
      />
      <Hero />
      <StatsBar />
      <FeatureGrid />
      <ProgramsCarousel />
      <BadgesBar />
      <CTASection />
    </>
  );
}
