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
  { title: "Privacy Policy Link", link: "/" },
  { title: "Terms of Service", link: "/" },
];

export function Footer() {
  // DRY (Don't Repeat Yourself) principle: Use a single array for links

  return (
    <footer className=" bg-gray-800 ">
      <div className="flex flex-col sm:flex-col gap-3 md:flex-row lg:flex-row justify-center lg:gap-22 md:gap-8 m-3 text-gray-500 font-medium ">
        {/* <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/PrivacyLinkPolicy">PrivacyLinkPolicy</Link>
        <Link href="/Term ofLinkservices">Term ofLinkservices</Link> */}
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.link}>
            {link.title}
          </Link>
        ))}
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
