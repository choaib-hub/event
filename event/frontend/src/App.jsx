import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateEvent from './pages/CreateEvent'
import EventDetails from './pages/EventDetails'
import Navbar from './components/Navbar'
import axios from 'axios'
function App() {
const [events ,setEvents]= useState([]);
useEffect(()=>{
   const getEvents =async()=>{
    try{
      const res= await axios.get('http://localhost:3000/api/getEvents')
      setEvents(res.data);
    }catch(error){
       console.log(error)
    }
   }
   getEvents()
},[])

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/add-event" element={<CreateEvent addEvent={addEvent} />} />
          <Route path="/event/:id" element={<EventDetails events={events} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App