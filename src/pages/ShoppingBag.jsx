import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import LookbookItem from '../components/LookbookItem';

const ShoppingBag = () => {
  const navigate = useNavigate();

  const cartItem = {
    id: 1,
    name: "Midnight Emerald Sherwani",
    collection: "Heritage Collection",
    description: "Hand-embroidered Zardozi",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA04JX46jWXbl7x_yKYxZxSJHkIv6w8cGgi3JfWC_5sKZv0OkSRYDeweeE-MoopC_JeZ4rFUeYc80DxIf_50yik9N5RLy167z2CQ9eM9zqOiiGN8I0Wss3ikqo3WA4hFgsWkcHqGVeFYshDBFkcieHDXNz43JDIfpAZ4TDeltnev1WWplvaeeEfs_NrSUU7XN39CjwhD5W4sUhuQ0umSATGnUM-dUTAAIPJtjYEsDwa15r2ZROu-1_bMkuXbJ-xA9q9ePaKgZzJ6Sk",
    size: "42 (Large)",
    quantity: 1,
    price: 145000
  };

  const lookbookItems = [
    {
      id: 1,
      name: "Hand-crafted Gold Mojaris",
      price: 12500,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFSrLRTgf-l49Fzwm5nY_s07qScvCPUtsrZLziTDvIr48AWHPgH0w1iqLjJ8JqTw8h6sAH5_Z1lImp7_Xm9xSCr6RBrDvYh3C2cH2YobI8Q5yBtvgOc204HoY2rpLpjvCBmMGxgLwTjMyq7Nk95WYa6u1VsMTcnQ63dw3934arqnvPPEC80zy_tVNvUmepvcrHTzmxi64jNkPvxOpuyZB6QamnIHCm4ohP7XhcLFDh1HKyL1_acesualmXpYafmfUc2Y0Kc38H6bs"
    },
    {
      id: 2,
      name: "Ivory Silk Pashmina Stole",
      price: 28000,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx0siX5gvWKiWJNunHAK6zf2tfMXA6sWuhrJa9TG35048v0KWF2IMzgqp_i-0zmAHOdVu6xC89H8c2qkKLu4UglUbVzwM3odyxtyXn90nHAVXGx-3Ra7jtv6jCvN4DxwgujdXCQwUSHVe0fqBdpDz8zaZp47A7_fraW2rqgLBufwtkRJd2ORRYKgnx2GYGlMAZAFXCivH4gFVcHGgC74-nfCkIvbqy80OkJCaUP7ifMJ8V7pOZeQXYuBznaf7XIx-mPeXWNZSXSpk",
      wide: true
    },
    {
      id: 3,
      name: "Royal Emerald Brooch",
      price: 18500,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOvNV9iCDFFX1J5ecmUNK1LPxhjOJgWqI1a3qpPAQ3hG93okS5VCXFGufppTEC41TIAY3cj7wvSb8S2dZZvVN82iI5DmEujgmUoH1LyLDqDXfTKKv0NYrqlXYWwYePe9jXOyV7QiigKkN2xec3a8SYuiCP2EUCKmbcqrB9r4rxxVkDVXU_U15WB655qNYDzob-ugrvr5pm3dw2fINFbx_ReVed3MzvV2Z1Ys-UbrlcAG3URzev7oS8Dd2QImRLevgm9Y5jbz_XHYc"
    }
  ];

  const subtotal = 145000;
  const shipping = 0;
  const taxes = 17400;
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
            <OrderSummary subtotal={subtotal} shipping={shipping} taxes={taxes} total={total}>
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
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
            {lookbookItems.map(item => (
              <LookbookItem key={item.id} item={item} wide={item.wide} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingBag;
