"use client";
import Image from "next/image";
import products from "../componentMiniCard/forEu/page";

function AllFood() {
  return (
    <div className="w-full bg-black flex mt-4 sm:mt-20 justify-center items-center flex-col">
      <h2 className="text-center text-sm sm:text-2xl font-semibold text-white sm:mb-6">
        All Europe Food We Can Provide 🍽️
      </h2>

      <div className="lg:w-[1200px] w-full rounded-md bg-black py-2 sm:py-5  overflow-x-auto sm:p-5 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-200 px-1">
        <div
          className="inline-grid grid-rows-2 auto-cols-[150px] sm:auto-cols-[190px] md:auto-cols-[230px] lg:auto-cols-[220px] gap-3 sm:gap-6"
          style={{ gridAutoFlow: "column" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="hover:bg-[#ffffff20] rounded-md overflow-hidden sm:rounded-2xl shadow-md  hover:shadow-lg transition-all duration-300 w-[150px] sm:w-[200px] md:w-[240px] lg:w-[230px] h-[190px] sm:h-[300px] md:h-[340px] lg:h-[290px] flex flex-col"
            >
              <div className="w-[100px] sm:w-[130px] md:w-[180px] h-[100px] sm:h-[130px] md:h-[180px] rounded-full overflow-hidden relative mb-2 mx-auto">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-[10px] sm:text-sm font-semibold text-white mb-1 line-clamp-1 px-2 text-center">
                {product.name}
              </h3>

              <p className="text-[6px] sm:text-xs text-white line-clamp-2 mb-1 px-2 text-center">
                {product.description}
              </p>

              <p className="text-[10px] sm:text-lg font-bold text-sky-600 mb-1 px-2 text-center">
                ${product.price}
              </p>

              <div className="flex justify-center items-center text-yellow-500 sm:text-[10px] text-[6px] px-2">
                <span className="text-yellow-500 ml-1">
                  {product.star} ({product.rating})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllFood;
