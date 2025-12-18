// "use client";

// import { useState } from "react";
// import { FiTwitter } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa6";
// import { TiSocialFacebookCircular } from "react-icons/ti";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);

//     alert("Message Sent!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <>
//       <section className="bg-black text-white px-4 py-10 md:px-20">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
//           <p className="text-gray-400 mt-2">We&apos;d love to hear from you!</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className=" space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg self-start"
//           >
//             <div>
//               <label htmlFor="name" className="block mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* 🖼️ Right Side Image */}
//           <div className="relative">
//   <section
//     className="relative h-[620px] bg-cover bg-center flex items-center justify-center px-4 py-6"
//     style={{
//       backgroundImage: "url('/assets/herosection-bg.png')",
//     }}
//   >
//     {/* Dark Overlay */}
//     <div className="absolute inset-0 bg-black/50"></div>

//     {/* Main Content in the Center */}
//     <div className="relative z-10 text-center text-white max-w-2xl">
//       <h1 className="text-4xl mb-4 font-bold drop-shadow-lg">
//         Get in Touch
//       </h1>
//       <h2 className="text-2xl font-semibold drop-shadow-lg mt-2">
//         Explore the Cosmos with AstroFeed
//       </h2>
//       <p className="mt-4 text-lg font-light drop-shadow-lg">
//         Your gateway to the wonders of space exploration. Discover the
//         latest astronomy news, breathtaking images, <br /> and
//         upcoming launch schedules.
//       </p>
//       <p className="font-bold text-2xl mt-2">Address</p>
//       <p>AstroFeed HQ, 123 Galaxy Avenue, Space City, Earth 00042</p>
//       <p className="font-bold text-2xl mt-2">Email</p>
//       <p>contact@astrofeed.com</p>
//     </div>

//     {/* Right Side: Social Icons and Fact Box */}
//     <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6 z-10">
//       <div className="flex flex-col gap-4 pr-1">
//         <a href="#">
//           <FiTwitter className="text-gray-600 h-10 w-10 bg-white rounded-lg p-2 hover:scale-110 transition" />
//         </a>
//         <a href="#">
//           <FaInstagram className="text-gray-600 h-10 w-10 bg-white rounded-lg p-2 hover:scale-110 transition" />
//         </a>
//         <a href="#">
//           <TiSocialFacebookCircular className="text-gray-600 h-10 w-10 bg-white rounded-lg p-2 hover:scale-110 transition" />
//         </a>
//       </div>
//     </div>
//   </section>
// </div>

//         </div>
//       </section>

//     </>
//   );
// }






















"use client";

import { useState } from "react";
import { FiTwitter, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/herosection-bg.png')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300">
            Have questions? We would love to hear from you.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT INFO */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-400 text-sm">
                    AstroFeed HQ <br />
                    123 Galaxy Avenue <br />
                    Space City, Earth 00042
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FiMail size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400 text-sm">
                    contact@astrofeed.com
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FiPhone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <FiTwitter size={20} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <TiSocialFacebookCircular size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
                />

                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition shadow-lg hover:shadow-blue-500/40"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
