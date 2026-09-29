import React from 'react';
import { ESTATE_TERROIR_DATA } from '../data/content';

interface TerroirMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerroirMapModal: React.FC<TerroirMapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#20201d] border border-[#e9c349]/40 rounded-xl overflow-hidden shadow-2xl text-[#e5e2dd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#424843]/40 flex items-center justify-between bg-[#131411]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#e9c349] text-2xl">
              explore
            </span>
            <div>
              <span className="font-label-caps text-[10px] text-[#e9c349] uppercase tracking-widest">
                Ancestral Estate Provenance
              </span>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#e5e2dd]">
                {ESTATE_TERROIR_DATA.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#20201d] hover:bg-[#2a2a27] text-[#c2c8c2] hover:text-[#e5e2dd] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Coordinates Callout Box */}
          <div className="p-4 bg-[#1c1c19] rounded-lg border border-[#424843]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-label-caps text-[10px] uppercase text-[#8c928c]">
                GPS Coordinates &amp; Elevation
              </p>
              <p className="font-mono text-base text-[#e9c349] font-semibold mt-0.5">
                {ESTATE_TERROIR_DATA.coordinates}
              </p>
              <p className="text-xs text-[#c2c8c2] mt-0.5">
                {ESTATE_TERROIR_DATA.elevation} • {ESTATE_TERROIR_DATA.location}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=11.3850,122.7800"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2a2a27] hover:bg-[#1e3a2b] text-[#e5e2dd] hover:text-[#e9c349] rounded-sm font-label-caps text-[10px] uppercase tracking-wider transition-colors self-start sm:self-center"
            >
              <span>View On Satellite</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>

          {/* Microclimate Matrix */}
          <div>
            <h4 className="font-label-caps text-xs uppercase text-[#aeceb9] tracking-wider mb-3">
              Maayon Microclimate &amp; Edaphic Profile
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[#8c928c] uppercase font-label-caps text-[10px] block">Soil Biology</span>
                <span className="text-[#e5e2dd] font-medium mt-1 block">{ESTATE_TERROIR_DATA.soilType}</span>
              </div>
              <div className="p-3 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[#8c928c] uppercase font-label-caps text-[10px] block">Rainfall &amp; Climate</span>
                <span className="text-[#e5e2dd] font-medium mt-1 block">{ESTATE_TERROIR_DATA.climate} • {ESTATE_TERROIR_DATA.annualRainfall}</span>
              </div>
              <div className="p-3 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[#8c928c] uppercase font-label-caps text-[10px] block">Average Forest Temp</span>
                <span className="text-[#e5e2dd] font-medium mt-1 block">{ESTATE_TERROIR_DATA.averageTemperature} Ambient Canopy Shade</span>
              </div>
              <div className="p-3 bg-[#1c1c19] rounded-sm border border-[#424843]/30">
                <span className="text-[#8c928c] uppercase font-label-caps text-[10px] block">Stewardship Guild</span>
                <span className="text-[#e5e2dd] font-medium mt-1 block">{ESTATE_TERROIR_DATA.farmersGuildMembers} Maayon Farming Families</span>
              </div>
            </div>
          </div>

          {/* Polyculture Companion Trees */}
          <div>
            <h4 className="font-label-caps text-xs uppercase text-[#e3bfb2] tracking-wider mb-2">
              Living Canopy Flora &amp; Soil Companions
            </h4>
            <div className="flex flex-wrap gap-2">
              {ESTATE_TERROIR_DATA.canopyCompanions.map((plant, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#2a2a27] text-xs text-[#e5e2dd] rounded-sm border border-[#424843]/40 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aeceb9]"></span>
                  {plant}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#c2c8c2] leading-relaxed italic border-t border-[#424843]/30 pt-4">
            "We plant trees that shade our cacao and enrich the ground naturally with decomposing biomass, banishing artificial fertilizers forever."
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#131411] border-t border-[#424843]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] rounded-sm font-label-caps text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            Close Terroir View
          </button>
        </div>
      </div>
    </div>
  );
};
