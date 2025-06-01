import Link from "next/link";

export default function AboutPage() {
  const branches = [
    {
      name: "Phnom Penh Branch",
      address: "123 Sisowath Quay, Phnom Penh",
      phone: "+855 12 345 678",
      image: "../../../imageCon/colap/c6.png",
    },
    {
      name: "Siem Reap Branch",
      address: "45 Pub Street, Siem Reap",
      phone: "+855 98 765 432",

      image: "../../../imageCon/colap/c7.png",
    },
    {
      name: "Battambang Branch",
      address: "789 Main St, Battambang",
      phone: "+855 23 456 789",

      image: "../../../imageCon/colap/c8.png",
    },
  ];

  const partners = [
    { name: "Partner 1", logo: "../../../imageCon/colap/c1.png" },
    { name: "Partner 2", logo: "../../../imageCon/colap/c2.png" },
    { name: "Partner 3", logo: "../../../imageCon/colap/c3.png" },
    { name: "Partner 4", logo: "../../../imageCon/colap/c4.png" },
    { name: "Partner 5", logo: "../../../imageCon/colap/c5.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr  bg-[#08071f] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="sm:text-6xl text-2xl font-extrabold  sm:mb-16 text-center tracking-wide text-orange-600 text-gradient bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
          About Us
        </h1>

        {/* Intro */}

        {/* Introduction */}
        <section className="mb-12mr-96   rounded-lg shadow-md p-10">
          <p className="sm:text-xl text-[12px] leading-relaxed text-center">
            Welcome <strong className="text-orange-600">Norvath </strong> we
            believe that every meal should tell a story. Our journey began with
            a passion for authentic cooking and a dream to share the rich
            flavors of our heritage with the community. What started as a humble
            idea has grown into a welcoming restaurant where culture, comfort,
            and cuisine come together. Our philosophy is rooted in three simple
            values: cook with passion, serve with heart, and treat every guest
            like family. We use only the finest ingredients—fresh, local, and
            carefully selected—to create dishes that reflect both tradition and
            creativity. Every plate is prepared with care, capturing the warmth
            and soul of home-cooked meals. Whether you’re craving a comforting
            dish from your childhood or looking to discover something new,
            Norvath offers a menu that celebrates flavor, freshness, and
            culture. Step inside and you’ll find not just a restaurant, but a
            place filled with warmth, smiles, and unforgettable experiences. We
            are proud to be part of your dining journey. Thank you for choosing
            <strong className="text-orange-600">Norvath </strong> we look
            forward to welcoming you, feeding your soul, and making every visit
            special.
          </p>
        </section>
        {/* <section className="mb-12mr-96   rounded-lg shadow-md p-10">
          <p className="sm:text-xl text-[12px] leading-relaxed text-start">
            Welcome to <strong className="text-orange-600">Norvath</strong>,
            where every dish tells a story. Located in the heart of Cambodia,
            our restaurant is more than just a place to eat — it's where
            flavors, culture, and hospitality come together to create an
            unforgettable dining experience.
          </p>
        </section> */}

        {/* Our Story */}
        {/* <section className="mb-12 sm:mr-96 mt-5  bg-[#ffffff09] text-start rounded-lg shadow-md p-10 max-w-4xl mx-auto">
          <h2 className="sm:text-3xl text-xl font-semibold mb-5 text-orange-600 ">
            Our Story
          </h2>
          <p className="sm:text-lg text-[12px] leading-relaxed">
            text-white Founded in{" "}
            <strong className="text-orange-600">[2025]</strong>, we started as a
            small family kitchen with a dream to bring authentic Khmer dishes to
            our community. Over time, we've grown into a beloved local spot
            where both tradition and innovation are served daily.
          </p>
        </section> */}

        {/* Our Philosophy */}
        {/* <section className="mb-12 text-white text-start sm:mr-96 bg-[#ffffff09] rounded-lg shadow-md p-10 max-w-4xl mx-auto">
          <h2 className="sm:text-3xl text-xl font-semibold mb-5 text-orange-600 ">
            Our Philosophy
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[12px] sm:text-lg  ">
            <li>🍃 Fresh, locally-sourced ingredients</li>
            <li>👩‍🍳 Recipes passed down through generations</li>
            <li>❤️ Warm service that makes you feel at home</li>
          </ul>
        </section> */}

        {/* What We Offer */}
        {/* <section className="mb-12 text-start sm:mr-96 text-white bg-[#ffffff09] rounded-lg shadow-sm p-10 max-w-4xl mx-auto">
          <h2 className="sm:text-3xl text-xl font-semibold mb-5 text-orange-600 ">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[12px] sm:text-lg  ">
            <li>✅ Authentic Khmer cuisine</li>
            <li>✅ Vegetarian and vegan-friendly options</li>
            <li>✅ Dine-in, takeaway, and online ordering</li>
            <li>✅ Catering for events and celebrations</li>
          </ul>
        </section> */}

        {/* Branches - Modern Card with Image */}
        <section className="mb-24">
          <h2 className="sm:text-5xl text-3xl font-bold mb-10 text-center text-indigo-700 drop-shadow-lg">
            Our Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 hover:shadow-sm">
            {branches.map(({ name, address, phone, image }) => (
              <div
                key={name}
                className="relative rounded-xl shadow-2xl overflow-hidden group cursor-pointer transition-transform transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-64 object-cover brightness-90 group-hover:brightness-75 transition"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                  <p className="flex items-center gap-2 mb-1 text-sm">
                    <svg
                      className="w-5 h-5 text-indigo-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 2.828l4.243 4.243a8 8 0 11-11.314-11.314 8 8 0 0111.314 11.314z"
                      />
                    </svg>
                    {address}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-5 h-5 text-indigo-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13v6a3 3 0 003 3h4a3 3 0 003-3v-6M7 13h10"
                      />
                    </svg>
                    {phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location Map with fancy wrapper */}
        <section className="mb-16 max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="sm:text-4xl text-xl font-bold mb-6 text-indigo-700 text-center">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow-md">
            <iframe
              // src="https://maps.app.goo.gl/fUz9j2KVFM5hi5dc7"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.0974062422383!2d104.94530030866241!3d11.520455877746938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310957ea49e6e36d%3A0x4c9966ca73b28102!2sProm%20Socheat!5e0!3m2!1skm!2skh!4v1748515697710!5m2!1skm!2skh"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.852379718184!2d104.90970101482905!3d11.565365791850337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095134a3d66d15%3A0x32c1c0d52b36a9d7!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1695426037859!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Restaurant Location Map"
            />
          </div>
          <p className="text-center text-gray-700 mt-4">
            123 Sisowath Quay, Phnom Penh, Cambodia
          </p>
        </section>

        {/* Collaborations - Circular Logos with hover scale */}
        <section className="sm:mb-28 mb-14 max-w-6xl mx-auto text-center">
          <h2 className="sm:text-3xl text-2xl font-bold mb-5 sm:mb-12 text-orange-600 drop-shadow-md">
            Our Collaborations
          </h2>
          <div className="flex flex-wrap justify-center sm:gap-12 gap-5">
            {partners.map(({ name, logo }) => (
              <div
                key={name}
                className="w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl hover:scale-110 transition cursor-pointer"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Back to home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block sm:px-14 sm:py-4 px-8 py-3 bg-orange-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-white hover:text-orange-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
