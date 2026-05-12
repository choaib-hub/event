import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

class Home extends Component {
  render() {
    const data = this.props.events;

    return (
      <div className="  text-white  ">
        
        
        <div className="flex flex-col items-center justify-center text-center mt-16 mb-16">
          <h1 className="text-5xl font-bold mb-5">
            Bienvenue dans Event App
          </h1>

          <p className="text-slate-400">
            C&apos;est une plateforme pour gérer les événements.
            Vous pouvez voir la liste ci-dessous ou ajouter un nouveau.
          </p>

          <Link to="/add-event" className="mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-700  px-6 py-3 rounded-3xl font-semibold ">
              + AJOUTER EVENEMENT
            </button>
          </Link>
        </div>

        
        
          <h2 className="text-2xl font-semibold border-b pb-4">
            Liste des événements à venir :
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {data && data.length > 0 ? (
              data.map((item) => (
                <div
                  key={item.id}
                  className="w-[300px]"
                >
                  <EventCard event={item} />
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-slate-400">
                <p>Aucun événement disponible pour le moment.</p>
              </div>
            )}
          
        </div>

        
        <footer className="mt-28 text-center  text-slate-500">
          <hr className=" mb-5" />

          <p>
            Projet - Choaib, Hassan et Mohamed &copy; 2026
          </p>

          <p className="mt-2">
            Développement Web MERN Stack
          </p>
        </footer>
      </div>
    );
  }
}

export default Home;