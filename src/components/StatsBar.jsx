import { stats } from '../data/siteData';

export default function StatsBar() {
  return (
    <section className="mx-auto -mt-10 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-2xl font-extrabold text-primary sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs text-secondary/70 sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
