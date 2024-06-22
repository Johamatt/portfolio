import { Project } from "@/types";

export const techStack = [
  {
    id: 1,
    name: "Java",
    designation: "Experience: 5 years",
    image: "/java-original.svg",
    className: "bg-white",
  },
  {
    id: 2,
    name: "Spring Boot",
    designation: "Experience: 4 years",
    image: "/spring-original.svg",
    className: "bg-white",
  },
  {
    id: 3,
    name: "JavaScript",
    designation: "Experience: 4 years",
    image: "/javascript-original.svg",
    className: "bg-yellow",
  },
  {
    id: 4,
    name: "TypeScript",
    designation: "Experience: 2 years",
    image: "/typescript-original.svg",
    className: "bg-white",
  },
  {
    id: 5,
    name: "React",
    designation: "Experience: 4 years",
    image: "/react-original.svg",
    className: "bg-black",
  },
  {
    id: 6,
    name: "PostgreSQL",
    designation: "Experience: 2 years",
    image: "/postgresql-original.svg",
    className: "bg-white-200",
  },
];

export const projects: Array<Project> = [
  {
    id: 1,
    title: "MapRoam",
    description:
      "An application with an Android UI where users can collect points by visiting specific locations, featuring map-pin clustering. The database used is PostGIS, which can be initialized in the backend with any GeoJSON file. Includes authentication.",
    img: "/MapRoam1.png",
    iconList: [
      "/typescript.svg",
      "/nestjs.svg",
      "/kotlin.svg",
      "/postgresql.svg",
      "/googlecloud.svg",
    ],
    link: "https://github.com/Johamatt/RR-Android",
  },
  {
    id: 2,
    title: "EventMap",
    description:
      "Mobile application for Android and iOS enabling users to discover events within the Helsinki metropolitan area, featuring user authentication.",
    img: "/EventMap.png",
    iconList: [
      "/typescript.svg",
      "/react.svg",
      "/redux.svg",
      "/aws.svg",
      "/amplify.svg",
    ],
    link: "https://github.com/Johamatt/EventMap",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A personal portfolio showcasing projects using Aceternity UI components.",
    img: "/Portfolio.png",
    iconList: [
      "/typescript.svg",
      "/nextjs.svg",
      "/tailwindcss.svg",
      "/framermotion.svg",
    ],
    link: "https://github.com/Johamatt/portfolio",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];
