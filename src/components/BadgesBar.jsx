import { badges } from '../data/siteData';
import Icon from './Icon';

export default function BadgesBar() {
  return (
    <section className="bg-gradient-to-r from-secondary via-primary to-teal py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
              <Icon name={badge.icon} className="h-6 w-6" />
              <p className="text-xs font-medium sm:text-sm">{badge.label}</p>
            </div>
          ))}
        </div>
        <p className="font-hand mt-8 text-center text-2xl text-white/90">
          Tu talento, más cerca de lo que sueñas
        </p>
      </div>
    </section>
  );
}
