/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { RESTAURANT_INFO } from "../data";

export default function About() {
  return (
    <section
      id="about-us"
      className="py-20 md:py-28 bg-[#EDE5D8] texture-paper-warm border-t border-[#1C1C1C]/10 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heavy storytelling editorial prose - takes 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs tracking-[0.25em] font-bold text-[#C0392B] uppercase block">
              Poznaj Naszą Historię
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1C1C1C] relative pb-4 leading-tight">
              Z miłości do polskiego stołu.
              
              {/* Section heading underlines: 40px --red line, drawn in scaleX 0→1 on scroll */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-[3px] bg-[#C0392B] w-[40px] origin-left"
              />
            </h2>

            <div className="space-y-6 text-[#6A6058] text-[17px] leading-[1.75] font-normal" id="about-prose-paragraphs">
              <p>
                Kiedy przyjechaliśmy do Wielkiej Brytanii, najbardziej brakowało nam nie zabytków czy krajobrazów, ale prostego zapachu niedzielnego obiadu. Rosolnego dymu, cebulki złocącej się na patelni i zapachu świeżego koperku siekanego na gorące ziemniaki.
              </p>
              <p>
                Zaczynaliśmy skromnie – od gotowania dla znajomych, którzy tęsknili za ojczystym jedzeniem pracując w Blackburn. Szybko okazało się, że nasza kuchnia zbiera przy jednym stole nie tylko Polaków, ale i spragnionych dobrych, sycących posiłków Brytyjczyków. Tak powstały <strong className="text-[#1C1C1C] font-semibold">Domowe Obiady Blackburn</strong>.
              </p>
              <p>
                Każde danie przygotowujemy ręcznie według receptur przekazywanych z pokolenia na pokolenie. Nie eksperymentujemy z nowoczesną chemią. Smak naszych dań zależy od precyzyjnego smażenia, długiego podduszania i świeżych ziół. Kupujemy mąkę z polskich młynów i przyprawy, które pachną tak, jak powinny.
              </p>
              <p className="font-serif italic text-lg text-[#1C1C1C] border-l-2 border-[#C0392B] pl-4 mt-6">
                Nie jesteśmy wykwintną restauracją z białymi rękawiczkami. Jesteśmy domem, który szeroko otwiera swoje drzwi, żebyś mógł zjeść smacznie, syto i w uczciwej cenie.
              </p>
            </div>
          </div>

          {/* Right Column: Decorative, design-forward frame - takes 5 cols */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8" id="about-decorations-wrapper">
            
            {/* Embedded single wheat stalk SVG decoration inside custom card */}
            <div className="bg-[#FAF6F0] border-2 border-[#1C1C1C] p-8 max-w-sm rounded relative shadow-md w-full" id="about-stalk-container">
              
              {/* Inline SVG 4 of 6: Single wheat stalk */}
              <div className="flex justify-center mb-6">
                <svg
                  viewBox="0 0 100 100"
                  className="w-16 h-16 text-[#C0392B]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M50,90 V20" />
                  <path d="M50,45 C45,40 45,35 50,30 C55,35 55,40 50,45 Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50,55 C42,50 42,45 50,40 C58,45 58,50 50,55 Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50,65 C43,60 43,55 50,50 C57,55 57,60 50,65 Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50,75 C45,70 45,65 50,60 C55,65 55,70 50,75 Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50,25 C47,20 47,15 50,10 C53,15 53,20 50,25 Z" fill="currentColor" fillOpacity="0.15" />
                  
                  {/* Subtle details on wheat */}
                  <path d="M47,28 L40,15 M53,28 L60,15 M45,38 L36,25 M55,38 L64,25 M43,48 L32,35 M57,48 L68,35 M42,58 L30,45 M58,58 L70,45" />
                </svg>
              </div>

              <div className="text-center font-serif text-sm text-[#6A6058]" id="about-wheat-caption">
                <p className="font-bold text-[#1C1C1C] uppercase tracking-wide text-xs mb-1">Czyste Zboże, Prawdziwa Mąka</p>
                Chleb, zakwas i ciasto na pierogi lepisz tylko z najdoskonalszych darów ziemi.
              </div>

              {/* One decorative large "·" separator in --red */}
              <div className="text-center mt-6 select-none" id="red-dot-separator-about">
                <span className="text-[#C0392B] text-6xl leading-[0] inline-block font-sans hover:scale-125 transition-transform duration-300">
                  ·
                </span>
              </div>
            </div>

            {/* Staggered, human-designed food photo collage */}
            <div className="w-full max-w-md pt-6 space-y-6" id="about-staggered-collage">
              <h4 className="font-serif italic text-sm text-[#1C1C1C] text-center lg:text-left tracking-wide">
                Galeria wolno gotowanych dań z dzisiaj:
              </h4>
              
              <div className="relative h-[280px] sm:h-[340px] w-full" id="staggered-images-canvas">
                
                {/* Photo 3: Base left frame */}
                <div
                  className="absolute top-0 left-0 w-[55%] h-[180px] sm:h-[220px] rounded border-2 border-[#1C1C1C] overflow-hidden shadow-md -rotate-3 hover:rotate-0 transition-transform duration-500 z-10 bg-[#FAF6F0]"
                  id="collage-photo-frame-3"
                >
                  <img
                    src={RESTAURANT_INFO.photos[3]}
                    alt="Prawdziwe polskie jedzenie z pasją"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Photo 4: Lower right frame, red border accent */}
                <div
                  className="absolute bottom-4 right-0 w-[55%] h-[180px] sm:h-[225px] rounded border-2 border-[#C0392B] overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500 z-20 bg-[#FAF6F0]"
                  id="collage-photo-frame-4"
                >
                  <img
                    src={RESTAURANT_INFO.photos[4]}
                    alt="Kotlety domowe ze skwarkami"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Photo 5: Miniature detail frame, tucked in back-right */}
                <div
                  className="absolute top-6 right-4 w-[40%] h-[120px] sm:h-[150px] rounded border border-[#1C1C1C]/40 overflow-hidden shadow rotate-6 hover:rotate-0 transition-transform duration-500 z-0 bg-[#EDE5D8]"
                  id="collage-photo-frame-5"
                >
                  <img
                    src={RESTAURANT_INFO.photos[5]}
                    alt="Zupy obiadowe Blackburn"
                    className="w-full h-full object-cover opacity-90 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
