import React from 'react';

const CartItem = ({ item, variant = 'bag' }) => {
  if (variant === 'summary') {
    return (
      <div className="flex gap-4">
        <div className="w-24 h-32 flex-shrink-0 bg-surface-container-highest overflow-hidden">
          <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="font-headline-md text-sm text-on-surface leading-tight">{item.name}</h3>
          <p className="text-xs text-on-surface-variant uppercase tracking-widest">{item.collection}</p>
          <p className="text-xs text-on-surface-variant">Size: {item.size} | Qty: {item.quantity}</p>
          <p className="text-sm font-semibold text-primary pt-2">₹{item.price.toLocaleString()}</p>
        </div>
      </div>
    );
  }

  if (variant === 'success') {
    return (
      <div className="flex gap-6 items-start">
        <div className="w-24 h-32 flex-shrink-0 bg-surface-container-low overflow-hidden rounded">
          <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="font-headline-md text-body-lg text-on-surface">{item.name}</h3>
            <p className="font-body-md text-on-surface">₹{item.price.toLocaleString()}</p>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant mt-1 uppercase tracking-wider">Size: {item.size} | {item.color}</p>
          <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">QTY: {item.quantity}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 pb-8 border-b border-outline-variant">
      <div className="w-full md:w-48 aspect-[3/4] bg-surface-container overflow-hidden">
        <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
      </div>
      <div className="flex-grow flex flex-col justify-between py-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary">{item.name}</h3>
            <p className="font-body-md text-on-surface-variant mt-1">{item.collection} | {item.description}</p>
          </div>
          <button className="text-on-surface-variant hover:text-error transition-colors p-1">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div>
            <span className="font-label-sm text-label-sm text-outline block uppercase mb-1">Size</span>
            <span className="font-body-md">{item.size}</span>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-outline block uppercase mb-1">Quantity</span>
            <div className="flex items-center gap-3">
              <button className="w-6 h-6 border border-outline flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <span className="font-body-md">{item.quantity}</span>
              <button className="w-6 h-6 border border-outline flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-2 text-right self-end">
            <span className="font-label-sm text-label-sm text-outline block uppercase mb-1">Price</span>
            <span className="font-headline-md text-headline-md text-secondary">₹{item.price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
