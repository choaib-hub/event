import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-900 rounded-3xl   hover:border-indigo-500/30 shadow-2xl shadow-black/20 group flex flex-col  overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full"
        />
        
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 bg-blue-300   rounded-full text-[10px]  text-white  ">
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 ">
          <span className="text-[10px] font-bold  uppercase ">
            {event.location.split(',')[0]}
          </span>
          <div className="w-1 h-1 rounded-full bg-slate-700"></div>
          <span className="text-[10px] uppercase ">
            À la une
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2  group-hover:text-indigo-400 ">
          {event.title}
        </h3>
        
        <p className="text-slate-400  mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center ">
              📍
            </div>
            <span className="font-medium text-slate-400">
              {event.location}
            </span>
          </div>
          <Link 
            to={`/event/${event._id || event.id}`}
            className="text-xs font-bold text-indigo-400 hover:text-amber-50   flex items-center gap-1"
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
