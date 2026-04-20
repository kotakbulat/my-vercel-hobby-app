// src/utils.ts
import type { TravelMeta } from './types';

export function generateFlightLink(meta: TravelMeta): string {
  return `https://www.airpaz.com/en/flight/search?adult=${meta.adult}&arrAirport=${meta.arrivalAirport}&cabin=${meta.cabin}&child=${meta.child}&depAirport=${meta.departureAirport}&depDate=${meta.departureDate}&infant=${meta.infant}&retDate=${meta.returnDate || ''}`;
}