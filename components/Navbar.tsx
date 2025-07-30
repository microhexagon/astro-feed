"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { NavbarProps } from "@/types";
import Image from "next/image";

const navbarLinks: NavbarProps[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "News", link: "/news" },
  { title: "APOD", link: "/apod" },
  { title: "Launches", link: "/launches" },
  { title: "Contact", link: "/contact" },
];
export function Navbar() {
  // export default function Navbar({ links }: NavbarProps) {

  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-amber-50 px-6 py-4 border-b border-white">
      <div className="flex items-center justify-between flex-wrap">
        {/* 🔹 Logo */}
        <div className="flex items-center space-x-2">
          {/* <img
            src="/assets/astrofeed logo navbar.png"
            alt="logo"
            className="h-4 w-4"
          /> */}
          <Image
            src="/assets/astrofeed logo navbar.png"
            alt="logo"
            className="h-4 w-4"
            height={16}
            width={16}
          />
          <h1 className="font-semibold">
            <Link href="/">Astrofeed</Link>
          </h1>
        </div>

        {/* 🔹 Desktop links (only md and up) */}
        <div className="hidden md:flex items-center space-x-6 mt-2 md:mt-0">
          {navbarLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              {link.title}
            </Link>
          ))}
          {/* Search icon for desktop */}
          <div className="bg-gray-700 rounded-lg h-7 w-7 flex justify-center items-center">
            <FaSearch
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer"
            />
          </div>
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 px-3 py-1 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
          )}
          <div className="bg-gray-700 rounded-lg h-7 w-7 flex justify-center items-center">
            <Link href="/about">
              <CgProfile className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* ✅ Mobile Icons and Hamburger */}
        <div className="flex flex-col md:hidden gap-2">
          {/* Top Row: Icons */}
          <div className="flex items-center gap-3">
            <FaSearch
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer"
            />
            <CgProfile className="h-5 w-5" />
            <GiHamburgerMenu
              className="text-xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          {/* ✅ Conditionally Render Search Input */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
          )}
        </div>
      </div>

      {/* ✅ Dropdown for mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          {navbarLinks.map((navLink, index) => (
            <Link
              key={index}
              href={navLink.link}
              className="text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-200"
            >
              {navLink.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
