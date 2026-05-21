/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuCategory, Review, OpeningHour } from "./types";

export const MENU_DATA: MenuCategory[] = [
  {
    id: "zupy",
    title: "Rozgrzewające Zupy",
    subtitle: "Gotowane powoli, na naturalnych wywarach i świeżych jarzynach",
    items: [
      {
        id: "z1",
        name: "Żurek Staropolski na zakwasie",
        polishName: "Żurek Staropolski",
        description: "Domowy zakwas żytni, tarty chrzan, tradycyjna biała kiełbasa, wędzona słonina i jajko od kury z wolnego wybiegu.",
        price: "£6.50",
        tags: ["Klasyk", "Polecane"],
        isPopular: true
      },
      {
        id: "z2",
        name: "Rosół z domowym makaronem",
        polishName: "Tradycyjny Rosół",
        description: "Trzy rodzaje mięs, opalana cebula, świeży lubczyk i domowej roboty, cienki makaron posypany świeżą natką pietruszki.",
        price: "£5.50"
      },
      {
        id: "z3",
        name: "Czysty Barszcz z uszkami",
        polishName: "Barszcz z Uszkami",
        description: "Esencjonalny wywar z buraków kwaszonych, podawany z ręcznie lepionymi uszkami pełnymi aromatycznych grzybów leśnych.",
        price: "£6.00",
        tags: ["Wege"]
      }
    ]
  },
  {
    id: "dania",
    title: "Dania Główne",
    subtitle: "Prawdziwe smaki polskiego domu — sycące, pachnące i zawsze świeże",
    items: [
      {
        id: "d1",
        name: "Kotlet Schabowy po królewsku",
        polishName: "Kotlet Schabowy",
        description: "Krojony grubo, rozbity z wyczuciem, smażony tradycyjnie na smalcu w chrupiącej bułce tartej. W zestawie z gładkim puree ziemniaczanym z koperkiem i ciepłą kapustą zasmażaną.",
        price: "£13.50",
        tags: ["Specjał Szefa"],
        isPopular: true
      },
      {
        id: "d2",
        name: "Ręcznie Lepione Pierogi Ruskie",
        polishName: "Pierogi Ruskie",
        description: "10 sztuk delikatnego ciasta z farszem z wiejskiego twarogu, tłoczonych ziemniaków i złocistej, skarmelizowanej cebuli. Podawane ze skwarkami lub kwaśną śmietaną.",
        price: "£10.50",
        tags: ["Wege opcja"]
      },
      {
        id: "d3",
        name: "Tradycyjne Gołąbki w sosie pomidorowym",
        polishName: "Gołąbki",
        description: "Dwa duże, soczyste gołąbki z mieloną łopatką wieprzową i ryżem, zawinięte w liście kapusty włoskiej. Duszone w sosie z dojrzałych pomidorów ze śmietaną.",
        price: "£11.00"
      },
      {
        id: "d4",
        name: "Placki Ziemniaczane po zbójnicku",
        polishName: "Placek po Zbójnicku",
        description: "Trzy chrupiące placki ziemniaczane twardo usmażone, złożone wpół i nadziane wolno duszonym, pikantnym gulaszem wieprzowym z papryką i leśnymi grzybami. Udekorowane kwaśną śmietaną.",
        price: "£14.00",
        tags: ["Bardzo Syte"],
        isPopular: true
      }
    ]
  },
  {
    id: "dodatki",
    title: "Dodatki i Napoje",
    subtitle: "Tradycyjne dopełnienie domowego posiłku",
    items: [
      {
        id: "do1",
        name: "Kompot owocowy z garnka",
        polishName: "Domowy Kompot",
        description: "Gotowany codziennie ze świeżych i mrożonych owoców sadu — truskawki, wiśnie, jabłka, z lekką nutą goździka. Słodzony z umiarem.",
        price: "£2.00",
        tags: ["Bez cukru dodanego"]
      },
      {
        id: "do2",
        name: "Mizeria ze świeżym koperkiem",
        polishName: "Mizeria",
        description: "Cienkie plastry młodego ogórka, szczypta soli, odrobina cytryny oraz wiejska, gęsta śmietana 18% posypana świeżym koperkiem.",
        price: "£3.00"
      },
      {
        id: "do3",
        name: "Zestaw surówek",
        polishName: "Surówki",
        description: "Trio tradycyjnych surówek obiadowych: tarta marchewka z jabłkiem, biała kapusta colesław oraz buraczki na ciepło.",
        price: "£4.00"
      }
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "r1",
    author: "Marta Kowalska",
    text: "Schabowy jak u mamy! Chrupiący, świeżutki, a kapusta zasmażana to po prostu mistrzostwo świata. W Blackburn brakowało takiego miejsca z prawdziwym, polskim jedzeniem bez ulepszaczy.",
    date: "2 dni temu",
    rating: 5
  },
  {
    id: "r2",
    author: "Janusz Wiśniewski",
    text: "Żurek ma ten głęboki, kwaśny posmak, który tak trudno odtworzyć za granicą. Ceny są bardzo uczciwe jak na tak gigantyczne porcje. Zamawiamy z całą rodziną co niedzielę.",
    date: "Tydzień temu",
    rating: 5
  },
  {
    id: "r3",
    author: "David B.",
    text: "First time trying Polish food and I am absolutely blown away. The potato pancakes with pork stew (Placek po Zbójnicku) were incredible. Rich, comforting, and packed with flavor. Extremely friendly people!",
    date: "2 tygodnie temu",
    rating: 5
  },
  {
    id: "r4",
    author: "Anna Nowak",
    text: "Najlepsze pierogi ruskie w Lancashire! Cieniutkie ciasto, farsz idealnie doprawiony pieprzem, skwarki chrupiące. Właściciele wkładają w to całe swoje serce, co czuć w każdym kęsie.",
    date: "Miesiąc temu",
    rating: 5
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Poniedziałek", hours: "Zamknięte", isClosed: true },
  { day: "Wtorek", hours: "12:00 - 18:00" },
  { day: "Środa", hours: "12:00 - 18:00" },
  { day: "Czwartek", hours: "12:00 - 19:00" },
  { day: "Piątek", hours: "12:00 - 20:00" },
  { day: "Sobota", hours: "12:00 - 20:00" },
  { day: "Niedziela", hours: "12:00 - 18:00" }
];

export const RESTAURANT_INFO = {
  phone: "+44 7383 714086",
  address: "King Street, Blackburn, United Kingdom, BB2 2Ef",
  addressShort: "King Street, Blackburn",
  facebookUrl: "https://www.facebook.com/profile.php?id=61582948599756",
  mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.433091583969!2d-2.4901460228266656!3d53.74617094473188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9fd0315a2d9b%3A0xb1f40debda120e0b!2sKing%20St%2C%20Blackburn%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1779349633607!5m2!1spl!2spl",
  photos: [
    "https://i.ibb.co/7x2zgDpW/589820503-122107067337098286-6834154998455440101-n.jpg",
    "https://i.ibb.co/tMDmJMBQ/585783882-122107067667098286-3652757360939495829-n.jpg",
    "https://i.ibb.co/zWJNWjCR/592138277-122108588019098286-7908645091068907651-n.jpg",
    "https://i.ibb.co/27Y9GfG0/595843352-122109364545098286-1892314493327601830-n.jpg",
    "https://i.ibb.co/KzcV7b0d/595269962-122109364557098286-5785890965584930039-n.jpg",
    "https://i.ibb.co/tMbN4GkZ/596797596-122109600633098286-5376210249178577726-n.jpg"
  ]
};
