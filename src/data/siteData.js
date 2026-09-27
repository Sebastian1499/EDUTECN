// Contenido de ejemplo (placeholder) para el sitio del Colegio Ateniense.
// Reemplazar con la información real de la institución antes de publicar.

export const site = {
  name: 'Colegio Ateniense',
  shortName: 'Ateniense',
  tagline: 'Educación con propósito, valores para toda la vida',
  phone: '(601) 000 0000',
  email: 'contacto@colegioateniense.edu.co',
  address: 'Calle 00 # 00 - 00, Bogotá D.C., Colombia',
};

export const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Institución', to: '/institucion' },
  { label: 'Admisiones', to: '/admisiones' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Contacto', to: '/contacto' },
];

// Botones de acceso rápido a plataformas externas (solo redirigen, sin SSO).
export const quickAccess = [
  { label: 'Microsoft Teams', href: 'https://teams.microsoft.com', icon: 'teams' },
  { label: 'Q10', href: 'https://q10.com', icon: 'q10' },
  { label: 'Biblioteca Virtual', href: '#', icon: 'library' },
];

export const stats = [
  { value: '+30', label: 'Años de experiencia' },
  { value: '+1200', label: 'Estudiantes activos' },
  { value: '100%', label: 'Docentes certificados' },
  { value: '95%', label: 'Graduados admitidos a la universidad' },
];

export const features = [
  {
    title: 'Admisiones',
    description: 'Conoce el proceso de inscripción y matrícula para nuevos estudiantes.',
    to: '/admisiones',
    icon: 'admisiones',
  },
  {
    title: 'Calendario académico',
    description: 'Consulta las fechas y actividades importantes del año escolar.',
    to: '/institucion',
    icon: 'calendario',
  },
  {
    title: 'Biblioteca Virtual',
    description: 'Accede a recursos educativos digitales desde cualquier lugar.',
    href: '#',
    icon: 'biblioteca',
  },
  {
    title: 'Q10 Académico',
    description: 'Consulta notas, boletines e información académica de tus hijos.',
    href: 'https://q10.com',
    icon: 'q10',
  },
  {
    title: 'Microsoft Teams',
    description: 'Ingresa a tus clases virtuales y reuniones institucionales.',
    href: 'https://teams.microsoft.com',
    icon: 'teams',
  },
  {
    title: 'Contáctanos',
    description: 'Escríbenos y resolvemos tus dudas sobre el colegio.',
    to: '/contacto',
    icon: 'contacto',
  },
];

export const levels = [
  {
    title: 'Preescolar',
    description: 'Primeros pasos en el aprendizaje a través del juego y la exploración.',
  },
  {
    title: 'Primaria',
    description: 'Fortalecimiento de habilidades básicas, valores y pensamiento crítico.',
  },
  {
    title: 'Bachillerato',
    description: 'Formación integral orientada a la excelencia académica y la vida universitaria.',
  },
];

export const newsPlaceholder = [
  {
    id: 1,
    title: 'Inician las inscripciones para el próximo año escolar',
    excerpt: 'Conoce las fechas, requisitos y proceso de admisión para nuevos estudiantes.',
    date: '2026-09-01',
  },
  {
    id: 2,
    title: 'Colegio Ateniense celebra su semana cultural',
    excerpt: 'Estudiantes y docentes se reunieron en torno al arte, la música y la tradición.',
    date: '2026-08-15',
  },
  {
    id: 3,
    title: 'Nuevos convenios con plataformas educativas digitales',
    excerpt: 'Ampliamos el acceso a recursos virtuales para fortalecer el aprendizaje.',
    date: '2026-07-30',
  },
];
