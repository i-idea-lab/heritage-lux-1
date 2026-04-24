import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-50 full-width py-20 px-12 border-t border-emerald-900 mt-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <span className="text-xl font-serif text-yellow-500">Heritage Lux</span>
          <p className="font-noto-serif text-xs uppercase tracking-widest leading-loose opacity-60">
            Curating timeless Indian craftsmanship for the modern global connoisseur.
          </p>
        </div>
        <div className="flex flex-col gap-4 font-noto-serif text-xs uppercase tracking-widest">
          <h4 className="text-yellow-500 mb-2">Discovery</h4>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors duration-200" href="#">Our Heritage</a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors duration-200" href="#">Store Locator</a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors duration-200" href="#">Craftsmanship</a>
        </div>
        <div className="flex flex-col gap-4 font-noto-serif text-xs uppercase tracking-widest">
          <h4 className="text-yellow-500 mb-2">Concierge</h4>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors duration-200" href="#">Shipping & Returns</a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors duration-200" href="#">Privacy Policy</a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors duration-200" href="#">Sustainability</a>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="font-noto-serif text-xs uppercase tracking-widest text-yellow-500">The Atelier Newsletter</h4>
          <div className="flex border-b border-emerald-800 pb-2">
            <input className="bg-transparent border-none focus:ring-0 text-xs tracking-widest w-full placeholder:text-emerald-200/30" placeholder="ENTER YOUR EMAIL" type="email"/>
            <button className="material-symbols-outlined text-yellow-500">arrow_forward</button>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto opacity-40 font-noto-serif text-xs uppercase tracking-widest">
        <span>© 2024 Heritage Lux. All Rights Reserved.</span>
        <div className="flex gap-8">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Vogue Business</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
