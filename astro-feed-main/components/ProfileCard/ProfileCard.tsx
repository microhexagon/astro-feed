import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  github?: string; 
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image, github }) => {
  return (
    <div className="relative group p-[2px] rounded-2xl transition-all duration-300 hover:scale-105">
      {/* Blue Glow Effect Layer */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
      
      {/* Card Content */}
      <div className="relative bg-slate-900 border border-blue-500/30 p-6 rounded-2xl text-center flex flex-col items-center shadow-2xl shadow-blue-500/20">
        
        {/* Avatar with Blue Glow */}
        <div className="relative w-28 h-28 mb-4">
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-sm opacity-50"></div>
          <Image
            src={image}
            alt={name}
            fill
            className="relative rounded-full object-cover border-2 border-blue-400/50"
          />
        </div>
        
        {/* Text Section */}
        <h3 className="text-xl font-bold mb-1 text-white tracking-tight">{name}</h3>
        <p className="text-blue-300 font-medium text-sm mb-4 uppercase tracking-wider">{role}</p>

        {/* GitHub Link Styled as Blue Neon Button */}
        {github && (
          <Link
            href={github}
            target="_blank"
            className="mt-2 px-5 py-2 bg-blue-600/10 border border-blue-500/50 text-blue-200 rounded-full text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-inner"
          >
            GitHub Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;