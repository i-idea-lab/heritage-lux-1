import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Regal couple in gold and emerald bridal wear"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-JuAyTAj99Tm6sRJSo13NKNPGxIDJpoZVPfTiJ8iYaIlO48ec7oQdFEmyo2NRNxdlkOmv6tQlcrluIEEy5097Z3HxaG8SAmY9V3xtGamhx61-mWR5V7NyQg1CxJsULDyuRdK-t6ippwldowWZdsesQ0Xqta7xjvuLLhx-SdTIOAj87LtxTW-R-KLsHTFLSnatMwca3NO_6lC083TOI7v39Nhne9p92etEweNj4TLFqbC1qIO4r3L6ZCkqJ5sAC7KLKVuwcwuLo4"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 text-center text-on-primary px-4 max-w-4xl">
          <span className="font-label-sm text-secondary-fixed tracking-[0.3em] uppercase mb-6 block">Legacy of Elegance</span>
          <h1 className="font-headline-display text-4xl md:text-6xl mb-8">Artisanal Grace. Discover the Winter Edit.</h1>
          <div className="flex justify-center gap-6">
            <button className="bg-primary px-10 py-5 font-label-sm uppercase tracking-widest text-secondary-fixed border border-secondary-container hover:bg-primary-container transition-all duration-500 shadow-xl">
              Discover the Collection
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary italic mb-2">Select Your Style</h2>
          <div className="w-24 h-px bg-secondary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { name: 'Sherwanis', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1pzbGH8D_v_SpC_kJ4pioxDbEqlX7TPH5osx0NkHUzzcjkbqhx3q41yEeJqyNmdHRLCCL-dtffLieaT0ak1HKyjnCC0Xrc_CCzYTmwtp1QqIXzA5RdaAs0knHBgSxrk4FUK5l_VkI-M0TsFGhF6gpmJfYXd2DA7vngS23Tg7w1_DkSJxnXZDCZPsMJfX832u6aHDcA7ibvUXuTeDRmt1w_1YqMrRzrKwtXTbFc17pswfeE8jGoDiDLAW3VOCS6UbkIxARrP8YLsE' },
            { name: 'Lehengas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQDI8unetgYXJ7k1qH5mV7S8QhuJrwDxnIuT7ljKeT_Z-5s8Zc566azetAgtrA-Z1Hcu43vACCVsVkf0X93_f_fjIT3Tg2E6HUQoJIWYqwnwxUXqWDjlQgwsEpcIO7X_-UexlHymM4aDPp2miMkZmKFN0DbFr0h5pZpjLkwV37qv1pkIfFbhgPO2ouX8hyqLZEawGR6UTgtTjGblOSyOZj5wogNtV12T3mty8KsaEfx0SaRRf-wslvExxU6m6EmdsBpK_5b0Ynbpc' },
            { name: 'Kurta Sets', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH2iCy5GIpGUEQ6tahgaz0Rgbz2xAtqNFC-KjjI89LC-4lc9rwipFLyr7No69kNywo0Y_f4Y1KEf6bMtcH27M0z5R8cXScCMqfINgvWw-QhVgFovlJeov5nXP7unAZhobMWRrlIn9OqQjsfCyBKRjR4E5mf6hizqnYyPhYNh_TNc6hxOwLMS9NTIT5suBMeZ-g0oHPxkZQQBn5yCItTmylPwOw5eMndPaToiDt3butNNnpULOIsGJrqf_G-_umW3Ok31lfWWi8HD0' },
            { name: 'Wedding Accessories', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbqR4mDBiga0FE0kJZWbBf60bELSH3M0WboRYn9Nw3R8W5f34-psvg4NxzJy7ffr5UR9Bv0F9luPncNQRnR9dJSOX5eB6jsosAMV97GE06PRccpzhqL4t7l-8ZsrIpNadmtpx9H2x2aXMyaCjaT93iSMFgd3X8w4p_90S3DZBWWHqWdxkE2pSrikNvihv3UavfHgPdXFYi8GQA77Etv9qXchmv5xqSyp6_HFbd2D_Bb9RRsb-C0H_b2nA0A3ef56TwYDTjc3W1x80' }
          ].map((cat) => (
            <Link key={cat.name} to={`/category/${cat.name.toLowerCase().replace(' ', '-')}`} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-secondary-container transition-all duration-700">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={cat.name} src={cat.img} />
              </div>
              <span className="font-headline-md text-lg tracking-wide uppercase text-primary">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Product Carousel */}
      <section className="bg-surface-container-low py-24 overflow-hidden">
        <div className="px-8 md:px-16 max-w-7xl mx-auto flex justify-between items-end mb-12">
          <div>
            <span className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-2 block">The Seasonal Edit</span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary">The Wedding Edit</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto hide-scrollbar px-8 md:px-16 snap-x">
          {[
            { name: 'Ivory Silk Sherwani with Zardosi Work', price: '₹1,85,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIbiw3tdWBTqM6Ge6ezj4HCq9GxIRvJv4g-oOrjzGVXjBCQnwbJpffNQk16zqEwYLJFQ-iSSVMrmPktwnTq068M7iHJ5usIo04hUT2PJTOnAqPsUKDS-jLcaB-xDXGp3WfVq0xXigVozebbAsVojc25KKAtUtISC-lkFnLeQj9UqZ5NIZLFLam7sYczXOqXORJw-QcpLPiSXcXc7MJ44IgWuBT_CEw15CseBhccg2XZcfy9Ngm3VRth-Eh5nhhydVwUDgDQBgPfLc' },
            { name: 'Emerald Velvet Royal Lehenga', price: '₹2,45,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkcC0ONNpfla2PRIx2AFX7a-4Whz-8TlZQ9wbavDTfTkY_I6vu-Ta0JSEWS2t8uqB3y4yvzx6JDKwieTVWM-MEVEQm4fWTG7k-vwlX8mkDi-alwrnjZ2_Wi8yy4HxPZyPRmI31JUbmxMmAwJrKhm8zU3RfVfEadm45E0rpVYcUlKwpNINxFA95_z-CFfZX14vBBHft7eJcyfscgCka2cK1knmbdxjFyUfVHkTnvOopoX_NZyIaDDeRNGHIqn9dtLOf2Mw4mSWfSAg' },
            { name: 'Midnight Blue Hand-Embroidered Bandhgala', price: '₹1,15,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDuY4Ra6aO91Qb6fbqoOm4fFztDrvBhPs8kGYNSzXh_f_3BNnZHGESJnf289SZaq_bMfysRzy-zUavNUWjmmxoAjKw3x3pYbxp2ANdL1RoGvVdq1by0MWAAjupGVNvEyWIzcM5UujHkaUdkbuHb1TELoL6cyvn6fLwlpSPAuNPcELkaMPbtBL0bQUz8lXGvZIxOHxIzqZzFVQcAzzfTpxi3_dDm86hAeGzs7ZmXwg_FsH9Z_jQ9_is7wKFLdnLtdmer7iD_9s_jQc' }
          ].map((prod, idx) => (
            <Link key={idx} to="/product/1" className="min-w-[320px] md:min-w-[400px] snap-start group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={prod.name} src={prod.img} />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm cursor-pointer hover:bg-tertiary-container hover:text-on-tertiary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-lg text-on-surface">{prod.name}</h3>
                <p className="font-body-md text-outline">{prod.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-3/5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-secondary-container opacity-40"></div>
            <img
              className="w-full aspect-[4/3] object-cover shadow-2xl"
              alt="Artisan weaving golden thread"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGrep2MRSpa4gA0vH3hJlxLt6bTrX_tXZm5OcPscLJnp3iizzD0hDIUDa-0V6Q6Pt_N3relVXR-LOJCvpzhiNxk33cf0XRgy6Bu0i0kkMQF7bFzA55lZvtBxSOlxxCuG1vduAcJAOcbxUV67C_RsKIXDaFz9I57KZ0QYcBGKQJGic_dCWZYy5O4rqz_D6NYXyTM0g9XRsE6Y4r4F9-EUf_rhkAoHTP3E2CvDde94WpGztBGb49tFF7J3UDDn8PeJX5LxObcONWjOM"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden md:block">
              <p className="text-secondary-fixed italic font-headline-md text-lg">"Every thread tells a story of generations."</p>
            </div>
          </div>
          <div className="w-full lg:w-2/5 space-y-8">
            <span className="font-label-sm text-secondary uppercase tracking-[0.3em]">Our Legacy</span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary leading-tight">The Soul of Indian Craftsmanship</h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Heritage Lux was born from a desire to preserve the vanishing arts of our ancestors. Each garment in our collection is hand-woven by master weavers across Banaras and Kanchipuram, using techniques passed down through centuries.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              We believe luxury is found in the patience of the loom and the precision of the needle. Our fabrics are 100% sustainably sourced, ensuring that our heritage survives for generations to come.
            </p>
            <Link to="/craftsmanship" className="inline-block font-label-sm uppercase tracking-widest text-primary border-b-2 border-secondary-container pb-2 hover:text-secondary transition-all">
              Discover Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-emerald-50 py-24 px-8 md:px-16 text-center border-t border-emerald-900">
        <div className="max-w-2xl mx-auto space-y-8">
          <span className="font-label-sm text-secondary-fixed uppercase tracking-[0.4em]">Stay Connected</span>
          <h2 className="font-headline-lg text-3xl md:text-4xl italic">Join the Inner Circle</h2>
          <p className="font-body-lg text-emerald-100/70">Subscribe to receive early access to new collections and exclusive editorial lookbooks.</p>
          <form className="flex flex-col md:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-grow bg-transparent border-b border-emerald-50/30 focus:border-secondary-container focus:ring-0 text-emerald-50 placeholder-emerald-100/40 font-label-sm py-4"
              placeholder="YOUR EMAIL ADDRESS"
              type="email"
            />
            <button className="bg-secondary-container text-primary px-12 py-4 font-label-sm uppercase tracking-widest hover:bg-secondary-fixed transition-colors" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
