// components/firstHero.js
import Image from "next/image";

const FirstHero = () => {
  return (
    <div className="sm:h-[900px] h-[200px] sm:flex flex flex-col items-center justify-center p-4 text-white relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0.8,1)),
        url('/imageCon/image.png')
      `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Foreground content */}
      <div className="text-center flex justify-center items-center flex-col z-10 max-w-2xl mx-auto relative">
        <h1
          className="lg:text-7xl text-orange-600 text-md sm:text-5xl md:text-6xl font-bold lg:mb-6 leading-none mb-2"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Fresh <span className="text-white">and</span> Healthy <br />{" "}
          <spna className="lg:text-5xl text-[12px] ">Food Specialties</spna>
        </h1>
        <p
          className="text-[6px] sm:text-base md:text-lg text-white mb-10 px-4"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
        >
          Variety of fresh and fresh food served just for you, your solution{" "}
          <br className="md:hidden" />
          when hungry in the middle of the night with super fast delivery
        </p>
      </div>
    </div>
  );
};

export default FirstHero;
