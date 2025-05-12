import { useState } from "react";

const menu = [
  { name: "Home", route: "#top" },
  { name: "About Me", route: "#about" },
  { name: "Experience", route: "#experiences" },
  { name: "Portofolio", route: "#projects" },
  { name: "Contact", route: "#contact" },
];

import IconReact from "../icon/IconReact";

export default function RetroNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <IconReact />

        {/* Main Navigation Bar */}
        <nav className="bg-yellow-100 text-black font-mono border-b-4 border-yellow-500 shadow-md px-6 py-4">
          {/* Desktop Navigation (Full Menu) */}
          <ul className="hidden sm:flex space-x-6 text-lg">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.route}
                  className="hover:underline hover:text-blue-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <div className="sm:hidden flex justify-between items-center">
            <button
              className="text-2xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              🍔
            </button>
            <IconReact />
          </div>
        </nav>

        {/* Mobile Slide-In Drawer */}
        <div
          className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white border-r-2 border-yellow-500 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:hidden z-40`}
        >
          <ul className="flex flex-col p-6 space-y-4 text-lg text-black">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.route}
                  className="hover:underline hover:text-blue-700"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay when the drawer is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 sm:hidden z-30"
            onClick={() => setIsOpen(false)} // Close menu on overlay click
          ></div>
        )}
      </div>
    </div>
  );
}
