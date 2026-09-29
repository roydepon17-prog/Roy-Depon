import React, { useState } from 'react';

interface FooterProps {
  onOpenTerroir: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerroir }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
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

  return (
    <footer className="w-full bg-[#0e0e0c] border-t border-[#424843]/30 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-[#424843]/20">
          
          {/* Column 1: Estate Identity */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="font-headline-sm text-xl text-[#e5e2dd] tracking-wide">
                O'GUIA CHOCOLATES
              </span>
              <span className="font-label-caps text-xs text-[#e9c349] tracking-widest mt-1">
                DAD'S FARM ESTATE
              </span>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] leading-relaxed">
              Single-estate heirloom Criollo &amp; Trinitario cacao nurtured within ancestral Visayan agroforestry terroir. Dedicated to direct-trade transparency and authentic Philippine tree-to-bar luxury confectionery.
            </p>
            <button
              onClick={onOpenTerroir}
              className="flex items-center space-x-2 pt-1 text-left text-[#c2c8c2] hover:text-[#e9c349] transition-colors cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[#e9c349] text-base group-hover:scale-110 transition-transform">
                location_on
              </span>
              <span className="font-body-sm text-xs underline decoration-[#424843] underline-offset-4">
                Maayon, Capiz 5811, Philippines
              </span>
            </button>
          </div>

          {/* Column 2: Terroir Navigation */}
          <div className="flex flex-col space-y-4">
            <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-widest">
              Terroir Navigation
            </span>
            <nav className="flex flex-col space-y-2.5">
              <a
                href="#founders"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#founders');
                }}
                className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] hover:text-[#aeceb9] transition-colors"
              >
                Terroir &amp; Farm Story
              </a>
              <a
                href="#collection"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#collection');
                }}
                className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] hover:text-[#aeceb9] transition-colors"
              >
                Single-Estate Chocolate Collection
              </a>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#process');
                }}
                className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] hover:text-[#aeceb9] transition-colors"
              >
                Slow Fermentation &amp; Roasting
              </a>
              <a
                href="#agroforestry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#agroforestry');
                }}
                className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] hover:text-[#aeceb9] transition-colors"
              >
                Regenerative Agroforestry
              </a>
              <a
                href="#faq-wholesale"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#faq-wholesale');
                }}
                className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] hover:text-[#aeceb9] transition-colors"
              >
                Wholesale &amp; Culinary Guild
              </a>
              <a
                href="#faq-wholesale"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#faq-wholesale');
                }}
                className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] hover:text-[#aeceb9] transition-colors"
              >
                Corporate Tasting Inquiries
              </a>
            </nav>
          </div>

          {/* Column 3: Ancestral Provenance */}
          <div className="flex flex-col space-y-4">
            <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-widest">
              Ancestral Provenance
            </span>
            <div className="space-y-2.5">
              <div
                onClick={onOpenTerroir}
                className="p-3 bg-[#20201d] rounded-sm border border-[#424843]/30 flex items-start space-x-3 cursor-pointer hover:border-[#aeceb9]/40 transition-colors"
              >
                <span className="material-symbols-outlined text-[#aeceb9] text-xl mt-0.5">
                  eco
                </span>
                <div>
                  <p className="font-title-md font-semibold text-xs text-[#e5e2dd]">
                    Direct Trade Estate
                  </p>
                  <p className="font-body-sm text-[11px] text-[#c2c8c2]">
                    100% Single Origin Maayon Terroir
                  </p>
                </div>
              </div>

              <div
                onClick={onOpenTerroir}
                className="p-3 bg-[#20201d] rounded-sm border border-[#424843]/30 flex items-start space-x-3 cursor-pointer hover:border-[#e9c349]/40 transition-colors"
              >
                <span className="material-symbols-outlined text-[#e9c349] text-xl mt-0.5">
                  verified
                </span>
                <div>
                  <p className="font-title-md font-semibold text-xs text-[#e5e2dd]">
                    Artisanal Visayan Craft
                  </p>
                  <p className="font-body-sm text-[11px] text-[#c2c8c2]">
                    Philippine Craft Cacao Registry
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="font-label-caps text-[10px] uppercase text-[#c2c8c2] mb-2">
                Connect With The Estate
              </p>
              <div className="flex items-center space-x-4 text-[#c2c8c2]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#aeceb9] transition-colors p-1"
                  aria-label="Estate Dispatch Website"
                >
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#aeceb9] transition-colors p-1"
                  aria-label="Estate Photography Journal"
                >
                  <span className="material-symbols-outlined text-lg">photo_camera</span>
                </a>
                <a
                  href="mailto:concierge@oguiatablea.com"
                  className="hover:text-[#aeceb9] transition-colors p-1"
                  aria-label="Email Estate Desk"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: The Tasting Journal */}
          <div className="flex flex-col space-y-4">
            <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-widest">
              The Tasting Journal
            </span>
            <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] leading-relaxed">
              Receive seasonal micro-batch allocations, harvest reports, and private cellar tasting invitations from Maayon.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#1e3a2b] border border-[#e9c349]/40 rounded-sm text-xs text-[#e5e2dd] space-y-1">
                <p className="font-semibold text-[#e9c349]">Invitation Dispatched</p>
                <p className="text-[11px] text-[#c2c8c2]">
                  Welcome to the Maayon Connoisseur Guild. Watch your inbox for harvest reports.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your culinary email"
                  className="w-full px-3.5 py-2.5 bg-[#1c1c19] border border-[#424843]/50 rounded-sm text-[#e5e2dd] font-body-sm text-xs placeholder:text-[#8c928c] focus:outline-none focus:border-[#e9c349] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#1e3a2b] text-[#e5e2dd] font-label-caps text-[11px] tracking-widest uppercase rounded-sm border border-[#cca830]/40 hover:bg-[#2a2a27] hover:text-[#e9c349] transition-all duration-300 cursor-pointer"
                >
                  Subscribe To Allocations
                </button>
              </form>
            )}

            <p className="font-body-sm text-[#8c928c] text-[10px]">
              Respecting your privacy. Harvest dispatch twice monthly.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[#8c928c] font-body-sm text-xs gap-4">
          <p>© 2025 O'Guia Chocolates &amp; DAD's Farm. Maayon, Capiz, Philippines. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-[10px] font-label-caps tracking-wider uppercase text-[#c2c8c2]">
            <button
              onClick={() => setActiveModal('traceability')}
              className="hover:text-[#e5e2dd] transition-colors cursor-pointer"
            >
              Terroir Traceability
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#e5e2dd] transition-colors cursor-pointer"
            >
              Harvest Terms
            </button>
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#e5e2dd] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="w-full max-w-lg bg-[#20201d] border border-[#e9c349]/40 rounded-lg p-6 text-[#e5e2dd] space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-headline-sm text-lg capitalize">{activeModal.replace('-', ' ')}</h4>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#c2c8c2] hover:text-[#e5e2dd] p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-[#c2c8c2] leading-relaxed">
              O'Guia Chocolates guarantees 100% single-estate provenance from DAD's Farm in Maayon, Capiz. All shipments are traceable by batch lot and certified pesticide-free through ancestral Visayan regenerative agroforestry.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2 bg-[#1e3a2b] rounded-sm font-label-caps text-xs text-[#e5e2dd] uppercase"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
