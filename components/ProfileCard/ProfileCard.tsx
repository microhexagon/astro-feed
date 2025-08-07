import React from "react";
import Link from "next/link";

interface GitHubLinksProps {
  teamMembers: Array<{
    id: number;
    name: string;
    github?: string; // GitHub link optional ho sakta hai
  }>;
}

const GitHubLinks: React.FC<GitHubLinksProps> = ({ teamMembers }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-center gap-6 flex-wrap">
        {teamMembers.map((member) => (
          member.github && (
            <Link
              key={member.id}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300 text-sm"
              style={{ textDecoration: "none" }}
            >
              GitHub: {member.name}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default GitHubLinks;