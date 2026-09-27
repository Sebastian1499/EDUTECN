import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks, site } from '../data/siteData';
import Icon from './Icon';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-secondary/80'
    }`;

  const dropdownLinks = ['/institucion', '/programas'];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-extrabold text-rose-500">
            T
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight">
              <span className="text-secondary">EDU</span>
              <span className="text-rose-600">TECN</span>
            </span>
            <span className="hidden max-w-[170px] text-[11px] leading-snug text-secondary/60 sm:block">
              {site.tagline}
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
              {dropdownLinks.includes(link.to) && <Icon name="chevron-down" className="h-3.5 w-3.5" />}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button type="button" aria-label="Buscar" className="text-secondary/70 hover:text-primary">
            <Icon name="search" className="h-5 w-5" />
          </button>
          <NavLink
            to="/inscripciones"
            className="flex items-center gap-1.5 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
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
              className="mt-2 w-fit rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Inscríbete
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
