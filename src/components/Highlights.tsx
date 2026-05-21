/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Highlights() {
  return (
    <section
      id="wyróżniki"
      className="py-20 md:py-28 bg-[#F3EDE3] texture-paper-section border-t border-[#1C1C1C]/5 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left 58%: Prose content focusing on raw quality */}
          <div className="lg:col-span-7">
            <span className="text-xs tracking-[0.25em] lg:tracking-[0.3em] font-bold text-[#C0392B] uppercase block mb-4">
              Nasze Święte Zasady
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1C1C] mb-8 leading-[1.15]">
              To nie jest kolejna masowa gastronomia.
            </h2>
            
            {/* Horizontal, conversational editorial blocks instead of cards */}
            <div className="space-y-10" id="highlights-prose-container">
              
              <div className="flex gap-6 items-start" id="highlight-block-1">
                <span className="font-serif text-3xl font-bold text-[#C0392B]/40 leading-none">01</span>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 font-serif">
                    Smalec, ogień i cierpliwość
                  </h3>
                  <p className="text-[#6A6058] text-[16px] leading-[1.75]">
                    Nasze schabowe nie widziały frytkownicy ani mikrofali. Smażymy je powoli na rozgrzanej patelni, używając czystego wieprzowego smalcu, który nadaje im klasyczną chrupkość i głęboki zapach tradycji. Każdy kotlet jest krojony bezpośrednio przed smażeniem.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start" id="highlight-block-2">
                <span className="font-serif text-3xl font-bold text-[#C0392B]/40 leading-none">02</span>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 font-serif">
                    Ciasto, które lepi się samo
                  </h3>
                  <p className="text-[#6A6058] text-[16px] leading-[1.75]">
                    Sekret tkwi w mące, gorącej wodzie i dłoniach naszej kucharki. Ciasto jest tak miękkie, że niemal rozpływa się w ustach. Nigdy nie mrozimy pierogów na zapas – lepi się je rano, a popołudniu lądują na Waszych talerzach ze świeżymi skwarkami.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start" id="highlight-block-3">
                <span className="font-serif text-3xl font-bold text-[#C0392B]/40 leading-none">03</span>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 font-serif">
                    Warzywa i zakwas bez kompromisów
                  </h3>
                  <p className="text-[#6A6058] text-[16px] leading-[1.75]">
                    Żurek robimy na domowym zakwasie żytnim, który dojrzewa u nas w cieple przez kilka dni. Jarzyny kupujemy od zaufanego dostawcy, dzięki czemu nasz rosół ma ten jedyny, słodkawy i esencjonalny posmak prawdziwej niedzieli w Polsce.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right 42%: Intentional, beautiful negative space + minimal stylized board */}
          {/* Let's place a gorgeous text block that breaks the balance nicely */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-10 lg:pt-20">
            <div className="border-l-2 border-[#C0392B] pl-8 py-4 bg-[#FAF6F0]/20 max-w-sm" id="highlights-quote-sidebar">
              {/* Secondary: "Playfair Display" (400 italic) for pull quotes */}
              <p className="font-serif italic text-xl sm:text-2xl text-[#1C1C1C] leading-[1.6]">
                „Ludzie pytają nas o sekret smaku. Odpowiadamy zawsze tak samo: nie skracamy czasu. Zupa musi pyrkać cztery godziny, a cebula rumienić się powoli.”
              </p>
              <p className="font-sans text-xs tracking-widest font-bold uppercase text-[#6A6058] mt-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#C0392B]" />
                Zofia, Szefowa Kuchni
              </p>
            </div>

            {/* Subtle asterisk divider - Inline SVG 2 of 6: Small asterisk/star shape in --red */}
            <div className="mt-12 lg:mt-0 flex justify-start items-center gap-2 text-[#C0392B]" id="highlights-divider-asterisk">
              <span className="font-serif text-[#C0392B] text-xl font-semibold opacity-30">· · · · ·</span>
              <svg className="w-5 h-5 text-[#C0392B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2 L14.1,8.3 L20.5,8.3 L15.3,12.2 L17.4,18.5 L12,14.6 L6.6,18.5 L8.7,12.2 L3.5,8.3 L9.9,8.3 Z" />
              </svg>
              <span className="font-serif text-[#C0392B] text-xl font-semibold opacity-30">· · · · ·</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
