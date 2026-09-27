// Contenido de ejemplo (placeholder) para el sitio de EDUTECN.
// Reemplazar con la información real de la institución antes de publicar.

export const site = {
  name: 'EDUTECN',
  tagline: 'Calidad educativa que enciende sueños e ilumina vidas',
  phone: '(601) 000 0000',
  email: 'contacto@edutecn.edu.co',
  address: 'Calle 00 # 00 - 00, Bogotá D.C., Colombia',
};

export const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Institución', to: '/institucion' },
  { label: 'Programas', to: '/programas' },
  { label: 'Inscripciones', to: '/inscripciones' },
  { label: 'Blog', to: '/blog' },
];

// Botones de acceso rápido a plataformas externas (solo redirigen, sin SSO).
export const quickAccess = [
  { label: 'Microsoft Teams', href: 'https://teams.microsoft.com', icon: 'teams' },
  { label: 'Q10', href: 'https://q10.com', icon: 'q10' },
  { label: 'Biblioteca Virtual', href: '#', icon: 'biblioteca' },
];

export const stats = [
  { value: '+12', label: 'Programas técnicos laborales', icon: 'admisiones', color: 'bg-blue-100 text-blue-600' },
  { value: '+80%', label: 'Formación práctica', icon: 'biblioteca', color: 'bg-teal-100 text-teal-600' },
  { value: '100%', label: 'Acompañamiento estudiantil', icon: 'contacto', color: 'bg-purple-100 text-purple-600' },
  { value: 'Global', label: 'Formación orientada al mundo laboral', icon: 'globe', color: 'bg-cyan-100 text-cyan-600' },
];

export const features = [
  {
    title: 'Programas',
    description: 'Prepárate con programas técnicos laborales de alta calidad.',
    to: '/programas',
    icon: 'admisiones',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Inscripciones',
    description: 'Conéctate con nuestra plataforma de inscripciones.',
    to: '/inscripciones',
    icon: 'calendario',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Calendario académico',
    description: 'Conoce las fechas y horarios de nuestro calendario.',
    to: '/institucion',
    icon: 'calendario',
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Pagos',
    description: 'Conoce nuestras formas de pago disponibles.',
    href: '#',
    icon: 'pagos',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Atención al estudiante',
    description: 'Estamos para ayudarte. ¡Contáctanos!',
    to: '/contacto',
    icon: 'contacto',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Bienestar',
    description: 'Tu bienestar también es parte de tu formación.',
    href: '#',
    icon: 'bienestar',
    color: 'bg-red-100 text-red-600',
  },
];

export const programs = [
  {
    title: 'Técnico en Auxiliar de Enfermería',
    description: 'Cuida, acompaña y haz la diferencia en la vida de los demás.',
    icon: 'salud',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Técnico en Electricidad Industrial',
    description: 'Aprende, practica y desarrolla tu talento técnico.',
    icon: 'electricidad',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Técnico en Sistemas',
    description: 'Conviértete en el profesional que el mundo digital necesita.',
    icon: 'sistemas',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Técnico en Auxiliar Contable y Financiero',
    description: 'Domina las herramientas contables que exigen las empresas hoy.',
    icon: 'pagos',
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Técnico en Auxiliar Administrativo',
    description: 'Fortalece tus habilidades de gestión y organización empresarial.',
    icon: 'practicas',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Técnico en Talento Humano',
    description: 'Aprende a gestionar el activo más importante de toda organización.',
    icon: 'docentes',
    color: 'bg-cyan-100 text-cyan-600',
  },
];

export const badges = [
  { label: 'Formación certificada', icon: 'certificado' },
  { label: 'Docentes expertos', icon: 'docentes' },
  { label: 'Prácticas empresariales', icon: 'practicas' },
  { label: 'Más oportunidades laborales', icon: 'oportunidades' },
];

export const blogPlaceholder = [
  {
    id: 1,
    title: 'Inician las inscripciones para el próximo periodo académico',
    excerpt: 'Conoce las fechas, requisitos y proceso de inscripción a nuestros programas técnicos.',
    date: '2026-09-01',
  },
  {
    id: 2,
    title: 'EDUTECN firma nuevos convenios empresariales para prácticas',
    excerpt: 'Ampliamos las oportunidades de práctica laboral para nuestros estudiantes.',
    date: '2026-08-15',
  },
  {
    id: 3,
    title: 'Nuevos convenios con plataformas educativas digitales',
    excerpt: 'Ampliamos el acceso a recursos virtuales para fortalecer el aprendizaje.',
    date: '2026-07-30',
  },
];
