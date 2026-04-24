import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  return (
    <main className="mt-32 max-w-[1440px] mx-auto px-8 lg:px-16 mb-24">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Image Gallery */}
        <div className="lg:w-3/5 flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-4 w-20 shrink-0">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBIu3QRXjw-EKgYLY-gSyn94Acsgwst7Fm0i_H9IadUXObEF3_qKObOv5Tbkb8eCQpRNKWEgoL8il-pMHagaZfzvpuUApZzpmdydKcwhkY2urbW9fKETMODDgvmEcdMwihdUh1Ii1OMqBJS99MATClcqKpWjiXoO-_sihEDKJytQWFcWGKyDW50Po2prfUt5ThGPMTFYG52r_fXSgIB7KvCzcEQm8Yo_kWSwsWE8nUpf5Nd2COAc_RyfjmgzdcL8JWuX0CGZcXYZJ4',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuD3lLW_NTbxilwGVsUevDDXOOWqWyV24_LhIbuYzVrc93AfDDIWKLRflhsB3JyUp7lrf-w_-OeoehyOs4Y8KA0_Me2tYcqmxDSIk52kGjL5Cugovc7AsaGBOqq16j6LOdHOZxJXQQF3aGgroJjdyqwXaLxYec4PP6DFLwurmXLXmlv-KEnh6mjqS8s_Iy_lbP0VkIVUPF2UPTFfwluWTNQSpxHiQJdUB2Fi6CwyUQ7rCsDhWHreVf-U14cd2QVaflbEPbKG-EAKYp0',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDWGUNHHdr5qHsfNk_rFIxwm3LG1uMCK5vaVgdUEC2rTCZt0e3BdGdr-rSHvlB0bhOim_GleSeQZE7nADcgZss5MFuN1X0Bg6FIqNvuqv_pT1IgFba4qOBS4D5U8BQUDmb3aWclIsJ9SZFzB8buhz24UH3D2IQVjekHZxvnCvqOKPvdBmYAN5Vrf8T6AxDIYfV-fO8o_eT6E4xQXFaHjhpLc-ttBNMjdcy_SpTr2BnuhbxqgAH7fiW4VvbF_Ln4Vc2M27aDYtDzGH4'
            ].map((url, idx) => (
              <div key={idx} className={`aspect-[3/4] bg-surface-container overflow-hidden cursor-pointer ${idx === 0 ? 'border border-primary/20' : 'opacity-60 hover:opacity-100 transition-opacity'}`}>
                <img className="w-full h-full object-cover" alt={`Product thumbnail ${idx + 1}`} src={url} />
              </div>
            ))}
          </div>
          {/* Main High-Res Image */}
          <div className="flex-grow aspect-[3/4] bg-surface-container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Midnight Emerald Velvet Sherwani"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH9h262r49XBBNT7g7wkKiZ2dLE80fvjsjqo1ZvV2TSUhVUHQvjZt-c0S5As-dyz2HpYd2Ad1oJssnASrrASaqN5RjpJzYvdCsLOLREtxfl5ScDr5lHJvN4ucgKo57xKop4kIr7McL-Kv_etNE1urfs7w5OuH8r74ogzlBu2b48akbkRrGhvNWBfHpalXWUIS_WHfOmy630PQ7BcHtUl3pwQAuKmeSc32MsbzzxsBaON16iuMSB7hfziwlzXQfj2wUPc_NNaJXo9A"
            />
          </div>
        </div>
        {/* Right Side: Product Info */}
        <div className="lg:w-2/5 flex flex-col pt-4">
          <div className="mb-8">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.2em] text-outline mb-2 block">The Royal Collection</span>
            <h1 className="text-3xl md:text-4xl font-headline-lg text-primary mb-4">Midnight Emerald Velvet Sherwani</h1>
            <p className="text-2xl font-headline-md text-secondary">₹1,85,000</p>
          </div>
          <div className="mb-10 space-y-4">
            <p className="text-lg font-body-lg text-on-surface-variant leading-relaxed">
              Exude regal sophistication in our signature Midnight Emerald Velvet Sherwani. Each piece is a labor of love, featuring meticulously hand-stitched velvet and antique gold zardosi embroidery that captures the essence of ancestral Indian craftsmanship.
            </p>
            <p className="text-body-md font-body-md text-on-surface-variant italic">
              Includes matching silk trousers and a heritage dust bag.
            </p>
          </div>
          {/* Size Selector */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-label-sm font-label-sm text-primary uppercase">Select Size</span>
              <button className="text-label-sm font-label-sm text-secondary border-b border-secondary/40 hover:border-secondary transition-all uppercase">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className={`py-3 border text-on-surface font-body-md transition-all ${size === 'M' ? 'border-2 border-primary text-primary' : 'border-outline/30 hover:border-primary'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Action Button */}
          <button className="w-full bg-primary text-secondary-fixed py-5 font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary-container transition-all group">
            Add to Bag
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">shopping_bag</span>
          </button>
          <div className="mt-12 space-y-6 pt-12 border-t border-outline/10">
            {[
              { icon: 'auto_awesome', title: 'Artisan Craftsmanship', desc: 'Over 120 hours of manual embroidery by master artisans.' },
              { icon: 'local_shipping', title: 'Complimentary Shipping', desc: 'Global luxury shipping with door-to-door concierge service.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">{feature.icon}</span>
                <div>
                  <h4 className="text-label-sm font-label-sm text-primary uppercase">{feature.title}</h4>
                  <p className="text-body-md font-body-md text-on-surface-variant">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <section className="mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline-lg text-primary">Complete the Look</h2>
            <p className="text-lg font-body-lg text-on-surface-variant">Curated pairings to elevate your ensemble.</p>
          </div>
          <button className="text-label-sm font-label-sm text-primary uppercase border-b-2 border-primary pb-1">Shop Entire Look</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Tilla Embroidered Silk Stole', price: '₹24,500', label: 'Champagne Silk', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlJZScB0puZEbVTKr2M8wwDpYHpcG1UZixMwpb9Vlvzo0zlIy-qgq1Sfm-C6goMXlDyzRwHLFunAxpIlXWP9nRGJbTiYideHD7Y3pz-ZBJAu61ZtGrXcPtUXo9jxYForFh0MUPN_qul6k89tZ5MFl3lzcHh7pETVxEH1YlVEOimrGEpB2PHoHcx3_8O-ye0VWoKHksD9CGfN9n_pUgBbY-WFVWVBEgy1tCq7Y54YokJgGTkjng0aB8OQIDIJ7dcFE_4sYBhAom4x8' },
            { name: 'Royal Velvet Mojaris', price: '₹18,000', label: 'Handcrafted', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpSGxSE7YWMUI42A4w5WCv4V8PFCgiUqg7GmzZIcL52j30EVAv99aWCmDJPz_rOEDPfj_XuRwhN7aKsYX-IfTB_kQ3UEvGqvzQV4ZCry95NNBCak39wcV8DJC7tJa52c5wa3e4uNsYapPuKpEKWMgGr8afYq7JP19Me9RHFsuEq7oIULIDorJBSuw3TthME_L41o1TGEMjHsfQaPK7hFM1c0OL8aes2JCAqwdnsxLe9fuMlexb8oAeK2mBGbZyttoI4XlJiVDfAnk' },
            { name: 'Antique Gold Kilangi', price: '₹32,000', label: 'Fine Jewel', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDguPMeZnGCPYelLLA1SkWLMKSHPfpQiEC0-yIWbnQ91uzVfpIr-3kwR7R_KhFWUMdtBhGqRDG--abxnq2lN1ZTTc5NPzavVGsk5mdt71jfWLkQ_g5SyD733RQGzssBxm7ezYmxT-EIyJcUtD4lRj0XPq37KPGZAHGtRjY0pY1hn7ij1ERh19fcqDYqTbQKfpcSw60yuyzAIzjV4WDj2WEECZ-FIj2dIzWzBc1oAklMw9K1iJzC2RnkE4_ltSIya2GmENG2RYeAQR4' }
          ].map((item, idx) => (
            <Link key={idx} to="/product/1" className={`group cursor-pointer ${idx === 1 ? 'md:mt-24' : ''}`}>
              <div className="aspect-[2/3] bg-surface-container-high mb-6 overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.name} src={item.img} />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-label-sm font-label-sm text-primary uppercase">{item.label}</div>
              </div>
              <h3 className="text-lg font-headline-md text-primary group-hover:text-secondary transition-colors">{item.name}</h3>
              <p className="font-body-md text-on-surface-variant">{item.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
