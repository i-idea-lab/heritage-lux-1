import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

const PaymentGateway = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('card');

  const cartItems = [
    {
      id: 1,
      name: "Varanasi Silk Sherwani",
      collection: "Heritage Collection",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4hSSg7ZBCPh9yFFADo9_FKqwHU-skNyiszF9y0x31abdPzrJl3uWK3_c2iLJaj7u_H6xwCfUF_P_6o5Q9QF26IkUIDQoAdy0bwcTDKg77LfO4EsjXlQpKs8oN5QE59QfPL2PQRTEHiuEl9UzqSC9tgm_d62hisY_S0X4VeK6Ib-EXD2xF7FKKmO0i54SDpJd1EpFYjM--e1Ct_L3Q0vVg7_csF_JKsRyyWbM3cMObQPaRqxO3-LPPzR6Gr1V5zVXf-SGocwXpoyc",
      size: "42",
      quantity: 1,
      price: 68000
    },
    {
      id: 2,
      name: "Handcrafted Zari Juttis",
      collection: "Accessories",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzCxctTjvP43BM1MT1XEMEf8rqF7saem2WcFcgubRVdVTC4tJezvaDM_79Je40tFXYG_1n0JnjjR7oz4MLMUoE8At0t_TX5mr4d0llw04LYJ-A_VI-A4SEYVTc1J7j-8J_wAUykinTVbo2v_8LCmgPL1UnvDx8f4MYJL73uel8XI98ty90WpRTR64yk4RfCqGNr75qf1_Bcnch4mpaLmexgxmzgb3LCyx6WEt0DjOFQAO93H7s60qqfoQBxUt1xr8hVmXsB5ou9QU",
      size: "9 UK",
      quantity: 1,
      price: 16500
    }
  ];

  const total = 84500;

  return (
    <div className="bg-background min-h-screen font-body-md text-on-background">
      <Header />
      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-12 min-h-screen">
        <div className="mb-10 text-center">
          <h1 className="font-headline-md text-headline-md text-primary mb-2">Secure Checkout</h1>
          <p className="font-body-md text-on-surface-variant">Complete your heritage journey with our secure payment gateway.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            <div className="bg-white rounded shadow-sm border border-outline-variant overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Sidebar Tabs */}
                <div className="w-full md:w-64 bg-surface-container-low border-r border-outline-variant">
                  <button
                    onClick={() => setActiveTab('card')}
                    className={`w-full text-left p-6 flex items-center gap-3 ${activeTab === 'card' ? 'active-tab' : 'hover:bg-surface-container transition-colors'}`}
                  >
                    <span className={`material-symbols-outlined ${activeTab === 'card' ? 'text-secondary' : 'text-on-surface-variant'}`}>credit_card</span>
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider ${activeTab === 'card' ? 'text-on-surface' : 'text-on-surface-variant'}`}>Card</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('upi')}
                    className={`w-full text-left p-6 flex items-center gap-3 ${activeTab === 'upi' ? 'active-tab' : 'hover:bg-surface-container transition-colors'}`}
                  >
                    <span className={`material-symbols-outlined ${activeTab === 'upi' ? 'text-secondary' : 'text-on-surface-variant'}`}>qr_code_2</span>
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider ${activeTab === 'upi' ? 'text-on-surface' : 'text-on-surface-variant'}`}>UPI / QR</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('banking')}
                    className={`w-full text-left p-6 flex items-center gap-3 ${activeTab === 'banking' ? 'active-tab' : 'hover:bg-surface-container transition-colors'}`}
                  >
                    <span className={`material-symbols-outlined ${activeTab === 'banking' ? 'text-secondary' : 'text-on-surface-variant'}`}>account_balance</span>
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider ${activeTab === 'banking' ? 'text-on-surface' : 'text-on-surface-variant'}`}>Net Banking</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('wallets')}
                    className={`w-full text-left p-6 flex items-center gap-3 ${activeTab === 'wallets' ? 'active-tab' : 'hover:bg-surface-container transition-colors'}`}
                  >
                    <span className={`material-symbols-outlined ${activeTab === 'wallets' ? 'text-secondary' : 'text-on-surface-variant'}`}>account_balance_wallet</span>
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider ${activeTab === 'wallets' ? 'text-on-surface' : 'text-on-surface-variant'}`}>Wallets</span>
                  </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8">
                  {activeTab === 'card' && (
                    <div id="card-payment">
                      <h2 className="font-headline-md text-headline-md text-primary mb-6 text-xl">Credit or Debit Card</h2>
                      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/order-success'); }}>
                        <div className="space-y-2">
                          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Card Number</label>
                          <input className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="0000 0000 0000 0000" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Expiry Date</label>
                            <input className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="MM/YY" type="text" />
                          </div>
                          <div className="space-y-2">
                            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">CVV</label>
                            <input className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="***" type="password" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Name on Card</label>
                          <input className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="Full Name" type="text" />
                        </div>
                        <div className="pt-4 flex items-center gap-2 text-on-surface-variant text-xs">
                          <span className="material-symbols-outlined text-sm">lock</span>
                          Your payment information is encrypted and secure.
                        </div>
                        <button type="submit" className="w-full bg-primary text-on-primary py-4 font-label-sm text-label-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                          Pay ₹{total.toLocaleString()}
                        </button>
                      </form>
                    </div>
                  )}
                  {activeTab !== 'card' && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">payments</span>
                      <h3 className="font-headline-md text-primary mb-2">Other Payment Methods</h3>
                      <p className="font-body-md text-on-surface-variant max-w-xs">This payment method is currently being integrated into our heritage experience.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img alt="Visa" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDICpnIc6MJeU9gWuBShRNhHuDhL3zVC7HutnMtGqQFzyNSAbnE8hIRB2ydE0UPyCftPg3suA-S1SO0Ua-BOcduiu4m_0o16cJq8VJdXw-zD6HRYhmGFWFOG6_gWCLqdjz4-XQT24S0kPPDEAVB9s85LfDRa6juSMkMpOebZzQBBOmmsiLxIvHpsqVJiVTAtfZez6RtU7obAOYb1lCLOMddlMZ5kK2qQiMpCWJCB5InxQDRHg82fb5Mqses0mrXPy0UTFf7xXgnp0I" />
              <img alt="Mastercard" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChauclxfCn7kmr0GYk2lNyzheJaUP1K_wDVfTTyVJ9zt9ZuwlVBbtnzT0l8syewhQ7tt9yNHUrMipZZdfSVLPZqXsH2tQTsddflcdTtQ4iZOxw15UwxIEmU1ZgUjp4vXkjIdRAIewB5lQiYivFzwRonRJV8jtqDqjsOLN4fm1XbVCuZa3mkUXYB7FnoO4wQcIHlPgOl877yfP_efSjrlKXotIg2NrWfmFW6nPraXch1LNWIta1c6GSaHoY6kyt0a3mQDEtXRi2Z7M" />
              <img alt="Razorpay" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8GaSDkdtfbfcRrhDlmd-WivLRPTgV9i9W2u8WFHXZT6fZpzfqs37PW7OjOkXfZt7SI4FUozEFyD_M8I2Ag6P0YUW50k-ku0Gf1W4P7zvhOknRVNuEChZ1LeahJ6nzGv3A6n95uBQJsPqSHo-EY7brQOja1QkmsQSPbE2gN_Xjhr-0pBk68X7V8RUUvaEPBK4uOFqJPU_hJvHXozOcenXYPCgLWj-NNETkkvLLpk52IJ0zZZNBhe4aOAbEe8L3cx75BW2_ANEMqLA" />
              <img alt="Stripe" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx-lyMnOsU0BzlZQYrYLgVYv4A0vz-q_VjlA-ytPKtGHqoFAe9Cbpzem0Wk9JNKsAy-ILmZiFGvh_lJzcX6RgnIg1SiOp68TGVABgo0wdhFNDxPNV3c5g5r_oT7Q5s90p2Krk_VlqxJVA-uvoHsxoqfKSIQQ3I4JJiHyRlkA1wKrg3xaDgrHokwjB2XdsoH9lgV7yiI_NPCARJdQ_6XVJWAihChLSPnTSVjNzEpHMMlUhO-zbozRZE145l-60PPS4T6RAkZpP0zAI" />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-surface-container-low p-8 border border-outline-variant sticky top-32">
              <h3 className="font-headline-md text-xl text-primary mb-6 border-b border-outline-variant pb-4">Order Summary</h3>
              <div className="space-y-6 mb-8">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} variant="summary" />
                ))}
              </div>
              <div className="space-y-3 pt-6 border-t border-outline-variant">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="text-secondary uppercase text-[10px] font-bold tracking-widest">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Tax (GST)</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between font-headline-md text-xl pt-4 border-t border-dashed border-outline-variant">
                  <span>Total</span>
                  <span className="text-primary font-bold">₹{total.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-8 bg-white p-4 border border-outline-variant">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest leading-relaxed">
                  Every Heritage Lux piece is crafted by master artisans. Please allow 14-21 days for bespoke adjustments.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentGateway;
