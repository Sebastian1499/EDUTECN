import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80&auto=format&fit=crop',
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-teal text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pb-24 lg:pt-20">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium">
            Tu futuro, nuestra misión
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            Construye tu futuro con EDUTECN
          </h1>
          <p className="mt-5 max-w-lg text-base text-white/85">
            Educación técnica para transformar tus oportunidades.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/programas"
              className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Conoce nuestros programas
            </Link>
            <Link
              to="/inscripciones"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Inicia tu inscripción
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div
            className="relative aspect-[16/11] overflow-hidden rounded-3xl"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 80%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at center, black 80%, transparent 100%)',
            }}
          >
            {heroImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="Estudiantes de EDUTECN aprendiendo juntos"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(16,22,58,0.85) 0%, rgba(16,22,58,0.6) 28%, transparent 58%), ' +
                  'linear-gradient(to right, rgba(16,22,58,0.35) 0%, transparent 18%, transparent 85%, rgba(16,22,58,0.4) 100%)',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
          <span className="font-hand absolute -top-6 right-2 rotate-3 text-3xl text-white/90">
            Aprende Crece Avanza
          </span>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {heroImages.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={`Ver imagen ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 h-14 w-full text-page sm:h-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,40 C240,90 480,90 720,55 C960,20 1200,20 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
