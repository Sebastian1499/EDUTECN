import Seo from '../components/Seo';

const values = [
  { title: 'Respeto', description: 'Valoramos la dignidad de cada miembro de la comunidad.' },
  { title: 'Excelencia', description: 'Buscamos la mejora continua en todo lo que hacemos.' },
  { title: 'Responsabilidad', description: 'Formamos personas comprometidas con sus deberes.' },
  { title: 'Solidaridad', description: 'Promovemos el trabajo en equipo y el apoyo mutuo.' },
];

export default function Institucion() {
  return (
    <>
      <Seo
        title="Institución"
        description="Conoce la historia, misión, visión y valores del Colegio Ateniense."
      />

      <section className="bg-secondary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Nuestra Institución</h1>
          <p className="mt-4 text-white/80">
            Más de 30 años formando estudiantes íntegros, críticos y preparados para el futuro.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-secondary">Misión</h2>
          <p className="mt-3 text-sm text-secondary/70">
            Formar integralmente a nuestros estudiantes bajo principios de excelencia académica,
            valores éticos y sentido de responsabilidad social, preparándolos para afrontar los
            retos del mundo actual.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-secondary">Visión</h2>
          <p className="mt-3 text-sm text-secondary/70">
            Ser reconocidos como una institución educativa líder, referente en calidad académica,
            formación en valores e innovación pedagógica en la región.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">
            Nuestros valores
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <h3 className="font-semibold text-secondary">{value.title}</h3>
                <p className="mt-2 text-sm text-secondary/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
