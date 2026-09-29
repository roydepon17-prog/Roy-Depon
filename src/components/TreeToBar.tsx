import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ProcessStep } from '../types';

export const TreeToBar: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  return (
    <section className="w-full bg-[#0e0e0c] py-16 sm:py-24" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-10">
          <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-widest">
            Uncompromising Technique
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#e5e2dd] mt-1 text-balance">
            The Maayon Tree-to-Bar Rhythms
          </h2>
          <p className="font-body-md text-sm sm:text-base text-[#c2c8c2] mt-2 leading-relaxed">
            From selective pod pluck to silk stone-conching, every transformation stage occurs within our Visayan sanctuary.
          </p>
        </div>

        {/* 4 Horizontal Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              onClick={() => setSelectedStep(step)}
              className="p-6 bg-[#1c1c19] rounded-lg relative overflow-hidden flex flex-col justify-between border border-[#424843]/30 hover:border-[#e9c349]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Giant numeral watermark */}
              <span className="font-display-hero text-4xl sm:text-5xl text-[#353532]/60 select-none -mt-2 group-hover:text-[#e9c349]/30 transition-colors font-serif">
                {step.step}
              </span>

              <div className="mt-4">
                <div className="w-10 h-10 rounded-full bg-[#1e3a2b] flex items-center justify-center text-[#aeceb9] mb-3 group-hover:bg-[#e9c349] group-hover:text-[#131411] transition-all">
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                </div>

                <h4 className="font-headline-sm text-lg sm:text-xl text-[#e5e2dd]">
                  {step.title}
                </h4>

                <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#424843]/40 flex items-center justify-between text-[#e9c349] font-label-caps text-[11px] tracking-wider">
                <span>{step.parameter}</span>
                <span className="material-symbols-outlined text-[14px] text-[#aeceb9] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Step Detail Modal */}
        {selectedStep && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedStep(null)}
          >
            <div
              className="relative w-full max-w-lg bg-[#20201d] border border-[#e9c349]/40 rounded-xl p-6 sm:p-8 text-[#e5e2dd] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute top-4 right-4 text-[#c2c8c2] hover:text-[#e5e2dd] p-1 cursor-pointer"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1e3a2b] text-[#e9c349] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{selectedStep.icon}</span>
                </div>
                <div>
                  <span className="font-label-caps text-xs text-[#e9c349] uppercase tracking-widest">
                    Step {selectedStep.step} of 04
                  </span>
                  <h3 className="font-headline-sm text-xl text-[#e5e2dd]">
                    {selectedStep.title}
                  </h3>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <p className="font-body-md text-sm text-[#c2c8c2] leading-relaxed">
                  {selectedStep.description}
                </p>

                <div className="p-3.5 bg-[#1c1c19] rounded-md border border-[#424843]/40">
                  <p className="font-label-caps text-[10px] text-[#aeceb9] uppercase tracking-wider mb-1">
                    Master Chocolatier Protocol
                  </p>
                  <p className="text-xs text-[#e5e2dd] leading-relaxed">
                    {selectedStep.details}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[#c2c8c2] pt-2">
                  <span className="text-[#8c928c] uppercase font-label-caps">{selectedStep.parameterLabel}:</span>
                  <span className="text-[#e9c349] font-medium">{selectedStep.parameter}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedStep(null)}
                className="mt-6 w-full py-2.5 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] border border-[#cca830]/40 rounded-sm font-label-caps text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Acknowledge Protocol
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
