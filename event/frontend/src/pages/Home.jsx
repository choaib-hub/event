import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';

const Home = ({ events }) => {
  return (
    <div className="space-y-20 py-12">
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        
        
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
          Des événements qui <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">comptent.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
          Rejoignez une communauté de créateurs et d'explorateurs. Découvrez des événements uniques ou organisez le vôtre en quelques minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/add-event" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-[0.98] flex items-center justify-center gap-2 w-full sm:w-auto">
            Organiser un Événement
          </Link>
        </div>
      </header>

      <section className="space-y-10">
        <div className="flex items-end justify-between border-b border-slate-800/50 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Événements à Venir</h2>
            <p className="text-slate-500 text-sm mt-1 font-medium">Des expériences choisies pour vous</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            Trier par : <span className="text-white">Plus Récents</span>
          </div>
        </div>

        {events.length === 0 ? (
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-3xl transition-all duration-500 hover:border-indigo-500/30 hover:bg-slate-900/60 shadow-2xl shadow-black/20 p-20 text-center space-y-6">
            <div className="w-20 h-20 bg-slate-800/50 rounded-3xl flex items-center justify-center mx-auto text-3xl">✨</div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Aucun événement trouvé</h3>
              <p className="text-slate-500 max-w-xs mx-auto">Soyez le premier à créer quelque chose de nouveau dans votre communauté.</p>
            </div>
            <Link to="/add-event" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-[0.98] flex items-center justify-center gap-2 inline-flex">
              Créer le Premier Événement
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      <footer className="pt-20 border-t border-slate-800/50 text-center">
        <p className="text-slate-600 text-xs font-medium uppercase tracking-[0.3em]">
        Réalisé par <span>Choaib</span>, <span>Hassan</span> & <span>Mohamed</span> &copy; 2026
        </p>
      </footer>
    </div>
  );
};

export default Home;
