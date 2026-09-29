import React, { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenTerroir: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenTerroir }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Terroir & Farm Story', href: '#founders' },
    { label: 'Chocolate Collection', href: '#collection' },
    { label: 'Tree-to-Bar Process', href: '#process' },
    { label: 'Agroforestry & Values', href: '#agroforestry' },
    { label: 'FAQ & Wholesale', href: '#faq-wholesale' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#1e3a2b] text-[#85a490] py-1 px-4 sm:px-6 text-center font-label-caps text-[11px] uppercase tracking-widest border-b border-[#aeceb9]/20 transition-all">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e9c349] animate-pulse"></span>
          <span>Single-Estate Philippine Terroir • Free Shipping Nationwide on Orders Over ₱1,500</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e9c349] animate-pulse"></span>
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 bg-[#131411]/90 backdrop-blur-md shadow-[0_12px_32px_-4px_rgba(0,0,0,0.5)] border-b border-[#424843]/30">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col text-left group"
          >
            <span className="font-headline-md text-xl sm:text-2xl tracking-wider text-[#e5e2dd] group-hover:text-[#aeceb9] transition-colors">
              O'GUIA
            </span>
            <span className="font-label-caps text-[10px] tracking-[0.25em] text-[#e9c349] -mt-1">
              &amp; DAD'S FARM • CAPIZ
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-label-caps text-[11px] text-[#c2c8c2] hover:text-[#e5e2dd] hover:border-b hover:border-[#e9c349] pb-0.5 transition-all uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Inquire / Order CTA */}
            <a
              href="#faq-wholesale"
              onClick={(e) => handleNavClick(e, '#faq-wholesale')}
              className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-[#1e3a2b] text-[#e5e2dd] border border-[#cca830]/40 rounded-sm font-label-caps text-[11px] tracking-widest uppercase hover:bg-[#2a2a27] hover:border-[#e9c349] hover:text-[#e9c349] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              Inquire / Order Now
            </a>

            {/* Tasting Basket / Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#c2c8c2] hover:text-[#e9c349] bg-[#20201d] hover:bg-[#2a2a27] border border-[#424843]/50 rounded-sm transition-all flex items-center gap-1.5 cursor-pointer"
              title="View Tasting Basket"
              aria-label="Tasting Basket"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 min-w-[18px] text-[10px] font-bold bg-[#e9c349] text-[#131411] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Estate Profile / Terroir Coordinates Avatar */}
            <button
              onClick={onOpenTerroir}
              className="flex items-center p-0.5 rounded-full ring-1 ring-[#e9c349]/40 hover:ring-[#e9c349] transition-all cursor-pointer"
              title="Maayon Estate Coordinates & Provenance"
              aria-label="Estate Coordinates"
            >
              <img
                alt="DAD's Farm Estate Seal"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUwu3uTOHUoht9Aj-21FrXDT0asEAG3w5pwLErti1coElYt2RYDwxZilrk90rOmRftyC12QrdR_GsPs01gWEgvkSMRPdJAFjkAtSzK-4qlEj316D5xRcKEzDua6CSY3fTcFW0lt3s48Zq765x_vfJJSZi-tVzB7f9GVvYZ7NZuJkfYCnLOD0VYdLZuvGTlqeEepFuGSWgXxFQkL88nb3b22FAUD7AgMjxb3C9UEQYc0BO0UwwBBarDfJrdLkM-lbPab_LavQ6lExKQb_o"
                referrerPolicy="no-referrer"
              />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#c2c8c2] hover:text-[#e5e2dd] bg-[#20201d] rounded-sm transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#131411]/95 backdrop-blur-xl border-b border-[#424843] px-6 py-6 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-label-caps text-xs text-[#c2c8c2] hover:text-[#e9c349] py-2 border-b border-[#2a2a27] uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerroir();
                }}
                className="w-full py-2.5 px-4 bg-[#20201d] text-[#aeceb9] border border-[#424843] rounded-sm font-label-caps text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">my_location</span>
                Estate Coordinates &amp; Weather
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-2.5 px-4 bg-[#1e3a2b] text-[#e5e2dd] border border-[#cca830]/40 rounded-sm font-label-caps text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                View Tasting Basket ({cartCount})
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
