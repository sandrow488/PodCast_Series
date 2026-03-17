import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EpisodeDetails from './pages/EpisodeDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
        
        {/* Header - Indigo Refinado sin Logo */}
        <header className="bg-gradient-to-r from-indigo-800 to-indigo-950 shadow-lg sticky top-0 z-50 border-b border-indigo-700">
          <div className="w-full px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-black text-white tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Mis Series Imprescindibles
            </Link>
            <nav aria-label="Navegación principal" className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-2 md:gap-6 text-sm font-semibold uppercase tracking-wider">
                <li>
                  <Link to="/" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <a href="/#episodios" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Catálogo
                  </a>
                </li>
                <li>
                  <a href="/#promocion" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Promoción
                  </a>
                </li>
                <li>
                  <a href="/#contacto" className="text-indigo-100 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content Sin Márgenes */}
        <div className="flex-grow w-full">
          <main className="w-full bg-white overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/episodio/:id" element={<EpisodeDetails />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-slate-800 text-slate-300 py-8 border-t-4 border-indigo-500 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Proyecto Final - Desarrollo de Interfaces Web</h3>
            <p className="mb-4 text-sm text-slate-400">Alumno: [Tu Nombre] | Curso: 2º DAW</p>
            <hr className="border-slate-700 w-1/2 mx-auto mb-4" />
            <p className="text-sm">
              Podcast ficticio. Contenido distribuido funcionalmente bajo 
              <a href="https://creativecommons.org/" className="text-indigo-400 hover:text-indigo-300 hover:underline ml-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded">
                Creative Commons
              </a>.
            </p>
          </div>
        </footer>
        
      </div>
    </Router>
  );
}
