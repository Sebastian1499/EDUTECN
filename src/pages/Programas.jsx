import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { programs } from '../data/siteData';

export default function Programas() {
  return (
    <>
      <Seo
        title="Programas"
        description="Conoce el catálogo de programas técnicos laborales de EDUTECN, orientados al mundo laboral."
      />

      <section className="bg-gradient-to-br from-secondary via-primary to-teal py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Nuestros programas</h1>
          <p className="mt-4 text-white/85">
            Programas técnicos laborales con enfoque práctico y orientados al mundo laboral.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${program.color}`}>
                <Icon name={program.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-secondary">{program.title}</h3>
              <p className="mt-2 text-sm text-secondary/70">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/inscripciones"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Inicia tu inscripción
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
