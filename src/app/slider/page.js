"use client";
import { useRef, useEffect, useState } from "react";
import slides from "../componenDiv/page"; // adjust path if needed
import "../Style/slide.css";

export default function Slider() {
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Dot Sizing Configuration ---
  const maxDotSize = 12; // px for the active dot
  const minDotSize = 4; // px for the smallest dots
  const dotSizeStep = 2; // px reduction per step away from active

  // --- Auto Sliding Configuration ---
  const autoSlideDelay = 3000; // milliseconds (e.g., 3 seconds)

  // Ref to store the latest currentIndex for use in setTimeout closure
  const currentIndexRef = useRef(currentIndex);

  // Effect to keep currentIndexRef updated
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const showSlide = (index) => {
    const container = slidesRef.current;
    if (!container || !container.children || container.children.length === 0)
      return;
    const maxIndex = slides.length - 1;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));

    // User's existing logic for setting currentIndex
    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
    } else if (
      clampedIndex === currentIndex &&
      container.scrollLeft !== container.children[0].offsetWidth * clampedIndex
    ) {
      // If index is same but scroll position is off
    } else if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
    }

    if (container.children[0]) {
      const slideWidth = container.children[0].offsetWidth;
      container.scrollTo({
        left: slideWidth * clampedIndex,
        behavior: "smooth",
      });
    }
  };

  const changeSlide = (direction) => {
    // This will use the current `currentIndex` from the component's state
    const newIndex = currentIndex + direction;
    // For auto-sliding loop, we'll handle looping explicitly in the auto-slide effect
    // For manual clicks, showSlide will clamp
    showSlide(newIndex);
  };

  // Effect for scroll-based navigation (user's existing effect)
  useEffect(() => {
    const container = slidesRef.current;
    if (
      !container ||
      !container.children ||
      container.children.length === 0 ||
      !container.children[0]
    ) {
      return;
    }
    let scrollTimeoutId = null;
    const onScroll = () => {
      if (scrollTimeoutId) {
        clearTimeout(scrollTimeoutId);
      }
      scrollTimeoutId = setTimeout(() => {
        if (
          container.children &&
          container.children[0] &&
          container.children[0].offsetWidth > 0
        ) {
          const scrollLeft = container.scrollLeft;
          const slideWidth = container.children[0].offsetWidth;
          const index = Math.round(scrollLeft / slideWidth);
          const maxIndex = slides.length - 1;
          const newIndex = Math.max(0, Math.min(index, maxIndex));
          setCurrentIndex((prevCurrentIndex) => {
            if (newIndex !== prevCurrentIndex) {
              return newIndex;
            }
            return prevCurrentIndex;
          });
        }
      }, 150);
    };
    container.addEventListener("scroll", onScroll);
    return () => {
      if (scrollTimeoutId) {
        clearTimeout(scrollTimeoutId);
      }
      container.removeEventListener("scroll", onScroll);
    };
  }, [slides.length]);

  // --- New useEffect for Auto Sliding ---
  useEffect(() => {
    if (slides.length <= 1) {
      // Don't auto-slide if there's only one slide or none
      return;
    }

    const timerId = setTimeout(() => {
      // Use currentIndexRef.current to get the latest index for accurate looping
      const nextIndex = (currentIndexRef.current + 1) % slides.length;
      showSlide(nextIndex);
    }, autoSlideDelay);

    // Clear the timeout if the component unmounts or if currentIndex/slides.length changes
    // (which means a navigation happened, so we reset the timer for the next auto-slide)
    return () => clearTimeout(timerId);
  }, [currentIndex, slides.length, autoSlideDelay]); // Rerun if these dependencies change

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        ref={slidesRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {slides.map((content, i) => (
          <div
            key={i}
            className="flex-none w-full sm:h-[700px] h-[150px] bg-black text-white text-3xl flex items-center justify-center snap-start" // User's specified height
          >
            {content}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {slides && slides.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-3 sm:flex hidden transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
            onClick={() => changeSlide(-1)}
            disabled={currentIndex === 0}
          >
            ❮
          </button>
          <button
            className="absolute top-1/2 right-3 sm:flex hidden transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
            onClick={() => changeSlide(1)}
            disabled={currentIndex === slides.length - 1}
          >
            ❯
          </button>
        </>
      )}

      {/* Dots */}
      {slides && slides.length > 1 && (
        <div className="text-center mt-3 absolute bottom-3 left-0 right-0 z-10">
          {slides.map((_, i) => {
            const distance = Math.abs(i - currentIndex);
            let size;
            if (i === currentIndex) {
              size = maxDotSize;
            } else {
              size = Math.max(minDotSize, maxDotSize - distance * dotSizeStep);
            }
            return (
              <span
                key={i}
                onClick={() => showSlide(i)}
                className={`inline-block align-middle mx-1 rounded-full cursor-pointer  transition-all duration-300 ease-in-out ${
                  i === currentIndex ? "bg-red-500" : "bg-blue-50 opacity-50"
                }`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// main
