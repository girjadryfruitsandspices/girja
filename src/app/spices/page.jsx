'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SpicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', origin: '', grade: '' });
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const openModal = (name, origin, grade) => {
    setModalData({ title: name, origin: origin || '', grade: grade || '' });
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

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    alert('Inquiry received. Our trade desk will respond within 4 hours.');
  };

  const products = [
    {
      id: '01',
      title: 'Fennel Seeds',
      type: 'whole',
      origin: 'Gujarat',
      badge: 'Whole Spice',
      sub: 'Fennel Seeds · Bold Green',
      desc: 'Sweet, intensely aromatic bold green seeds for gourmet spice blends, after-meal digestives, and confectionery.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Fennel%20Seeds',
      image: '/funnel.jpg',
    },
    {
      id: '02',
      title: 'Mace',
      type: 'whole',
      origin: 'Kerala',
      badge: 'Whole Spice',
      badgeColor: 'text-secondary',
      sub: 'Nutmeg Aril · Flower Blade',
      desc: 'Delicate, hand-harvested golden-red aril prized in gourmet gravies, aromatic rice dishes, and export seasoning blends.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Mace',
      image: '/mace.jpg',
    },
    {
      id: '03',
      title: 'Green Cardamom',
      type: 'whole',
      origin: 'Idukki · 8mm+',
      badge: 'Whole Spice',
      badgeColor: 'text-tertiary',
      sub: 'Alleppey Green Extra Bold · 8mm Pods',
      desc: 'Fragrant, plump pods bursting with intense volatile oils for teas, gourmet desserts and fine dining.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Green%20Cardamom',
      image: '/green.jpeg',
    },
    {
      id: '04',
      title: 'Black Cardamom',
      type: 'whole',
      origin: 'Sikkim',
      badge: 'Whole Spice',
      sub: 'Large Black Cardamom · Smokey Pods',
      desc: 'Wood-fire smoke cured large pods essential to robust rice delicacies, rich gravies, and authentic whole spice seasonings.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Black%20Cardamom',
      image: '/black.jpeg',
    },
    {
      id: '05',
      title: 'Turmeric Finger',
      type: 'whole',
      origin: 'Sangli & Erode',
      badge: 'Whole Spice',
      sub: 'Whole Turmeric Finger · Double Polished',
      desc: 'Sun-dried, rock-hard rhizome fingers with radiant golden color, carefully graded for purity and high curcumin.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Turmeric%20Finger',
      image: '/finger.jpeg',
    },
    {
      id: '06',
      title: 'Turmeric Powder',
      type: 'whole',
      origin: 'Milled Fine',
      badge: 'Milled Pure',
      sub: 'Turmeric Powder · Cold Ground',
      desc: 'Cold-pulverized deep ochre powder preserving natural oils, zero artificial starch or adulteration guaranteed.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Turmeric%20Powder',
      image: '/powder.jpeg',
    },
    {
      id: '07',
      title: 'MP Chilli Teja (S17)',
      type: 'chilli',
      origin: '75k+ SHU',
      originClass: 'text-rose-700 bg-rose-50',
      badge: 'Chilli',
      badgeColor: 'text-secondary',
      sub: 'Madhya Pradesh · High Pungency',
      desc: 'Extraordinary heat level with sharp biting spice, selected especially for extractors, snack seasoning, and industrial blends.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20MP%20Chilli%20Teja%20S17',
      image: '/mp chilli.jpeg',
    },
    {
      id: '08',
      title: '2 Mahi Chilli',
      type: 'chilli',
      origin: 'Deep Red Grade',
      badge: 'Chilli',
      badgeColor: 'text-secondary',
      sub: 'Premium Trade Cut · Clean Stems',
      desc: 'Well-known trade grade valued across wholesale markets for vibrant brick-red color tone and steady heat value.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%202%20Mahi%20Chilli',
      image: '/mahi.jpg',
    },
    {
      id: '09',
      title: 'Red Chilli Powder',
      type: 'chilli',
      origin: 'Stone Ground',
      badge: 'Chilli Powder',
      badgeColor: 'text-secondary',
      sub: 'Red Chilli Powder · Pure Stemless',
      desc: 'Slow stone-ground powder blending Byadgi redness with Guntur pungency for rich restaurant gravy color.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Red%20Chilli%20Powder',
      image: '/red.jpeg',
    },
    {
      id: '10',
      title: 'Whole Red Chilli',
      type: 'chilli',
      origin: 'Sun Cured',
      badge: 'Chilli',
      badgeColor: 'text-secondary',
      sub: 'Whole Red Chilli · Stem / Stemless',
      desc: 'Yard-dried whole pods for tempering, pickle manufacturing, and custom spice grinding operations.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Whole%20Red%20Chilli',
      image: '/whole red.jpeg',
    },
    {
      id: '11',
      title: 'Sannam Chilli',
      type: 'regional',
      origin: 'Andhra Pradesh',
      badge: 'Regional',
      badgeColor: 'text-secondary',
      sub: 'Guntur S4 Benchmark',
      desc: "India's export benchmark grade. High oil content, thick skins, and unmatched sharp spice heat.",
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Sannam%20Chilli%20Andhra%20Pradesh',
      image: '/sannam.jpg',
    },
    {
      id: '12',
      title: 'Byadgi Chilli',
      type: 'regional',
      origin: 'Karnataka',
      badge: 'GI Tagged',
      badgeColor: 'text-tertiary',
      sub: 'Kaddi & Dabbi Grades',
      desc: 'World-famous crinkled skin chilli with low heat but saturated, radiant ruby-red natural color value.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Byadgi%20Chilli%20Karnataka',
      image: '/byadgi.jpg',
    },
    {
      id: '13',
      title: 'Kashmiri Chilli',
      type: 'regional',
      origin: 'J&K / HP',
      badge: 'Regional',
      badgeColor: 'text-primary',
      sub: 'Deep Scarlet · Mild Pungency',
      desc: 'Delightful mildness with incomparable deep carmine brilliance for tandoori dishes and butter gravies.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Kashmiri%20Chilli',
      image: '/kashmiri.jpg',
    },
    {
      id: '14',
      title: 'Guntur Chilli',
      type: 'regional',
      origin: 'Andhra Pradesh Origin',
      badge: 'Regional',
      badgeColor: 'text-secondary',
      sub: 'Trade Direct Consignments',
      desc: 'Wholesale volume chillies loaded directly from the Guntur market yards for export and spice millers.',
      whatsapp: 'https://wa.me/918860723545?text=Enquiry%20for%20Guntur%20Chilli',
      image: '/guntur.jpeg',
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((item) => item.type === activeCategory);

  return (
    <div className="min-h-screen bg-background font-body text-on-surface antialiased selection:bg-primary-container/20 selection:text-primary relative">
      {/* Botanical Spice Background Pattern */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ opacity: 0.055 }}>
        <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="280" id="spice-botanical-pattern" patternUnits="userSpaceOnUse" width="280">
              <g fill="none" stroke="#815500" strokeWidth="1.4" transform="translate(50,50) scale(0.9)">
                <path d="M0,-24 C3,-14 6,-10 0,0 C-6,-10 -3,-14 0,-24 Z" fill="#c68b29" fillOpacity="0.15" />
                <path d="M17,-17 C13,-6 9,-4 0,0 C9,-4 13,-6 17,-17 Z" />
                <path d="M24,0 C14,3 10,6 0,0 C10,-6 14,-3 24,0 Z" fill="#c68b29" fillOpacity="0.15" />
                <path d="M17,17 C6,13 4,9 0,0 C4,9 6,13 17,17 Z" />
                <path d="M0,24 C-3,14 -6,10 0,0 C6,10 3,14 0,24 Z" fill="#c68b29" fillOpacity="0.15" />
                <path d="M-17,17 C-13,6 -9,4 0,0 C-9,4 -13,6 -17,17 Z" />
                <path d="M-24,0 C-14,-3 -10,-6 0,0 C-10,6 -14,3 -24,0 Z" fill="#c68b29" fillOpacity="0.15" />
                <path d="M-17,-17 C-6,-13 -4,-9 0,0 C-4,-9 -6,-13 -17,-17 Z" />
                <circle cx="0" cy="0" fill="#815500" r="3.5" />
              </g>
              <g fill="none" stroke="#456553" strokeWidth="1.4" transform="translate(200,60) rotate(25)">
                <path d="M0,-18 C8,-10 8,10 0,18 C-8,10 -8,-10 0,-18 Z" fill="#456553" fillOpacity="0.12" />
                <path d="M0,-18 L0,18" strokeDasharray="2 2" />
                <path d="M-4,-8 C-1,-3 -1,3 -4,8" />
                <path d="M4,-8 C1,-3 1,3 4,8" />
              </g>
              <g fill="none" stroke="#a43c1b" strokeWidth="1.3" transform="translate(80,195) rotate(-35)">
                <rect fill="#a43c1b" fillOpacity="0.1" height="44" rx="4" width="8" x="-4" y="-22" />
                <path d="M-2,-20 C2,-20 2,20 -2,20" />
                <rect fill="#c68b29" fillOpacity="0.08" height="40" rx="3.5" width="7" x="6" y="-20" />
              </g>
              <g fill="none" stroke="#815500" strokeWidth="1.4" transform="translate(210,185) rotate(40)">
                <circle cx="0" cy="-10" fill="#815500" fillOpacity="0.2" r="4" />
                <path d="M-6,-10 L6,-10" />
                <path d="M-2,-7 L-2,14 C-2,16 2,16 2,14 L2,-7" />
                <circle cx="-4" cy="-13" r="1" />
                <circle cx="4" cy="-13" r="1" />
              </g>
              <g fill="#815500" fillOpacity="0.25" stroke="#815500" strokeWidth="1" transform="translate(140,120)">
                <circle cx="-6" cy="-5" r="3.5" />
                <circle cx="5" cy="-4" r="3" />
                <circle cx="0" cy="5" r="4" />
                <circle cx="-8" cy="6" r="2.5" />
              </g>
              <g fill="none" stroke="#456553" strokeWidth="1.2" transform="translate(150,230) rotate(-15)">
                <path d="M0,20 Q-5,0 12,-15" />
                <path d="M0,12 Q-8,10 -10,3 Q-3,5 0,12" fill="#456553" fillOpacity="0.15" />
                <path d="M3,4 Q12,2 14,-5 Q7,-3 3,4" fill="#456553" fillOpacity="0.15" />
                <path d="M7,-6 Q-1,-8 -3,-14 Q4,-12 7,-6" fill="#456553" fillOpacity="0.15" />
              </g>
            </pattern>
          </defs>
          <rect fill="url(#spice-botanical-pattern)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Header Navigation */}
      <Navbar onRequestQuote={() => openModal('Spices Portfolio', 'Single-Origin Estates', 'Export Grade')} />

      <main className="w-full relative">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-12 sm:pt-18 sm:pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-soft mb-6">
            <span className="material-symbols-outlined text-xs text-primary">psychiatry</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">Pure &amp; Trusted • Dry Fruits &amp; Spices</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-tight sm:leading-none mb-6">
            Spices, <span className="italic font-normal text-secondary">Aromatic</span><br className="hidden sm:inline" /> &amp; Fiery Chillies
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
            Girja Dry Fruits &amp; Spices brings whole spices, aromatic herbs and chilli varieties from across India — graded by hand, sold on trust, delivered fresh to your kitchen or your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a className="inline-flex items-center gap-2 bg-primary hover:bg-[#6b4600] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-all" href="#range">
              <span>Explore Products</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </a>
            <a
              className="inline-flex items-center gap-2 bg-white hover:bg-surface-container border border-outline-soft text-on-surface text-sm font-semibold px-6 py-3 rounded-full shadow-xs transition-all"
              href="https://wa.me/918860723545?text=Hello%2C%20I%20am%20interested%20in%20Girja%20Dry%20Fruits%20and%20Spices%20products"
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-secondary text-base">chat</span>
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-outline-soft/80 shadow-xs text-xs font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-tertiary text-base">verified</span>
              <span>100% Pure Origin</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-outline-soft/80 shadow-xs text-xs font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-primary-container text-base">award_star</span>
              <span>Certified Export Grade</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-outline-soft/80 shadow-xs text-xs font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-base">sanitizer</span>
              <span>Steam Sterilized</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-outline-soft/80 shadow-xs text-xs font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-tertiary text-base">eco</span>
              <span>Sustainably Farmed</span>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_16px_36px_-8px_rgba(28,28,23,0.12)] border border-outline-soft/80 group">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-surface-container">
              <img
                alt="Authentic Indian Spices Assortment and Gourmet Powders"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtq0gUNEoAEykAwF0cC2SU-JxGrUHrdjeHlEDKWHmgYoEXBRr49otlQR6F9zYOM6kJWxRylsAW7jrkMrDJW3IQgVyj0XMq4yR7eQ93SYmdCV9BOws0SqUN-QUTedOsUGuydnGFt073uZ-AO4JVIywnFEQw4Emj3z6tzDV2U5tvhJtzsdmwSYWDpVDSewVIc_qzgurydduCOZMsVtKpvJDOdLwICicEFO12EJ4q-G2UMipa1lnOiRkoDqbX9FCfFwEv-Es"
              />
            </div>
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-outline-soft/80 shadow-xs hidden sm:inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="text-[11px] font-semibold tracking-wider text-primary uppercase">Direct Estate Sourced • Single-Origin Pure</span>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-outline-soft/60" id="story">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-secondary">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Our Story</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-tight">
                Rooted in Tradition,<br />Trusted for Every Grain
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
                Girja Dry Fruits and Spices is built on a simple promise — spices and dry fruits the way they should be: pure, well-graded and honestly sourced. From fragrant green cardamom to fiery Guntur and Byadgi chillies, every product is chosen for colour, aroma and quality before it reaches you.
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Whether you're a household stocking the month's spices or a business ordering in bulk, we supply retail packs and wholesale quantities with the same care — sourced directly and delivered across India and worldwide.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3.5 rounded-xl bg-white border border-outline-soft shadow-xs text-center">
                  <span className="material-symbols-outlined text-primary text-2xl block mb-1">agriculture</span>
                  <span className="text-xs font-semibold text-on-surface block">Farm &amp; Origin Sourced</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-outline-soft shadow-xs text-center">
                  <span className="material-symbols-outlined text-secondary text-2xl block mb-1">front_hand</span>
                  <span className="text-xs font-semibold text-on-surface block">Hand-Graded Quality</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-outline-soft shadow-xs text-center">
                  <span className="material-symbols-outlined text-primary-container text-2xl block mb-1">storefront</span>
                  <span className="text-xs font-semibold text-on-surface block">Retail &amp; Wholesale</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-outline-soft shadow-xs text-center">
                  <span className="material-symbols-outlined text-tertiary text-2xl block mb-1">local_shipping</span>
                  <span className="text-xs font-semibold text-on-surface block">Pan-India Supply</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-surface-container rounded-3xl p-8 border border-outline-soft/80 overflow-hidden shadow-sm">
                <div className="w-full rounded-2xl overflow-hidden mb-6 border border-outline-soft/60">
                  <img
                    alt="Spices Bowls Assortment"
                    className="w-full h-56 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6TZffXuhYVHJ_-Jlj0fqPs_XF41jVeTR-9utLgRyncMlBgre5NOPlEz0KXyoCVy9z0TDgPKPy0EmhvYjafJPVLaiS8WyKF7x0KMbpKDv0WQI4FtJFFhARXhrQgLxIqPCzihKQ-27UBlyakIIO0PHLeMLPnYTfNBInRRp8sd73bK0HMgGNM9aWexDd0S4A5qR1vUcRQ8rclKq6nk37C_rJ_x04o7mm9txpUUNtwaeGnszd0dl2acY_Q43uu4DvkMeBbKo"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-outline-soft">
                  <div className="text-4xl font-headline font-bold text-primary">100%</div>
                  <div>
                    <h4 className="font-headline font-semibold text-on-surface text-base">Purity Assured</h4>
                    <p className="text-xs text-on-surface-variant">Zero compromise, unadulterated origin guarantee on all consignments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Girja Section */}
        {/* <section className="bg-surface-container-low/70 py-16 sm:py-20 border-y border-outline-soft/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-primary block mb-2">Why Girja</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface mb-4">
                Quality You Can Taste, Trust You Can Count On
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                Every sack, every jar and every packet is handled with one purpose — to bring the real flavour of Indian spices to your table.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] card-interactive">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Freshness &amp; Purity</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  No mixing, no artificial colour — spices graded and packed close to source for maximum aroma and retention.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] card-interactive">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">pin_drop</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Region-Wise Sourcing</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Chillies and spices sourced directly from Guntur, Byadgi, Kashmir, Erode, Sangli and renowned spice hubs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] card-interactive">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Retail &amp; Bulk Orders</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  From a single kilo for your household kitchen to bulk commercial consignments for traders — we supply both.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] card-interactive">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">tune</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Varieties On Demand</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Looking for a specific chilli grade or rare spice variety? We curate and source it against your requirement.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Our Range Section with Tabs */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20" id="range">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-secondary block mb-2">Our Range</span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              From Whole Spice to Fiery Chilli
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              A curated range of dry fruits, whole spices and chilli varieties — every category built for both the home kitchen and the trade counter.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-surface-container border border-outline-soft shadow-xs" id="filter-container">
              {[
                { label: 'All Products', value: 'all' },
                { label: 'Whole Spices', value: 'whole' },
                { label: 'Chilli Collection', value: 'chilli' },
                { label: 'Regional Chillies', value: 'regional' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveCategory(tab.value)}
                  className={`px-5 py-2 rounded-full text-xs transition-all ${activeCategory === tab.value
                    ? 'bg-primary text-white shadow-xs font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface font-medium'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="product-grid">
            {filteredProducts.map((product) => (
              <article
                key={product.id + activeCategory}
                className="product-item group bg-white rounded-2xl overflow-hidden border border-outline-soft/80 shadow-[0_4px_20px_-4px_rgba(28,28,23,0.05)] card-interactive animate-card-in flex flex-col justify-between relative"
              >
                <div>
                  {product.isManualPhoto ? (
                    <div className="relative w-full aspect-[16/10] bg-[#f8f4ec] border-b border-dashed border-outline-soft flex flex-col items-center justify-center p-4 text-center group-hover:bg-[#f3ede1] transition-colors">
                      <div className={`w-10 h-10 rounded-full bg-white/80 border border-outline-soft flex items-center justify-center ${product.iconColor || 'text-primary'} mb-2 shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <span className="material-symbols-outlined text-lg">add_a_photo</span>
                      </div>
                      <span className="text-[11px] font-semibold text-on-surface-variant block">Upload Product Photo</span>
                      <span className="text-[10px] text-stone-500 block">4:3 or 16:10 Ratio</span>
                      <div className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-outline-soft/60 flex items-center gap-1.5 shadow-xs">
                        <span className={`text-[10px] font-bold ${product.badgeColor || 'text-primary'} tracking-wide uppercase`}>
                          {product.badge}
                        </span>
                      </div>
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold text-stone-500 font-headline italic">
                        No. {product.id}
                      </span>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container border-b border-outline-soft/60">
                      <img
                        alt={product.title}
                        className="w-full h-full object-cover card-img-zoom duration-700 ease-out"
                        src={product.image}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-outline-soft/60 shadow-xs">
                        <span className={`text-[10px] font-bold tracking-wide ${product.badgeColor || 'text-primary'} uppercase`}>
                          {product.badge}
                        </span>
                      </div>
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold text-white bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-full font-headline italic">
                        No. {product.id}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${product.originClass || 'text-primary bg-primary/10'}`}>
                        {product.origin}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-primary-container block mb-3">{product.sub}</span>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{product.desc}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex gap-2">
                  <a
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white text-xs font-semibold uppercase tracking-wider card-btn-action shadow-xs"
                    href={product.whatsapp}
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Enquire Now</span>
                  </a>
                  <button
                    onClick={() => openModal(product.title, product.origin, product.badge)}
                    className="p-2.5 rounded-xl border border-outline-soft hover:bg-surface-container hover:scale-105 text-primary transition-all cursor-pointer"
                    title="Request RFQ"
                  >
                    <span className="material-symbols-outlined text-sm">assignment</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Sourcing Banner */}
          {/* <div className="mt-14 bg-surface-container rounded-3xl p-8 sm:p-10 border border-outline-soft relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <span className="text-[11px] uppercase tracking-widest font-bold text-secondary block mb-1">Tailored Consignments</span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-2">Didn't find your grade or variety?</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  We also source Rattan, Wonder Hot, Sannam-4, Kaddi and every other spice or chilli variety as per your requirement — retail or bulk.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Rattan Chilli</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Wonder Hot</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Sannam-4</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Kaddi Chilli</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">All Peppers &amp; Peripherals</span>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#6b4600] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-full transition-all shadow-sm flex-shrink-0"
                href="https://wa.me/918860723545?text=I%20am%20looking%20for%20a%20specific%20variety%20or%20grade%20not%20listed"
                rel="noopener"
                target="_blank"
              >
                <span>Request a Variety</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div> */}
        </section>

        {/* Turmeric Guide Section */}
        <section className="bg-surface-container-low/60 py-16 sm:py-20 border-t border-outline-soft/60" id="turmeric-guide">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-primary mb-2">
                <span className="material-symbols-outlined text-sm">spa</span>
                <span>Types of Turmeric</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
                Types of Turmeric We Source
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                Seven turmeric varieties from across India, graded by region, curcumin content and colour — so you can pick the right grade for cooking, international trade or wellness use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Lakadong */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/10 px-2.5 py-0.5 rounded-md">GI Tag</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">7–12% Curcumin</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Lakadong Turmeric</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Jaintia Hills, Meghalaya</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Highest curcumin content of any Indian turmeric</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Deep orange-red rhizome, strong earthy aroma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Grown organically without chemical fertiliser</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    India's most premium turmeric — prized for Ayurvedic, pharmaceutical and high-curcumin culinary use.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Lakadong%20Turmeric"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Card 2: Alleppey */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">Export Benchmark</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">3–7% Curcumin</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Alleppey Turmeric</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Alappuzha, Kerala</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Rich, distinctive aroma with high essential oil content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Deep yellow-orange colour, hard rhizome</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>India's leading turmeric grade for export</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    A benchmark trade grade — sought after globally for its colour and fragrance.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Alleppey%20Turmeric"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Card 3: Salem */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-accent bg-gold-accent/10 px-2.5 py-0.5 rounded-md">Everyday Grade</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">3–5% Curcumin</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Salem Turmeric</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Salem, Tamil Nadu</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Bright yellow colour with a smooth finish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Long, well-formed fingers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Popular grade for turmeric powder</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    A dependable everyday grade valued for its bright colour in cooking.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Salem%20Turmeric"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Card 4: Erode */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/10 px-2.5 py-0.5 rounded-md">GI Tag</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">3–5% Curcumin</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Erode Turmeric</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Erode, Tamil Nadu · &quot;Turmeric City of India&quot;</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Pale yellow colour, high yielding variety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>India's largest turmeric trading hub</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>GI tagged as &quot;Erode Manjal&quot; since 2019</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    The backbone of India's turmeric trade, moved in bulk through Erode's regulated markets.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Erode%20Turmeric"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Card 5: Waigaon */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/10 px-2.5 py-0.5 rounded-md">GI Tag</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">~6% Curcumin</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Waigaon Turmeric</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Wardha, Maharashtra</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Dark mustard-yellow colour, soft powder texture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Thick, solid fingers with a pungent, attractive aroma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>GI tagged as &quot;Waigaon Halad&quot; since 2016</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    One of India's highest-rated GI turmerics for overall quality and rhizome character.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Waigaon%20Turmeric"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Card 6: Rajapuri */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-md">Historic Trade</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">3–5% Curcumin</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Rajapuri Turmeric</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Sangli, Maharashtra</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Deep saffron colour, large and bold fingers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Traditionally exported through the Rajapur port</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Sangli is Asia's largest turmeric trading centre</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    A classic bulk-trade variety, still known in the market by its historic export name.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Rajapuri%20Turmeric"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Card 7: Kasturi Turmeric */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between lg:col-span-3">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md">Non-Edible · Cosmetic Use</span>
                    <span className="text-xs font-semibold text-stone-500">Curcuma aromatica</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Kasturi Turmeric</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-3">Kasturi Manjal, Wild Turmeric</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-on-surface-variant mb-4">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>A different species from cooking turmeric (Curcuma longa)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Pale yellow, musk-like fragrance, does not stain skin</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Used only in ubtans, face packs and Ayurvedic skincare</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 italic">
                    Not used for cooking — sourced strictly for cosmetic and Ayurvedic applications.
                  </p>
                </div>
                <div className="pt-4 mt-2">
                  <a
                    className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                    href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Aromatic%20Turmeric"
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Bulk Enquiry for Aromatic Turmeric</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chilli Guide Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20" id="chilli-guide">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-secondary mb-2">
              <span className="material-symbols-outlined text-sm">local_fire_department</span>
              <span>Types of Red Chilli</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              Types of Red Chilli We Source
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Five signature red chilli varieties from across India, graded by origin, heat (Scoville Heat Units) and colour — for kitchens and traders who need the right grade every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chilli 1: Kashmiri */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">Deep Crimson Color</span>
                  <span className="text-xs font-bold text-secondary px-2.5 py-0.5 rounded-md bg-secondary/10">1,000–2,000 SHU</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Kashmiri Chilli</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Jammu &amp; Kashmir · Himachal Pradesh</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Deep, vibrant red colour with very mild heat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Thick flesh, wrinkled skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Used mainly for colour, not spice</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  The go-to grade for tandoori marinades, rogan josh and butter chicken — colour first, heat second.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Kashmiri%20Chilli"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>

            {/* Chilli 2: Guntur Chilli (S4) */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-md">Trade Benchmark</span>
                  <span className="text-xs font-bold text-secondary px-2.5 py-0.5 rounded-md bg-secondary/10">30,000–50,000 SHU</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Guntur Chilli (S4)</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Guntur, Andhra Pradesh</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Guntur Sannam S4 — India's most traded chilli grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>High pungency, deep red colour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Thick skin, long shelf life</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  The benchmark hot chilli for Andhra cuisine, curries and export-grade chilli powder.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Guntur%20Chilli%20S4"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>

            {/* Chilli 3: Byadgi Chilli */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/10 px-2.5 py-0.5 rounded-md">GI Tag</span>
                  <span className="text-xs font-bold text-secondary px-2.5 py-0.5 rounded-md bg-secondary/10">8,000–15,000 SHU</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Byadgi Chilli</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Byadgi, Karnataka</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Long, wrinkled pods with rich, oil-heavy colour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Mild-to-moderate heat, smoky-fruity flavour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Available in Dabbi (plump) and Kaddi (long) grades</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  South India's favourite for sambar, rasam and chutneys — prized for colour over heat.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Byadgi%20Chilli"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>

            {/* Chilli 4: Teja Chilli (S17) */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md">Fiery Heat</span>
                  <span className="text-xs font-bold text-rose-600 px-2.5 py-0.5 rounded-md bg-rose-100">70,000–100,000+ SHU</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Teja Chilli (S17)</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Guntur, Andhra Pradesh</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>One of India's hottest commercial chilli grades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Sharp, fiery pungency with a dark, vivid colour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Major export variety for oleoresin and hot sauce</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  For serious heat — spice blends, hot sauces and pungency-driven export orders.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Teja%20Chilli%20S17"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>

            {/* Chilli 5: Methania Chilli */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-md">Rajasthani Special</span>
                  <span className="text-xs font-bold text-secondary px-2.5 py-0.5 rounded-md bg-secondary/10">Up to 50,000 SHU</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Methania Chilli</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Mathania, Rajasthan</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Bright red with a warm, smoky pungency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Sun-dried till crisp, tangy and full-flavoured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Signature chilli of Rajasthani cuisine</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  The classic chilli behind laal maas and other fiery Rajasthani dishes.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Methania%20Chilli"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>
          </div>
        </section>

        {/* The Girja Standard Section */}
        {/* <section className="bg-surface-container-high/40 py-16 sm:py-20 border-t border-outline-soft/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-primary block mb-2">The Girja Standard</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface mb-3">
                What Every Sack Is Weighed Against
              </h2>
              <p className="text-sm text-on-surface-variant">
                Four principles decide what earns the Girja name — before a single packet leaves our hands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-outline-soft shadow-xs">
                <div className="font-headline text-3xl text-primary mb-3">χ</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Purity, Not Promises</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  No artificial colour, no mixing, no shortcuts — what's on the label is what's in the packet.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-outline-soft shadow-xs">
                <div className="font-headline text-3xl text-secondary mb-3">ψ</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Sourced at the Root</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We deal directly with growers and regional agricultural hubs — across Guntur, Byadgi and Kashmir — cutting out middlemen and ensuring authentic purity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-outline-soft shadow-xs">
                <div className="font-headline text-3xl text-primary-container mb-3">ω</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Fair Weight, Fair Price</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Every order — a single kilo or a trade consignment — is weighed, graded and priced the same honest way.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-outline-soft shadow-xs">
                <div className="font-headline text-3xl text-tertiary mb-3">ϊ</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Consistent, Batch After Batch</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  The aroma and grade you order the first time is what you'll receive the tenth time.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <Footer />

      {/* RFQ Modal */}
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
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary block">Official RFQ Protocol</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface">Request Bulk Quote</h3>
              </div>
              <button className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer" onClick={closeModal}>
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="p-3 bg-surface-container rounded-lg mb-5 text-xs">
              <span className="text-on-surface-variant">Selected Product: </span>
              <span className="font-semibold text-primary">
                {modalData.title} {modalData.origin ? `(${modalData.origin} • ${modalData.grade || 'Export Grade'})` : ''}
              </span>
            </div>

            {modalSubmitted ? (
              <div className="text-center py-6">
                <span className="material-symbols-outlined text-4xl text-tertiary block mb-2">check_circle</span>
                <h4 className="font-headline text-xl font-bold text-on-surface mb-1">RFQ Transmitted Successfully!</h4>
                <p className="text-xs text-on-surface-variant">Our trade desk will contact your registered corporate email.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleModalSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Company / Importer</label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. Al-Noor Trading"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Business Email</label>
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
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Estimated Quantity</label>
                    <input
                      className="w-full bg-white border border-outline-soft px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-primary"
                      placeholder="e.g. 5 MT / 1x20ft FCL"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">Destination Port</label>
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
                    {modalSubmitting ? 'Sending...' : 'Send RFQ Request'}
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
