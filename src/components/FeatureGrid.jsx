import { Link } from 'react-router-dom';
import { features } from '../data/siteData';
import Icon from './Icon';

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Encuentra lo que necesitas
        </span>
        <h2 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">
          Todo lo que necesitas en un solo lugar
        </h2>
        <p className="mt-3 text-secondary/70">
          Accesos rápidos a los servicios académicos y administrativos del colegio.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => {
          const cardContent = (
            <>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-secondary">{item.title}</h3>
              <p className="mt-1.5 text-sm text-secondary/70">{item.description}</p>
            </>
          );

          const cardClasses =
            'group rounded-2xl border border-gray-100 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg';

          return item.to ? (
            <Link key={item.title} to={item.to} className={cardClasses}>
              {cardContent}
            </Link>
          ) : (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </section>
  );
}
