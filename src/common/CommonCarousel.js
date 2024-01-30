"use client";

// Hooks
import useEmblaCarousel from "embla-carousel-react";

export default function CommonCarousel({ options, children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options ?? {});

  return (
    <div className="common-carousel-container">
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-content">
          {children.map((item, index) => (
            <div key={`carousel-${index}}`} className="carousel-slide">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
