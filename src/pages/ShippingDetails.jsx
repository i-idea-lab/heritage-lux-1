import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

const ShippingDetails = () => {
  const navigate = useNavigate();

  const cartItem = {
    id: 1,
    name: "Midnight Emerald Sherwani",
    collection: "Heritage Collection",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVnSQlX5plH3GI8053VFt6_IERJyZ1t2MsaGdRowtHrTFjCrL_L_NkKmcyNVCLqesld1u8EoCkLTnGCNF4eA2vGyxpBKpkG-3JtEFk34xoXtRol0jN1dyGXKSS5g1OkoXfhP-05H-bqK14fp2qg6reDvb3-WXxcWMbPS1_taUxhNoYOsS5iKmgYfrfeaEp7t90xe6ljtSTL1ovsjCrPHowWzeug2kOQTOO1TDGDAX94RCF3P12UX3ebIGd7w5HHiSfF4kyI0ZnEhU",
    size: "L",
    quantity: 1,
    price: 124000
  };

  const subtotal = 124000;
  const shipping = 0;
  const taxes = 14880;
  const total = subtotal + taxes;

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Left Side: Shipping & Delivery */}
          <section className="flex-1 max-w-3xl">
            <div className="mb-8">
              <Link className="inline-flex items-center gap-2 text-primary font-label-sm hover:opacity-70 transition-all" to="/">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Return to Bag
              </Link>
            </div>
            <div className="space-y-12">
              <div className="space-y-8">
                <h1 className="font-headline-lg text-headline-lg text-primary">Shipping Details</h1>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-8">
                  <div className="md:col-span-1">
                    <label className="block font-label-sm text-label-sm uppercase mb-2 text-on-surface-variant">First Name</label>
                    <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-2 px-0 focus:ring-0" placeholder="Arjun" type="text" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block font-label-sm text-label-sm uppercase mb-2 text-on-surface-variant">Last Name</label>
                    <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-2 px-0 focus:ring-0" placeholder="Kapoor" type="text" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-label-sm text-label-sm uppercase mb-2 text-on-surface-variant">Shipping Address</label>
                    <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-2 px-0 focus:ring-0" placeholder="Flat No, Wing, Building Name" type="text" />
                  </div>
                  <div className="md:col-span-2">
                    <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-2 px-0 focus:ring-0" placeholder="Locality / Area" type="text" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block font-label-sm text-label-sm uppercase mb-2 text-on-surface-variant">City</label>
                    <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-2 px-0 focus:ring-0" placeholder="Mumbai" type="text" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block font-label-sm text-label-sm uppercase mb-2 text-on-surface-variant">State</label>
                    <select className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-2 px-0 focus:ring-0 appearance-none">
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                    </select>
                  </div>
                  <div className="md:col-span-1">
                    <label className="block font-label-sm text-label-sm uppercase mb-2 text-on-surface-variant">Pincode</label>
                    <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-2 px-0 focus:ring-0" placeholder="400001" type="text" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block font-label-sm text-label-sm uppercase mb-2 text-on-surface-variant">Phone Number</label>
                    <div className="flex items-center gap-2 border-b border-outline-variant">
                      <span className="text-on-surface-variant py-2">+91</span>
                      <input className="w-full bg-transparent border-none py-2 px-0 focus:ring-0" placeholder="98765 43210" type="tel" />
                    </div>
                  </div>
                </form>
              </div>

              <div className="space-y-8">
                <h2 className="font-headline-md text-headline-md text-primary border-t border-surface-variant pt-12">Delivery Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="relative border border-primary p-6 cursor-pointer group flex justify-between items-start">
                    <input defaultChecked className="sr-only" name="delivery" type="radio" />
                    <div>
                      <span className="block font-label-sm text-label-sm uppercase mb-1 tracking-widest text-primary">Standard</span>
                      <span className="block text-sm text-on-surface-variant">5-7 Business Days</span>
                    </div>
                    <span className="font-label-sm text-primary">FREE</span>
                    <div className="absolute inset-0 border-2 border-primary-container opacity-0 group-has-[:checked]:opacity-100 transition-opacity pointer-events-none"></div>
                  </label>
                  <label className="relative border border-outline-variant p-6 cursor-pointer group flex justify-between items-start">
                    <input className="sr-only" name="delivery" type="radio" />
                    <div>
                      <span className="block font-label-sm text-label-sm uppercase mb-1 tracking-widest text-on-surface-variant">Express</span>
                      <span className="block text-sm text-on-surface-variant">1-2 Business Days</span>
                    </div>
                    <span className="font-label-sm text-on-surface">₹1,500</span>
                    <div className="absolute inset-0 border-2 border-primary-container opacity-0 group-has-[:checked]:opacity-100 transition-opacity pointer-events-none"></div>
                  </label>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => navigate('/checkout/payment')}
                  className="w-full md:w-auto px-16 py-5 bg-primary text-on-primary font-label-sm uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </section>

          {/* Right Side: Order Summary */}
          <aside className="w-full lg:w-96">
            <div className="sticky top-32 space-y-8 bg-surface-container-low p-8 border border-surface-variant/30">
              <h2 className="font-headline-md text-headline-md text-primary">Order Summary</h2>
              <CartItem item={cartItem} variant="summary" />
              <OrderSummary subtotal={subtotal} shipping={shipping} taxes={taxes} total={total} compact />
              <div className="bg-primary/5 p-4 space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-lg">verified</span>
                  <span className="text-xs uppercase tracking-widest font-semibold">Authenticity Guaranteed</span>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">
                  Every garment at Heritage Lux is handcrafted by master artisans and comes with a certificate of authenticity.
                </p>
              </div>
              <p className="text-center text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                Complimentary shipping on all luxury orders.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ShippingDetails;
