'use client';

import Navbar from '../components/Navbar';
import { useState } from 'react';

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

    // 🔄 Optional: Hook your API here
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
};

return (
    <>
        <Navbar links={["News", "Blogs", "APOD"]} />

        <section className="min-h-screen bg-black text-white px-4 py-10 md:px-20">
        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-gray-400 mt-2">We’d love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 📩 Contact Form */}
        <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg"
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
        <div className="">
            <img src="/public/assets/contact bg-1.jpg" alt="bg" />
        
        </div>
        </div>
    </section>
    </>
);
}
