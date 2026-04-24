import React from 'react';

const OrderSummary = ({ subtotal, shipping, taxes, total, children, compact = false }) => {
  if (compact) {
    return (
      <div className="space-y-4 border-t border-surface-variant/50 pt-6">
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Subtotal</span>
          <span className="text-on-surface">₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Shipping</span>
          <span className="text-on-surface">{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString()}`}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Estimated GST (12%)</span>
          <span className="text-on-surface">₹{taxes.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-baseline pt-4 border-t border-primary/20">
          <span className="font-headline-md text-headline-md text-primary">Total</span>
          <span className="font-headline-md text-headline-md text-primary">₹{total.toLocaleString()}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-8 sticky top-32 border border-emerald-900/5">
      <h2 className="font-headline-md text-headline-md text-primary mb-8">Order Summary</h2>
      <div className="space-y-4 font-body-md border-b border-outline-variant pb-6 mb-6">
        <div className="flex justify-between">
          <span className="text-on-surface-variant">Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Estimated Shipping</span>
          <span>{shipping === 0 ? 'Calculated at next step' : `₹${shipping.toLocaleString()}`}</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Taxes (GST)</span>
          <span>₹{taxes.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex justify-between items-end mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Total Amount</span>
        <span className="font-headline-md text-headline-md text-secondary">₹{total.toLocaleString()}</span>
      </div>
      {children}
      <div className="mt-8 space-y-4">
        <div className="flex items-start gap-4 p-4 border border-outline-variant/30">
          <span className="material-symbols-outlined text-secondary">verified</span>
          <div>
            <span className="font-label-sm text-label-sm block text-primary uppercase">Heritage Guarantee</span>
            <p className="text-[12px] text-on-surface-variant mt-1 leading-relaxed">Each piece is hand-crafted and verified for 100% authenticity before dispatch.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 border border-outline-variant/30">
          <span className="material-symbols-outlined text-secondary">local_shipping</span>
          <div>
            <span className="font-label-sm text-label-sm block text-primary uppercase">Global Shipping</span>
            <p className="text-[12px] text-on-surface-variant mt-1 leading-relaxed">Complimentary white-glove shipping for all orders over ₹50,000.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
