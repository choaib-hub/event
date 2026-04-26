import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateEvent from './pages/CreateEvent'
import EventDetails from './pages/EventDetails'
import Navbar from './components/Navbar'

function App() {
  // Mode sombre forcé
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Hadu huma les events par défaut li banty liya f tswira
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Conférence Tech 2026",
      date: "2026-05-15",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f2?w=800",
      description: "Rejoignez-nous pour la plus grande conférence technologique..."
    },
    // ... tqder tzid lokhrin hna
  ]);

  // Had la fonction hiya li gha-nzido biha event jdid
  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/add-event" element={<CreateEvent addEvent={addEvent} />} />
          <Route path="/event/:id" element={<EventDetails events={events} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App