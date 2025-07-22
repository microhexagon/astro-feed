import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ethan Carter',
      role: 'Software Engineer',
      avatar: 'E',
      image: '/assets/Ethane-carter.png', 
      github: 'https://github.com/EthanCarter'
    },
    {
      id: 2,
      name: 'Liam Harper',
      role: 'UX/UX Designer',
      avatar: 'L',
      image: '/assets/liam-harper.png', 
      github: 'https://github.com/LiamHarper'
    },
    {
      id: 3,
      name: 'Olivia Bennett',
      role: 'Content Strategist',
      avatar: 'O',
      image: '/assets/olivia-bennett.png', 
      github: 'https://github.com/OliviaBennett'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* About Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-8">About AstroFeed</h1>
          <p className="text-white text-lg leading-relaxed">
            AstroFeed is a platform dedicated to space exploration enthusiasts. Our mission is to provide a comprehensive and 
            engaging experience for users interested in the latest discoveries, missions, and news from the cosmos. We aim to 
            foster a community of space lovers, offering a space to learn, share, and connect.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-left">Our Team</h2>
          
          {/*  Cards  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-slate-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300">
                {/* Avatar with Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 bg-gray-700">
                  <Image
                    src={member.image}
                    alt={`${member.name} profile picture`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Member Info */}
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
          <div>

         {/* GitHub section */}
<div className="flex flex-col items-center gap-4">
  <div className="flex justify-center gap-6">
    <Link
      href=" https://github.com/EthanCarter "
      target="_blank"
      className="bg-slate-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm "
      style={{ textDecoration: 'none' }}
    >
      GitHub: Ethan Carter
    </Link>
    <Link
      href="https://github.com/LiamHarper"
      target="_blank"
      className="bg-slate-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm"
      style={{ textDecoration: 'none' }}
    >
      GitHub: Liam Harper
    </Link>
  </div>
  
  <div className="flex justify-center">
    <Link
      href="https://github.com/OliviaBennett"
      target="_blank"
      className="bg-slate-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm "
      style={{ textDecoration: 'none' }}
    >
      GitHub: Olivia Bennett
    </Link>
  </div>
</div>








          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;