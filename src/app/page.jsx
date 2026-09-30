'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', category: '' });
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Premium Indian Spices',
      badge: 'DIRECT ESTATE SOURCED • SINGLE-ORIGIN PURE SPICES',
      badgeColor: 'bg-secondary',
      tag: 'Lot SPEC-01 // Malabar • Guntur • Kashmir',
      image: '/bannerH.jpg',
    },
    {
      id: 2,
      title: 'Royal Dry Fruits & Nuts',
      badge: 'ORCHARD SELECTED • JUMBO DRY FRUITS & KERNELS',
      badgeColor: 'bg-primary-container',
      tag: 'Grade 180+ // Mamra Almonds • Sun-Cured Raisins • Walnut Kernels',
      image: '/girjahome.jpg',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const openQuoteModal = (title = 'Bulk Consignment Quote', category = 'Spices & Dry Fruits') => {
    setModalData({ title, category });
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
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      {/* Header Navigation */}
      <Navbar onRequestQuote={() => openQuoteModal('General Trade Quotation', 'Export Consortium')} />

      {/* Main Content */}
      <main className="w-full bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            {/* Ambient Warm Orbs */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[920px] h-[360px] bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-[800px] right-0 w-[480px] h-[480px] bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* 1. Hero Section & Interactive Sliding Banner */}
            <section className="max-w-[1440px] mx-auto px-margin pt-space-xl pb-space-lg flex flex-col items-center text-center">
              {/* Subtitle badge */}
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest shadow-sm mb-space-md">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                PURE &amp; TRUSTED • DRY FRUITS &amp; SPICES
              </div>

              {/* Main Title */}
              <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl tracking-tight leading-tight">
                Direct Harvest Spices &amp; Royal Dry Fruits
                <span className="block font-headline-lg text-headline-lg font-normal italic text-primary-container mt-1">
                  Pure Harvest &amp; Honestly Graded
                </span>
              </h1>

              {/* Tagline */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-md leading-relaxed">
                Girja brings farm-fresh authentic Indian spices and premier royal dry fruits directly from regional agricultural estates and origin orchards across India and beyond — graded for export purity, fair weight, and unmatched aroma.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-lg">
                <Link
                  href="/dry-fruits"
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary rounded font-label-lg text-label-lg shadow-sm hover:bg-on-primary-fixed-variant transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">nutrition</span>
                  Explore Dry Fruits
                </Link>
                <Link
                  href="/spices"
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-secondary text-on-secondary rounded font-label-lg text-label-lg shadow-sm hover:bg-on-secondary-fixed-variant transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">spa</span>
                  Explore Spices
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-surface-container-high text-on-surface rounded font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">handshake</span>
                  Trade Inquiries
                </Link>
              </div>

              {/* Interactive Carousel Slider */}
              <div
                className="w-full mt-space-xl relative group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-xl overflow-hidden shadow-xl bg-surface-container">
                  {slides.map((slide, index) => {
                    const isActive = currentSlide === index;
                    return (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-end ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                          }`}
                      >
                        <img
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          src={slide.image}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="relative z-20 w-full p-space-md sm:p-space-lg flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                            <span className={`w-2 h-2 rounded-full ${slide.badgeColor}`}></span>
                            {slide.badge}
                          </span>
                          <span className="hidden sm:inline-block font-label-sm text-label-sm text-surface-container-lowest/80 uppercase tracking-widest">
                            {slide.tag}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Carousel Controls */}
                  <button
                    aria-label="Previous slide"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-surface/85 backdrop-blur-md text-on-surface flex items-center justify-center shadow-md hover:bg-surface transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[22px]">chevron_left</span>
                  </button>
                  <button
                    aria-label="Next slide"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-surface/85 backdrop-blur-md text-on-surface flex items-center justify-center shadow-md hover:bg-surface transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[22px]">chevron_right</span>
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        aria-label={`Go to slide ${idx + 1}`}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all shadow-sm cursor-pointer ${currentSlide === idx ? 'w-7 bg-surface' : 'w-2 bg-surface/50'
                          }`}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Key trust metric pills below slider */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-md">
                  <div className="flex items-center justify-center gap-2 p-space-sm rounded bg-surface-container-low text-on-surface-variant text-center shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">agriculture</span>
                    <span className="font-label-sm text-label-sm font-medium tracking-wide">100% Direct Origin Sourced</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-space-sm rounded bg-surface-container-low text-on-surface-variant text-center shadow-sm">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
                    <span className="font-label-sm text-label-sm font-medium tracking-wide">Export-Grade Quality Graded</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-space-sm rounded bg-surface-container-low text-on-surface-variant text-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]">sanitizer</span>
                    <span className="font-label-sm text-label-sm font-medium tracking-wide">Zero Preservatives &amp; Sulfur</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-space-sm rounded bg-surface-container-low text-on-surface-variant text-center shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">public</span>
                    <span className="font-label-sm text-label-sm font-medium tracking-wide">Export Globally</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Section: WHY GIRJA */}
            <section className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col items-center text-center">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">WHY GIRJA</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs tracking-tight">
                Quality You Can Taste, Trust You Can Count On
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-xs leading-relaxed">
                Every sack, every carton and every jar is handled with one purpose — to bring the purest flavours of Indian spices and nutrient-dense dry fruits to your commercial pantry or home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md w-full mt-space-lg text-left">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Freshness &amp; Purity</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      100% natural processing with zero artificial color, preservatives, or chemical polish.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs flex items-center gap-1.5 text-primary">
                    <span className="font-label-sm text-label-sm uppercase font-semibold">Unadulterated</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">location_on</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Origin Direct</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Procured directly from premier spice estates and orchards across Kashmir, Guntur, and Sangli.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs flex items-center gap-1.5 text-secondary">
                    <span className="font-label-sm text-label-sm uppercase font-semibold">Single-Origin Lots</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-primary-fixed/50 flex items-center justify-center text-primary mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Flexible Scale</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Equipped for both premium kitchen retail batches and multi-ton oceanic export consignments.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs flex items-center gap-1.5 text-primary">
                    <span className="font-label-sm text-label-sm uppercase font-semibold">Scalable Supply</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-tertiary-fixed/50 flex items-center justify-center text-tertiary mb-space-md shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">tune</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Custom Grading</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Calibrated exactly to your required SHU heat, curcumin level, and nut caliber benchmarks.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs flex items-center gap-1.5 text-tertiary">
                    <span className="font-label-sm text-label-sm uppercase font-semibold">Lab Verified</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Section: VERIFICATION & COMPLIANCE */}
            <section className="max-w-[1440px] mx-auto px-margin py-space-xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
                <div>
                  <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest shadow-sm mb-space-xs">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                    STATUTORY CLEARANCES &amp; REGISTRY
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">
                    VERIFICATION &amp; COMPLIANCE
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xl">
                    Domestic and overseas consignments backed by accredited certifications and lab inspection standards.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1G8WO8YwiCHduG8yGsXcK2P5fpv-27Vjy?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-[#1a1f1b] text-surface rounded font-label-sm text-label-sm uppercase tracking-wider shadow-sm hover:bg-black transition-colors self-start md:self-auto"
                >
                  <span className="material-symbols-outlined text-[16px]">folder_shared</span>
                  ACCESS FULL REGISTRY
                </a>
              </div>

              {/* 2x2 Compliance Cards Grid (2 cards per row) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mt-space-md">
                {/* Node 01 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between relative border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm font-semibold text-primary">01</span>
                      <span className="material-symbols-outlined text-outline text-[28px]">description</span>
                    </div>
                    <span className="material-symbols-outlined text-primary-container text-[22px]">verified</span>
                  </div>
                  <div className="mt-space-lg mb-space-md">
                    <h3 className="font-label-lg text-label-lg font-bold text-on-surface uppercase tracking-wide">GST Registration MFG</h3>
                    <span className="font-label-sm text-label-sm text-outline-variant block mt-1 uppercase tracking-wider">Gov of India</span>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline font-medium">GSTIN-MFG-01</span>
                    <a
                      href="https://drive.google.com/file/d/1pKcNVtHI6MFWPpcnFzglwke1NFDO0g-t/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-on-surface hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>View Original</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* Node 02 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-xl card-interactive flex flex-col justify-between relative ring-2 ring-primary">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center font-label-sm text-label-sm font-semibold text-on-primary-container">02</span>
                      <span className="material-symbols-outlined text-primary text-[28px]">description</span>
                    </div>
                    <span className="material-symbols-outlined text-primary-container text-[22px]">verified</span>
                  </div>
                  <div className="mt-space-lg mb-space-md">
                    <h3 className="font-label-lg text-label-lg font-bold text-on-surface uppercase tracking-wide">EXPORTER OF SPICES</h3>
                    <span className="font-label-sm text-label-sm text-outline-variant block mt-1 uppercase tracking-wider">Ministry of Commerce</span>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline font-medium">EXPORTER LICENSE</span>
                    <a
                      href="https://drive.google.com/file/d/1aqgq49NcnAELjd5O16r0Nd0NC4hMOLka/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-primary underline underline-offset-4 hover:text-on-primary-fixed-variant transition-colors cursor-pointer"
                    >
                      <span>View Original</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* Node 03 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between relative border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm font-semibold text-primary">03</span>
                      <span className="material-symbols-outlined text-outline text-[28px]">description</span>
                    </div>
                    <span className="material-symbols-outlined text-primary-container text-[22px]">verified</span>
                  </div>
                  <div className="mt-space-lg mb-space-md">
                    <h3 className="font-label-lg text-label-lg font-bold text-on-surface uppercase tracking-wide">FSSAI</h3>
                    <span className="font-label-sm text-label-sm text-outline-variant block mt-1 uppercase tracking-wider">Central Licensing Authority</span>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline font-medium">FSSAI</span>
                    <a
                      href="https://drive.google.com/file/d/1-kfG27F0hQ66dQ0IVA0kVObWpxLzlFTH/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-on-surface hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>View Original</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                </div>

                {/* Node 04 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between relative border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm font-semibold text-primary">04</span>
                      <span className="material-symbols-outlined text-outline text-[28px]">description</span>
                    </div>
                    <span className="material-symbols-outlined text-primary-container text-[22px]">verified</span>
                  </div>
                  <div className="mt-space-lg mb-space-md">
                    <h3 className="font-label-lg text-label-lg font-bold text-on-surface uppercase tracking-wide">Import Export Code (IEC)</h3>
                    <span className="font-label-sm text-label-sm text-outline-variant block mt-1 uppercase tracking-wider">DGFT India</span>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline font-medium">DGFT-IEC-INDIA</span>
                    <a
                      href="https://drive.google.com/file/d/1x9gGW2v3y0XcRsMKMkdhLibsqfrDD9hf/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-on-surface hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>View Original</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Section: THE GIRJA STANDARD */}
            <section className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col items-center text-center">
              <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">THE GIRJA STANDARD</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs tracking-tight">
                What Every Sack Is Weighed Against
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-xs leading-relaxed">
                Four core tenets governing every batch of spices and dry fruits dispatched from our facility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md w-full mt-space-lg text-left">
                {/* Principle 1 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <span className="font-headline-md text-headline-md font-serif text-on-surface select-none block mb-space-sm">χ</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Purity, Not Promises</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Zero adulteration and zero fumigation — exactly as stated on our technical certificate.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">0% Extraneous Matter</span>
                  </div>
                </div>

                {/* Principle 2 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <span className="font-headline-md text-headline-md font-serif text-secondary select-none block mb-space-sm">ψ</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Sourced at the Root</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Direct grower and origin farm contracts — eliminating intermediary guesswork.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Direct Farm Origin</span>
                  </div>
                </div>

                {/* Principle 3 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <span className="font-headline-md text-headline-md font-serif text-primary-container select-none block mb-space-sm">ω</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Fair Weight &amp; Price</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Calibrated precision scales with zero tare discrepancy on every trade consignment.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Certified Precision</span>
                  </div>
                </div>

                {/* Principle 4 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md card-interactive flex flex-col justify-between border border-outline-variant/10">
                  <div>
                    <span className="font-headline-md text-headline-md font-serif text-tertiary select-none block mb-space-sm">ï</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Batch Consistency</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed">
                      Identical essential oil yield, moisture parameters, and caliber batch after batch.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-xs border-t border-surface-container">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Controlled Parameters</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
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
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary block">Official Procurement Protocol</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface">Request Trade Quote</h3>
              </div>
              <button className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer" onClick={closeModal}>
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="p-3 bg-surface-container rounded-lg mb-5 text-xs">
              <span className="text-on-surface-variant">Selected Inquiry: </span>
              <span className="font-semibold text-primary">{modalData.title}</span>
            </div>

            {modalSubmitted ? (
              <div className="text-center py-6">
                <span className="material-symbols-outlined text-4xl text-tertiary block mb-2">check_circle</span>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-1">Quote Request Transmitted!</h4>
                <p className="text-xs text-on-surface-variant">Our central trade desk will contact your registered corporate email within 4 hours.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleModalSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Company / Importer</label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. Al-Noor Mercantile"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Corporate Email</label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="trade@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Estimated Quantity (MT / Kg)</label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. 10 MT"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Destination Port / City</label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. Nhava Sheva / Dubai"
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
                    {modalSubmitting ? 'Transmitting...' : 'Send Trade Request'}
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
