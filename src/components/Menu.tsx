/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, Flame, UtensilsCrossed } from "lucide-react";
import { MENU_DATA, RESTAURANT_INFO } from "../data";

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#FAF6F0] texture-paper border-t border-[#1C1C1C]/5 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading with 40px Red Underline & Steam Wisps - SVG Removed on user request */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6" id="menu-heading-container">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.25em] font-bold text-[#6A6058] uppercase">Pachnące Polską</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-[#1C1C1C] relative pb-4">
              Nasz Domowy Jadłospis
              
              {/* Section heading underlines: 40px --red line, drawn in scaleX 0→1 on scroll */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-[3px] bg-[#C0392B] w-[40px] origin-left"
              />
            </h2>
          </div>
          
          <div className="max-w-md text-left md:text-right">
            <p className="text-sm font-handwritten text-[#C0392B] text-lg font-bold leading-none mb-1">
              * Zamówienia przyjmujemy telefonicznie daily!
            </p>
            <p className="text-[#6A6058] text-xs leading-relaxed uppercase tracking-wider">
              Wszystkie potrawy przygotowujemy rano od zera. <br />
              Porcje są u nas obfite – głodny nikt nie wyjdzie.
            </p>
          </div>
        </div>

        {/* Outer Layout: Asymmetric layout (Menu categories vs Photos + pull quote) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Menu Items: Taking 8 columns on desktop */}
          <div className="lg:col-span-8 space-y-16" id="menu-categories-list">
            {MENU_DATA.map((category) => (
              <div key={category.id} className="menu-group" id={`menu-group-${category.id}`}>
                {/* Category Header */}
                <div className="border-b border-[#1C1C1C]/10 pb-4 mb-8">
                  <h3 className="font-serif text-2xl font-bold text-[#1C1C1C] flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#C0392B] rounded-full" />
                    {category.title}
                  </h3>
                  {category.subtitle && (
                    <p className="text-[#6A6058] text-sm mt-1 italic font-serif">
                      {category.subtitle}
                    </p>
                  )}
                </div>

                {/* Real Menu Format Items, NOT card grid */}
                <div className="space-y-8" id={`category-items-list-${category.id}`}>
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      id={`menu-item-card-${item.id}`}
                      className="group p-4 bg-transparent border-l-2 border-transparent hover:border-[#C0392B] hover:bg-[#FAF6F0]/30 transition-all duration-300 rounded-r-md"
                    >
                      {/* Flex row with item title, dotted line leader, price */}
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-lg font-bold text-[#1C1C1C] flex items-center gap-2 flex-wrap">
                            <span>{item.name}</span>
                            {item.tags?.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-block text-[9px] uppercase tracking-widest font-sans font-bold bg-[#FAF6F0] border border-[#C0392B]/30 text-[#C0392B] px-1.5 py-0.5 rounded leading-none"
                              >
                                {tag}
                              </span>
                            ))}
                          </h4>
                        </div>

                        {/* Leader Dotted Line */}
                        <div className="hidden sm:block flex-1 border-b border-dotted border-[#1C1C1C]/20 mx-2 h-1 relative -top-1" />

                        {/* Price in DM Mono - Price highlights: DM Mono --red */}
                        <div className="text-right">
                          <span className="font-mono text-base font-bold text-[#C0392B] whitespace-nowrap bg-[#C0392B]/5 px-2 py-0.5 rounded border border-[#C0392B]/10">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#6A6058] text-sm mt-2 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Staggered photo frame & details taking 4 columns */}
          <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-28">
            
            {/* Embedded Images - Asymmetrical double stack */}
            <div className="space-y-8" id="menu-side-artistic-images">
              <div className="relative" id="menu-img-frame-1">
                <div className="absolute inset-0 bg-[#EDE5D8] rounded translate-x-2 translate-y-2 -rotate-1 z-0 border border-[#1C1C1C]/10" />
                <div className="relative border-2 border-[#1C1C1C] rounded overflow-hidden z-10 shadow-md">
                  <img
                    src={RESTAURANT_INFO.photos[1]}
                    alt="Kotlety schabowe i domowe jedzenie w Blackburn"
                    className="w-full h-56 object-cover hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    id="menu-photo-one"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FAF6F0] text-[#1C1C1C] border border-[#1C1C1C] text-[10px] uppercase font-bold tracking-widest px-2 py-1 leading-none">
                    Tradycyjne Zestawy
                  </div>
                </div>
              </div>

              <div className="relative" id="menu-img-frame-2">
                <div className="absolute inset-0 bg-[#C0392B]/10 rounded -translate-x-2 translate-y-2 rotate-2 z-0 border border-[#C0392B]/10" />
                <div className="relative border-2 border-[#1C1C1C] rounded overflow-hidden z-10 shadow-md">
                  <img
                    src={RESTAURANT_INFO.photos[2]}
                    alt="Polskie obiady domowe na wynos"
                    className="w-full h-56 object-cover hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    id="menu-photo-two"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#C0392B] text-[#FAF6F0] border-2 border-[#FAF6F0] text-[10px] uppercase font-bold tracking-widest px-2 py-1 leading-none">
                    Nasze Specjały
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Note */}
            <div className="bg-[#EDE5D8] p-6 rounded border border-[#1C1C1C]/10 relative overflow-hidden" id="menu-quality-manifesto">
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C0392B]" />
              <h4 className="font-serif font-black text-lg text-[#1C1C1C] mb-2">Tylko na wynos & dowóz</h4>
              <p className="text-xs text-[#6A6058] leading-relaxed">
                Wszystkie dania pakujemy w bezpieczne, szczelne pojemniki termiczne, dzięki czemu posiłek trafia na Twój stół idealnie gorący. Zadzwoń i zapytaj o dzisiejszy koszt dostawy pod Twój kod pocztowy!
              </p>
            </div>

          </div>

        </div>

        {/* Caveat text divider between sections: "· · · · · · · · · · · · · · · · ·" */}
        <div className="mt-20 text-center select-none" id="menu-section-caveat-divider">
          <p className="font-handwritten text-[#6A6058] text-2xl tracking-[0.2em] leading-none mb-0">
            · · · · · · · · · · · · · · · · ·
          </p>
        </div>

      </div>
    </section>
  );
}
