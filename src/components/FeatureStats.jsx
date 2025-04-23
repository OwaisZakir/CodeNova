import React from "react";
import { Code, Box, Users, Award } from "lucide-react"; // Import Lucide icons

const blogStats = [
  {
    icon: <Code size={40} className="text-cyan-400" />,
    title: "JavaScript",
    label: "Most Popular Language",
  },
  {
    icon: <Box size={40} className="text-cyan-400" />,
    title: "React",
    label: "Trending Framework",
  },
  {
    icon: <Award size={40} className="text-cyan-400" />,
    title: "100+",
    label: "Tutorials",
  },
  {
    icon: <Users size={40} className="text-cyan-400" />,
    title: "5k+",
    label: "Community Members",
  },
];

const FeatureStats = () => {
  return (
    <section className="pt-2 max-w-6xl mx-auto" aria-label="Platform Features and Stats">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogStats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-gray-700 backdrop-blur-md"
            >
              <div className="flex justify-center mb-4">
                <div className="transition-all transform hover:scale-110">
                  {item.icon}
                </div>
              </div>
              <h5 className="text-lg font-semibold text-gray-100">
                <span className="block text-cyan-400 text-2xl font-bold">
                  {item.title}
                </span>
                <span className="text-sm text-gray-300">{item.label}</span>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
