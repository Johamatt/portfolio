import { Project } from "@/types";

export const techStack = [
  {
    id: 1,
    name: "JavaScript",
    designation: "Experience: 4 years",
    image: "/javascript.svg",
    className: "bg-yellow",
    rating: 3.5,
  },
  {
    id: 2,
    name: "React",
    designation: "Experience: 4 years",
    image: "/react.svg",
    className: "bg-black",
    rating: 3.5,
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Experience: 2 years",
    image: "/typescript.svg",
    className: "bg-white",
    rating: 3,
  },

  {
    id: 4,
    name: "Java",
    designation: "Experience: 5 years",
    image: "/java.svg",
    className: "bg-white",
    rating: 3,
  },
  {
    id: 5,
    name: "Spring boot",
    designation: "Experience: 4 years",
    image: "/spring.svg",
    className: "bg-white",
    rating: 3,
  },
  {
    id: 6,
    name: "Kotlin",
    designation: "Experience: 4 years",
    image: "/kotlin.svg",
    className: "bg-black",
    rating: 2,
  },
  {
    id: 7,
    name: "PostgreSQL",
    designation: "Experience: 2 years",
    image: "/postgresql.svg",
    className: "bg-white-200",
    rating: 2,
  },
  {
    id: 8,
    name: "NestJS",
    designation: "Experience: 2 years",
    image: "/nestjs.svg",
    className: "bg-white-200",
    rating: 1.5,
  },
  {
    id: 9,
    name: "NextJS",
    designation: "Experience: 2 years",
    image: "/nextjs.svg",
    className: "bg-white-200",
    rating: 1.5,
  },
  {
    id: 9,
    name: "AWS",
    designation: "Experience: 2 years",
    image: "/aws.svg",
    className: "bg-white-200",
    rating: 1,
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
  { name: "Tech Stack", link: "#techStack" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    ref: "https://github.com/Johamatt",
  },

  {
    id: 2,
    img: "/linkedin.svg",
    ref: "https://www.linkedin.com/in/johannes-mattila-17972a209/",
  },
];
