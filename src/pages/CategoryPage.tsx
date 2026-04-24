import React from 'react';
import { Link, useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Emerald Raw Silk Kurta', price: '₹18,500', category: '2 Piece Set • Hand Embroidered', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIcgRCJo1WECjXCe85ySs0IiRmBaNDrH962L-tjGDYjgOx1nTUQs7xnn9KSPSSvsZajuTfCXbFQOsnDlPTlHqGdwRYjpzn7zXlNmdADA72biZWhTnt4UpssgLYM93XRh_Lxglk9AtnK-gD3oiLPgqgrSDZNIpVLsED0hA9K3Q-ObZgYtWLfNIdv_vxxq7GEwqhSu-DkrY29Rc-UqR9xeW3sYGVHEuLxkg__KowZtkohl5-_60S1ztVLt-hLBRirrjGZRRSl5LIYz0' },
  { id: 2, name: 'Ivory Chikankari Set', price: '₹24,000', category: 'Lucknowi Craft • Pure Linen', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH-9-NgWo6dnrgigIrGvwcWYYzNqG_k14e14l2Ys5dILshx19XClqomTVYoqrukPkhFtPzwuYovakOFY8dAuJADvyZqW1RUVsRLTTDHCBcIseMFHNVswbar6IBtw6LRfOxsvkMNqh9hEHhBb87kjRS8V0oQci2IVcEr8U5ZJYstif7gzifHnjXnt7RyBSPSZkYVrclJghhuWv7Q6QTK7nrl-nPG-IduYdTL8DyVx0PP1dXnl7UMGuifynZd5soAz2_OOV9TklddN0' },
  { id: 3, name: 'Midnight Indigo Kurta', price: '₹12,200', category: 'Modern Fit • Giza Cotton', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVdejoSLYZCMqhxcnFd-eQAWwDd3ibCHOrIpcpY51-0c0POlpUILsjuQR69FP5RwrEXHtLl7a6rnMaNE9jN45JpIquZHZXGRul3e2pL7RThszA6wwqdHniW6QZUCgrbfVR-aQjVLttQBEneyHax8Q77AtFcECWMlu-oV5q9U09op5KoYyGL9dEvuOaF38d0iruKr-GTK8p4FS7z77oxf79OQEKK0XGb_opcWUDKNg16P2ZWCPw07fQDHlza_KHNCBiQGQLAniRwIk' },
  { id: 4, name: 'Sunset Ochre Silk', price: '₹31,500', category: 'Banarasi Weave • Classic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbO_2s-bJ9LohBOwiNzUgcppBnoVbLR4h3EVt-gt6w-wudtZ2QV9lgFBcq2HicAq5TkgCrAww_puwRq3r0b12ZlxSxztQwq0S0Y3YDvnFINXE-XrWbzCpmB-Ort-LCR-tocXhaAGQSqBIKsBPWGScoBX3VUw5Yc1oSpYMVbexXuvqpERsBVKe64qco-avyg4wyQ6PeVfxjn4YeS3a0T64Ciqu4U_60JCxi9lUMhup9bkHL1l499zbq83xb-7sNK-E5CyvBhgqkCwE' },
  { id: 5, name: 'Charcoal Geometric Set', price: '₹15,900', category: 'Matte Silk • Contemporary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMk5zV8FwROaNmuvKkDO85okbT-JeWc-GiePqSKG2yeMcMrPH6X_JcbhN0BLpjhFupYgh5vTuha1GaHmyQyIRVxIbmw0rN7gAUslC3BNxcO2oMN0KdcpvhJCwYDgGMO2AyP1WPWUf8eOfcAzOqNxOo7KSDmvqmY1i7-rUJgVK6j2ZsaQ14H_eWlJhiRu-PX9NL7qGLkuAyI-p1NXX3grIaC81ozLEUe1OQSHn-p3HM8d9ZdnE-H53s-gGpM8Mb3vY_mCI4mvFN4w8' },
  { id: 6, name: 'Saffron Embroidered Set', price: '₹28,000', category: 'Ceremonial • Hand Crafted', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdicBU-R6PsOIY5iP5vfP_kW4dgnCBaTCchDQTlpZ_J6a3LjSs1lF_CjiCLjMf-WfHJfmdzzhXP6cF_vczeq9VkDkL48nhC0NNT-u83FSHsBveilcxUGpBtkyaLw-pmgYQ7rLieUpIXSVloRBdK_BF132DSiVMByBMIEOE3_7IVvH6GR7tMMOq9LyIwsqTXPqUWfz7jxgEWh8Vpc1cavyrfKoJBJIbwJMQQpfLEIkgPmNlD1ZOhWPCIm5CmDp_061JT40AzIki4rE' },
];

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const isSherwanis = categoryName === 'sherwanis';
  const formattedTitle = categoryName ? categoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Collection';

  return (
    <main className="pt-32 pb-24">
      {isSherwanis ? (
        /* Screen 3 Hero Header Section */
        <section className="px-8 md:px-16 mb-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
            <div className="w-full md:w-2/3">
              <h1 className="font-headline-display text-4xl md:text-6xl text-primary mb-8">Sherwanis</h1>
              <p className="font-body-lg text-lg text-on-surface-variant max-w-xl leading-relaxed">
                An ode to the timeless silhouettes of the Indian subcontinent. Each piece is a masterclass in ancestral craftsmanship, featuring intricate hand-embroidery and precision tailoring designed for the modern gentleman’s most defining moments.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-[3/4] bg-surface-variant overflow-hidden">
              <img className="w-full h-full object-cover" alt="Sherwani Close-up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNqhQKChxJ4WvdkQSIzTLVZyuhxLQQIiAGvt5rMeoJmah1bqilVan5itNJItUnJXX6f5TQCGYw1O9Iawe53YpJCxma_mq8ZjPHMcbwS0rgdQape9iy-6n-wE6WdSr8zPZRoah-6I-8B5w2_7BeXR30sfpwfzVJOz0eXvlgWnyTnUJbk06HN6wNVhU1fOlymTsysEid-k5rPGeoQq-okq3DljkK0kDMpUHUhwvokjamr179yuSVXFYWZE4T5DnIdiidrg0xDCvS0go" />
            </div>
          </div>
        </section>
      ) : (
        /* Screen 2 Header */
        <header className="mb-16 max-w-7xl mx-auto px-8 md:px-16">
          <nav className="flex items-center space-x-2 text-label-sm font-label-sm text-outline mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold">{formattedTitle}</span>
          </nav>
          <h1 className="font-headline-display text-4xl md:text-6xl text-primary italic mb-2">{formattedTitle}.</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            Refined silhouettes meeting artisanal excellence. Explore our curated selection of heritage-inspired designs for the modern individual.
          </p>
        </header>
      )}

      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-10">
            <div>
              <h3 className="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-6 text-primary border-b border-outline-variant pb-2">Occasion</h3>
              <div className="space-y-3">
                {['Wedding', 'Mehendi & Sangeet', 'Casual Festive'].map(occ => (
                  <label key={occ} className="flex items-center space-x-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded-none border-outline text-primary-container focus:ring-primary-container transition-all" type="checkbox" />
                    <span className="font-body-md text-sm text-on-surface-variant group-hover:text-primary transition-colors">{occ}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-6 text-primary border-b border-outline-variant pb-2">Fabric</h3>
              <div className="space-y-3">
                {['Raw Silk', 'Handspun Cotton', 'Linen Silk'].map(fab => (
                  <label key={fab} className="flex items-center space-x-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded-none border-outline text-primary-container focus:ring-primary-container transition-all" type="checkbox" />
                    <span className="font-body-md text-sm text-on-surface-variant group-hover:text-primary transition-colors">{fab}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-6 text-primary border-b border-outline-variant pb-2">Price Range</h3>
              <div className="space-y-4">
                <input className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-secondary transition-all" type="range" />
                <div className="flex justify-between text-label-sm font-label-sm text-outline">
                  <span>₹5,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-6 text-primary border-b border-outline-variant pb-2">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button key={size} className={`border h-10 flex items-center justify-center font-label-sm text-label-sm transition-all ${size === 'L' ? 'border-primary bg-primary text-on-primary' : 'border-outline hover:border-primary'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-surface-container-highest">
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest">SHOWING {products.length} PRODUCTS</p>
            <div className="flex items-center space-x-4">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Sort By</span>
              <select className="bg-transparent border-none font-label-sm text-label-sm uppercase tracking-widest focus:ring-0 cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-gutter gap-y-16">
            {products.map((prod) => (
              <Link key={prod.id} to={`/product/${prod.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img alt={prod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 shadow-sm transition-shadow hover:shadow-lg" src={prod.img} />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <button className="bg-surface-container-lowest text-primary py-4 px-6 font-label-sm text-label-sm uppercase tracking-[0.2em] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-md text-xl text-primary mb-1">{prod.name}</h3>
                    <p className="font-body-md text-on-surface-variant text-sm mb-2">{prod.category}</p>
                    <p className="font-label-sm text-label-sm font-semibold text-secondary">{prod.price}</p>
                  </div>
                  <span className="material-symbols-outlined text-outline hover:text-error transition-colors">favorite</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex justify-center items-center space-x-4">
            <button className="w-12 h-12 border border-surface-container-highest flex items-center justify-center hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-label-sm">1</button>
            <button className="w-12 h-12 border border-surface-container-highest flex items-center justify-center hover:border-primary transition-all font-label-sm">2</button>
            <button className="w-12 h-12 border border-surface-container-highest flex items-center justify-center hover:border-primary transition-all font-label-sm">3</button>
            <span className="px-4 text-outline">...</span>
            <button className="w-12 h-12 border border-surface-container-highest flex items-center justify-center hover:border-primary transition-all font-label-sm">12</button>
            <button className="w-12 h-12 border border-surface-container-highest flex items-center justify-center hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </div>

      {isSherwanis ? (
        /* Screen 3 Editorial Section */
        <section className="bg-primary-container text-on-primary py-24 overflow-hidden mt-24">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex justify-between items-baseline mb-16">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-emerald-50">Complete the Look</h2>
              <a className="font-label-sm text-yellow-400 hover:underline" href="#">View Editorial Story</a>
            </div>
            <div className="flex gap-12 overflow-x-auto hide-scrollbar pb-8">
              {[
                { label: 'Accessories', title: 'The Heritage Accoutrements', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5DoZLzJDGH6OwAWtVExeKxhciseQUI1LCkUchA9GancfCGMMglrcHYYaa2ERPDWPtttRjuN9qLNtC3hGlB68nVj6YouTkmubTIXOXUiVtMQVy5l4N-4ASWKFjy70Wi8cf21NrYKtaQM5j9nopYbVnAD8xn9jKqotmIwrwRs_OxLwR1XeGLfMaLxirrURqOd25ZZXafApAhYZG2lkJtyWRsBTDqzuMvvz4FylQG9d1KFXnbXor1j7kZCu-fjbBSQN_iGEaJ783iAU', width: 'w-[450px]', aspect: 'aspect-[16/9]' },
                { label: 'Jewelry', title: 'The Nawabi Malas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArTqzatWdZcXsvwiI-ndWoXOoyB5jj8zZXuhrc7mnKcGHB97s0SgkH8Bjq0ae4Qx5UoHl-Pui8xOx49WvFnA4_M0-K5rOmQvCt-KHdjgUmbodyqNJFZdRqysZdHjE6-DQcoESQQKHQLp1SNkLaqSY11LZLYOyC8dRMjty4B1SxcDcnp7m3C9U4sPwqaE8hBiQHc-blMvlH08E0NSGTyEDJ_qFnbs-1F_JdPaBBY0ZOzJzS3Nbh1knuzVlRJUcQNGLDSkOmOZvJ6xI', width: 'w-[320px]', aspect: 'aspect-[3/4]' },
                { label: 'Finishing Touches', title: 'Hand-woven Pashmina Stoles', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlDhoWX6cEOjQ5o29lHuSbkB_LfcIMG8tUE3eKCBFkQ3rlYyS5SRafUGAYbKSMisbQxMxlwJiy_VS3Y97lG-GAiXTpgsGfid_ogZ2UuMgUFv5OHr9mDF-K21O2maXHVMI6nDlULiWgHu8NUqUXSPtWVE1OeI2yEtTxxbHnR5y_IYCFuAdMLTHbPSULEDMiQuvPl1QZ2_Lfr_nx9aIkL6IbdEkB70ot2YRid2fZVe1E2SMESr1FGCkGvPn73URW6L5bFA66U0nZBBA', width: 'w-[450px]', aspect: 'aspect-[16/9]' }
              ].map((item, idx) => (
                <div key={idx} className={`flex-shrink-0 ${item.width}`}>
                  <div className={`${item.aspect} overflow-hidden mb-6`}>
                    <img className="w-full h-full object-cover" alt={item.title} src={item.img} />
                  </div>
                  <p className="font-label-sm uppercase tracking-widest text-emerald-100/60 mb-2">{item.label}</p>
                  <h3 className="font-headline-md text-xl md:text-2xl text-emerald-50">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Screen 2 Lookbook Section */
        <section className="bg-surface-container-low py-32 overflow-hidden mt-24">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary italic mb-12">The Lookbook : Complete the Set</h2>
            <div className="flex space-x-8 overflow-x-auto pb-12 snap-x no-scrollbar">
              <div className="flex-none w-80 snap-start">
                <div className="aspect-[3/4] mb-6 bg-surface-container-highest">
                  <img alt="Luxury Mojari" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD6GVN8YvjF8zI_LDXP_ew7vj2fTlq2tfAluwSoj_JbzWX8_ksFMUOsWKz_xTJrEHll0IaBOcfbrljbqOql-DSX9S5ykwoGNIAFe1eHmc1gcH_y-T58Cus4kw_H7OShMSPkj1OmjGJIPUtHdcryqkU_lIbEx38S_jE6LJg4bHZQF-iitIy3ecBLdkqo_WAjlUZ2czsIQ7oe8YmEdTt40_2lcdLEKuRJcpfxXBce86iQ1yGKbzHX288uYo53PpVtPoGIzq4BTpgWAc" />
                </div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Handcrafted Mojari</p>
                <p className="font-body-md text-on-surface-variant">₹4,500</p>
              </div>
              <div className="flex-none w-[450px] snap-start">
                <div className="aspect-[16/9] mb-6 bg-surface-container-highest">
                  <img alt="Silk Stoles" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4nw792Idqir5QIfnbzSUE71_q2pdlLsDJFO3xezVi24MNMV1MK8Ik_8TvxGIqtcaTwhUsUhnGUEdLlitpExM3pHhqUn_yaoIbAy7s7A5x_COkoxX6o9Wc-ihkcvTOYE43KjJQawpgkQueBXFKHhp9kSfpoZsraBD7YQCMZ-luf_RGLSN-1dFpCbofphGAszNeD47tAxvwseNSUlfqbGjFwzWl1DVWP82crLvjgQOPb3CxHMI5vL7MtvEInHfneZsF06YnWgwJhRQ" />
                </div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Artisan Silk Stoles</p>
                <p className="font-body-md text-on-surface-variant">₹8,900</p>
              </div>
              <div className="flex-none w-80 snap-start">
                <div className="aspect-[3/4] mb-6 bg-surface-container-highest">
                  <img alt="Jeweled Brooch" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ajZtA559ByUduAbIHcV1yu3w61BqhKWvueDGeIKXsSkoFVaLkzoVhvU-qwUzGf3SEnTbklRrQCWdLMqJrhhu5rf1OXhDuAZBD0MvGYf2qI6fhkZ5-DddMpCR3_FORSS5z99hFiOvESRhzf0iXimuR-hofumlDoKpHFszXe67UNhZbUaMwZrmyXKt8pinAPiPrVN5HzdTYpBrMS3O3D3zbnkG27ZXZWFFQtBfUq6KeOBwqntuoFCJSenjBKQxBpSZp2HxDbKa-ZI" />
                </div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Kundan Brooch</p>
                <p className="font-body-md text-on-surface-variant">₹12,000</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CategoryPage;
