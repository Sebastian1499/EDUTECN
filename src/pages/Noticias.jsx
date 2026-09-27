import Seo from '../components/Seo';
import { newsPlaceholder } from '../data/siteData';

const formatDate = (value) =>
  new Date(value).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });

export default function Noticias() {
  return (
    <>
      <Seo
        title="Noticias"
        description="Mantente al día con las últimas noticias y eventos del Colegio Ateniense."
      />

      <section className="bg-secondary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Noticias</h1>
          <p className="mt-4 text-white/80">
            Entérate de lo que sucede en nuestra comunidad educativa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {newsPlaceholder.map((news) => (
            <article
              key={news.id}
              className="flex flex-col rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="aspect-video rounded-t-2xl bg-gradient-to-br from-primary/20 to-secondary/10" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {formatDate(news.date)}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-secondary">{news.title}</h2>
                <p className="mt-2 flex-1 text-sm text-secondary/70">{news.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
