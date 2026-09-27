import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-secondary px-8 py-14 text-center text-white sm:px-16">
        <h2 className="text-2xl font-bold sm:text-3xl">
          ¿Listo para hacer parte de la familia Ateniense?
        </h2>
        <p className="max-w-xl text-white/80">
          Escríbenos y con gusto te acompañamos durante todo el proceso de admisión.
        </p>
        <Link
          to="/contacto"
          className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
