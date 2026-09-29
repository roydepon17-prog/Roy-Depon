import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { CHOCOLATE_PRODUCTS } from '../data/chocolates';

interface CollectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export const Collection: React.FC<CollectionProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);

  const filterTabs: { label: string; value: ProductCategory }[] = [
    { label: 'All Creations', value: 'all' },
    { label: 'Single-Origin Bars', value: 'single-origin' },
    { label: 'Tablea & Heritage', value: 'tablea' },
    { label: 'Limited Editions', value: 'limited' }
  ];

  const filteredProducts = useMemo(() => {
    return CHOCOLATE_PRODUCTS.filter((prod) => {
      const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.tastingNotes.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setQuickAddedId(product.id);
    setTimeout(() => {
      setQuickAddedId(null);
    }, 1200);
  };

  return (
    <section className="w-full bg-[#131411] py-16 sm:py-24" id="collection">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-6 border-b border-[#424843]/30">
          <div>
            <span className="font-label-caps text-xs text-[#e9c349] uppercase tracking-widest">
              Maayon Micro-Batches
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#e5e2dd] mt-1">
              Curated Chocolate Collection
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#c2c8c2] mt-1 max-w-xl">
              Hand-tempered, slow-conched creations honoring the purity of Capiz cacao.
            </p>
          </div>

          {/* Filter Bar & Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-[#1c1c19] p-1.5 rounded-sm border border-[#424843]/40">
              {filterTabs.map((tab) => {
                const isActive = activeCategory === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setActiveCategory(tab.value)}
                    className={`px-3 sm:px-4 py-1.5 font-label-caps text-[11px] uppercase rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#1e3a2b] text-[#e5e2dd] shadow-sm border border-[#cca830]/30'
                        : 'text-[#c2c8c2] hover:text-[#e5e2dd]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-[#1c1c19] border border-[#424843]/40 rounded-sm font-label-caps text-[11px] text-[#c2c8c2] focus:text-[#e5e2dd] focus:outline-none uppercase tracking-wider"
              aria-label="Sort chocolates"
            >
              <option value="featured">Featured Batches</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Search Bar filter */}
        <div className="pt-4 pb-6 flex items-center justify-between">
          <div className="relative w-full max-w-xs">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-[#8c928c]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasting notes, tablea, percentage..."
              className="w-full pl-8 pr-3 py-1.5 bg-[#1c1c19] border border-[#424843]/40 rounded-sm text-xs text-[#e5e2dd] placeholder:text-[#8c928c] focus:outline-none focus:border-[#e9c349]/50 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#8c928c] hover:text-[#e5e2dd]"
              >
                ✕
              </button>
            )}
          </div>
          <p className="font-label-caps text-[11px] text-[#8c928c] uppercase tracking-wider hidden sm:block">
            Showing {filteredProducts.length} of {CHOCOLATE_PRODUCTS.length} micro-batches
          </p>
        </div>

        {/* Product Cards Mosaic (8 Authentic Items) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#1c1c19] rounded-xl border border-[#424843]/30">
            <p className="font-headline-sm text-lg text-[#e5e2dd]">No micro-batches matched your filter.</p>
            <p className="text-xs text-[#c2c8c2] mt-1">Try resetting the category or search keywords.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#1e3a2b] text-[#e5e2dd] rounded-sm font-label-caps text-xs tracking-wider uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const isAdded = quickAddedId === prod.id;
              return (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  className="group flex flex-col bg-[#20201d] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#424843]/30 hover:border-[#e9c349]/40 cursor-pointer"
                >
                  {/* Product Visual Container */}
                  <div className="relative w-full h-72 overflow-hidden bg-[#2a2a27]">
                    <img
                      alt={prod.name}
                      src={prod.image}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Left Badge */}
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 bg-[#0e0e0c]/80 backdrop-blur-md font-label-caps text-[10px] rounded-sm uppercase tracking-wider border border-[#424843]/40 ${
                        prod.badgeColor || 'text-[#e9c349]'
                      }`}
                    >
                      {prod.badge}
                    </span>

                    {/* Bottom Right Weight Badge */}
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 bg-[#353532]/90 text-[#e5e2dd] font-label-caps text-[10px] rounded-sm tracking-wider">
                      {prod.weight}
                    </span>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className={`font-headline-sm text-lg sm:text-xl font-serif ${
                            prod.badgeColor || 'text-[#e9c349]'
                          }`}
                        >
                          {prod.subtitle}
                        </span>
                        <span className="font-title-md text-base sm:text-lg font-bold text-[#e5e2dd] tabular-nums">
                          ₱{prod.price.toLocaleString()}
                        </span>
                      </div>

                      <h3 className="font-title-md text-sm sm:text-base font-semibold text-[#e5e2dd] mt-1 group-hover:text-[#aeceb9] transition-colors">
                        {prod.name}
                      </h3>

                      <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] mt-1.5 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, prod)}
                      className={`w-full py-2.5 px-3 font-label-caps text-[11px] uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                        isAdded
                          ? 'bg-[#1e3a2b] text-[#e9c349] border border-[#e9c349]'
                          : 'bg-[#2a2a27] hover:bg-[#1e3a2b] text-[#e5e2dd] hover:text-[#e9c349] border border-[#424843]/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {isAdded ? 'done' : 'shopping_bag'}
                      </span>
                      <span>{isAdded ? 'Added to Basket' : 'Acquire Micro-Batch'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
