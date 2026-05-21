/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RESTAURANT_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer-section" className="bg-[#111111] text-[#FAF6F0] relative overflow-hidden select-none">
      
      {/* 9. Footer top: 2px --red line */}
      <div className="h-[2px] bg-[#C0392B] w-full" id="footer-top-accent-line" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 relative">
        
        {/* Inline SVG 5 of 6: Simple bowl outline (faint background decoration) */}
        <div className="absolute right-10 bottom-6 opacity-[0.03] text-white pointer-events-none" id="footer-steam-bowl-svg">
          <svg
            viewBox="0 0 100 100"
            className="w-36 h-36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {/* Steam wisps */}
            <path d="M40,25 Q38,15 42,10" />
            <path d="M50,27 Q48,17 52,12" />
            <path d="M60,25 Q58,15 62,10" />
            {/* Bowl body */}
            <path d="M20,40 C20,70 80,70 80,40 Z" />
            <path d="M35,64 V72" />
            <path d="M65,64 V72" />
            <path d="M30,72 H70" strokeWidth="3" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
          
          {/* Left Block: Minimal brand + statement */}
          <div>
            <div className="flex items-center gap-1.5" id="footer-logo">
              <span className="font-serif text-lg font-bold tracking-tight text-[#FAF6F0]">
                Domowe Obiady Blackburn
              </span>
            </div>
            <p className="text-[13px] text-[#FAF6F0]/50 max-w-sm mt-2 leading-relaxed">
              Dobre polskie gotowanie na King Street. Bez spulchniaczy, pośpiechu i na pokaz. Pachnące tradycyjnym domem.
            </p>
          </div>

          {/* Right Block: Minimal facts */}
          <div className="flex flex-col md:items-end text-sm text-[#FAF6F0]/70 space-y-2">
            <span className="font-serif italic text-sm text-[#C0392B] font-bold">
              Zadzwoń po obiad: +44 7383 714086
            </span>
            <span className="text-xs">
              King Street, Blackburn, UK, BB2 2Ef
            </span>
            <button
              onClick={handleScrollToTop}
              id="footer-scroll-to-top-btn"
              className="text-xs uppercase tracking-widest text-[#FAF6F0]/40 hover:text-[#C0392B] transition-colors text-left md:text-right pt-2"
            >
              ↑ Powrót do góry
            </button>
          </div>

        </div>

        {/* Minimal Bottom metadata */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FAF6F0]/40 relative z-10">
          <p>© {currentYear} Domowe Obiady Blackburn. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61582948599756"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-facebook-link"
              className="hover:text-[#C0392B] transition-colors"
            >
              Facebook Aktualności
            </a>
            <span>·</span>
            <span className="font-mono text-[10px]">CRAFTED WITH TASTE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
