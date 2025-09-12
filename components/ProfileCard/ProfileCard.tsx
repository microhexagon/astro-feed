import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define the interface for  props 
interface ProfileCardProps {
  name: string;
  post:string;
  role: string;
  image: string;
  github?: string; 
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, post, role, image, github }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg text-center flex flex-col items-center">
      <div className="relative w-24 h-24 mb-4">
        {/* Use the image a */}
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      {/* Use the name and role props */}
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-400 mb-4">{role}</p>
      {/* Conditionally render the GitHub link if the prop exists */}
      {github && (
        <Link
          href={github}
          target="_blank"
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
        >
          GitHub
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;