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
      image: '/assets/Ethane-carter.png', // Fixed: /assets/ instead of /assests/
      github: 'https://github.com/EthanCarter'
    },
    {
      id: 2,
      name: 'Liam Harper',
      role: 'UX/UX Designer',
      avatar: 'L',
      image: '/assets/liam-harper.png', // Fixed: /assets/ and .png extension
      github: 'https://github.com/LiamHarper'
    },
    {
      id: 3,
      name: 'Olivia Bennett',
      role: 'Content Strategist',
      avatar: 'O',
      image: '/assets/olivia-bennett.png', // Fixed: /assets/ and .png extension
      github: 'https://github.com/OliviaBennett'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-8">About AstroFeed</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            AstroFeed is a platform dedicated to space exploration enthusiasts. Our mission is to provide a comprehensive and 
            engaging experience for users interested in the latest discoveries, missions, and news from the cosmos. We aim to 
            foster a community of space lovers, offering a space to learn, share, and connect.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          
          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300">
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

          {/* GitHub Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://github.com/EthanCarter" 
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm"
            >
              GitHub: Ethan Carter
            </Link>
            <Link 
              href="https://github.com/LiamHarper" 
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm"
            >
              GitHub: Liam Harper
            </Link>
            <Link 
              href="https://github.com/OliviaBennett" 
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm"
            >
              GitHub: Olivia Bennett
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;