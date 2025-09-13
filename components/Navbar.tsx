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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-amber-50 px-6 py-4 border-b border-white">
      <div className="flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/astrofeed logo navbar.png"
            alt="logo"
            height={28}
            width={28}
            className="h-7 w-7"
          />
          <h1 className="font-semibold text-lg">
            <Link href="/">Astrofeed</Link>
          </h1>
        </div>

        {/* 🔹 Desktop links (only md and up) */}
        <div className="hidden md:flex items-center space-x-6">
          {navbarLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              {link.title}
            </Link>
          ))}

          {/* Search icon → APOD page */}
          <div className="bg-gray-700 rounded-lg h-7 w-7 flex justify-center items-center">
            <Link href="/apod">
              <FaSearch className="cursor-pointer" />
            </Link>
          </div>

          {/* Profile icon */}
          <div className="bg-gray-700 rounded-lg h-7 w-7 flex justify-center items-center">
            <Link href="/about">
              <CgProfile className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* ✅ Mobile Icons and Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/apod">
            <FaSearch className="cursor-pointer" />
          </Link>
          <Link href="/about">
            <CgProfile className="h-5 w-5" />
          </Link>
          <GiHamburgerMenu
            className="text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
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

