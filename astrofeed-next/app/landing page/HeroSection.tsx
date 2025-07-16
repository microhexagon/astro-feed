import Link from "next/link";

export default function Herosection() {
    return (
            <section
                    className="relative h-screen bg-cover bg-center flex justify-center items-center px-4 rounded-lg"
                    style={{
                    backgroundImage: "url('/assets/herosection-bg.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0" />
                <div>
                    <h2 className=" font-bold text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-lg">Explore the Cosmos with AstroFeed</h2>
                    <p className="text-white text-base sm:text-lg md:text-xl mt-4 leading-relaxed drop-shadow-lg text-center sm:text-left">
                        <span className="block">
                            Your gateway to the wonders of space exploration. Discover the latest astronomy news, breathtaking images,
                        </span>
                        <span className="block lg:pl-12">
                            and upcoming launch schedules.
                        </span>
                    </p>

                    <div className="flex justify-center m-3 drop-shadow-lg">
                        <Link href="./news">
                        
                            <button className="flex justify-center items-center bg-blue-400  hover:bg-gray-600  text-white rounded-lg h-10 w-28 ">Get Started</button>
                        </Link> 
                    </div>
                </div>
            </section>
    )
}