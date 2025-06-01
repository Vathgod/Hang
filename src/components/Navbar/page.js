"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinksData = [
  { href: "/#home", text: "Home" },
  { href: "/#famos", text: "Famous" },
  { href: "/#menu", text: "Menu" },
  { href: "/about", text: "About" },
  { href: "/order", text: "contactOrder" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-orange-600 shadow-md sticky top-0 z-30">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <Link href="/" className="text-2xl lg:text-5xl font-bold text-white">
            vathGOd
          </Link>

          <div className="hidden md:flex md:space-x-6">
            {navLinksData.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-white text-md lg:text-xl hover:text-orange-300 transition"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-white p-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ease-in-out md:hidden
                    ${
                      isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      <div
        id="mobile-menu-panel"
        className={`fixed top-0 left-0 h-full bg-orange-500 shadow-xl z-50
                    transform transition-transform duration-300 ease-in-out md:hidden
                    w-3/4 max-w-xs sm:max-w-sm 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    flex flex-col`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex items-center justify-between p-4 border-b border-orange-400">
          <h2
            id="mobile-menu-title"
            className="text-xl font-semibold text-white"
          >
            Menu
          </h2>
          <button
            onClick={closeMenu}
            aria-label="Close Menu"
            className="text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow p-4 space-y-3 overflow-y-auto">
          {navLinksData.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="block py-2 px-3 rounded-md text-white text-lg hover:bg-orange-700 transition-colors"
              onClick={closeMenu}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-orange-400 mt-auto">
          <p className="text-xs text-center text-orange-100">
            vathGOd &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}
