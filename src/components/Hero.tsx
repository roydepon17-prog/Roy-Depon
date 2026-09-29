import React from 'react';

interface HeroProps {
  onExploreCollection: () => void;
  onExploreStory: () => void;
  onOpenTerroir: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onExploreStory,
  onOpenTerroir
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e0e0c]">
      {/* Estate Panorama Hero Visual */}
      <div className="relative w-full h-[88vh] min-h-[640px] max-h-[900px]">
        {/* Background Image with Fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2VFqfYI4Q5uP9yNOKzHw9Xw_ausQRX48i4Sy49bvpdbxkOWVVnp5MJ-xG5H4lSnyUzZJSRu57dSjlq7fYtOKIttRQtsTru6LLiG2x5mzwF2i7V2NgOo_nHKN1XO01wCqGsNal8v4IM_YbTS9lQsr67kvm32ZLz1jEhbG76IC8Y5OzdkEg2Uv8lpALUpXw4kCLYfd9dicCHMbq6IO43aFG-c6xG3E1OrM9mWEbMuH8R9QGC25pXvRHH-2WZnmkFd9zOmq-f2ncCmknTQg")`
          }}
        ></div>

        {/* Atmospheric Gradients: Dark canopy depth & contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c] via-[#131411]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0c]/90 via-[#0e0e0c]/40 to-transparent"></div>

        {/* Hero Content Foreground */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-12 flex flex-col justify-end pb-12 sm:pb-16">
          <div className="max-w-3xl flex flex-col gap-4">
            
            {/* Origin Pill & Coordinates Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#353532]/80 backdrop-blur-md text-[#e9c349] rounded-sm font-label-caps text-[11px] uppercase tracking-widest shadow-sm border border-[#e9c349]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e9c349] animate-pulse"></span>
                DAD'S FARM ESTATE • MAAYON
              </span>

              <button
                onClick={onOpenTerroir}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#20201d]/80 hover:bg-[#2a2a27] backdrop-blur-md text-[#c2c8c2] hover:text-[#e5e2dd] rounded-sm font-label-caps text-[11px] tracking-widest border border-[#424843]/50 transition-all cursor-pointer group"
                title="View farm microclimate & geolocation"
              >
                <span className="material-symbols-outlined text-[14px] text-[#aeceb9] group-hover:scale-110 transition-transform">
                  my_location
                </span>
                <span>11.3850° N, 122.7800° E — Capiz, PH</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-hero text-3xl sm:text-5xl lg:text-[56px] text-[#e5e2dd] tracking-tight leading-[1.08] text-balance">
              Artisanal Single-Origin Chocolate Rooted in the Soil of Maayon, Capiz
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="font-body-lg text-base sm:text-lg text-[#c2c8c2] max-w-2xl leading-relaxed">
              Crafted tree-to-bar from our sun-drenched organic agroforestry sanctuary at DAD's Farm. An authentic taste of Western Visayas terroir, nurtured beneath living canopies.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCollection}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] hover:text-[#e9c349] font-label-caps text-[11px] tracking-widest uppercase rounded-sm border border-[#cca830]/40 shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Collection</span>
                <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              <button
                onClick={onExploreStory}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1c1c19]/80 backdrop-blur-sm text-[#e9c349] hover:bg-[#2a2a27] hover:text-[#ffe088] font-label-caps text-[11px] tracking-widest uppercase rounded-sm border border-[#424843]/60 transition-all duration-300 cursor-pointer"
              >
                The DAD's Farm Story
              </button>
            </div>

            {/* Tasting & Origin Trust Indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2 px-3 bg-[#1c1c19]/70 backdrop-blur-sm rounded-sm border border-[#424843]/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#aeceb9] text-[18px]">spa</span>
                <span className="font-label-caps text-[11px] text-[#e5e2dd] tracking-wider">Single Estate</span>
              </div>
              <div className="p-2 px-3 bg-[#1c1c19]/70 backdrop-blur-sm rounded-sm border border-[#424843]/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e9c349] text-[18px]">forest</span>
                <span className="font-label-caps text-[11px] text-[#e5e2dd] tracking-wider">Agroforestry</span>
              </div>
              <div className="p-2 px-3 bg-[#1c1c19]/70 backdrop-blur-sm rounded-sm border border-[#424843]/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e3bfb2] text-[18px]">handshake</span>
                <span className="font-label-caps text-[11px] text-[#e5e2dd] tracking-wider">Tree-to-Bar</span>
              </div>
              <div className="p-2 px-3 bg-[#1c1c19]/70 backdrop-blur-sm rounded-sm border border-[#424843]/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#aeceb9] text-[18px]">volunteer_activism</span>
                <span className="font-label-caps text-[11px] text-[#e5e2dd] tracking-wider">Direct Empowerment</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
