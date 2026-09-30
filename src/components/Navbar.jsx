'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ onRequestQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Dynamic links depending on current active route
  let navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Spices', href: '/spices' },
    { name: 'Dry Fruits', href: '/dry-fruits' },
  ];

  if (pathname === '/spices') {
    navLinks.push(
      { name: 'Turmeric Guide', href: '/spices#turmeric-guide' },
      { name: 'Chilli Guide', href: '/spices#chilli-guide' }
    );
  } else if (pathname === '/dry-fruits') {
    navLinks.push(
      { name: 'Almond Guide', href: '/dry-fruits#almond-guide' },
      { name: 'Raisin Guide', href: '/dry-fruits#raisin-guide' }
    );
  }

  navLinks.push({ name: 'Contact', href: '/contact' });

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#fdf9f1]/95 backdrop-blur-md border-b border-outline-soft/80 transition-all duration-300">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link className="flex items-center gap-3 group shrink-0" href="/">
            <img
              alt="Girja Logo"
              className="w-10 h-10 object-contain rounded-full border border-outline-soft shadow-xs group-hover:scale-105 transition-transform"
              src="/logo.png"
            />
            <div className="flex flex-col">
              <span className="font-headline text-xl font-bold tracking-tight text-primary leading-tight">Girja</span>
              <span className="text-[11px] tracking-[0.16em] uppercase text-on-surface-variant/80 font-medium">Dry Fruits &amp; Spices</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm py-1 whitespace-nowrap transition-colors ${
                    isActive
                      ? 'font-semibold text-primary border-b-2 border-primary-container'
                      : 'font-medium text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Call Now Button */}
            <a
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors px-3 py-2 border border-outline-soft rounded-full bg-white/70 shadow-2xs"
              href="tel:+918860723545"
            >
              <span className="material-symbols-outlined text-sm text-primary">call</span>
              <span>Call Now</span>
            </a>

            {/* Request Quote Button */}
            <button
              onClick={handleQuoteClick}
              className="hidden sm:inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
            >
              <span>Request Quote</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-on-surface hover:text-primary hover:bg-black/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl block">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 left-0 right-0 bg-[#fdf9f1] border-b border-outline-soft shadow-xl p-6 flex flex-col gap-5 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links in Mobile */}
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#c68b29]/15 text-primary font-bold'
                        : 'text-on-surface hover:bg-black/5 hover:text-primary'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="material-symbols-outlined text-sm text-stone-400">chevron_right</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-outline-soft flex flex-col gap-3">
              <button
                onClick={handleQuoteClick}
                className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-xs uppercase tracking-wider font-semibold py-3 px-5 rounded-full transition-all shadow-sm cursor-pointer"
              >
                <span>Request Trade Quote</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <div className="flex items-center justify-around pt-2 text-xs text-on-surface-variant font-medium">
                <a
                  className="flex items-center gap-1.5 px-3 py-2 border border-outline-soft rounded-full bg-white/70 hover:text-primary"
                  href="tel:+918860723545"
                >
                  <span className="material-symbols-outlined text-sm text-primary">call</span>
                  <span>Call +91 88607 23545</span>
                </a>
                <a
                  className="flex items-center gap-1.5 px-3 py-2 border border-outline-soft rounded-full bg-white/70 hover:text-primary"
                  href="mailto:Shahi.pradeep5@gmail.com"
                >
                  <span className="material-symbols-outlined text-sm text-primary">mail</span>
                  <span>Email Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
