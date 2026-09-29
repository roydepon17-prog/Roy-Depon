import React from 'react';

export const Agroforestry: React.FC = () => {
  return (
    <section className="w-full bg-[#20201d] py-16 sm:py-24" id="agroforestry">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pb-12 sm:pb-16">
          <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-widest">
            Regenerative Custodianship
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#e5e2dd] mt-1 text-balance">
            Preserving The Capiz Biosphere
          </h2>
          <p className="font-body-md text-sm sm:text-base text-[#c2c8c2] mt-2 leading-relaxed">
            We reject monoculture farming. DAD's Farm nurtures ancestral soil vitality through natural symbiosis, ecological care, and authentic village prosperity.
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Value 1 */}
          <div className="p-6 sm:p-8 bg-[#1c1c19] rounded-xl shadow-sm flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300 border border-[#424843]/30 hover:border-[#aeceb9]/40">
            <div className="p-3 bg-[#1e3a2b] text-[#aeceb9] rounded-lg">
              <span className="material-symbols-outlined text-2xl">eco</span>
            </div>
            <h3 className="font-headline-sm text-xl text-[#e5e2dd]">
              Regenerative Canopy Harmony
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] leading-relaxed">
              Intercropped with wild bananas, marang, coconut palms, and rainforest hardwoods that host native pollinator species and nourish deep organic soil beds naturally.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#aeceb9] font-label-caps text-[11px] tracking-wider mt-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#aeceb9]"></span>
              <span>Zero Chemical Pesticides</span>
            </div>
          </div>

          {/* Value 2 */}
          <div className="p-6 sm:p-8 bg-[#1c1c19] rounded-xl shadow-sm flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300 border border-[#424843]/30 hover:border-[#e9c349]/40">
            <div className="p-3 bg-[#1e3a2b] text-[#e9c349] rounded-lg">
              <span className="material-symbols-outlined text-2xl">diversity_1</span>
            </div>
            <h3 className="font-headline-sm text-xl text-[#e5e2dd]">
              Direct Visayan Empowerment
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] leading-relaxed">
              Fostering long-term prosperity through dignified living wages, year-round harvest compensation, and mentorship programs for aspiring youth agriculturalists and chocolatiers.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#e9c349] font-label-caps text-[11px] tracking-wider mt-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e9c349]"></span>
              <span>100% Direct Farmer Guild</span>
            </div>
          </div>

          {/* Value 3 */}
          <div className="p-6 sm:p-8 bg-[#1c1c19] rounded-xl shadow-sm flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300 border border-[#424843]/30 hover:border-[#e3bfb2]/40">
            <div className="p-3 bg-[#1e3a2b] text-[#e3bfb2] rounded-lg">
              <span className="material-symbols-outlined text-2xl">clean_hands</span>
            </div>
            <h3 className="font-headline-sm text-xl text-[#e5e2dd]">
              Pure Unadulterated Ingredients
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] leading-relaxed">
              Pure estate cacao liquor and precious natural cacao butter. No hydrogenated palm oils, no soy lecithin fillers, and no synthetic vanilla flavoring—ever.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#e3bfb2] font-label-caps text-[11px] tracking-wider mt-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e3bfb2]"></span>
              <span>Uncompromised Craft Standard</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
