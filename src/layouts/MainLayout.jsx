import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Ambient mesh-gradient background: percentage-based radial gradients that scale to the actual page height, so coverage stays consistent whether the page is short (desktop) or tall (mobile stacked layout) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: [
            'radial-gradient(50rem 50rem at 0% 0%, rgba(47,111,235,0.5), transparent 60%)',
            'radial-gradient(55rem 55rem at 100% 15%, rgba(20,184,166,0.45), transparent 60%)',
            'radial-gradient(50rem 50rem at 15% 45%, rgba(232,121,249,0.35), transparent 60%)',
            'radial-gradient(45rem 45rem at 85% 65%, rgba(16,22,58,0.3), transparent 60%)',
            'radial-gradient(50rem 50rem at 10% 100%, rgba(47,111,235,0.4), transparent 60%)',
            'radial-gradient(45rem 45rem at 95% 100%, rgba(20,184,166,0.35), transparent 60%)',
          ].join(', '),
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
