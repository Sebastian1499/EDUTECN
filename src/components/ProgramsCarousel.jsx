import { Link } from 'react-router-dom';
import { programs } from '../data/siteData';
import Icon from './Icon';

export default function ProgramsCarousel() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Programas
            </span>
            <h2 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">
              Elige el camino que quieres
            </h2>
            <p className="mt-3 max-w-xl text-secondary/70">
              Nuestros programas técnicos laborales te brindan las herramientas para crecer
              personal y profesionalmente.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-secondary hover:bg-white"
            >
              <Icon name="chevron-left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-secondary hover:bg-white"
            >
              <Icon name="chevron-right" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.slice(0, 3).map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span
                  className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${program.color}`}
                >
                  <Icon name={program.icon} className="h-6 w-6" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-secondary">{program.title}</h3>
                <p className="mt-2 text-sm text-secondary/70">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/programas"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Ver todos los programas
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
