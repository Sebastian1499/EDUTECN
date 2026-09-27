import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Página no encontrada" />
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="text-6xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-secondary">Página no encontrada</h1>
        <p className="mt-2 text-secondary/70">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Volver al inicio
        </Link>
      </section>
    </>
  );
}
