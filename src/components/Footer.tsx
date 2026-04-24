import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-50 py-20 px-8 md:px-12 border-t border-emerald-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link className="text-xl font-serif text-yellow-500" to="/">Heritage Lux</Link>
          <p className="font-noto-serif text-xs uppercase tracking-widest leading-loose text-emerald-200/60">
            Curating timeless elegance for the modern aristocrat. From the heart of India to the global stage.
          </p>
        </div>
        <div>
          <h4 className="font-noto-serif text-xs uppercase tracking-widest text-emerald-50 mb-8">Client Service</h4>
          <ul className="space-y-4 font-noto-serif text-xs uppercase tracking-widest">
            <li><Link className="text-emerald-200/60 hover:text-yellow-500 transition-colors" to="/">Our Heritage</Link></li>
            <li><Link className="text-emerald-200/60 hover:text-yellow-500 transition-colors" to="/">Store Locator</Link></li>
            <li><Link className="text-emerald-200/60 hover:text-yellow-500 transition-colors" to="/">Shipping & Returns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-noto-serif text-xs uppercase tracking-widest text-emerald-50 mb-8">Philosophy</h4>
          <ul className="space-y-4 font-noto-serif text-xs uppercase tracking-widest">
            <li><Link className="text-emerald-200/60 hover:text-yellow-500 transition-colors" to="/">Craftsmanship</Link></li>
            <li><Link className="text-emerald-200/60 hover:text-yellow-500 transition-colors" to="/">Sustainability</Link></li>
            <li><Link className="text-emerald-200/60 hover:text-yellow-500 transition-colors" to="/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-noto-serif text-xs uppercase tracking-widest text-emerald-50 mb-8">Follow Us</h4>
          <div className="flex gap-6">
            <span className="material-symbols-outlined cursor-pointer hover:text-yellow-500 transition-colors">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-yellow-500 transition-colors">camera</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-yellow-500 transition-colors">mail</span>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-noto-serif text-xs uppercase tracking-widest text-emerald-200/40">© 2024 Heritage Lux. All Rights Reserved.</p>
        <div className="flex gap-8 font-noto-serif text-xs uppercase tracking-widest text-emerald-200/40">
          <Link className="hover:text-yellow-500 transition-colors" to="/">Terms of Use</Link>
          <Link className="hover:text-yellow-500 transition-colors" to="/">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
