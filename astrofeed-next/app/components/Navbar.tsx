'use client';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <nav className=" bg-gray-800 text-amber-50  px-6 py-4 border-b border-white">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <img src="/assets/astrofeed logo navbar.png" alt="logo" className="h-4 w-4" />
                <h1 className="font-semibold">Astrofeed</h1>
            </div>
            <div className="flex space-x-6">
                <a href="">APOD</a>
                <a href="">News</a>
                <a href="">Launches</a>
                {/* search icon */}
                <div  className="bg-gray-700 rounded-lg h-7 w-7 flex justify-center items-center">
                <FaSearch
                    onClick={() => setShowSearch(!showSearch)}
                    />
                </div>    
                    {showSearch && (
            <input
                type="text"
                placeholder="Search..."
                className="ml-2 px-3 py-1 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
            )}
            {/* profile icon*/}
            <div className="bg-gray-700 rounded-lg h-7 w-7 flex justify-center items-center">
                <a href="#"><CgProfile className=" h-5 w-5"/></a>
            </div>
                
            </div>
            </div>
        </nav>
    )
}