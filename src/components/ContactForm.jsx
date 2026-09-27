import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // Formulario solo visual por ahora: no envía datos a ningún backend.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-primary/5 p-8 text-center">
        <h3 className="text-lg font-semibold text-secondary">¡Gracias por escribirnos!</h3>
        <p className="mt-2 text-sm text-secondary/70">
          Hemos recibido tu mensaje (demo visual). En la versión final te contactaremos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-secondary" htmlFor="nombre">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Escribe tu nombre"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-secondary" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="tucorreo@ejemplo.com"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-secondary" htmlFor="telefono">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="300 000 0000"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-secondary" htmlFor="asunto">
          Asunto
        </label>
        <select
          id="asunto"
          name="asunto"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option>Admisiones</option>
          <option>Información general</option>
          <option>Soporte académico</option>
          <option>Otro</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-secondary" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Cuéntanos en qué podemos ayudarte"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  );
}
