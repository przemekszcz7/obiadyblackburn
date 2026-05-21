/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Award, MessageSquareHeart } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 texture-paper overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Confident, Raw Editorial Text - taking 7 cols on desktop */}
          <div className="lg:col-span-7 z-10 flex flex-col justify-center">
            
            {/* Inline SVG 1 of 6: Crossed fork and knife (Hero section) - Removed on user request */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
              id="hero-minimal-icon-container"
            >
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-[#6A6058] inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
                Prawdziwe Polskie Gotowanie
              </span>
            </motion.div>

            {/* Massive Heading: clamp(3rem, 7vw, 6.5rem) line-height: 1.05 */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              id="hero-massive-title"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", lineHeight: 1.05 }}
              className="font-serif font-black tracking-tighter text-[#1C1C1C] text-left"
            >
              Kuchnia, <br />
              która karmi <br />
              <span className="text-[#C0392B]">serce i dom.</span>
            </motion.h1>

            {/* 3. Hero: one short red horizontal line (60px, 3px) left-aligned below the main heading */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-[3px] bg-[#C0392B] w-[60px] my-6 origin-left"
              id="hero-red-line"
            />

            {/* Editorial Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#6A6058] text-[17px] leading-[1.75] font-normal max-w-xl text-left mb-8"
              id="hero-editorial-description"
            >
              W Blackburn tworzymy obiady bez pośpiechu i na pokaz. Smażymy schabowe na smalcu, sami robimy zakwas na żurek i lepimy ponad tysiąc pierogów tygodniowo. To nie są potrawy restauracyjne – to są posiłki z polskiego stołu, pachnące dymem, majerankiem i domem.
            </motion.p>

            {/* CTAs: CTA primary button: --red bg, cream text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              id="hero-ctas"
            >
              <button
                onClick={() => scrollToSection("menu")}
                id="hero-view-menu-btn"
                className="bg-[#C0392B] hover:bg-[#962D22] text-[#FAF6F0] px-8 py-4 rounded font-semibold tracking-wider transition-custom flex items-center justify-center gap-3 text-sm cursor-pointer"
              >
                <span>ZOBACZ DZISIEJSZE MENU</span>
                <ArrowUpRight className="w-4 h-4 cursor-pointer" />
              </button>

              <button
                onClick={() => scrollToSection("kontakt")}
                id="hero-contact-btn"
                className="border border-[#1C1C1C]/20 hover:border-[#C0392B] hover:bg-[#1C1C1C]/5 text-[#1C1C1C] px-8 py-4 rounded font-medium tracking-wide transition-custom text-sm cursor-pointer"
              >
                Gdzie nas znajdziesz?
              </button>
            </motion.div>

            {/* Trusted indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-xs text-[#6A6058] font-medium border-t border-[#1C1C1C]/10 pt-6"
              id="hero-qualities-badges"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C0392B]" />
                <span>100% ŚWIEŻE SKŁADNIKI</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquareHeart className="w-4 h-4 text-[#C0392B]" />
                <span>NAJLEPSZA POLSKA GOSPODA Blackburn</span>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Editorial layout with image offset */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md"
              id="hero-image-offset-wrapper"
            >
              {/* Back background aesthetic frame */}
              <div className="absolute inset-0 bg-[#EDE5D8] rounded-lg -rotate-3 translate-x-2 translate-y-3 z-0 border border-[#1C1C1C]/10" />
              
              {/* Image with referrerPolicy for protection */}
              <div className="relative rounded-lg overflow-hidden border-2 border-[#1C1C1C] shadow-lg z-10">
                <img
                  src={RESTAURANT_INFO.photos[0]}
                  alt="Domowe Obiady w Blackburn - pierogi i tradycyjne zestawy"
                  className="w-full h-[320px] sm:h-[420px] object-cover transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="hero-highlighted-food-img"
                />
              </div>

              {/* Little handwritten label overlapping the image */}
              <div
                className="absolute bottom-5 -left-5 bg-[#FAF6F0] border-2 border-[#1C1C1C] py-2 px-4 shadow-md rotate-2 z-20"
                id="hero-image-label"
              >
                <p className="font-handwritten text-[#C0392B] text-xl font-bold leading-none">
                  Uczciwe Polskie Kuchcenie!
                </p>
              </div>

              {/* Stamp overlay */}
              <div
                className="absolute -top-6 -right-6 bg-[#C0392B] text-[#FAF6F0] w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 border-[#FAF6F0] shadow-md -rotate-12 z-20 text-center"
                id="hero-polska-kuchnia-stamp"
              >
                <span className="text-[9px] tracking-widest font-bold uppercase leading-none">POLSKA</span>
                <span className="text-[12px] font-bold font-serif leading-none mt-1">SMAK</span>
                <span className="text-[8px] tracking-widest font-medium uppercase leading-none mt-1">DOMU</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
