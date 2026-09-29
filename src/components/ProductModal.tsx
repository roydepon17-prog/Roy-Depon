import React, { useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#20201d] border border-[#e9c349]/40 rounded-xl overflow-hidden shadow-2xl text-[#e5e2dd] max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#131411]/80 hover:bg-[#353532] text-[#c2c8c2] hover:text-[#e5e2dd] flex items-center justify-center border border-[#424843] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Left Column: Product Image & Origin Seal */}
        <div className="md:w-1/2 relative bg-[#131411] min-h-[260px] md:min-h-full overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20201d] via-transparent to-transparent md:hidden"></div>

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="px-2.5 py-1 bg-[#0e0e0c]/85 backdrop-blur-md text-[#e9c349] font-label-caps text-[10px] rounded-sm uppercase tracking-wider border border-[#e9c349]/20">
              {product.badge}
            </span>
            <span className="px-2 py-0.5 bg-[#2a2a27]/90 text-[#aeceb9] font-label-caps text-[9px] rounded-sm uppercase">
              {product.batchNumber}
            </span>
          </div>
        </div>

        {/* Right Column: Sommelier Dossier */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-xs text-[#e9c349] uppercase tracking-widest">
                {product.subtitle}
              </span>
              <span className="font-headline-md text-2xl text-[#e5e2dd] font-serif">
                ₱{product.price.toLocaleString()}
              </span>
            </div>

            <h3 className="font-headline-sm text-xl text-[#e5e2dd] mt-1">
              {product.name}
            </h3>

            <p className="font-body-sm text-sm text-[#c2c8c2] mt-2 leading-relaxed">
              {product.description}
            </p>

            {/* Sensory Tasting Notes */}
            <div className="mt-4 pt-4 border-t border-[#424843]/40">
              <p className="font-label-caps text-[10px] text-[#aeceb9] uppercase tracking-wider mb-2">
                Curated Sensory Profile
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.tastingNotes.map((note, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#2a2a27] text-[#e5e2dd] text-xs rounded-sm border border-[#424843]/50"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e9c349]"></span>
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Microclimate & Craft Parameters */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[10px] uppercase font-label-caps text-[#8c928c] block">Cacao Content</span>
                <span className="font-medium text-[#e5e2dd] mt-0.5 block">{product.cacaoPercentage}</span>
              </div>
              <div className="p-2.5 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[10px] uppercase font-label-caps text-[#8c928c] block">Fermentation</span>
                <span className="font-medium text-[#e5e2dd] mt-0.5 block">{product.fermentation}</span>
              </div>
              <div className="p-2.5 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[10px] uppercase font-label-caps text-[#8c928c] block">Conching Cycle</span>
                <span className="font-medium text-[#e5e2dd] mt-0.5 block">{product.conchingTime}</span>
              </div>
              <div className="p-2.5 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[10px] uppercase font-label-caps text-[#8c928c] block">Varietal Purity</span>
                <span className="font-medium text-[#e5e2dd] mt-0.5 block">{product.variety}</span>
              </div>
            </div>

            {/* Sommelier Pairings */}
            <div className="mt-4">
              <p className="font-label-caps text-[10px] text-[#e3bfb2] uppercase tracking-wider mb-1.5">
                Sommelier Suggested Pairings
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#c2c8c2]">
                {product.pairings.map((pairing, i) => (
                  <span key={i} className="inline-flex items-center gap-1">
                    <span className="text-[#e9c349]">✦</span>
                    {pairing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Zone: Quantity & Add to Cart */}
          <div className="mt-6 pt-4 border-t border-[#424843]/50 flex items-center gap-3">
            <div className="flex items-center bg-[#1c1c19] border border-[#424843] rounded-sm">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-9 text-[#c2c8c2] hover:text-[#e5e2dd] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-8 text-center text-sm font-semibold tabular-nums text-[#e5e2dd]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-9 text-[#c2c8c2] hover:text-[#e5e2dd] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={added}
              className={`flex-1 py-2.5 px-4 rounded-sm font-label-caps text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                added
                  ? 'bg-[#1e3a2b] text-[#e9c349] border border-[#e9c349]'
                  : 'bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] hover:text-[#e9c349] border border-[#cca830]/40'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {added ? 'check_circle' : 'shopping_bag'}
              </span>
              <span>{added ? 'Allocated to Basket!' : `Acquire Micro-Batch • ₱${(product.price * quantity).toLocaleString()}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
