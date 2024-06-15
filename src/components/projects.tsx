import React, { useState, useEffect } from "react";
import { Carousel } from '@mantine/carousel';
import testImage from "/assets/ProjectExample.png";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import ProjectItem from "./projectItem";
import ProjectModal from "./projectModal";
import { rem } from "@mantine/core";

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
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Simulate fetching project data
    const fetchedProjects: Project[] = [
      {
        image: testImage,
        title: "Project 1",
        companyName: "Company 1",
        metricValue: 30,
        metricDescription: "Increase in Revenue",
        problem: "Lorem ipsum dolor sit amet...",
        solution: "Lorem ipsum dolor sit amet...",
      },
      {
        image: testImage,
        title: "Project 2",
        companyName: "Company 2",
        metricValue: 40,
        metricDescription: "Increase in User Engagement",
        problem: "Lorem ipsum dolor sit amet...",
        solution: "Lorem ipsum dolor sit amet...",
      },
      // More projects...
    ];
    setProjects(fetchedProjects);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="projects" className="max-w-[1040px] m-auto px-4 py-16 md:pl-20">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Projects
      </h1>
      {projects.length > 0 ? (
        <Carousel
          withIndicators
          withControls
          controlsOffset="xl"
          controlSize={40}
                nextControlIcon={<IconArrowRight style={{ width: rem(26), height: rem(26) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(26), height: rem(26) }} />}
          slideSize="80%"
          slideGap="lg"
            styles={{
    control: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // This is not a Tailwind class, applied via inline style for specific color.
      borderRadius: '9999px', // Full rounded corners.
      width: '50px', // Setting width if needed.
      height: '50px', // Setting height if needed.
      display: 'flex', // Using flex to center the icon inside.
      alignItems: 'center', // Center items vertically.
      justifyContent: 'center', // Center items horizontally.
      color: 'white', // Control icon color.
    },
  }}
        >
          {projects.map((project) => (
            <Carousel.Slide key={project.title}>
              <ProjectItem
                image={project.image}
                title={project.title}
                description={project.companyName}
                onMoreInfo={() => setSelectedProject(project)}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <p>Loading projects...</p>
      )}
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
