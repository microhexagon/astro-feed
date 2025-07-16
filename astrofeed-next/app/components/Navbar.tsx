'use client';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {
    links:string[];
}

export default function Navbar({ links }: NavbarProps ) {
const [showSearch, setShowSearch] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className="bg-gray-800 text-amber-50 px-6 py-4 border-b border-white">
        <div className="flex items-center justify-between flex-wrap">
          {/* 🔹 Logo */}
        <div className="flex items-center space-x-2">
            <img
                src="/assets/astrofeed logo navbar.png"
                alt="logo"
                className="h-4 w-4"
            />
            <h1 className="font-semibold">Astrofeed</h1>
        </div>

        {/* 🔹 Desktop links (only md and up) */}
        <div className="hidden md:flex items-center space-x-6 mt-2 md:mt-0">
                {/* <a href="">APOD</a>
                <a href="">News</a>
                <a href="">Launches</a>
                <a href="">Home</a>
                <a href="">Gallery</a>
                <a href="">Events</a>
                <a href="">Blogs</a>
                <a href="">Reports</a>
                <a href="">About</a> */}
                
                {links.map(( link, index)=> (
                    <a key={index} href="">{link}</a>
                ))}
                




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
            <a href="#"><CgProfile className="h-5 w-5" /></a>
        </div>
        </div>

        {/* ✅ Mobile Icons and Hamburger (only shown on sm screens) */}
        <div className="flex items-center gap-3 md:hidden">
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
    </div>

      {/* ✅ Dropdown for mobile menu */}
        {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
            <a href="">APOD</a>
            <a href="">News</a>
            <a href="">Launches</a>
        </div>
    )}
    </nav>
);
}
