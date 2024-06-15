import React from "react";

interface ProjectItemProps {
  image: string;
  title: string;
  description: string;
  onMoreInfo: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  image,
  title,
  description,
  onMoreInfo,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-blue-900/70 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{description}</p>
        <button
          onClick={onMoreInfo}
          className="p-3 rounded-lg bg-white text-gray-700 font-bold text-lg"
        >
          More info
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
