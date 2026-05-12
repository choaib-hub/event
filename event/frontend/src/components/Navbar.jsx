import React from "react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <nav className="bg-slate-950 border-b border-amber-50 px-5 py-4">
      <div className="flex items-center justify-between">
        
      
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <span className="text-white font-bold text-lg">
            Evently
          </span>
        </Link>

        
        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="text-white text-sm hover:text-indigo-400 "
          >
            Parcourir
          </Link>

          <Link
            to="/add-event"
            className="bg-indigo-600 hover:bg-indigo-700  text-white px-4 py-2 rounded-4xl text-sm font-semibold "
          >
            + New Event
          </Link>
        </div>
      </div>
    </nav>
  );
}