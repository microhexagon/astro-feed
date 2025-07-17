import React from "react"
import Navbar from "../components/Navbar";
export default function PictureOfTheDayPage() {
  return(
<main className="container mx-auto px-4 py-8 max-w-4xl bg-slate-900">
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">Astronomy Picture of the Day</h1>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="https://via.placeholder.com/800x450" alt="Cosmic Cliffs and the Carina Nebula" className="w-full h-auto object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Cosmic Cliffs and the Carina Nebula</h2>
            <p className="text-gray-400 text-sm mb-4">2024-07-26</p>
            <p className="text-gray-300 leading-relaxed">
              This is a portion of the Carina Nebula, a vast star-forming region in the Milky Way. The image reveals a landscape of star
              formation at the edge of the nebula, with towering pillars of gas and dust sculpted by the intense radiation from
              nearby massive stars. The 'Cosmic Cliffs' are the bright, undulating edge of the nebula, showcasing the dynamic
              interplay between stellar winds and the surrounding interstellar medium. The colors represent different elements: blue
              for oxygen, green for hydrogen, and red for sulfur. This detailed view highlights the complex structures and processes
              within the nebula, offering insights into the birth and evolution of stars.
            </p>
          </div>
        </div>
      </main>
  );


    
}