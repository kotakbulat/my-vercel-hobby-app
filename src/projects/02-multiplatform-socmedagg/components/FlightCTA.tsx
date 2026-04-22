// src/components/FlightCTA.tsx
import type { TravelMeta } from '../types';
import { generateFlightLink } from '../utils';

interface FlightCTAProps {
  meta: TravelMeta;
}

export default function FlightCTA({ meta }: FlightCTAProps) {
  const handleBookClick = () => {
    window.open(generateFlightLink(meta), "_blank");
  };

  return (
    <div className="flight-cta-overlay">
      <div className="flight-cta-content">
        <div className="flight-cta-info">
          <span className="flight-route">✈️ {meta.departureAirport} → {meta.arrivalAirport}</span>
          <span className="flight-date">
            {meta.departureDate} {meta.returnDate ? `— ${meta.returnDate}` : ''}
          </span>
        </div>
        <button className="flight-cta-button" onClick={handleBookClick}>
          Click Here to Book {meta.price ? ` $${meta.price}` : ''}
        </button>
      </div>
    </div>
  );
}