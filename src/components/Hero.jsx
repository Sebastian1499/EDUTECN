import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-primary-dark text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium">
            Tu futuro, nuestra misión
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            Educación con propósito, valores para toda la vida
          </h1>
          <p className="mt-5 max-w-lg text-base text-white/85">
            En el Colegio Ateniense formamos estudiantes íntegros, críticos y preparados para
            construir su futuro académico y personal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/admisiones"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
            >
              Conoce las admisiones
            </Link>
            <Link
              to="/institucion"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Sobre el colegio
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-square w-full rounded-3xl bg-white/10 backdrop-blur-sm" />
          <div className="absolute -left-6 top-10 rounded-2xl bg-white p-5 text-secondary shadow-xl">
            <p className="text-2xl font-bold text-primary">+30</p>
            <p className="text-xs text-secondary/70">Años formando líderes</p>
          </div>
          <div className="absolute -right-4 bottom-10 rounded-2xl bg-white p-5 text-secondary shadow-xl">
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-xs text-secondary/70">Docentes certificados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
