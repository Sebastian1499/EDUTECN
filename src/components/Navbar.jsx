import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks, site } from '../data/siteData';
import Icon from './Icon';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-secondary/80'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal text-lg font-bold text-white">
            T
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-secondary">
              {site.name}
            </span>
            <span className="hidden text-[11px] text-secondary/60 sm:block">
              {site.tagline}
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button type="button" aria-label="Buscar" className="text-secondary/70 hover:text-primary">
            <Icon name="search" className="h-5 w-5" />
          </button>
          <NavLink
            to="/inscripciones"
            className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Inscríbete
            <Icon name="arrow-right" className="h-4 w-4" />
          </NavLink>
        </div>

        <button
          type="button"
          className="text-secondary lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-6 pb-4 lg:hidden">
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
              to="/inscripciones"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Inscríbete
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
