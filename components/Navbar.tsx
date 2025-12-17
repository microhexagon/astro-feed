"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { NavbarProps } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white px-6 py-4 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <Image
            src="/assets/astrofeed logo navbar.png"
            alt="AstroFeed Logo"
            height={32}
            width={32}
            className="h-8 w-8"
          />
          <h1 className="font-bold text-xl">Astrofeed</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navbarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`hover:text-blue-400 transition-colors duration-200 ${
                pathname === link.link ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}

          {/* Search Icon */}
          <Link
            href="/apod"
            className="bg-gray-800 hover:bg-blue-600 rounded-lg h-9 w-9 flex justify-center items-center transition-colors duration-200"
          >
            <FaSearch className="text-sm" />
          </Link>

          {/* Profile Icon */}
          <Link
            href="/about"
            className="bg-gray-800 hover:bg-blue-600 rounded-lg h-9 w-9 flex justify-center items-center transition-colors duration-200"
          >
            <CgProfile className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/apod" className="hover:text-blue-400 transition">
            <FaSearch />
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            <CgProfile className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl hover:text-blue-400 transition"
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
          {navbarLinks.map((navLink, index) => (
            <Link
              key={index}
              href={navLink.link}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors ${
                pathname === navLink.link ? "bg-blue-600" : ""
              }`}
            >
              {navLink.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}