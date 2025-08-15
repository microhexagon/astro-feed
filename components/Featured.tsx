import Image from "next/image";
import Link from "next/link";
export default function Featured() {
  return (
    <div className="mt-10 mb-10 pt-5 pb-5 px-4">
      <h2 className="text-2xl font-bold">Featured</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 items-center">
        <div>
          <Image
            src="/assets/featured bg imag.png"
            alt="bg"
            className="h-64 md:h-80 w-full object-cover rounded-lg"
            height={64}
            width={64}
          />
        </div>

        <div className="text-left">
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-lg">
            <span className="block font-light text-gray-400">
              Astronomy Picture of the Day
            </span>
            <span className="block font-semibold">
              Cosmic Cliffs, Carina Nebula
            </span>
            <span className="block font-light text-gray-400 mt-2">
              This breathtaking image captures the edge of a nearby young
              star-forming region called NGC 3324 in the Carina Nebula. The
              &apos;Cosmic Cliffs&apos; reveal previously hidden regions of star birth.
            </span>
          </p>

          <div className="flex justify-end mt-4">
            <Link href="/apod">
              <button className="bg-blue-400 hover:bg-gray-600 text-white rounded-lg h-10 w-44  hover:scale-110 transition">
                View APOD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
