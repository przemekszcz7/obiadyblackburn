/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, MapPin, Phone, Share2, Facebook } from "lucide-react";
import { OPENING_HOURS, RESTAURANT_INFO } from "../data";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="py-20 md:py-28 bg-[#FAF6F0] texture-paper border-t border-[#1C1C1C]/10 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Opening hours & Contact Info (Takes 5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-xs tracking-[0.25em] font-bold text-[#C0392B] uppercase block mb-3">
                Złóż Zamówienie lub Przyjdź
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight mb-2">
                Dom i Kuchnia w Blackburn
              </h2>
              <p className="text-[#6A6058] text-sm leading-relaxed">
                Zbieramy zamówienia telefoniczne. Istnieje możliwość odbioru osobistego na King Street lub dostawy.
              </p>
            </div>

            {/* Simple, Clean Hours (NO unnecessary decoration, as requested) */}
            <div className="space-y-4" id="simple-opening-hours-list">
              <h3 className="font-serif text-lg font-bold text-[#1C1C1C] border-b border-[#1C1C1C]/10 pb-2 mb-4">
                Godziny Otwarcia
              </h3>
              <div className="space-y-3">
                {OPENING_HOURS.map((hour) => (
                  <div
                    key={hour.day}
                    className="flex justify-between items-center text-[#1C1C1C] text-sm py-1"
                    id={`hour-row-${hour.day}`}
                  >
                    <span className="font-medium">{hour.day}</span>
                    <span
                      className={`font-mono text-xs ${
                        hour.isClosed ? "text-[#C0392B] font-bold" : "text-[#1C1C1C]/80"
                      }`}
                    >
                      {hour.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Methods & Facebook */}
            <div className="space-y-6 pt-4 border-t border-[#1C1C1C]/10">
              <div className="flex items-start gap-4" id="contact-address-block">
                <div className="p-3 bg-[#C0392B]/5 text-[#C0392B] rounded border border-[#C0392B]/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#6A6058] font-bold mb-1">Adres kuchni:</h4>
                  <p className="text-sm font-semibold text-[#1C1C1C] leading-tight">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" id="contact-phone-block">
                <div className="p-3 bg-[#C0392B]/5 text-[#C0392B] rounded border border-[#C0392B]/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#6A6058] font-bold mb-1">Numer Telefonu:</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-lg font-mono font-bold text-[#C0392B] hover:underline"
                    id="contact-phone-link"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Facebook Button with brand colors */}
              <div className="pt-4" id="contact-facebook-block">
                <a
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-facebook-link-btn"
                  className="inline-flex items-center gap-3 bg-[#1877F2] hover:bg-[#1565C0] text-[#FAF6F0] px-6 py-3.5 rounded shadow-sm text-sm font-bold tracking-wide transition-custom w-full sm:w-auto justify-center"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                  <span>POLUB NAS NA FACEBOOKU</span>
                </a>
                <p className="text-[#6A6058] text-[11px] mt-2 font-serif italic">
                  * Publikujemy tam aktualności, zdjęcia z kuchni i ogłoszenia o szybszym wyprzedaniu dań!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps (Takes 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#1C1C1C] lg:text-right">
              Gdzie Grzejemy Garnki?
            </h3>
            
            {/* Embedded map wrapped elegantly */}
            <div
              id="google-maps-iframe-wrapper"
              className="relative w-full h-[300px] md:h-[450px] border-4 border-[#1C1C1C] bg-[#EDE5D8] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                title="Google Maps Location - Domowe Obiady Blackburn"
                src={RESTAURANT_INFO.mapsIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="contact-google-maps-embed-iframe"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-between text-xs text-[#6A6058] font-medium px-1">
              <span>Wskazówki dojazdu: King Street, Blackburn</span>
              <span className="font-mono text-xs uppercase text-[#C0392B]">BB2 2Ef</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
