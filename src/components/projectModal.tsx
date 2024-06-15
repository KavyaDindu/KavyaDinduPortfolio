import React from "react";
import AnimatedMetric from "./animatedMetric";

export interface Project {
  image: string;
  title: string;
  companyName: string;
  metricValue: number;
  metricDescription: string;
  problem: string;
  solution: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 py-2 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-4 sm:p-5 rounded-lg shadow-2xl flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl max-h-[100vh] relative overflow-auto animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <span className="text-xl md:text-2xl">&times;</span>
        </button>
        <div className="flex flex-col items-center p-1 sm:p-1">
          <div className="flex items-center justify-between w-full mb-2 sm:mb-4">
            <div>
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-[#001b5e]">
                {project.title}
              </h2>
              <h3 className="text-sm sm:text-md md:text-2xl font-semibold text-gray-700">
                {project.companyName}
              </h3>
            </div>
            <AnimatedMetric
              value={project.metricValue}
              description={project.metricDescription}
            />
          </div>
          <div className="w-full mb-2 sm:mb-4 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg"
            />
          </div>
          <div className="w-full mb-2 sm:mb-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#001b5e]">Problem</h4>
            <p className="text-sm sm:text-base md:text-lg">{project.problem}</p>
          </div>
          <div className="w-full">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#001b5e]">Solution</h4>
            <p className="text-sm sm:text-base md:text-lg">{project.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
