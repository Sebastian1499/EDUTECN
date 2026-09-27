import Seo from '../components/Seo';
import { blogPlaceholder } from '../data/siteData';

const formatDate = (value) =>
  new Date(value).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Mantente al día con las últimas noticias y eventos de EDUTECN."
      />

      <section className="bg-gradient-to-br from-secondary via-primary to-teal py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Blog</h1>
          <p className="mt-4 text-white/85">
            Entérate de lo que sucede en nuestra comunidad educativa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {blogPlaceholder.map((post) => (
            <article
              key={post.id}
              className="flex flex-col rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="aspect-video rounded-t-2xl bg-gradient-to-br from-primary/20 to-teal/20" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {formatDate(post.date)}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-secondary">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-secondary/70">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
