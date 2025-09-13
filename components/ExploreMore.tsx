import Link from 'next/link';

export default function ExploreMore() {
return (
    <div className="mt-16 sm:mt-20 mb-14 px-4 sm:px-10 md:px-20">
      {/* Heading */}
    <div className="font-bold text-xl sm:text-2xl text-center">
        Explore More
    </div>

      {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 mb-20">
        <Link href="/news">
        <button className="bg-blue-400 cursor-pointer hover:bg-gray-600 text-white rounded-lg h-10 w-40 sm:w-44 hover:scale-110 transition duration-300">
            View News
        </button>
        </Link>
        <Link href="/launches">
        <button className="bg-blue-400 cursor-pointer hover:bg-gray-600 text-white rounded-lg h-10 w-40 sm:w-44 hover:scale-110 transition duration-300">
            View Launches
        </button>
        </Link>
    </div>
    </div>
);
}

