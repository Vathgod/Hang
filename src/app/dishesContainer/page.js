"use client";
import Image from "next/image";
import products from "../dishesCoponent/page"; // adjust path if needed
import { useInView } from "../useView/page"; // adjust path if needed

export default function ProductCards() {
  return (
    <main className="bg-black flex flex-col items-center justify-center p-4 space-y-8 sm:space-y-10 mb-20">
      <h2 className="font-semibold text-orange-600 sm:text-3xl text-lg text-center max-w-4xl mx-auto">
        Popular Food
      </h2>

      {products.map((product) => {
        const [ref, isInView] = useInView(); // 👈 Use the hook here

        return (
          <div
            ref={ref}
            key={product.id}
            className={`fade-slide-up ${isInView ? "in-view" : ""}
              bg-[#ffffff00] h-[100px] sm:h-[380px] rounded-xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden flex max-w-[90vw] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] mx-auto`}
            style={{ flexDirection: product.reverse ? "row-reverse" : "row" }}
          >
            {/* Image container */}
            <div className="relative w-1/2 sm:w-[70%] h-[100px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
              <Image
                src={product.imageSrc}
                alt={product.title}
                fill
                className="object-cover rounded-md sm:rounded-3xl"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                priority
              />
            </div>

            {/* Text container */}
            <div className="w-1/2 p-4 sm:p-6 md:p-8 h-[100px] space-x-1 flex flex-col justify-center sm:justify-between">
              <div>
                <h2 className="text-[10px] sm:text-2xl md:text-3xl font-bold text-orange-600 mb-2 sm:mb-4">
                  {product.title}
                </h2>
                <p className="text-orange-200 text-[7px] sm:text-base sm:mb-6 leading-tight mb-2">
                  {product.description}
                </p>
                <p className="text-[8px] sm:text-2xl md:text-3xl font-semibold text-yellow-400 sm:mb-8">
                  {product.price}
                </p>
              </div>
              {/* Optional button if needed */}
              {/* <button className="...">{product.buttonText}</button> */}
            </div>
          </div>
        );
      })}
    </main>
  );
}
