'use client';
import { IoIosSearch } from "react-icons/io";
export default function Navbar() {
    return (
        <nav className="bg-[#00032F] text-amber-50  px-6 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <img src="/assets/astrofeed logo navbar.png" alt="logo" className="h-3 w-3" />
                <h1 className="font-semibold">Astrofeed</h1>
            </div>
            <div className="space-x-6">
                <a href="">APOD</a>
                <a href="">News</a>
                <a href="">Launches</a>
                
                
            </div>
            </div>
        </nav>
    )
}