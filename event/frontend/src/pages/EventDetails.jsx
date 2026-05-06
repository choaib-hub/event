import { useParams, Link } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-3xl mb-6">🔍</div>
        <h2 className="text-3xl font-bold text-white mb-2">Événement Non Trouvé</h2>
        <p className="text-slate-500 mb-8 max-w-md">L'événement que vous recherchez a peut-être été déplacé ou supprimé.</p>
        <Link to="/" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-[0.98] flex items-center justify-center gap-2">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white font-medium mb-10 transition-all group">
        <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-all">←</span>
        Retour à l'accueil
      </Link>

      <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-3xl transition-all duration-500 hover:border-indigo-500/30 hover:bg-slate-900/60 shadow-2xl shadow-black/20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Visual Section */}
          <div className="relative h-[400px] lg:h-full min-h-[500px]">
            <img 
              src={event.image} 
              alt={event.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-4">
                Événement Vérifié
              </div>
              <h1 className="text-5xl font-extrabold text-white tracking-tight leading-tight">
                {event.title}
              </h1>
            </div>
          </div>

          {/* Info Section */}
          <div className="p-10 lg:p-16 flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl">
                  📅
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Date & Heure</p>
                  <p className="text-white font-semibold">{new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lieu</p>
                  <p className="text-white font-semibold">{event.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white">À propos de l'événement</h2>
              <p className="text-slate-400 leading-relaxed text-lg italic">
                "{event.description}"
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
