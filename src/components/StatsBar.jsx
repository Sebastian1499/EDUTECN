import { stats } from '../data/siteData';
import Icon from './Icon';

export default function StatsBar() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10">
      <div className="grid grid-cols-2 gap-6 p-2 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <div className="mt-2 sm:ml-3 sm:mt-0">
              <p className="text-xl font-extrabold text-secondary">{item.value}</p>
              <p className="text-xs text-secondary/60">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
