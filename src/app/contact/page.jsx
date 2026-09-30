'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', origin: '', grade: '' });
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const openModal = (name = 'Institutional Inquiry', origin = 'Global Export Consignment', grade = 'Grade A') => {
    setModalData({ title: name, origin, grade });
    setModalOpen(true);
    setModalSubmitted(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSubmitting(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSubmitting(true);
    setTimeout(() => {
      setModalSubmitting(false);
      setModalSubmitted(true);
      setTimeout(() => {
        closeModal();
      }, 1500);
    }, 700);
  };

  return (
    <div className="bg-background font-body text-on-surface antialiased min-h-screen selection:bg-primary-container/20 selection:text-primary">
      {/* Header Navigation */}
      <Navbar onRequestQuote={() => openModal('Institutional Portfolio', 'Pan-India & Overseas Export', 'Grade A')} />

      {/* Main Body */}
      <main className="w-full relative">
        <div className="flex flex-col w-full">
          {/* Banner / Hero Section */}
          <section className="w-full bg-[#111915] text-[#f7ecd5] relative overflow-hidden py-20 lg:py-24 px-6 sm:px-8">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c68b29_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
            <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#c68b29] font-bold">
                  GLOBAL ESTABLISHMENT
                </span>
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight uppercase leading-tight">
                CONTACT INFORMATION
              </h1>
              <div className="w-24 h-1 bg-[#c68b29] mt-4 mb-6 rounded-full"></div>
              <p className="text-base sm:text-lg text-[#b8b3a7] max-w-2xl font-normal leading-relaxed">
                Direct communication channels for institutional inquiries, trade consignments, and business correspondence.
              </p>
            </div>
          </section>

          {/* Architectural Contact Grid Section */}
          <section className="w-full bg-background py-16 lg:py-24 px-6 sm:px-8 -mt-6">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Registered Office */}
                <div className="lg:col-span-7 bg-white rounded-xl shadow-md p-8 sm:p-10 flex flex-col justify-between relative border border-outline-soft/40">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-lg bg-[#f4efe4] flex items-center justify-center text-primary shadow-xs">
                      <span className="material-symbols-outlined text-3xl">location_on</span>
                    </div>
                    <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
                      REGISTERED OFFICE
                    </span>
                  </div>
                  <div className="space-y-4 mb-10">
                    <h2 className="font-headline text-xl uppercase font-bold text-on-surface tracking-wide">
                      OFFICE ADDRESS
                    </h2>
                    <div className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      <p>APMC Market-I, Phase-2</p>
                      <p>Navi Mumbai, Maharashtra</p>
                      <p>India - 400703</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-soft flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span className="text-[11px]">Verified Physical Presence</span>
                    <span className="material-symbols-outlined text-gold-accent text-base">check_circle</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="lg:col-span-5 bg-[#0f1713] text-[#f7ecd5] rounded-xl shadow-xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#c68b29]/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center text-[#c68b29] mb-8 shadow-xs border border-white/10">
                      <span className="material-symbols-outlined text-3xl">call</span>
                    </div>
                    <h2 className="font-headline text-xl uppercase tracking-wider text-white font-bold mb-8">
                      TELEPHONE
                    </h2>
                    <div className="space-y-2 mb-8">
                      <div className="font-mono text-xl sm:text-2xl text-white font-bold tracking-tight">
                        <a className="hover:text-[#c68b29] transition-colors" href="tel:+918860723545">
                          +91 88607 23545
                        </a>
                      </div>
                      <div className="font-mono text-xl sm:text-2xl text-[#ded9ce] font-bold tracking-tight">
                        <a className="hover:text-[#c68b29] transition-colors" href="tel:+917000883954">
                          +91 70008 83954
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 text-xs text-[#9fbaaa] font-medium">
                    <p className="text-[11px]">Available 24/7 for operational protocols.</p>
                  </div>
                </div>
              </div>

              {/* Email Inquiries */}
              <div className="w-full bg-white rounded-xl shadow-md p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-outline-soft/40">
                <div className="flex items-start sm:items-center gap-6">
                  <div className="w-14 h-14 rounded-lg bg-[#f4efe4] flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div>
                    <h2 className="font-headline text-lg uppercase tracking-wide font-bold text-on-surface">
                      EMAIL INQUIRIES
                    </h2>
                    <p className="text-xs text-on-surface-variant mt-1">
                      For official intelligence and regulatory compliance matters.
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <a
                    className="font-mono text-lg sm:text-2xl text-on-surface font-bold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors tracking-tight"
                    href="mailto:Shahi.pradeep5@gmail.com"
                  >
                    Shahi.pradeep5@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Luxury Dark Trade Footer Component */}
      <Footer />

      {/* Lightbox Modal for RFQ */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-lg bg-surface rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8 border border-outline-soft">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-soft">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary block">
                  Official RFQ Protocol
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface">Request Bulk Quote</h3>
              </div>
              <button className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer" onClick={closeModal}>
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="p-3 bg-surface-container rounded-lg mb-5 text-xs">
              <span className="text-on-surface-variant">Selected Portfolio: </span>
              <span className="font-semibold text-primary">
                {modalData.title} {modalData.origin ? `(${modalData.origin} • ${modalData.grade})` : ''}
              </span>
            </div>

            {modalSubmitted ? (
              <div className="text-center py-6">
                <span className="material-symbols-outlined text-4xl text-tertiary block mb-2">check_circle</span>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-1">RFQ Transmitted Successfully!</h4>
                <p className="text-xs text-on-surface-variant">Our central trade desk will contact your registered corporate email.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleModalSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                      Company / Importer
                    </label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. Al-Noor Trading"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                      Business Email
                    </label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="import@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. 5 MT / 1x20ft FCL"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                      Destination Port
                    </label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. Jebel Ali / Hamburg"
                      type="text"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    className="px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-on-surface cursor-pointer"
                    onClick={closeModal}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-secondary hover:bg-secondary-dark text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors shadow-xs cursor-pointer"
                    disabled={modalSubmitting}
                    type="submit"
                  >
                    {modalSubmitting ? 'Transmitting...' : 'Send RFQ Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
