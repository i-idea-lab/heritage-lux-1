import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

interface Product {
  id: number;
  name: string;
  categoryId: string;
  price: number;
  description: string;
  collection: string;
  images: string[];
  sizes: string[];
  color: string;
  material: string;
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          if (data.sizes && data.sizes.length > 0) {
            setSelectedSize(data.sizes[Math.floor(data.sizes.length / 2)]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <main className="mt-32 flex justify-center items-center h-[60vh]">
        <p className="font-label-sm text-label-sm uppercase tracking-widest animate-pulse">Unveiling the Masterpiece...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="mt-32 flex justify-center items-center h-[60vh]">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-error">The selection could not be found.</p>
      </main>
    );
  }

  return (
    <main className="mt-32 max-w-[1440px] mx-auto px-8 lg:px-16 mb-24">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Image Gallery */}
        <div className="lg:w-3/5 flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-4 w-20 shrink-0">
            {product.images.map((url, idx) => (
              <div key={idx} className={`aspect-[3/4] bg-surface-container overflow-hidden cursor-pointer ${idx === 0 ? 'border border-primary/20' : 'opacity-60 hover:opacity-100 transition-opacity'}`}>
                <img className="w-full h-full object-cover" alt={`Product thumbnail ${idx + 1}`} src={url} />
              </div>
            ))}
          </div>
          {/* Main High-Res Image */}
          <div className="flex-grow aspect-[3/4] bg-surface-container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt={product.name}
              src={product.images[0]}
            />
          </div>
        </div>
        {/* Right Side: Product Info */}
        <div className="lg:w-2/5 flex flex-col pt-4">
          <div className="mb-8">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.2em] text-outline mb-2 block">{product.collection}</span>
            <h1 className="text-3xl md:text-4xl font-headline-lg text-primary mb-4">{product.name}</h1>
            <p className="text-2xl font-headline-md text-secondary">₹{product.price.toLocaleString()}</p>
          </div>
          <div className="mb-10 space-y-4">
            <p className="text-lg font-body-lg text-on-surface-variant leading-relaxed">
              {product.description}
            </p>
            <p className="text-body-md font-body-md text-on-surface-variant italic">
              Crafted from premium {product.material.toLowerCase()} in {product.color}.
            </p>
          </div>
          {/* Size Selector */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-label-sm font-label-sm text-primary uppercase">Select Size</span>
              <button className="text-label-sm font-label-sm text-secondary border-b border-secondary/40 hover:border-secondary transition-all uppercase">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 border text-on-surface font-body-md transition-all ${selectedSize === size ? 'border-2 border-primary text-primary' : 'border-outline/30 hover:border-primary'}`}
                >
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
