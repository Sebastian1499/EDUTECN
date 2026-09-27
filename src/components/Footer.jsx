import { Link } from 'react-router-dom';
import { navLinks, quickAccess, site } from '../data/siteData';
import Icon from './Icon';
import logo from '../assets/EDUTECN_LOGO.jpg';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt={site.name} className="w-44" />
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Enlaces rápidos
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contacto" className="text-white/80 hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Accesos
          </h3>
          <ul className="space-y-2 text-sm">
            {quickAccess.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Icon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Icon name="map-pin" className="h-4 w-4 shrink-0" />
              {site.address}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0" />
              {site.phone}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0" />
              {site.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
