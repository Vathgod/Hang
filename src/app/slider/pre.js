"use client";
import { useRef, useEffect, useState } from "react";
import slides from "../componenDiv/page"; // adjust path if needed
import "../Style/slide.css";

export default function Slider() {
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const container = slidesRef.current;
    if (!container) return;
    const maxIndex = slides.length - 1;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    const slideWidth = container.children[0].offsetWidth;
    container.scrollTo({
      left: slideWidth * clampedIndex,
      behavior: "smooth",
    });
  };

  const changeSlide = (direction) => {
    showSlide(currentIndex + direction);
  };

  useEffect(() => {
    const container = slidesRef.current;
    if (!container) return;

    const onScroll = () => {
      clearTimeout(container.scrollTimeout);
      container.scrollTimeout = setTimeout(() => {
        const index = Math.round(
          container.scrollLeft / container.children[0].offsetWidth
        );
        setCurrentIndex(index);
      }, 100);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        ref={slidesRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {slides.map((content, i) => (
          <div
            key={i}
            className="flex-none w-full h-64 bg-gray-800 text-white text-3xl flex items-center justify-center snap-start"
          >
            {content}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        onClick={() => changeSlide(-1)}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        onClick={() => changeSlide(1)}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="text-center mt-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => showSlide(i)}
            className={`inline-block  mx-1 rounded-full  cursor-pointer ${
              i === currentIndex
                ? "bg-red-500 w-[12px] h-[12px]"
                : "bg-black w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// main
