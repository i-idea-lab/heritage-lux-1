import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ simplified = false }) => {
  return (
    <header className="bg-emerald-950/95 backdrop-blur-md text-emerald-50 fixed top-0 left-0 right-0 z-50 border-b border-emerald-800/30 shadow-sm">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-10">
          <Link className="text-2xl font-serif italic text-emerald-50 hover:scale-105 transition-transform duration-300" to="/">
            Heritage Lux
          </Link>
          {!simplified && (
            <div className="hidden md:flex items-center gap-8 font-noto-serif tracking-wide uppercase text-sm">
              <Link className="text-emerald-100/80 hover:text-yellow-400 transition-colors" to="/category/sherwanis">Sherwanis</Link>
              <Link className="text-emerald-100/80 hover:text-yellow-400 transition-colors" to="/category/lehengas">Lehengas</Link>
              <Link className="text-emerald-100/80 hover:text-yellow-400 transition-colors" to="/category/kurta-sets">Kurta Sets</Link>
              <Link className="text-emerald-100/80 hover:text-yellow-400 transition-colors" to="/category/occasion-wear">Occasion Wear</Link>
              <Link className="text-emerald-100/80 hover:text-yellow-400 transition-colors" to="/category/lookbook">The Lookbook</Link>
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
            <div className="hidden lg:flex items-center border-b border-emerald-50/20 pb-1 mr-4">
              <span className="material-symbols-outlined text-sm opacity-60 mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-[10px] tracking-widest p-0 w-32 placeholder-emerald-50/40" placeholder="SEARCH" type="text" />
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined cursor-pointer transition-transform duration-300 hover:scale-105 hover:opacity-80">favorite</span>
              <Link to="/cart">
                <span className="material-symbols-outlined cursor-pointer transition-transform duration-300 hover:scale-105 hover:opacity-80">shopping_bag</span>
              </Link>
              <span className="material-symbols-outlined cursor-pointer transition-transform duration-300 hover:scale-105 hover:opacity-80">person</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
