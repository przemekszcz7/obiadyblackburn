/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Phone, Menu as MenuIcon, X, Flame } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { id: "hero", label: "Start" },
    { id: "wyróżniki", label: "O nas" },
    { id: "menu", label: "Menu" },
    { id: "danie-dnia", label: "Danie Dnia" },
    { id: "kontakt", label: "Kontakt" }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-custom ${
        scrolled ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-md border-b border-[#1C1C1C]/5" : "bg-transparent"
      }`}
    >
      {/* 1. Top accent bar: 5px solid --red, full width */}
      <div className="h-[5px] bg-[#C0392B] w-full" id="top-red-accent-bar" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo - Playfair Display editorial feel */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group text-left"
          id="navbar-logo-btn"
        >
          <div className="relative">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1C1C]">
              Domowe Obiady
            </span>
            <span className="block font-handwritten text-[#C0392B] text-lg -mt-1 tracking-wider leading-none">
              Blackburn
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`text-sm tracking-wider uppercase font-medium relative transition-colors py-2 cursor-pointer ${
                    activeSection === link.id
                      ? "text-[#C0392B]"
                      : "text-[#1C1C1C] hover:text-[#C0392B]/80"
                  }`}
                >
                  {link.label}
                  {/* Active Link Underline */}
                  {activeSection === link.id && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C0392B]"
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Quick Call Button */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            id="nav-call-phone-btn"
            className="flex items-center gap-2.5 bg-[#C0392B] hover:bg-[#962D22] text-[#FAF6F0] px-4 py-2.5 rounded shadow-sm text-sm font-semibold tracking-wider transition-custom"
          >
            <Phone className="w-4 h-4" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            id="mobile-call-icon-btn"
            className="p-2.5 rounded-full bg-[#C0392B] text-[#FAF6F0] hover:bg-[#962D22]"
            title="Zadzwoń teraz"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-burger-btn"
            className="p-2.5 text-[#1C1C1C] hover:text-[#C0392B] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FAF6F0] border-t border-[#1C1C1C]/10 py-6 px-8 animate-fade-in"
        >
          <ul className="flex flex-col gap-5 mb-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  id={`mobile-nav-link-${link.id}`}
                  className={`w-full text-left text-lg font-serif py-1 tracking-wide ${
                    activeSection === link.id
                      ? "text-[#C0392B] border-l-2 border-[#C0392B] pl-3 font-semibold"
                      : "text-[#1C1C1C]"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#6A6058]">Złóż zamówienie telefonicznie:</span>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              id="mobile-drawer-call-btn"
              className="flex items-center justify-center gap-3 bg-[#C0392B] hover:bg-[#962D22] text-[#FAF6F0] py-3 rounded-md font-semibold font-sans w-full text-center tracking-wide shadow-sm"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>Zadzwoń: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
