import React, { useState, useEffect } from "react";
import { Carousel } from '@mantine/carousel';
import testImage from "/assets/ProjectExample.png";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import ProjectItem from "./projectItem";
import ProjectModal, { Project } from "./projectModal";
import { rem } from "@mantine/core";



const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
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
  }, []); 

  return (
    <div id="projects" className="max-w-[1040px] m-auto px-4 py-0 md:pl-20">
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      borderRadius: '9999px',
      width: '50px', 
      height: '50px', 
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
      color: 'white', 
    },
    indicator:{
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    }
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
