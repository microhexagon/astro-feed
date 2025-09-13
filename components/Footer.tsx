"use client";

import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";

type FooterLink = {
  title: string;
  link: string;
};

const footerLinks: FooterLink[] = [
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Privacy Policy", link: "/" },
  { title: "Terms of Service", link: "/" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-8 mb-4 text-sm font-medium">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="hover:text-white transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a href="#" className="hover:text-white transition-colors">
          <FiTwitter />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <TiSocialFacebookCircular />
        </a>
      </div>

      {/* Copyright */}
      <div className="flex justify-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} AstroFeed. All rights reserved.
      </div>
    </footer>
  );
}
