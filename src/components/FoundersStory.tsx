import React from 'react';

export const FoundersStory: React.FC = () => {
  return (
    <section className="w-full bg-[#1c1c19] py-16 sm:py-24" id="founders">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Tapestry & Real Founders Portrait */}
          <div className="lg:col-span-6 relative">
            {/* Ambient Glow Circle */}
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#1e3a2b]/30 blur-3xl pointer-events-none"></div>

            {/* Primary Portrait Frame */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#20201d] border border-[#424843]/40">
              <img
                alt="Founders of O'Guia Chocolates and DAD's Farm smiling warmly beside lush cacao trees with ripe colorful pods in Maayon Capiz"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQPF6wmEOI20gMMxq8cpn_0fDU8vxetMXIW7HXOxQr9XT8A-I3slHFTEjikXO4-D0cftMp5IAWxK4S7yCWUZffqtseaPghA5C4sT0-bypjLCSS7LHpfcZ36zr_NlD43qhihmIrGhWyTd0kk_BTn73fgFiI0ekDb6uhd5LnVQCpeA6YgdyB7bHsCBEetxVOb70iCrIXeLbsZbJh7jTGglZHYrIbosdDNy4-zg_ZcNkpUXvupb2_MlBH9c0GwO9sgTYKIM"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c] via-transparent to-transparent opacity-85"></div>

              {/* Overlay card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 bg-[#353532]/90 backdrop-blur-md rounded-lg shadow-md border border-[#e9c349]/20">
                <p className="font-label-caps text-[10px] uppercase text-[#e9c349] tracking-widest">
                  Maayon Estate Stewards
                </p>
                <h4 className="font-headline-sm text-lg sm:text-xl text-[#e5e2dd] mt-1">
                  DAD's Farm Family
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] mt-1 italic">
                  "Every pod is nourished by the biodiversity of our native Visayan soil, hand-selected at peak ripeness."
                </p>
              </div>
            </div>

            {/* Secondary Overlapping Detail Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-4 w-44 h-52 rounded-lg overflow-hidden shadow-2xl bg-[#2a2a27] ring-2 ring-[#0e0e0c] border border-[#e9c349]/30">
              <img
                alt="Cluster of vibrant orange, yellow, and green heirloom cacao pods growing directly on the shaded tree trunk"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc4gwss-lNYT9pKhNctTunHRWNma-LoWpEGoRK1zpFn-xz2VBKf1UZFrvUyUOJkaoB_pr2RuKRXBG7afzHuOq1cvTiNbSu3G8H9Q82OiYw8h2iBB5V6H1G-YDQTHdZQISVujxTbK9lj40by9RTRxaE7cLFlH3LmaZgwqyQIPSt3VHC_07rzzQ8Bo6CmIKsaqwv3GeUtfdgCx7aUHOSQLpRYFyZ3o8hJ1v5i9BgOvEr7YqpC63nob24embX5TLA0xGnRFw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c]/90 to-transparent flex items-end p-2.5">
                <span className="font-label-caps text-[#aeceb9] text-[10px] tracking-wider">
                  Heirloom Trinitario
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Ethos & Metric Ribbon */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#e9c349]"></span>
              <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-[0.2em]">
                Terroir &amp; Provenance
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#e5e2dd] leading-tight text-balance">
              Nurtured Beneath the Canopy of Western Visayas
            </h2>

            <div className="font-body-md text-sm sm:text-base text-[#c2c8c2] flex flex-col gap-4 leading-relaxed">
              <p>
                At DAD’s Farm in Maayon, Capiz, cacao is more than a harvest—it is an ecosystem. Our trees flourish beneath a polyculture canopy of native fruit trees, coconut palms, and rainforest flora. This biodiverse microclimate preserves soil vitality and imbues our beans with distinctive undertones of dried figs, subtle florals, and deep unadulterated cocoa liquor.
              </p>
              <p>
                By eliminating middlemen, O'Guia Chocolates directly empowers local farming families through dignified fair living wages, generational agricultural education, and sustainable regenerative agroforestry that guarantees the future of Philippine craft chocolate.
              </p>
            </div>

            {/* Pod Still Life Inset Card */}
            <div className="p-4 bg-[#20201d] rounded-lg flex items-center gap-4 shadow-sm border border-[#424843]/40">
              <div className="w-20 h-20 shrink-0 rounded-sm overflow-hidden bg-[#2a2a27]">
                <img
                  alt="Harvested freshly cut colorful cacao pods displaying internal seeds and pulpy richness"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKjV7bmKh-W8yv9GE3b_Nkj1jyZFLh1UlMo16hBm7U5NR3Yc6NwHyBf5xexTAQyYf5lik5yqfcbjUfPRAb84O-Qtdqcd2rQTzUE7obtoeBM8CGMHaoZaSiIyLu0-83gxdLwkkwJRpDUsH4naNJbvXgsYf941y8Dfmq2qS9QydXYgZflTCoUbupuBvsjllOi3xV_SY3cC19bwvUj74AonCWtiyaKyWTnx-dEJdBpPAKenasADmON9132moHcP_8IAoMsb0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-title-md font-semibold text-sm sm:text-base text-[#e5e2dd]">
                  Artisanal Pod Grading
                </p>
                <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] mt-0.5">
                  Each harvest yields small batches sorted meticulously by pod maturity and varietal character.
                </p>
              </div>
            </div>

            {/* High-Contrast Metric Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-[#2a2a27] rounded-sm border border-[#424843]/30">
                <p className="font-headline-md text-2xl sm:text-3xl text-[#e9c349] font-serif">100%</p>
                <p className="font-label-caps text-[10px] text-[#c2c8c2] uppercase mt-1">Organically Grown</p>
              </div>
              <div className="p-3 bg-[#2a2a27] rounded-sm border border-[#424843]/30">
                <p className="font-headline-md text-2xl sm:text-3xl text-[#aeceb9] font-serif">Direct</p>
                <p className="font-label-caps text-[10px] text-[#c2c8c2] uppercase mt-1">Impact Model</p>
              </div>
              <div className="p-3 bg-[#2a2a27] rounded-sm border border-[#424843]/30">
                <p className="font-headline-md text-2xl sm:text-3xl text-[#e3bfb2] font-serif">Single</p>
                <p className="font-label-caps text-[10px] text-[#c2c8c2] uppercase mt-1">Origin Purity</p>
              </div>
              <div className="p-3 bg-[#2a2a27] rounded-sm border border-[#424843]/30">
                <p className="font-headline-md text-2xl sm:text-3xl text-[#ffe088] font-serif">12+</p>
                <p className="font-label-caps text-[10px] text-[#c2c8c2] uppercase mt-1">Cacao Varieties</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
