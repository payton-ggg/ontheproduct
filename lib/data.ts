import React from "react";
import Image from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/dollar.png";
import rmtdevImg from "@/public/whriting.png";
import wordanalyticsImg from "@/public/chatting.png";
import Onthepr from "@/app/favicon.ico"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name:"Pricing",
    hash: "#pricing",
  },
  {
    name: "Faqs",
    hash: "#faqs",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Flexible Pricing",
    description:
      "Subscribe to a plan that suits your needs; you can cancel or pause anytime.",
    tags: [],
    imageUrl: corpcommentImg,
  },
  {
    title: "Submit Your Request",
    description:
      "Tell us your requirements, and a dedicated designer will fulfil your request within 48 hours.",
    tags: [],
    imageUrl: rmtdevImg,
  },
  {
    title: "Receive Designs",
    description:
      "Share your feedback, and we'll refine your designs until you`re 100% satisfied",
    tags: [],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Product Rendering",
  "3D Ads",
  "2D Ads",
  "Shopify Themes",
  "Animated Ads",
  "Website Design (UI/UX)",
  "Presentations",
  "Mobile Apps",
  "Packaging",
  "Icons",
] as const;
