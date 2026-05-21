/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  polishName: string;
  description: string;
  price: string;
  tags?: string[];
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  text: string;
  date: string;
  rating: number;
}

export interface OpeningHour {
  day: string;
  hours: string;
  isClosed?: boolean;
}
