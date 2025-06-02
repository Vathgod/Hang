// For app router: app/top-products/page.tsx
// For pages router: pages/top-products.tsx

import Image from "next/image";

const topProducts = [
  {
    id: 1,
    title: "Peony Blossom",
    description: "A soft, elegant flower perfect for gentle hearts.",
    price: "$15.99",
    image: "/imageCon/top3/t4.png",
  },
  {
    id: 2,
    title: "Royal Rose",
    description: "Classic red roses for romantic moments.",
    price: "$18.50",
    image: "/imageCon/top3/t3.png",
  },
  {
    id: 3,
    title: "Sunshine Tulip",
    description: "Bright tulips to light up any day.",
    price: "$12.75",
    image: "/imageCon/top3/t2.png",
  },
];

export default function TopProductsPage() {
  return (
    <main className=" bg-black  p-8">
      <h1 className="lg:text-4xl text-xl text-orange-600 font-bold lg:mt-20 mb-6 text-center">
        Top 3 Dishes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="relative lg:w-[400px] w-[300px] rounded-xl border  border-orange-600 shadow-lg shadow-orange-600 lg:h-[700px]  group h-[450px]"
          >
            <div className="absolute inset-0">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/35 text-white p-4 z-10">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="mt-1 font-bold text-yellow-300">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
