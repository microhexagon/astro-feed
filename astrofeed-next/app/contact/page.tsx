'use client';

import Navbar from '../components/Navbar';
import { useState } from 'react';
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";

export default function ContactPage() {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
};

return (
    <>
        <Navbar links={["News", "Launches", "APOD"]} />

        
        <section className="bg-black text-white px-4 py-10 md:px-20">


        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-gray-400 mt-2">We’d love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 📩 Contact Form */}
        <form
            onSubmit={handleSubmit}
            className=" space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg self-start"
        >
            <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
            />
            </div>

            <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
            />
            </div>

            <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
            ></textarea>
            </div>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
            >
                Send Message
            </button>
        </form>

                  {/* 🖼️ Right Side Image */}
        <div className="relative">
        
        
        <section
        className="relative h-[620px] bg-cover bg-center flex items-center justify-center px-4 py-6"
            style={{
            backgroundImage: "url('/assets/herosection-bg.png')",
        }}

        >

          {/* Main Content in the Center */}
            <div className="text-center text-white max-w-2xl">
                <h1 className="text-4xl mb-4 font-bold  drop-shadow-lg "> Get in Touch</h1>
                <h2 className="text-2xl font-semibold  drop-shadow-lg mt-2">Explore the Cosmos with AstroFeed</h2>
                <p className="mt-4 text-lg font-light  drop-shadow-lg">
                Your gateway to the wonders of space exploration. Discover the latest astronomy news,
                breathtaking images, <br /> and upcoming launch schedules.
                </p>
                <p className='font-bold text-2xl mt-2'>Address</p>
                <p>AstroFeed HQ, 123 Galaxy Avenue, Space City, Earth 00042</p>
                <p className='font-bold text-2xl mt-2'>Email</p>
                <p>contact@astrofeed.com</p>
            </div>
        
          {/* Right Side: Social Icons and Fact Box */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6">
            
        
            {/* Social Icons */}
            <div className="flex flex-col gap-4 pr-1">
                <a href="#"><FiTwitter className="text-gray-600 h-10 w-10 bg-white rounded-lg p-2 hover:scale-110 transition" /></a>
                <a href="#"><FaInstagram className="text-gray-600 h-10 w-10 bg-white rounded-lg p-2 hover:scale-110 transition" /></a>
                <a href="#"><TiSocialFacebookCircular className="text-gray-600 h-10 w-10 bg-white rounded-lg p-2 hover:scale-110 transition" /></a>
            </div>
            </div>
        </section>
        </div>


        </div>
    </section>
    </>
);
}
