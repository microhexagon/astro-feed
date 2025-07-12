'use client';
import { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
export default function Footer() {
    
    return (
            <footer>
                <div className="flex justify-center gap-22 m-3 text-gray-500 font-medium ">
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Term of services</a>
                </div>
                <div className="flex justify-center gap-4 text-gray-500 m-3 font-medium ">
                    <a href=""><FiTwitter className="" /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><TiSocialFacebookCircular /></a>
                </div>
                <div className="flex justify-center text-gray-500 mt-3 mb-3">
                    @2024 AstroFeed. All rights reserved.
                </div>
            </footer>
    )
}