import Link from "next/link";

export function ExploreMore() {
return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-12 md:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto text-center">
    
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 lg:mb-16">
            Explore More
        </h2>

        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center max-w-2xl mx-auto">
        
        
        <Link href="/news" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto min-w-[200px] px-8 md:px-10 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
            View News
            </button>
        </Link>

        
        <Link href="/launches" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto min-w-[200px] px-8 md:px-10 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                View Launches
            </button>
        </Link>
        </div>
    </div>
    </section>
);
}