import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { API_BASE_URL } from '../config/api';

const PaymentGateway = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Midnight Emerald Sherwani",
      collection: "Heritage Collection",
      description: "Hand-embroidered Zardozi",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA04JX46jWXbl7x_yKYxZxSJHkIv6w8cGgi3JfWC_5sKZv0OkSRYDeweeE-MoopC_JeZ4rFUeYc80DxIf_50yik9N5RLy167z2CQ9eM9zqOiiGN8I0Wss3ikqo3WA4hFgsWkcHqGVeFYshDBFkcieHDXNz43JDIfpAZ4TDeltnev1WWplvaeeEfs_NrSUU7XN39CjwhD5W4sUhuQ0umSATGnUM-dUTAAIPJtjYEsDwa15r2ZROu-1_bMkuXbJ-xA9q9ePaKgZzJ6Sk",
      size: "42",
      quantity: 1,
      price: 145000
    }
  ];

  const total = 162400;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const orderData = {
        customerName: "Jules Coder",
        email: "jules@example.com",
        address: "14B Rajpath Estate",
        city: "New Delhi",
        postalCode: "110001",
        items: cartItems.map(item => ({
          productId: item.id,
          quantity: item.quantity
        }))
      };

      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        navigate('/order-success');
      } else {
        console.error("Failed to create order");
        alert("Payment processing failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h1 className="font-headline-display text-4xl text-primary mb-12 italic">Secure Payment</h1>

            <div className="bg-white border border-outline-variant shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Sidebar Tabs */}
                <div className="w-full md:w-64 bg-surface-container-low border-r border-outline-variant">
                  <button
                    onClick={() => setActiveTab('card')}
                    className={`w-full text-left p-6 flex items-center gap-3 ${activeTab === 'card' ? 'bg-primary/5 border-r-4 border-primary' : 'hover:bg-surface-container transition-colors'}`}
                  >
                    <span className={`material-symbols-outlined ${activeTab === 'card' ? 'text-primary' : 'text-on-surface-variant'}`}>credit_card</span>
                    <span className={`font-label-sm text-label-sm uppercase tracking-wider ${activeTab === 'card' ? 'text-on-surface' : 'text-on-surface-variant'}`}>Card</span>
                  </button>
                  {/* Other tabs omitted for brevity but kept in structure */}
                  <button className="w-full text-left p-6 flex items-center gap-3 opacity-50 cursor-not-allowed">
                    <span className="material-symbols-outlined text-on-surface-variant">qr_code_2</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">UPI / QR</span>
                  </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8">
                  {activeTab === 'card' && (
                    <div id="card-payment">
                      <h2 className="font-headline-md text-xl text-primary mb-6">Credit or Debit Card</h2>
                      <form className="space-y-6" onSubmit={handlePayment}>
                        <div className="space-y-2">
                          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Card Number</label>
                          <input required className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="0000 0000 0000 0000" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Expiry Date</label>
                            <input required className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="MM/YY" type="text" />
                          </div>
                          <div className="space-y-2">
                            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">CVV</label>
                            <input required className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="***" type="password" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Name on Card</label>
                          <input required className="w-full border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary bg-transparent py-3 font-body-md" placeholder="Full Name" type="text" />
                        </div>
                        <button
                          disabled={isProcessing}
                          type="submit"
                          className={`w-full bg-primary text-on-primary py-4 font-label-sm text-label-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity ${isProcessing ? 'opacity-50 cursor-wait' : ''}`}
                        >
                          {isProcessing ? 'Processing...' : `Pay ₹${total.toLocaleString()}`}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
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
              <div className="space-y-3 pt-6 border-t border-outline-variant text-on-surface">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-headline-md text-xl pt-4 border-t border-dashed border-outline-variant">
                  <span>Total</span>
                  <span className="text-primary font-bold">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default PaymentGateway;
