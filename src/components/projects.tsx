import React, { useState } from "react";
import testImage from "/assets/ProjectExample.png";
import ProjectItem from "./projectItem";
import ProjectModal from "./projectModal";

interface Project {
  image: string;
  title: string;
  companyName: string;
  metricValue: number;
  metricDescription: string;
  problem: string;
  solution: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      image: testImage,
      title: "Project 1",
      companyName: "Company 1",
      metricValue: 30,
      metricDescription: "Increase in Revenue",
      problem: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
      solution: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    },
    {
      image: testImage,
      title: "Project 2",
      companyName: "Company 2",
      metricValue: 40,
      metricDescription: "Increase in User Engagement",
      problem: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
      solution: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    },
    // More projects...
  ];

  return (
    <div id="projects" className="max-w-[1040px] m-auto px-4 py-16 md:pl-20">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.companyName}
            onMoreInfo={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
