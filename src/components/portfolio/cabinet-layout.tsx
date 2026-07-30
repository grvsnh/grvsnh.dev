import type React from "react";
import EducationFile from "./cabinet-files/education-file";
import CertificationsFile from "./cabinet-files/certifications-file";
import InternshipFile from "@/components/portfolio/cabinet-files/internship-file";
import SkillsFile from "./cabinet-files/skills-file";
import ProjectsFile from "./cabinet-files/projects-file";

export type File = {
    tabLocation: 0 | 1 | 2;
    isDivider?: boolean;
    title: string;
    content: React.ReactNode;
};

export const loremIpsum =
    "Full-Stack & AI Software Engineer based in Bangalore, IN with experience in distributed systems, machine learning, web graphics, and microservices.";

const cabinetLayout: File[] = [
    {
        tabLocation: 2,
        title: "Education",
        content: <EducationFile />,
    },
    {
        tabLocation: 2,
        title: "Certifications",
        content: <CertificationsFile />,
    },
    {
        tabLocation: 2,
        title: "Experience",
        content: <InternshipFile />,
    },
    {
        tabLocation: 2,
        title: "Skills",
        content: <SkillsFile />,
    },
    {
        tabLocation: 2,
        title: "Projects",
        content: <ProjectsFile />,
    },
];

export default cabinetLayout;
