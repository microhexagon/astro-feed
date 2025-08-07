import React from "react";
import Link from "next/link"; 
import Image from "next/image"; 
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { teamMembers } from "@/data";
import GitHubLinks from "@/components/GithubLinks/GithubLinks";

const AboutPage = () => {
  return (
    <main className="min-h-screen text-white bg-gray-900 font-sans">
      <div className="container mx-auto px-6 py-12">
        {/* About Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-8 text-left">About AstroFeed</h1>
          <p className="text-white text-lg leading-relaxed ">
            AstroFeed is a platform dedicated to space exploration enthusiasts.
            Our mission is to provide a comprehensive and engaging experience
            for users interested in the latest discoveries, missions, and news
            from the cosmos. We aim to foster a community of space lovers,
            offering a space to learn, share, and connect.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member) => (
              // ProfileCard component
              <ProfileCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>

          <GitHubLinks teamMembers={teamMembers} />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
