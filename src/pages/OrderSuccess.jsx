import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Zardosi Hand-Embroidered Sherwani",
      price: 124000,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFNhMWtmxj8xguLcOsuGNlLj855pniVORlN2x1jNNjxOdmJMnviMDdqACWOthws90yOu3loOyp-VXn6ViKv0Zx05XcgrgtjGpkduHqMRmq8VJ1TaOiB5H4YI4Z5wqp94wi2-jYfh0qeldiwlWd1u_7N3niYtHLeKjv_aK_ynXSmvbAcdrqm72QHdY-54vFW8XvZ11WC88epa6pQBoZILYTbfSxL3Z9o5zVd52ugVqYhjmTfJQJhWa6RGeD5Bcw5Eton1AEj7O6sXE",
      size: "42",
      color: "Deep Emerald",
      quantity: 1
    },
    {
      id: 2,
      name: "Artisan Brocade Safa",
      price: 12500,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWlEe5igznQ43PYw-1V0yofk1YP0htOZ5vPjh8oXQ3k7ulmNvZ74nLjWyVtpGA1jhrd83IP41u1FEfW9k0Ed0hT7YfEIJ3XvKx2Ji8FAeU73VnwogOtRgL4B4DqHp9-93QiAnfEeQWSVTZJnjzPrirYtHI-IEr45K9gimzBzXAZ05x3DXttScu3LUpHeTXJDqfywsaVSp_CyMqI00HCJnFHwBp2MxMRHRV4HUM7YuBW2q6oU4hJjHRtWhgekQ-t-5hVVrr-UUn2gE",
      size: "One Size",
      color: "Ivory Gold",
      quantity: 1
    }
  ];

  const total = 136500;

  return (
    <div className="bg-background min-h-screen text-on-surface">
      <main className="min-h-screen pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto">
          {/* Hero Success Message */}
          <section className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto shadow-sm">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <h1 className="font-headline-display text-headline-display text-primary mb-4">Thank you for your order</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">Your journey with Heritage Lux has begun. Our artisans are now preparing your selection with the utmost care and precision.</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Order Details Column */}
            <div className="md:col-span-7 space-y-8">
              <div className="bg-white p-8 border border-outline-variant/30 rounded-lg">
                <h2 className="font-headline-md text-headline-md text-primary mb-6">Order Summary</h2>
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <CartItem key={item.id} item={item} variant="success" />
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/40 space-y-3">
                  <div className="flex justify-between text-body-md text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-body-md text-on-surface-variant">
                    <span>Shipping (Express Heritage)</span>
                    <span className="text-primary font-medium tracking-tight uppercase text-xs">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-headline-md text-primary pt-4 border-t border-outline-variant/20">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-on-primary p-8 rounded-lg flex items-center gap-6">
                <span className="material-symbols-outlined text-4xl text-secondary-fixed">auto_awesome</span>
                <div>
                  <p className="font-headline-md text-body-lg text-secondary-fixed mb-1">A Note on Craftsmanship</p>
                  <p className="text-body-md opacity-80 italic">Each piece in your order is being individually inspected by our master tailors to ensure the heritage of the stitch is preserved.</p>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-surface-container-low p-8 border border-outline-variant/30 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Tracking & Delivery</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Order Number</p>
                    <p className="font-headline-md text-headline-md text-on-surface">#HL-8829410</p>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Estimated Arrival</p>
                    <p className="font-body-lg text-body-lg text-on-surface font-semibold">November 12 - November 15, 2024</p>
                    <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">A tracking link will be sent to your email once the courier is dispatched.</p>
                  </div>
                  <div className="pt-6 border-t border-outline-variant/20">
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Shipping Address</p>
                    <p className="text-body-md text-on-surface">14B Rajpath Estate,<br/>New Delhi, Delhi 110001<br/>India</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
                >
                  Continue Shopping
                </button>
                <button className="w-full py-4 bg-transparent text-primary font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 hover:border-primary transition-all duration-300">
                  View Order History
                </button>
              </div>

              <p className="text-center text-label-sm font-label-sm text-on-surface-variant px-4">
                Need assistance? Contact our Concierge at <span className="text-primary font-bold">concierge@heritagelux.com</span> or call <span className="text-primary font-bold">+91 11 4050 6000</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccess;
