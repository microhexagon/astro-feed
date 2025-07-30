"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
interface NasaImage {
  url: string;
  title: string;
  explanation: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NasaImage[]>([]);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=NXASSRC6pYR7BjSZMlaXob2dfyBV9Siaiw73vCfA&count=6"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-10 pr-20 pb-10 pl-20 bg-gray-800 text-white">
      <h2 className="font-bold text-3xl mb-8">Space News</h2>

      <div className="flex flex-col gap-8">
        {news.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800  shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <Image
              src={card.url}
              alt={card.title}
              className="bg-gray-800 w-full md:w-1/2 h-64 object-cover rounded-xl"
              fill
            />

            {/* Text Section */}
            <div className="p-6 flex flex-col justify-center w-full md:w-1/2 bg-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">{card.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
