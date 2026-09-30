'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DryFruitsPage() {
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
      title: 'Mamra Badam',
      type: 'almond',
      origin: 'Iran / Kashmir',
      badge: 'Almond • Mamra',
      sub: 'Premium daily raw snacking & morning soak',
      desc: 'Boasts up to 50% natural oil and Vitamin E for memory, skin health, and daily vitality.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Mamra%20Badam',
      image: '/mamra.jpg',
    },
    {
      id: '02',
      title: 'Gurbandi Badam',
      type: 'almond',
      origin: 'Afghanistan',
      badge: 'Almond • Gurbandi',
      sub: 'Chhoti Giri · Herbal remedies & baking',
      desc: 'Rich in natural Omega-3s and antioxidants with a bittersweet profile for heart health and stamina.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Gurbandi%20Badam',
      image: '/gurbandi.jpg',
    },
    {
      id: '03',
      title: 'Kashmiri Badam',
      type: 'almond',
      origin: 'Kashmir Valley',
      originClass: 'text-tertiary bg-tertiary/10',
      badge: 'Almond • Kashmiri',
      sub: 'Everyday wellness, desserts & kids diet',
      desc: '100% unbleached sweet almonds rich in protein and fiber for everyday family nutrition.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Kashmiri%20Badam',
      image: '/kashmiri badam.jpg',
    },
    {
      id: '04',
      title: 'Hari Long Kishmish',
      type: 'raisin',
      origin: 'Afghan Grade',
      originClass: 'text-tertiary bg-tertiary/10',
      badge: 'Raisin • Hari Long',
      badgeColor: 'text-tertiary',
      sub: 'Healthy midday snacking & trail mixes',
      desc: 'Naturally sweet, slender Afghan raisins rich in potassium and fiber for digestion and stamina.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Hari%20Long%20Kishmish',
      image: '/hari.jpg',
    },
    {
      id: '05',
      title: 'Kali Kishmish',
      type: 'raisin',
      origin: 'Sangli / Nashik',
      originClass: 'text-secondary bg-secondary/10',
      badge: 'Raisin • Kali Kishmish',
      badgeColor: 'text-secondary',
      sub: 'Soaked morning tonics & skin wellness',
      desc: 'Iron-rich seedless black raisins that support hemoglobin, blood purification, and skin wellness.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Kali%20Kishmish',
      image: '/kali kishmish.jpg',
    },
    {
      id: '06',
      title: 'Golden Kishmish',
      type: 'raisin',
      origin: 'Maharashtra',
      badge: 'Raisin • Golden Round',
      badgeColor: 'text-primary-container',
      sub: 'Traditional sweets, kheer & bakery',
      desc: 'Sun-cured plump golden raisins ideal for traditional sweets, baking, and healthy daily snacking.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Golden%20Kishmish',
      image: '/golden kishmish.jpg',
    },
    {
      id: '07',
      title: 'Munakka',
      type: 'raisin',
      origin: 'Ayurvedic Grade',
      badge: 'Raisin • Munakka',
      badgeColor: 'text-secondary',
      sub: 'Seeded large raisins · Boiled milk tonics',
      desc: 'Ayurvedic seeded large raisins with soothing cooling properties for digestion and vitality.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Munakka',
      image: '/munaka.jpg',
    },
    {
      id: '08',
      title: 'Kashmiri Walnut Kernels',
      type: 'walnut',
      origin: 'Kashmir Valley',
      badge: 'Walnut • Extra Light 1/2',
      sub: 'Akhrot Giri · Brain health & luxury gifting',
      desc: 'Extra light, crisp halves packed with brain-boosting ALA Omega-3s and antioxidants.',
      whatsapp: 'https://wa.me/918860723545?text=Hello%20Girja%20Meva,%20I%20am%20interested%20in%20Kashmiri%20Walnut%20Kernels',
      image: '/walnut.jpg',
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
      <Navbar onRequestQuote={() => openModal('Royal Dry Fruits Portfolio', 'Orchard Sourced', 'Jumbo Grade')} />

      <main className="w-full relative">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-12 sm:pt-18 sm:pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-soft mb-6">
            <span className="material-symbols-outlined text-xs text-primary">psychiatry</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">✦ Pure &amp; Trusted • Meva Aur Masale</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-tight sm:leading-none mb-6">
            Dry Fruits, <span className="italic font-normal text-secondary">Finest Origins</span><br className="hidden sm:inline" /> &amp; Royal Harvest
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
            Girja Dry Fruits brings nutrient-rich Mamra almonds, sun-cured Afghan kishmish, and Kashmiri walnut kernels from across the finest orchards — graded by hand, sold on trust, delivered fresh to your kitchen or business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a className="inline-flex items-center gap-2 bg-primary hover:bg-[#6b4600] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-all" href="#range">
              <span>Explore Dry Fruits</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </a>
            <a
              className="inline-flex items-center gap-2 bg-white hover:bg-surface-container border border-outline-soft text-on-surface text-sm font-semibold px-6 py-3 rounded-full shadow-xs transition-all"
              href="https://wa.me/918860723545?text=Namaste%2C%20I%20am%20interested%20in%20Girja%20Meva%20(Dry%20Fruits)%20catalog"
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
              <span>Grade-A Machine Cleaned</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-outline-soft/80 shadow-xs text-xs font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-base">sanitizer</span>
              <span>Zero Sulfur &amp; Preservatives</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-outline-soft/80 shadow-xs text-xs font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-tertiary text-base">eco</span>
              <span>Sustainably Harvested</span>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_16px_36px_-8px_rgba(28,28,23,0.12)] border border-outline-soft/80 group">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-surface-container">
              <img
                alt="Authentic Premium Indian Dry Fruits Assortment"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/girjahome.jpg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-outline-soft/80 shadow-xs hidden sm:inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="text-[11px] font-semibold tracking-wider text-primary uppercase">Direct Orchard Sourced • Single-Origin Harvest</span>
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
                Rooted in Tradition,<br />Trusted for Every Kernel
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
                Girja Dry Fruits and Spices is built on an uncompromising commitment — naturally nutrient-dense almonds, raisins, and walnuts the way nature intended: whole, well-graded and honestly sourced. From oil-rich Iranian and Kashmiri Mamra badam to sweet Afghan green raisins and crisp walnut halves, every harvest is inspected for moisture, crunch and aroma before it reaches you.
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Whether you are a family seeking genuine nutrition or a confectioner ordering in bulk cartons, we supply retail pouches and commercial wholesale batches with identical care — sourced directly and delivered across India.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3.5 rounded-xl bg-white border border-outline-soft shadow-xs text-center">
                  <span className="material-symbols-outlined text-primary text-2xl block mb-1">park</span>
                  <span className="text-xs font-semibold text-on-surface block">Orchard &amp; Mandi Sourced</span>
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
                    alt="Premium Mamra Badam in Artisan Terracotta Bowl"
                    className="w-full h-56 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLK4t_JW4vb8EX5TbbJyw0kF3YCRFcUd9QWDKGiLDcoiY5dYGSXt1NpuEU7v56zwIh7E4WLXTCrxwc5aX22vyC7aej90RjU_J9Hr6C4i9gvA05yDVeFmtGaKtJz8K0K3JOghDwXE7kxeVaF6jewBVYR62Bx0u2-z67OO4k4dFHqdzZ-R7Kxyh3SE9pi3S2D40DDhKzOPkG-dyNdvaEOZ9XV-LarsrA-W-QJZuRJ4GtGPVoIAZ12KNa_w"
                  />
                </div>
                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-outline-soft">
                  <div className="text-4xl font-headline font-bold text-primary">100%</div>
                  <div>
                    <h4 className="font-headline font-semibold text-on-surface text-base">Purity Assured</h4>
                    <p className="text-xs text-on-surface-variant">Zero adulteration, unadulterated natural crunch guaranteed on all consignments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Girja Meva Section */}
        {/* <section className="bg-surface-container-low/70 py-16 sm:py-20 border-y border-outline-soft/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest font-semibold text-primary block mb-2">Why Girja Meva</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface mb-4">
                Quality You Can Taste, Trust You Can Count On
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                Every crate, pouch, and parcel is packed with one pure purpose — to deliver rich, authentic orchard vitality to your dining table or commercial pantry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">nutrition</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Natural Oil &amp; Nutrition</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Zero oil extraction, unbleached kernels retaining original fatty acids, essential Vitamin E, and organic crunch.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">pin_drop</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Region-Wise Sourcing</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Almonds and dry fruits sourced directly from Kashmir, Chaman, California, Sangli, and trusted origin mandis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Retail &amp; Bulk Sacks</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  From 1kg airtight pouches for daily health to 50kg export crates for wholesale traders and sweets makers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.04)] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">tune</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Varieties On Demand</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Seeking specific kernel counts, jumbo halves, or rare Afghan dry fruit cultivars? We procure against your specifications.
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
              From Royal Almonds to Golden Raisins &amp; Walnuts
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              A curated harvest of sun-dried fruits, cold-climate almonds, and buttery walnut kernels — built for daily health regimes, gourmet cuisine, and wholesale trade.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-surface-container border border-outline-soft shadow-xs" id="filter-container">
              {[
                { label: 'All Dry Fruits', value: 'all' },
                { label: 'Almonds (Badam)', value: 'almond' },
                { label: 'Raisins (Kishmish)', value: 'raisin' },
                { label: 'Walnuts (Akhrot)', value: 'walnut' },
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
                className="product-item group bg-white rounded-2xl border border-outline-soft/80 shadow-[0_4px_20px_-4px_rgba(28,28,23,0.05)] card-interactive animate-card-in flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {product.isManualPhoto ? (
                    <div className="relative w-full aspect-[16/10] bg-[#f8f4ec] border-b border-dashed border-outline-soft flex flex-col items-center justify-center p-4 text-center group-hover:bg-[#f3ede1] transition-colors">
                      <div className={`w-10 h-10 rounded-full bg-white/80 border border-outline-soft flex items-center justify-center ${product.iconColor || 'text-primary'} mb-2 shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <span className="material-symbols-outlined text-lg">add_a_photo</span>
                      </div>
                      <span className="text-[11px] font-semibold text-on-surface-variant block">Upload Product Photo</span>
                      <span className="text-[10px] text-stone-500 block">4:3 or 16:10 Ratio</span>
                      <div className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-outline-soft/60 shadow-xs">
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
                    <span className="text-xs font-medium text-primary-container block mb-2">{product.sub}</span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{product.desc}</p>
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
          <div className="mt-14 bg-surface-container rounded-3xl p-8 sm:p-10 border border-outline-soft relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <span className="text-[11px] uppercase tracking-widest font-bold text-secondary block mb-1">Tailored Consignments</span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-2">Didn't find your grade or dry fruit variety?</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  We also source Cashews (W180, W240, W320), Iranian Pistachios, Afghan Figs (Anjeer), and Pine Nuts (Chilgoza) as per your requirement — retail or bulk.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Cashews W180 &amp; W240</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Iranian Pistachios</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Afghan Figs (Anjeer)</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Pine Nuts (Chilgoza)</span>
                  <span className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-outline-soft text-on-surface-variant">Roasted &amp; Salted Mixes</span>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-2 bg-primary hover:bg-[#6b4600] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-full transition-all shadow-sm flex-shrink-0"
                href="https://wa.me/918860723545?text=I%20am%20looking%20for%20a%20specific%20dry%20fruit%20variety%20or%20grade"
                rel="noopener"
                target="_blank"
              >
                <span>Request a Variety</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Badam Ki Kisme Section */}
        <section className="bg-surface-container-low/60 py-16 sm:py-20 border-t border-outline-soft/60" id="badam-guide">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-primary mb-2">
                <span className="material-symbols-outlined text-sm">spa</span>
                <span>Badam Ki Kisme</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
                Types of Almonds We Source
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                Three distinct almond varieties graded by oil content, origin, and therapeutic value — so you can choose the ideal kernel for daily soaking, Ayurvedic tonics, or royal cuisine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Almond 1 */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] card-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/10 px-2.5 py-0.5 rounded-md">King of Badam</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">45–50% Oil</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Mamra Almonds</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Iran &amp; Kashmir Valley</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Distinguished concave, canoe-like curve with cavity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Highest natural unextracted oil content of all almonds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Traditionally cultivated without chemical fertilizers</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    India's most coveted almond — supreme for memory enhancement, children's morning soak, and pregnant mothers.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Mamra%20Badam"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Almond 2 */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] card-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">Therapeutic Grade</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">38–42% Oil</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Gurbandi Almonds</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Chaman &amp; Kabul, Afghanistan</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Small, pointed kernels known locally as 'Chhoti Giri'</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Rich in natural amygdalin and vital Omega-3 fatty acids</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Slight natural bitterness indicative of potent antioxidants</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    Preferred by Ayurvedic practitioners for almond milk paste, badam pak, and cardio-protective wellness tonics.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Gurbandi%20Badam"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>

              {/* Almond 3 */}
              <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] card-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-accent bg-gold-accent/10 px-2.5 py-0.5 rounded-md">Himalayan Harvest</span>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">35–40% Oil</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Kashmiri Almonds</h3>
                  <span className="text-xs font-medium text-stone-500 block mb-4">Pulwama &amp; Shopian, Kashmir</span>
                  <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>Slightly flatter kernel with sweet, non-bitter natural taste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>100% pesticide-free high altitude mountain cultivation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                      <span>High dietary fiber, plant protein, and calcium content</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                    The staple of Kashmiri hospitality — excellent for kheer garnishing, breakfast muesli, and everyday snacking.
                  </p>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors border border-outline-soft"
                  href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Kashmiri%20Badam"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Bulk Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kishmish Ki Kisme Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20" id="kishmish-guide">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-secondary mb-2">
              <span className="material-symbols-outlined text-sm">eco</span>
              <span>Kishmish Ki Kisme</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              Types of Raisins We Source
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Four distinct raisin grades from slender green Afghan kishmish to therapeutic seeded Munakka, graded by curing technique, size, and medicinal attributes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Raisin 1 */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/10 px-2.5 py-0.5 rounded-md">Afghan Grade</span>
                  <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary/10">Sweet &amp; Tangy</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Hari Long Kishmish</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Chaman / Kandahar</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    <span>Slender elongated shape with natural jade-green tint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    <span>Naturally dried in shaded adobe kishmish khanas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    <span>High potassium to balance fluids and daily energy</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  The undisputed favorite for children's snack boxes and luxury dessert presentations.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Hari%20Long%20Kishmish"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>

            {/* Raisin 2 */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-md">Iron Powerhouse</span>
                  <span className="text-xs font-bold text-secondary px-2.5 py-0.5 rounded-md bg-secondary/10">High Anthocyanin</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Kali Kishmish</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Sangli &amp; Solapur, Maharashtra</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Naturally dark purple-black sun-cured Thompson grapes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Dense antioxidant profile combating free radicals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5">check_circle</span>
                    <span>Potent remedy for hemoglobin &amp; scalp blood circulation</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  Best consumed after overnight soaking in copper vessels for blood purification.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Kali%20Kishmish"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>

            {/* Raisin 3 */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">Confectionery Grade</span>
                  <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary-container/15">Plump &amp; Sweet</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Golden Round Kishmish</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Nashik &amp; Tasgaon Belt</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    <span>Plump golden berries cured without excessive sulfur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    <span>Rich caramel-like natural fructose notes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    <span>Retains plump texture when cooked in milk or ghee</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  Essential for Indian halwas, royal pulao, Christmas plum cakes, and bakery formulations.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Golden%20Kishmish"
                rel="noopener"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Bulk Enquiry</span>
              </a>
            </div>

            {/* Raisin 4 */}
            <div className="bg-white rounded-2xl p-6 border border-outline-soft shadow-[0_4px_16px_-4px_rgba(28,28,23,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md">Ayurvedic Rasayana</span>
                  <span className="text-xs font-bold text-rose-700 px-2.5 py-0.5 rounded-md bg-rose-100">Jumbo Seeded</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Munakka Dakh</h3>
                <span className="text-xs font-medium text-stone-500 block mb-4">Afghan &amp; Indian Mandis</span>
                <ul className="text-xs text-on-surface-variant space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-rose-700 mt-0.5">check_circle</span>
                    <span>Large brown-amber grape variety dried with internal seeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-rose-700 mt-0.5">check_circle</span>
                    <span>Gentle, natural laxative and gut restorative properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs text-rose-700 mt-0.5">check_circle</span>
                    <span>Supports respiratory health and relieves dry cough</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-600 bg-surface-container p-3 rounded-xl mb-4 italic">
                  Boiled in warm milk with black pepper for nocturnal strength and cough relief.
                </p>
              </div>
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs transition-colors shadow-xs"
                href="https://wa.me/918860723545?text=Bulk%20Enquiry%20for%20Munakka"
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
                  We deal directly with growers and regional mandis — across Guntur, Byadgi and Kashmir — cutting out guesswork in the middle.
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
