import React from 'react';

const LookbookItem = ({ item, wide = false }) => {
  return (
    <div className={`${wide ? 'min-w-[420px]' : 'min-w-[320px]'} snap-start`}>
      <div className={`${wide ? 'aspect-[3/2]' : 'aspect-[3/4]'} mb-6 bg-surface-container overflow-hidden`}>
        <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src={item.image} alt={item.name} />
      </div>
      <h4 className="font-headline-md text-[20px] text-primary">{item.name}</h4>
      <p className="font-label-sm text-secondary mt-1 tracking-widest">₹{item.price.toLocaleString()}</p>
    </div>
  );
};

export default LookbookItem;
