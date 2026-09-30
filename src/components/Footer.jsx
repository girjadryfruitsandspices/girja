'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#141b16] text-[#ded9ce] pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Col 1: Brand & Heritage */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Girja Logo"
                className="w-11 h-11 object-contain rounded-full bg-white p-0.5 shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBofNy3z-Fm49x1lDoQWq3tE217KWD33X-pwDVlEOfLZy0hTCdexuLYdWj2Nkcju7Y9NyzyHYjBr-jydoHtSry9et7bqGZHJeMyvunmlgeYbqQqzfJCx7tfiiIES2EnuM3dkLBMi-BVKajiJvNXibey6t4UggIceJsEu9SXtSjAmMPbYYjSMP4GZBO1LhOnhCNOPCgbWIWVHN3uj98K_748M2R1UTSkweLHDl0plNAty5z7dSYfQaZJv043w-hRHesISJ0"
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="font-headline text-2xl font-bold text-white leading-tight block">Girja</span>
                <span className="text-[10px] tracking-widest uppercase text-[#9fbaaa] font-medium">MEVA AUR MASALE</span>
              </div>
            </div>
            <p className="text-xs text-[#b8b3a7] leading-relaxed max-w-sm pt-1">
              Pure &amp; Trusted • Meva Aur Masale - Spices, Handpicked &amp; Fiery Chillies from Guntur, Byadgi, Kashmir, and Salem.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#9fbaaa]">
              <span className="material-symbols-outlined text-[#c68b29] text-base">verified</span>
              <span>100% Quality &amp; Purity Guaranteed • Direct Mandi Origin</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-4 md:pl-4">
            <h3 className="font-headline text-sm tracking-wider uppercase text-[#f7ecd5] font-semibold">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs text-[#b8b3a7]">
              <li>
                <Link className="hover:text-[#c68b29] transition-colors" href="/">
                  About Girja
                </Link>
              </li>
              <li>
                <Link className="text-[#c68b29] font-medium hover:underline transition-colors" href="/spices">
                  Spices &amp; Chilli Range
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#c68b29] transition-colors" href="/dry-fruits">
                  Dry Fruits Collection
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#c68b29] transition-colors" href="/spices#turmeric-guide">
                  Turmeric Variety Guide
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#c68b29] transition-colors" href="/spices#chilli-guide">
                  Red Chilli SHU Heat Index
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#c68b29] transition-colors" href="/contact">
                  Direct Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-headline text-sm tracking-wider uppercase text-[#f7ecd5] font-semibold">
              DIRECT CONTACT
            </h3>
            <div className="space-y-3 text-xs text-[#ded9ce]">
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#c68b29] text-base">call</span>
                <a className="hover:text-[#c68b29] transition-colors" href="tel:+918860723545">
                  +91 88607 23545 / +91 70008 83954
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#c68b29] text-base">mail</span>
                <a className="hover:text-[#c68b29] transition-colors" href="mailto:Shahi.pradeep5@gmail.com">
                  Shahi.pradeep5@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#c68b29] text-base">location_on</span>
                <span>APMC Market-I, Navi Mumbai, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8f8a7e]">
          <p>© 2025 Girja Dry Fruits &amp; Spices (Meva Aur Masale). All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span>APEDA Registered</span>
            <span>•</span>
            <span>FSSAI Certified</span>
            <span>•</span>
            <span>ISO 22000</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
