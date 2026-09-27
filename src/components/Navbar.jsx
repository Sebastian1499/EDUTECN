import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks, quickAccess, site } from '../data/siteData';
import Icon from './Icon';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-secondary/80'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Barra de accesos rápidos a plataformas externas */}
      <div className="hidden md:block bg-secondary text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-6 py-1.5 text-xs">
          {quickAccess.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100"
            >
              <Icon name={item.icon} className="h-3.5 w-3.5" />
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Navegación principal */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
            CA
          </span>
          <span className="text-lg font-bold text-secondary">{site.name}</span>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <NavLink
            to="/admisiones"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Inscríbete
          </NavLink>
        </div>

        <button
          type="button"
          className="text-secondary md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-7 w-7" />
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClasses}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/admisiones"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white"
            >
              Inscríbete
            </NavLink>
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
            {quickAccess.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary/80"
              >
                <Icon name={item.icon} className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
