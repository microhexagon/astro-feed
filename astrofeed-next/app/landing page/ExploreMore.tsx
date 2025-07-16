import Link from 'next/link';
export default function ExploreMore() {
return (
    <div className="mt-10 mb-14 px-4 sm:px-10 md:px-20">
        <div className="font-bold text-xl sm:text-2xl text-center">
            ExploreMore
        </div >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 mb-20">
            <Link href="./news">
                <button className="bg-blue-400 hover:bg-gray-600 text-white rounded-lg h-10 w-full sm:w-44">
                    View News
                </button>
            </Link>
            <Link href="">
                
                <button className="bg-blue-400 hover:bg-gray-600 text-white rounded-lg h-10 w-full sm:w-44">
                    viwe Launches
                </button>
            </Link>
        </div>
    </div>
);
}
