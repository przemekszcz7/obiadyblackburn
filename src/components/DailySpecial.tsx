/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";

interface SpecialDish {
  dayName: string;
  soup: string;
  main: string;
  side: string;
  price: string;
  notes?: string;
}

const WEEKLY_SPECIALS: Record<number, SpecialDish> = {
  1: {
    dayName: "Poniedziałek",
    soup: "Kuchnia nieczynna",
    main: "Dziś odpoczywamy i robimy porządki",
    side: "Zapraszamy od wtorku!",
    price: "—"
  },
  2: {
    dayName: "Wtorek",
    soup: "Krem z pieczonych pomidorów",
    main: "Aksamitne Kopytka z boczkiem śląskim",
    side: "Kapusta zasmażana z kminkiem",
    price: "£11.50",
    notes: "Proste, genialne, sycące danie mączne gotowane tuż przed podaniem."
  },
  3: {
    dayName: "Środa",
    soup: "Szczawiowa z jajkiem staropolska",
    main: "Soczyste Pulpety wieprzowe w sosie koperkowym",
    side: "Ziemniaczki z koperkiem i buraczki z tartej marchewki",
    price: "£12.50",
    notes: "Klasyczny sos koperkowy robiony na wiejskiej 18% śmietanie."
  },
  4: {
    dayName: "Czwartek",
    soup: "Rozgrzewająca Grochówka na boczku",
    main: "Aromatyczny Gulasz wołowy z kaszą gryczaną",
    side: "Nasz własny ogórek kiszony ruszany z dębowej beczki",
    price: "£13.50",
    notes: "Mięso wołowe duszone 3 godziny do idealnej kruchości."
  },
  5: {
    dayName: "Piątek",
    soup: "Zupa rybna na głowach karpia i łososia",
    main: "Smażony Filet z Miruny w złotej panierce",
    side: "Opiekane półksiężyce ziemniaczane i klasyczna kiszona kapusta",
    price: "£13.00",
    notes: "Rybka chrupiąca, delikatna, podawana z cytryną."
  },
  6: {
    dayName: "Sobota",
    soup: "Krupnik na żołądkach kurzych",
    main: "Tradycyjne Gołąbki w sosie pomidorowym",
    side: "Trio surówek domowych i chleb wiejski do wytarcia talerza",
    price: "£12.00",
    notes: "Pachnące majerankiem, miękkie i obfite zawijasy."
  },
  0: {
    dayName: "Niedziela",
    soup: "Królewski Rosół z trzech mięs",
    main: "Rolada Śląska wołowa z kluskami śląskimi",
    side: "Tradycyjna modra kapusta duszona z jabłkiem i goździkiem",
    price: "£15.50",
    notes: "Święty obiad śląski – rolada z boczkiem, musztardą i ogórkiem w środku."
  }
};

export default function DailySpecial() {
  // Determine user's local day (0 is Sunday, 1 is Monday, etc.)
  const today = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState<number>(today);

  const currentSpecial = WEEKLY_SPECIALS[selectedDay];

  const polishDays = [
    { index: 2, short: "Wt" },
    { index: 3, short: "Śr" },
    { index: 4, short: "Czw" },
    { index: 5, short: "Pt" },
    { index: 6, short: "Sob" },
    { index: 0, short: "Niedz" },
    { index: 1, short: "Pon" }
  ];

  return (
    <section
      id="danie-dnia"
      className="py-12 md:py-20 bg-[#111111] texture-lines-darker relative overflow-hidden select-none border-y border-[#FAF6F0]/10"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.3em] font-bold text-[#D65F52] uppercase block mb-3">Chalkboard Specjałów</span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#FAF6F0] tracking-tight">Obiad Dnia — Tydzień na Tablicy</h2>
          <p className="text-white/60 text-xs mt-2 uppercase tracking-widest max-w-lg mx-auto">
            Kliknij dzień tygodnia, aby zobaczyć, co serwujemy w naszej kuchni.
          </p>
        </div>

        {/* Day selection links styled as nice minimal chalk buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" id="chalkboard-day-selectors-row">
          {polishDays.map((day) => {
            const isToday = day.index === today;
            const isSelected = selectedDay === day.index;

            return (
              <button
                key={day.index}
                onClick={() => setSelectedDay(day.index)}
                id={`chalk-day-btn-${day.index}`}
                className={`px-4 py-2 text-sm font-semibold tracking-wider uppercase rounded transition-custom border ${
                  isSelected
                    ? "bg-[#C0392B] text-[#FAF6F0] border-[#C0392B]"
                    : "bg-transparent text-white/70 border-white/10 hover:border-[#D65F52] hover:text-[#FAF6F0]"
                } relative`}
              >
                {day.short}
                {isToday && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D65F52] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C0392B]"></span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* The Chalkboard component itself */}
        <div
          id="chalkboard-frame"
          className="relative bg-[#1C1C1C] border-8 md:border-[16px] border-[#3D2517] rounded-lg p-6 md:p-12 shadow-2xl texture-lines-dark"
        >
          {/* Subtle screw details on the corners */}
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#111111] opacity-55" />
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#111111] opacity-55" />
          <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-[#111111] opacity-55" />
          <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#111111] opacity-55" />

          {/* Title printed in Handwritten Caveat font */}
          <div className="text-center border-b-2 border-dashed border-white/15 pb-6 mb-8">
            <span className="font-handwritten text-[#D65F52] text-3xl md:text-4xl font-extrabold tracking-wider leading-none">
              Danie Dnia — {currentSpecial.dayName}
            </span>
            {selectedDay === today && (
              <p className="text-emerald-400 text-xs uppercase tracking-widest font-sans font-bold mt-2">
                ★ DZISIEJSZY JADŁOSPIS DNIA ★
              </p>
            )}
          </div>

          {/* Chalkboard special contents */}
          {selectedDay === 1 ? (
            /* Monday / closed day */
            <div className="text-center py-12" id="chalkboard-closed-state">
              <span className="font-handwritten text-white/50 text-4xl block mb-4">
                "Garnek potrzebuje odpocząć!"
              </span>
              <p className="text-[#EDE5D8] max-w-sm mx-auto text-sm leading-relaxed">
                W poniedziałki odpoczywamy, czyścimy kuchnię, zaopatrujemy spiżarnię i robimy świeży zakwas. Zapraszamy we wtorek!
              </p>
            </div>
          ) : (
            /* Traditional food description */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start" id="chalkboard-active-state">
              
              {/* Menu listings on chalkboard */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <span className="text-white/40 text-xs uppercase tracking-widest block font-sans mb-1">
                    Tradycyjna Zupa obiadowa:
                  </span>
                  <p className="font-handwritten text-white text-2xl md:text-3xl font-extrabold tracking-wide">
                    {currentSpecial.soup}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-white/40 text-xs uppercase tracking-widest block font-sans mb-1">
                    Główne danie domowe:
                  </span>
                  <p className="font-handwritten text-[#D65F52] text-2xl md:text-3xl font-extrabold tracking-wide">
                    {currentSpecial.main}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-white/40 text-xs uppercase tracking-widest block font-sans mb-1">
                    Klasyczny dodatek dnia:
                  </span>
                  <p className="font-handwritten text-[#EDE5D8] text-xl md:text-2xl">
                    {currentSpecial.side}
                  </p>
                </div>
              </div>

              {/* Price and notes sidebar - chalkboard style */}
              <div className="md:col-span-4 flex flex-col justify-between h-full bg-black/30 p-6 rounded border border-white/5">
                <div className="text-center md:text-right border-b border-white/10 pb-4 mb-4">
                  <span className="text-white/40 text-xs uppercase tracking-widest block font-sans mb-1">
                    Zestaw obiadowy:
                  </span>
                  {/* Price in DM Mono */}
                  <span className="font-mono text-3xl font-black text-[#D65F52] block mt-1">
                    {currentSpecial.price}
                  </span>
                </div>

                {currentSpecial.notes && (
                  <p className="font-handwritten text-white/70 text-lg italic leading-tight text-center md:text-right">
                    "{currentSpecial.notes}"
                  </p>
                )}

                <div className="mt-6 flex justify-center md:justify-end">
                  <span className="text-[10px] uppercase font-sans font-extrabold bg-[#C0392B]/15 text-[#D65F52] border border-[#D65F52]/20 px-2.5 py-1.5 rounded tracking-widest text-center">
                    CENA ZA CAŁY OBIAD
                  </span>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}
