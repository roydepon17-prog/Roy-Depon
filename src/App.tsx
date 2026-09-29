/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FoundersStory } from './components/FoundersStory';
import { Collection } from './components/Collection';
import { ProductModal } from './components/ProductModal';
import { TreeToBar } from './components/TreeToBar';
import { Agroforestry } from './components/Agroforestry';
import { WholesaleAndFaq } from './components/WholesaleAndFaq';
import { CartDrawer } from './components/CartDrawer';
import { TerroirMapModal } from './components/TerroirMapModal';
import { Footer } from './components/Footer';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('oguia_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isTerroirOpen, setIsTerroirOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('oguia_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Toast helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Allocated "${product.name}" to Tasting Basket`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#131411] text-[#e5e2dd] font-sans selection:bg-[#cca830]/30 selection:text-[#ffe088]">
      {/* Fixed Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTerroir={() => setIsTerroirOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#131411]">
        {/* 1. Hero Section */}
        <Hero
          onExploreCollection={() => scrollToSection('#collection')}
          onExploreStory={() => scrollToSection('#founders')}
          onOpenTerroir={() => setIsTerroirOpen(true)}
        />

        {/* 2. Founders' Story & Terroir Section */}
        <FoundersStory />

        {/* 3. Curated Chocolate Collection */}
        <Collection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Tree-to-Bar Process Timeline */}
        <TreeToBar />

        {/* 5. Agroforestry & Biosphere Values */}
        <Agroforestry />

        {/* 6. FAQ & Wholesale Concierge Desk */}
        <WholesaleAndFaq />
      </main>

      {/* Footer */}
      <Footer onOpenTerroir={() => setIsTerroirOpen(true)} />

      {/* Tasting Basket Slide-Out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Sommelier Tasting Dossier Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Terroir & Microclimate Geolocation Modal */}
      <TerroirMapModal
        isOpen={isTerroirOpen}
        onClose={() => setIsTerroirOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#1e3a2b] border border-[#e9c349]/50 text-[#e5e2dd] rounded-sm shadow-2xl flex items-center gap-3 animate-slideUp font-body-sm text-xs">
          <span className="material-symbols-outlined text-[#e9c349] text-base">
            check_circle
          </span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 underline text-[#e9c349] font-label-caps text-[10px] uppercase cursor-pointer"
          >
            View Basket
          </button>
        </div>
      )}
    </div>
  );
}
