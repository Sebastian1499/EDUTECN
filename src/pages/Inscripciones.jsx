import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const steps = [
  { title: 'Contacto inicial', description: 'Comunícate con nosotros a través del formulario de contacto.' },
  { title: 'Elige tu programa', description: 'Selecciona el programa técnico laboral que se ajusta a tus metas.' },
  { title: 'Entrega de documentos', description: 'Radica los documentos requeridos para el proceso.' },
  { title: 'Entrevista y valoración', description: 'Realizamos una entrevista para conocer tus objetivos.' },
  { title: 'Matrícula', description: 'Formaliza tu ingreso y comienza tu formación técnica.' },
];

export default function Inscripciones() {
  return (
    <>
      <Seo
        title="Inscripciones"
        description="Conoce el proceso de inscripción a los programas técnicos laborales de EDUTECN."
      />

      <section className="bg-gradient-to-br from-secondary via-primary to-teal py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Inscripciones</h1>
          <p className="mt-4 text-white/85">
            Te acompañamos en cada paso para que inicies tu formación técnica con nosotros.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">
          Proceso de inscripción
        </h2>
        <ol className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 p-6 shadow-sm">
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
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
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
