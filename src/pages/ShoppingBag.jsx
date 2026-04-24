import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import LookbookItem from '../components/LookbookItem';
import { API_BASE_URL } from '../config/api';

const ShoppingBag = () => {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDefaultProduct = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/1`);
        if (response.ok) {
          const data = await response.json();
          setCartItem({
            ...data,
            image: data.images[0],
            size: "42 (Large)",
            quantity: 1,
            collection: data.collection
          });
        }
      } catch (error) {
        console.error("Failed to fetch cart item:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDefaultProduct();
  }, []);

  const lookbookItems = [
    {
      id: 1,
      name: "Hand-crafted Gold Mojaris",
      price: 12500,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFSrLRTgf-l49Fzwm5nY_s07qScvCPUtsrZLziTDvIr48AWHPgH0w1iqLjJ8JqTw8h6sAH5_Z1lImp7_Xm9xSCr6RBrDvYh3C2cH2YobI8Q5yBtvgOc204HoY2rpLpjvCBmMGxgLwTjMyq7Nk95WYa6u1VsMTcnQ63dw3934arqnvPPEC80zy_tVNvUmepvcrHTzmxi64jNkPvxOpuyZB6QamnIHCm4ohP7XhcLFDh1HKyL1_acesualmXpYafmfUc2Y0Kc38H6bs"
    }
  ];

  if (loading) return <div className="pt-32 text-center">Loading Bag...</div>;
  if (!cartItem) return <div className="pt-32 text-center">Your bag is empty.</div>;

  const subtotal = cartItem.price;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-8 max-w-[1440px] mx-auto">
        <div className="mb-12">
          <h1 className="font-headline-display text-headline-display text-primary italic">Shopping Bag</h1>
          <p className="font-body-md text-on-surface-variant mt-2">1 item currently in your collection.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8">
            <CartItem item={cartItem} />
          </div>

          <div className="lg:col-span-4">
            <OrderSummary subtotal={subtotal} shipping={0} taxes={taxes} total={total}>
              <button
                onClick={() => navigate('/checkout/shipping')}
                className="w-full py-5 bg-primary text-on-primary font-label-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary-container transition-all shadow-lg shadow-primary/10"
              >
                Secure Checkout
                <span className="material-symbols-outlined text-lg">lock</span>
              </button>
            </OrderSummary>
          </div>
        </div>

        <section className="mt-section-gap">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Curated Pairing</span>
              <h2 className="font-headline-lg text-headline-lg text-primary italic">Complete The Look</h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
            {lookbookItems.map(item => (
              <LookbookItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingBag;
