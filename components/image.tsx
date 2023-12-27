"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
        <div className="w-96 h-96 relative">
            <div className="w-56 h-96 left-[474px] top-0 absolute bg-zinc-300 rounded" />
            <div className="w-56 h-96 left-0 top-0 absolute bg-zinc-300 rounded" />
            <div className="w-56 h-96 left-[948px] top-0 absolute bg-zinc-300 rounded" />
            <div className="w-56 h-96 left-[711px] top-[237px] absolute bg-zinc-300 rounded" />
            <div className="w-56 h-96 left-[237px] top-[237px] absolute bg-zinc-300 rounded" />
            <div className="w-56 h-56 left-[711px] top-0 absolute bg-zinc-300 rounded" />
            <div className="w-56 h-56 left-[237px] top-0 absolute bg-zinc-300 rounded" />
            <div className="w-56 h-56 left-[948px] top-[462px] absolute bg-zinc-300 rounded" />
            <div className="w-56 h-56 left-[474px] top-[462px] absolute bg-zinc-300 rounded" />
            <div className="w-56 h-56 left-0 top-[462px] absolute bg-zinc-300 rounded" />
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
    </motion.div>
  );
}
