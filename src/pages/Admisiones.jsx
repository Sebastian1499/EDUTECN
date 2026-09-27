import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { levels } from '../data/siteData';

const steps = [
  { title: 'Contacto inicial', description: 'Comunícate con nosotros a través del formulario de contacto.' },
  { title: 'Visita institucional', description: 'Conoce nuestras instalaciones y propuesta educativa.' },
  { title: 'Entrega de documentos', description: 'Radica los documentos requeridos para el proceso.' },
  { title: 'Entrevista y valoración', description: 'Realizamos una entrevista con el estudiante y su familia.' },
  { title: 'Matrícula', description: 'Formaliza el ingreso del estudiante al colegio.' },
];

export default function Admisiones() {
  return (
    <>
      <Seo
        title="Admisiones"
        description="Conoce el proceso de admisión, niveles educativos y requisitos para hacer parte del Colegio Ateniense."
      />

      <section className="bg-secondary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Admisiones</h1>
          <p className="mt-4 text-white/80">
            Te acompañamos en cada paso para que tu hijo o hija haga parte de nuestra comunidad.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">
          Niveles educativos
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <div key={level.title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">{level.title}</h3>
              <p className="mt-2 text-sm text-secondary/70">{level.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">
            Proceso de admisión
          </h2>
          <ol className="mt-10 space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-secondary">{step.title}</h3>
                  <p className="mt-1 text-sm text-secondary/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
          ¿Tienes preguntas sobre el proceso?
        </h2>
        <p className="mt-3 text-secondary/70">
          Nuestro equipo de admisiones está listo para ayudarte.
        </p>
        <Link
          to="/contacto"
          className="mt-6 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Escríbenos
        </Link>
      </section>
    </>
  );
}
