import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Ambient mesh-gradient background: both position AND size in percentages, so blobs overlap continuously no matter how tall the page grows (fixed rem sizes left gaps on long pages) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: [
            'radial-gradient(70% 32% at 0% 0%, rgba(47,111,235,0.55), transparent 70%)',
            'radial-gradient(75% 34% at 100% 18%, rgba(20,184,166,0.5), transparent 70%)',
            'radial-gradient(70% 32% at 10% 38%, rgba(232,121,249,0.4), transparent 70%)',
            'radial-gradient(75% 34% at 95% 58%, rgba(16,22,58,0.35), transparent 70%)',
            'radial-gradient(70% 32% at 5% 80%, rgba(47,111,235,0.45), transparent 70%)',
            'radial-gradient(75% 34% at 100% 100%, rgba(20,184,166,0.45), transparent 70%)',
          ].join(', '),
          backgroundRepeat: 'no-repeat',
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
