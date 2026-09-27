import { levels } from '../data/siteData';

export default function LevelsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Niveles educativos
          </span>
          <h2 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">
            Un camino de formación para cada etapa
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {levels.map((level, index) => (
            <div key={level.title} className="rounded-2xl bg-white p-8 shadow-sm">
              <span className="text-4xl font-extrabold text-primary/20">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-secondary">{level.title}</h3>
              <p className="mt-2 text-sm text-secondary/70">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
