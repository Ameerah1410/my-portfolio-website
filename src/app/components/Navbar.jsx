"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const NavLink = ({ href, title, scroll = true }) => {
    const handleClick = (e) => {
      if (scroll) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    return (
      <Link
        href={href}
        onClick={handleClick}
        className="block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0
        hover:text-white"
      >
        {title}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-90 right-0 z-10 bg-[#121212] bg-opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            <li>
              <NavLink href="/" title="Home" scroll={false} />
            </li>
            <li>
              <NavLink href="#about" title="About" scroll={false} />
            </li>
            <li>
              <NavLink href="#projects" title="Projects" scroll={false} />
            </li>
            <li>
              <NavLink href="#contact" title="Contact" scroll={false} />
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
