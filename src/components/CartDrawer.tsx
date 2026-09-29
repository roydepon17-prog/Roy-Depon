import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);

  // Checkout inputs
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerRegion, setCustomerRegion] = useState('Metro Manila');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'gcash' | 'card'>('cod');
  const [orderId, setOrderId] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 1500;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = subtotal === 0 ? 0 : isFreeShipping ? 0 : 180;
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'CAPIZ10' || code === 'ESTATE10') {
      setDiscountPercent(10);
      setPromoMessage('10% Single-Estate Connoisseur discount applied.');
    } else if (code === 'MAAYON') {
      setDiscountPercent(15);
      setPromoMessage('15% Harvest Founder privilege applied.');
    } else {
      setPromoMessage('Invalid allocation code. Try CAPIZ10 or ESTATE10.');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `MYN-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderId(newOrderId);
    setCheckoutStep('success');
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-md bg-[#1c1c19] border-l border-[#424843]/50 h-full flex flex-col justify-between shadow-2xl text-[#e5e2dd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#424843]/40 flex items-center justify-between bg-[#131411]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e9c349]">shopping_bag</span>
            <h3 className="font-headline-sm text-lg text-[#e5e2dd]">
              {checkoutStep === 'cart' && 'Your Tasting Basket'}
              {checkoutStep === 'checkout' && 'Estate Dispatch Details'}
              {checkoutStep === 'success' && 'Harvest Allocation Confirmed'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#20201d] hover:bg-[#2a2a27] text-[#c2c8c2] hover:text-[#e5e2dd] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        {checkoutStep === 'cart' && subtotal > 0 && (
          <div className="p-4 bg-[#20201d] border-b border-[#424843]/30">
            <div className="flex items-center justify-between text-xs font-label-caps tracking-wider mb-1.5">
              <span className={isFreeShipping ? 'text-[#aeceb9]' : 'text-[#c2c8c2]'}>
                {isFreeShipping
                  ? '✓ Free Insulated Air-Express Shipping Unlocked!'
                  : `Add ₱${(freeShippingThreshold - subtotal).toLocaleString()} for Free Shipping`}
              </span>
              <span className="text-[#e9c349] font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#131411] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#cca830] to-[#aeceb9] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {/* STEP 1: CART ITEMS */}
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#20201d] text-[#8c928c] flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">sentiment_dissatisfied</span>
                  </div>
                  <p className="font-headline-sm text-base text-[#e5e2dd]">Your basket is currently empty.</p>
                  <p className="text-xs text-[#c2c8c2] max-w-xs mx-auto">
                    Explore our single-origin micro-batches and add chocolate to commence your Visayan terroir journey.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-3 px-5 py-2.5 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] border border-[#cca830]/40 rounded-sm font-label-caps text-xs tracking-wider uppercase cursor-pointer"
                  >
                    Browse Collections
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-[#20201d] rounded-lg border border-[#424843]/30 flex gap-3 items-center"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-sm object-cover bg-[#2a2a27] shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-title-md text-xs font-semibold text-[#e5e2dd] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#8c928c] hover:text-[#ffb4ab] transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                        <p className="text-[10px] text-[#e9c349] font-label-caps uppercase">
                          {item.product.subtitle} • {item.product.weight}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center bg-[#131411] border border-[#424843] rounded-sm">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="w-6 h-6 text-xs text-[#c2c8c2] hover:text-[#e5e2dd] flex items-center justify-center cursor-pointer"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-xs font-semibold text-[#e5e2dd] tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 text-xs text-[#c2c8c2] hover:text-[#e5e2dd] flex items-center justify-center cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-xs font-semibold text-[#e5e2dd] tabular-nums">
                            ₱{(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Promo Code Input */}
                  <div className="pt-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Privilege Code (try CAPIZ10)"
                        className="flex-1 px-3 py-1.5 bg-[#20201d] border border-[#424843]/40 rounded-sm text-xs text-[#e5e2dd] placeholder:text-[#8c928c] uppercase focus:outline-none focus:border-[#e9c349]"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-3 py-1.5 bg-[#2a2a27] hover:bg-[#353532] text-[#e5e2dd] font-label-caps text-[10px] uppercase rounded-sm border border-[#424843] cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {promoMessage && (
                      <p className={`text-[10px] mt-1 ${discountPercent > 0 ? 'text-[#aeceb9]' : 'text-[#ffb4ab]'}`}>
                        {promoMessage}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {/* STEP 2: CHECKOUT FORM */}
          {checkoutStep === 'checkout' && (
            <form id="estate-checkout-form" onSubmit={handlePlaceOrder} className="space-y-3.5">
              <div className="p-3 bg-[#20201d] rounded-md border border-[#424843]/30 text-xs text-[#c2c8c2] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#aeceb9]">ac_unit</span>
                <span>All consignments are packed with gel cold-packs and thermal silver insulation.</span>
              </div>

              <div>
                <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] block mb-1">
                  Recipient Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Maria Teresa Santos"
                  className="w-full px-3 py-2 bg-[#20201d] border border-[#424843]/40 rounded-sm text-xs text-[#e5e2dd] focus:outline-none focus:border-[#e9c349]"
                />
              </div>

              <div>
                <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] block mb-1">
                  Contact Mobile Number *
                </label>
                <input
                  required
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+63 9XX XXX XXXX"
                  className="w-full px-3 py-2 bg-[#20201d] border border-[#424843]/40 rounded-sm text-xs text-[#e5e2dd] focus:outline-none focus:border-[#e9c349]"
                />
              </div>

              <div>
                <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] block mb-1">
                  Delivery Destination Region
                </label>
                <select
                  value={customerRegion}
                  onChange={(e) => setCustomerRegion(e.target.value)}
                  className="w-full px-3 py-2 bg-[#20201d] border border-[#424843]/40 rounded-sm text-xs text-[#e5e2dd] focus:outline-none focus:border-[#e9c349]"
                >
                  <option>Metro Manila (NCR)</option>
                  <option>Western Visayas (Panay / Negros)</option>
                  <option>Cebu &amp; Central Visayas</option>
                  <option>Luzon Provincial</option>
                  <option>Mindanao (Davao / CDO)</option>
                </select>
              </div>

              <div>
                <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] block mb-1">
                  Street Address &amp; Landmarks *
                </label>
                <textarea
                  required
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Unit, Building, Street, Barangay, Postal Code"
                  className="w-full px-3 py-2 bg-[#20201d] border border-[#424843]/40 rounded-sm text-xs text-[#e5e2dd] focus:outline-none focus:border-[#e9c349]"
                />
              </div>

              <div>
                <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] block mb-1">
                  Preferred Payment Protocol
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-2 rounded-sm text-center font-label-caps text-[10px] uppercase border cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'bg-[#1e3a2b] text-[#e9c349] border-[#e9c349]'
                        : 'bg-[#20201d] text-[#c2c8c2] border-[#424843]/40'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gcash')}
                    className={`p-2 rounded-sm text-center font-label-caps text-[10px] uppercase border cursor-pointer ${
                      paymentMethod === 'gcash'
                        ? 'bg-[#1e3a2b] text-[#e9c349] border-[#e9c349]'
                        : 'bg-[#20201d] text-[#c2c8c2] border-[#424843]/40'
                    }`}
                  >
                    GCash Express
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2 rounded-sm text-center font-label-caps text-[10px] uppercase border cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#1e3a2b] text-[#e9c349] border-[#e9c349]'
                        : 'bg-[#20201d] text-[#c2c8c2] border-[#424843]/40'
                    }`}
                  >
                    BDO / Card
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION */}
          {checkoutStep === 'success' && (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1e3a2b] text-[#e9c349] flex items-center justify-center border border-[#e9c349]/40">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-[#e9c349] uppercase tracking-widest">
                  Order Successfully Allocated
                </span>
                <h4 className="font-headline-sm text-xl text-[#e5e2dd] mt-1">
                  Docket #{orderId}
                </h4>
              </div>

              <div className="p-4 bg-[#20201d] rounded-lg border border-[#424843]/40 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#8c928c]">Recipient:</span>
                  <span className="text-[#e5e2dd] font-medium">{customerName || 'Valued Connoisseur'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8c928c]">Destination:</span>
                  <span className="text-[#e5e2dd]">{customerRegion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8c928c]">Packaging:</span>
                  <span className="text-[#aeceb9]">Insulated Foil + Frozen Gel Pouch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8c928c]">Payment:</span>
                  <span className="text-[#e9c349] uppercase font-label-caps">{paymentMethod}</span>
                </div>
              </div>

              <p className="text-xs text-[#c2c8c2] leading-relaxed">
                Your order is currently being conditioned in our Maayon estate cellar. Consignment tracking details will be dispatched to your mobile.
              </p>

              <button
                onClick={() => {
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="w-full py-3 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] rounded-sm font-label-caps text-xs tracking-wider uppercase border border-[#cca830]/40 transition-colors cursor-pointer"
              >
                Return to Estate Catalog
              </button>
            </div>
          )}

        </div>

        {/* Drawer Footer & Actions */}
        {checkoutStep !== 'success' && items.length > 0 && (
          <div className="p-5 border-t border-[#424843]/40 bg-[#131411] space-y-3">
            <div className="space-y-1.5 text-xs text-[#c2c8c2]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#e5e2dd] font-mono">₱{subtotal.toLocaleString()}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#aeceb9]">
                  <span>Privilege Discount ({discountPercent}%)</span>
                  <span className="font-mono">-₱{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Nationwide Thermal Dispatch</span>
                <span className="font-mono">
                  {shippingFee === 0 ? <strong className="text-[#aeceb9]">FREE</strong> : `₱${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#e5e2dd] pt-2 border-t border-[#424843]/40">
                <span>Total Investment</span>
                <span className="text-base text-[#e9c349] font-mono">₱{finalTotal.toLocaleString()}</span>
              </div>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] hover:text-[#e9c349] font-label-caps text-xs tracking-widest uppercase rounded-sm border border-[#cca830]/40 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Allocation Dispatch</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="px-4 py-3 bg-[#20201d] text-[#c2c8c2] hover:text-[#e5e2dd] border border-[#424843] rounded-sm font-label-caps text-[11px] uppercase cursor-pointer"
                >
                  Back
                </button>
                <button
                  form="estate-checkout-form"
                  type="submit"
                  className="flex-1 py-3 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] hover:text-[#e9c349] font-label-caps text-xs tracking-widest uppercase rounded-sm border border-[#cca830]/40 transition-all cursor-pointer"
                >
                  Place Micro-Batch Order
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
