import Image from "next/image";
import React from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const ProfileCard = ({ name, role, image }: TeamMember) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300">
      {/* Avatar with Image */}
      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 bg-gray-700">
        <Image
          src={image}
          alt={`${name} profile picture`}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Member Info */}
      <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
};
