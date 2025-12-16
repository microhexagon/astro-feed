import Link from "next/link";

export function Herosection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex justify-center items-center px-4 rounded-lg"
      style={{
        backgroundImage: "url('/assets/herosection-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-lg">
          Explore the Cosmos with AstroFeed
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl mt-4 leading-relaxed drop-shadow-lg">
          Your gateway to the wonders of space exploration. Discover the latest
          astronomy news, breathtaking images, and upcoming launch schedules.
        </p>

        <div className="flex justify-center mt-6 drop-shadow-lg">
          <Link href="/news">
            <button className="flex cursor-pointer justify-center items-center bg-blue-400 hover:bg-gray-600 text-white rounded-lg h-10 w-32 hover:scale-110 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

