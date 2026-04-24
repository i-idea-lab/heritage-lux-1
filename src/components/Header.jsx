import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ simplified = false }) => {
  return (
    <header className="bg-emerald-950/95 backdrop-blur-md text-emerald-50 docked full-width top-0 z-50 border-b border-emerald-800/30 shadow-sm sticky">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-8">
          <Link className="text-2xl font-serif italic text-emerald-50" to="/">Heritage Lux</Link>
          {!simplified && (
            <div className="hidden md:flex gap-6 font-noto-serif tracking-wide uppercase text-sm">
              <a className="text-emerald-100/80 hover:text-yellow-400 transition-colors" href="#">Sherwanis</a>
              <a className="text-emerald-100/80 hover:text-yellow-400 transition-colors" href="#">Lehengas</a>
              <a className="text-emerald-100/80 hover:text-yellow-400 transition-colors" href="#">Kurta Sets</a>
              <a className="text-emerald-100/80 hover:text-yellow-400 transition-colors" href="#">Occasion Wear</a>
              <a className="text-emerald-100/80 hover:text-yellow-400 transition-colors" href="#">The Lookbook</a>
            </div>
          )}
        </div>

        {simplified ? (
          <div className="flex items-center gap-4 text-emerald-50">
            <span className="material-symbols-outlined text-xl">lock</span>
            <span className="text-xs uppercase tracking-widest font-label-sm">Secure Payment</span>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="cursor-pointer transition-transform duration-300 hover:scale-105 relative">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
              <span className="absolute -top-2 -right-2 bg-secondary text-on-secondary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
