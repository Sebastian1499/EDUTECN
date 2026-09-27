import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-teal text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
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

        <div className="relative hidden lg:block">
          <div className="aspect-[4/3] w-full rounded-3xl bg-white/10 backdrop-blur-sm" />
          <span className="font-hand absolute -top-6 right-2 rotate-3 text-3xl text-white/90">
            Aprende Crece Avanza
          </span>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <span className="h-2 w-6 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
