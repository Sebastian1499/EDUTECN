import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import Icon from '../components/Icon';
import { site } from '../data/siteData';

export default function Contacto() {
  return (
    <>
      <Seo
        title="Contacto"
        description="Comunícate con el Colegio Ateniense. Estamos para ayudarte."
      />

      <section className="bg-secondary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Contáctanos</h1>
          <p className="mt-4 text-white/80">Resolvemos tus dudas y te acompañamos en el proceso.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-secondary">Envíanos un mensaje</h2>
          <p className="mt-1 text-sm text-secondary/70">
            Formulario de demostración: por ahora no envía datos a ningún servidor.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <Icon name="map-pin" className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="text-sm font-semibold text-secondary">Dirección</h3>
              <p className="text-sm text-secondary/70">{site.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <Icon name="phone" className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="text-sm font-semibold text-secondary">Teléfono</h3>
              <p className="text-sm text-secondary/70">{site.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <Icon name="mail" className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="text-sm font-semibold text-secondary">Correo</h3>
              <p className="text-sm text-secondary/70">{site.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
