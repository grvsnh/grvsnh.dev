import type React from "react";
import InternshipFile from "@/components/portfolio/cabinet-files/internship-file";
import UniversityFile from "./cabinet-files/university-file";
import HighSchoolXIIFile from "./cabinet-files/highschool-xii-file";
import HighSchoolXFile from "./cabinet-files/highschool-x-file";
import SkillsFile from "./cabinet-files/skills-file";
import AielyFile from "./cabinet-files/aiely-file";
import BrainScanFile from "./cabinet-files/brainscan-file";
import F1File from "./cabinet-files/f1-file";
import PhotoBoothFile from "./cabinet-files/photobooth-file";
import CertificationsFile from "./cabinet-files/certifications-file";

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
        title: "Education - University",
        content: <UniversityFile />,
    },
    {
        tabLocation: 2,
        title: "Education - Senior High",
        content: <HighSchoolXIIFile />,
    },
    {
        tabLocation: 2,
        title: "Education - Secondary",
        content: <HighSchoolXFile />,
    },
    {
        tabLocation: 2,
        title: "Certifications",
        content: <CertificationsFile />,
    },
    {
        tabLocation: 2,
        title: "Experience - Web Dev Intern",
        content: <InternshipFile />,
    },
    {
        tabLocation: 2,
        title: "Skills",
        content: <SkillsFile />,
    },
    {
        tabLocation: 2,
        title: "Project - Aiely AI",
        content: <AielyFile />,
    },
    {
        tabLocation: 2,
        title: "Project - BrainScan",
        content: <BrainScanFile />,
    },
    {
        tabLocation: 2,
        title: "Project - F1 Strategy",
        content: <F1File />,
    },
    {
        tabLocation: 2,
        title: "Project - PhotoBooth",
        content: <PhotoBoothFile />,
    },
];

export default cabinetLayout;
