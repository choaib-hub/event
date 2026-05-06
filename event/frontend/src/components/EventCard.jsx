import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-3xl transition-all duration-500 hover:border-indigo-500/30 hover:bg-slate-900/60 shadow-2xl shadow-black/20 group flex flex-col h-full overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider">
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
            {event.location.split(',')[0]}
          </span>
          <div className="w-1 h-1 rounded-full bg-slate-700"></div>
          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
            À la une
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors duration-300">
          {event.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
          {event.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs">
              📍
            </div>
            <span className="text-xs font-medium text-slate-400">
              {event.location}
            </span>
          </div>
          <Link 
            to={`/event/${event.id}`} 
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-1"
          >
            Détails
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
