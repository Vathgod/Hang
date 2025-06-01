"use client";
import { useState } from "react";
import AllFood from "../fKhmer/page";
import KhmerFood from "../fastFood/page";
import EuropeFood from "../FoodEu/page";
import Drink from "../fDrink/page";
import Sweet from "../fSweet/page";
import "../Style/slide.css";

export default function ProductsPage() {
  const [selectedFood, setSelectedFood] = useState("all");

  const renderContent = () => {
    switch (selectedFood) {
      case "khmer":
        return <KhmerFood />;
      case "europe":
        return <EuropeFood />;
      case "drink":
        return <Drink />;
      case "sweet":
        return <Sweet />;
      case "all":
      default:
        return <AllFood />;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-20   bg-black py-5 sm:py-10">
      <div className="sm:text-4xl text-orange-600 text-sm font-bold mb-6 text-center ">
        Hello, these are all my mini cards
      </div>

      {/* Buttons to switch content */}
      <div className="flex flex-wrap sm:mt-3 justify-start ml-8 sm:ml-0  items-center gap-4 mb-5 sm:mb-8">
        <button
          onClick={() => setSelectedFood("all")}
          className={`px-4 leading-[1] py-2 h-fit text-[10px] hover:border-orange-600 hover:text-orange-600  sm:px-5 sm:text-sm   rounded ${
            selectedFood === "all"
              ? "bg-transparent text-orange-600 border border-orange-600 rounded-3xl"
              : "bg-transparent text-white border border-white rounded-3xl"
          }`}
        >
          Khmer Food
        </button>
        <button
          onClick={() => setSelectedFood("europe")}
          className={`px-4 leading-[1] py-2 h-fit text-[10px] hover:border-orange-600 hover:text-orange-600 sm:px-5 sm:text-sm  rounded ${
            selectedFood === "europe"
              ? "bg-transparent text-orange-600 border border-orange-600 rounded-3xl"
              : "bg-transparent text-white border border-white rounded-3xl"
          }`}
        >
          Europe Food
        </button>
        <button
          onClick={() => setSelectedFood("khmer")}
          className={`px-4 leading-[1] py-2 h-fit text-[10px] hover:border-orange-600 hover:text-orange-600 sm:px-5 sm:text-sm  rounded ${
            selectedFood === "khmer"
              ? "bg-transparent text-orange-600 border border-orange-600 rounded-3xl"
              : "bg-transparent text-white border border-white rounded-3xl"
          }`}
        >
          Fast Food
        </button>

        <button
          onClick={() => setSelectedFood("drink")}
          className={`px-4 leading-[1] py-2 h-fit text-[10px] hover:border-orange-600 hover:text-orange-600 sm:px-5 sm:text-sm  rounded ${
            selectedFood === "drink"
              ? "bg-transparent text-orange-600 border border-orange-600 rounded-3xl"
              : "bg-transparent text-white border border-white rounded-3xl"
          }`}
        >
          Drink
        </button>
        <button
          onClick={() => setSelectedFood("sweet")}
          className={`px-4 leading-[1] py-2 h-fit text-[10px] hover:border-orange-600 hover:text-orange-600 sm:px-5 sm:text-sm  rounded ${
            selectedFood === "sweet"
              ? "bg-transparent text-orange-600 border border-orange-600 rounded-3xl"
              : "bg-transparent text-white border border-white rounded-3xl"
          }`}
        >
          Sweet
        </button>
      </div>

      {/* Render the selected component */}
      {renderContent()}
    </div>
  );
}

// .
// .
// .
// .
// .
// .
// .
// .
// .
{
  /* Horizontal Scroll Container */
}
{
  /* <div className="w-full bg-red-500 p-10 px-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-200">
        <div
          className="inline-grid grid-rows-2 auto-cols-[18rem] gap-6"
          style={{ gridAutoFlow: "column" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-72 p-4 flex flex-col"
            >
              <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {product.description}
              </p>

              <p className="text-xl font-bold text-sky-600 mb-2">
                ${product.price}
              </p>

              <div className="flex items-center text-yellow-500">
                <span className="text-sm text-gray-600 ml-1">
                  {product.star} ({product.rating})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div> */
}
