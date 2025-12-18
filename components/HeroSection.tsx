import Link from "next/link";

export function Herosection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex justify-center items-center px-4"
      style={{
        backgroundImage: "url('/assets/herosection-bg.png')",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-0" />

      {/* Animated stars effect (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl mb-6 animate-fade-in">
          Explore the Cosmos with AstroFeed
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl md:text-2xl mt-6 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
          Your gateway to the wonders of space exploration. Discover the latest
          astronomy news, breathtaking images, and upcoming launch schedules.
        </p>

        <div className="flex justify-center mt-10">
          <Link href="/news">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}