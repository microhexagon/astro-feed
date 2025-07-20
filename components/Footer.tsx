"use client";
import { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:flex-col gap-3 md:flex-row lg:flex-row justify-center lg:gap-22 md:gap-8 m-3 text-gray-500 font-medium ">
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Privacy Policy</a>
        <a href="">Term of services</a>
      </div>
      <div className="flex justify-center gap-4 text-gray-500 m-3 font-medium ">
        <a href="">
          <FiTwitter className="" />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <TiSocialFacebookCircular />
        </a>
      </div>
      <div className="flex justify-center text-gray-500 mt-3 mb-3">
        &copy; {new Date().getFullYear()} AstroFeed. All rights reserved.
      </div>
    </footer>
  );
}
