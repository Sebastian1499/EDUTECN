import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* Ambient background blobs: page-anchored (absolute, not fixed) so they scroll with content and cover the whole document, not just one viewport */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary/35 blur-3xl" />
        <div className="absolute top-24 -right-40 h-[36rem] w-[36rem] rounded-full bg-teal/35 blur-3xl" />
        <div className="absolute top-[46rem] left-1/4 h-[32rem] w-[32rem] rounded-full bg-fuchsia-400/25 blur-3xl" />
        <div className="absolute top-[70rem] right-1/3 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-primary/25 blur-3xl" />
      </div>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
