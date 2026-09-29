import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';

export const WholesaleAndFaq: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchFaq, setSearchFaq] = useState('');
  
  // Wholesale Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [allocation, setAllocation] = useState('5kg – 20kg (Bakery / Cafe)');
  const [targetDate, setTargetDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const filteredFaqs = FAQ_ITEMS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchFaq.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchFaq.toLowerCase())
  );

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    const refCode = `MYN-ALLOC-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refCode);
  };

  return (
    <section className="w-full bg-[#1c1c19] py-16 sm:py-24" id="faq-wholesale">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Connoisseur FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-widest">
                Connoisseur Guidance
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#e5e2dd] mt-1">
                Frequently Inquired
              </h2>
              <p className="font-body-md text-sm sm:text-base text-[#c2c8c2] mt-1">
                Traceability, national dispatch logistics, and optimal storage parameters.
              </p>
            </div>

            {/* Quick FAQ Search */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#8c928c]">
                search
              </span>
              <input
                type="text"
                value={searchFaq}
                onChange={(e) => setSearchFaq(e.target.value)}
                placeholder="Search queries (e.g. melting, keto, tablea, storage)..."
                className="w-full pl-9 pr-4 py-2 bg-[#20201d] border border-[#424843]/40 rounded-sm text-xs text-[#e5e2dd] placeholder:text-[#8c928c] focus:outline-none focus:border-[#e9c349]/50 transition-colors"
              />
            </div>

            {/* FAQ Accordions */}
            <div className="flex flex-col gap-2">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-sm p-4 sm:p-5 transition-colors border ${
                      isOpen
                        ? 'bg-[#2a2a27] border-[#e9c349]/30'
                        : 'bg-[#20201d] border-[#424843]/30 hover:border-[#424843]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between text-left cursor-pointer gap-3"
                    >
                      <span className="font-title-md font-semibold text-sm sm:text-base text-[#e5e2dd]">
                        {faq.question}
                      </span>
                      <span
                        className={`material-symbols-outlined text-[#e9c349] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    {isOpen && (
                      <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] mt-3 leading-relaxed border-t border-[#424843]/30 pt-3">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Location Indicator Badge */}
            <div className="mt-2 p-4 bg-[#20201d] rounded-lg flex items-center gap-4 border border-[#424843]/30">
              <span className="material-symbols-outlined text-[#e9c349] text-2xl">
                pin_drop
              </span>
              <div>
                <p className="font-title-md font-semibold text-sm text-[#e5e2dd]">
                  DAD's Farm Estate Cellar &amp; Roastery
                </p>
                <p className="font-body-sm text-xs text-[#c2c8c2] mt-0.5">
                  Barangay Manluran, Maayon, Capiz 5811 • Western Visayas, Philippines
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Wholesale & Corporate Concierge Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 bg-[#20201d] rounded-xl shadow-xl flex flex-col gap-5 border border-[#424843]/40">
              <div>
                <span className="font-label-caps text-xs uppercase text-[#e9c349] tracking-widest">
                  Culinary &amp; Corporate Desk
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl text-[#e5e2dd] mt-1">
                  Wholesale Allocation Inquiries
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-[#c2c8c2] mt-1 leading-relaxed">
                  Partner with O'Guia Chocolates for specialty coffee shops, luxury resorts, Michelin-starred pastry kitchens, and corporate allocations.
                </p>
              </div>

              {submittedRef ? (
                <div className="p-5 bg-[#1e3a2b]/80 border border-[#e9c349]/50 rounded-lg text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#cca830]/20 text-[#e9c349] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">verified</span>
                  </div>
                  <h4 className="font-headline-sm text-lg text-[#e5e2dd]">Allocation Request Registered</h4>
                  <p className="text-xs text-[#c2c8c2]">
                    Reference: <strong className="text-[#e9c349] font-mono tracking-wider">{submittedRef}</strong>
                  </p>
                  <p className="text-xs text-[#c2c8c2] leading-relaxed">
                    Our Maayon Cellar Master has received your culinary docket for <strong>{allocation}</strong>. We will review batch availability and contact <strong>{email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFullName('');
                      setEmail('');
                      setNotes('');
                    }}
                    className="mt-2 px-4 py-2 bg-[#2a2a27] hover:bg-[#353532] text-[#e5e2dd] rounded-sm font-label-caps text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-3.5" onSubmit={handleSubmitInquiry}>
                  <div>
                    <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] mb-1 block">
                      Full Name / Lead Sommelier *
                    </label>
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Chef Rafael Gonzaga"
                      className="w-full px-3.5 py-2.5 bg-[#1c1c19] rounded-sm text-[#e5e2dd] font-body-sm text-xs placeholder:text-[#8c928c] border border-[#424843]/40 focus:outline-none focus:border-[#e9c349] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] mb-1 block">
                      Corporate Email / Establishment *
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. pastry@boutique-resort.ph"
                      className="w-full px-3.5 py-2.5 bg-[#1c1c19] rounded-sm text-[#e5e2dd] font-body-sm text-xs placeholder:text-[#8c928c] border border-[#424843]/40 focus:outline-none focus:border-[#e9c349] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] mb-1 block">
                        Desired Allocation
                      </label>
                      <select
                        value={allocation}
                        onChange={(e) => setAllocation(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#1c1c19] rounded-sm text-[#e5e2dd] font-body-sm text-xs border border-[#424843]/40 focus:outline-none focus:border-[#e9c349] transition-colors"
                      >
                        <option>5kg – 20kg (Bakery / Cafe)</option>
                        <option>20kg – 100kg (Wholesale)</option>
                        <option>50+ Corporate Flights</option>
                        <option>Private Label Batch</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] mb-1 block">
                        Target Date
                      </label>
                      <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#1c1c19] rounded-sm text-[#e5e2dd] font-body-sm text-xs border border-[#424843]/40 focus:outline-none focus:border-[#e9c349] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] uppercase text-[#c2c8c2] mb-1 block">
                      Tasting Notes or Custom Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your culinary menu, seasonal gift hampers, or desired tablea batch volumes..."
                      className="w-full px-3.5 py-2.5 bg-[#1c1c19] rounded-sm text-[#e5e2dd] font-body-sm text-xs placeholder:text-[#8c928c] border border-[#424843]/40 focus:outline-none focus:border-[#e9c349] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#1e3a2b] hover:bg-[#2a2a27] text-[#e5e2dd] hover:text-[#e9c349] font-label-caps text-xs tracking-widest uppercase rounded-sm border border-[#cca830]/40 shadow-md transition-all duration-300 mt-1 cursor-pointer"
                  >
                    Dispatch Wholesale Inquiry
                  </button>
                </form>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between font-label-caps text-[10px] text-[#c2c8c2] border-t border-[#424843]/30 gap-1">
                <span>Hotline: +63 (036) 621-0000</span>
                <span>concierge@oguiatablea.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
