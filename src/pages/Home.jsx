import Seo from '../components/Seo';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import FeatureGrid from '../components/FeatureGrid';
import LevelsSection from '../components/LevelsSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Seo
        title="Inicio"
        description="Colegio Ateniense: educación integral con calidad, valores y acompañamiento para transformar el futuro de nuestros estudiantes."
      />
      <Hero />
      <StatsBar />
      <FeatureGrid />
      <LevelsSection />
      <CTASection />
    </>
  );
}
