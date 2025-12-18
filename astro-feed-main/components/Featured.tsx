import Image from "next/image";
import Link from "next/link";

export function Featured() {
  return (
    <section className="bg-black text-white px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
          Featured
        </h2>

        {/* Featured Card - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300">
          
          {/* Left Side - Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full order-1 lg:order-1">
            <Image
              src="/assets/featured-bg-image.png"
              alt="Cosmic Cliffs, Carina Nebula"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="p-6 md:p-8 lg:p-10 xl:p-12 order-2 lg:order-2">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-2 uppercase tracking-wide">
              Astronomy Picture of the Day
            </p>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Cosmic Cliffs, Carina Nebula
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              This breathtaking image captures the edge of a nearby young
              star-forming region called NGC 3324 in the Carina Nebula. The
              &apos;Cosmic Cliffs&apos; reveal previously hidden regions of star
              birth.
            </p>
            
            <Link href="/apod">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                View APOD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}