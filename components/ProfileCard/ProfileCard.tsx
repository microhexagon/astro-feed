import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  isTeacher?: boolean; 
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image, isTeacher }) => {
  return (
    <div className={`
        relative flex flex-col justify-end p-6 bg-gray-800 rounded-lg
        transition-all duration-300 transform
        border-2 border-blue-500 shadow-xl shadow-blue-500/50 hover:scale-105
    `}>
      {isTeacher && (
        <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
          Teacher
        </span>
      )}
      <div className="text-center mb-4">
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;


