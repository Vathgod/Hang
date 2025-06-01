// app/components/Footer.js
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-gray-700">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-2">
            🍜 FoodFinder
          </h2>
          <p className="text-sm">
            Discover and enjoy the best Cambodian and international food
            recipes. Made with love and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="hover:text-orange-600">
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-600">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 text-xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-orange-200 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} FoodFinder. All rights reserved.
      </div>
    </footer>
  );
}
