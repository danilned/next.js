"use client";
import React, { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";

// Hooks
import useEmblaCarousel from "embla-carousel-react";

// // Styles
import "@/styles/progress-carousel.scss";

export default function ProgressCarousel({
  children,
  slides,
  options,
  autoPlay,
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options ?? {},
    autoPlay ? [Autoplay()] : []
  );

  const slidesIteration = new Array(slides).fill(null);

  const scrollTo = (index) => {
    emblaApi.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    let timer = null;

    const onScroll = (emblaApi) => {
      if (timer !== null) {
        return;
      }

      timer = setTimeout(() => {
        setScrollProgress(
          100 * Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        );

        timer = null;
      }, 25);
    };

    emblaApi.on("scroll", onScroll);

    emblaApi.on("select", (emblaApi) =>
      setCurrentSlide(emblaApi.selectedScrollSnap())
    );
  }, [emblaApi]);

  return (
    <div className="progress-carousel-container">
      <div className="carousel-scroll-progress">
        {slidesIteration.map((_, index) => (
          <div
            key={`carousel-dots-${index}`}
            className="carousel-dot"
            onClick={() => scrollTo(index)}
          >
            <div className="carousel-dots-progress" />
          </div>
        ))}
      </div>
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-content">
          {children.map((item, index) => (
            <div
              key={`carousel-${index}}`}
              className={clsx([
                "carousel-slide",
                { active: index === currentSlide },
              ])}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
