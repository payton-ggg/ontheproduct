"use client"
import HorizontalWrapper from "@/components/HorizontalWrapper";
import SectionLayout from "@/components/SectionLayout";
import { cards } from "@/actions/cards"
import About, { LogoExample } from "@/components/about";
import Card from "@/components/cards";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import styled from "styled-components";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import Portfolio from "@/components/portfolio";
import SAbout, { TAbout } from "@/components/sabout";
import OnceTitle, { FirstTitle, ThirdTitle, TwiceTitle } from "@/components/title";
import Faqs from "@/components/faqs";

export default function Home() {
  const video = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <main className="flex flex-col items-center">
      <Intro />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper height="5rem" direction={-1500}>
            <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
      </MainStyled>
      <LogoExample />
      <FirstTitle />
      <About />
      <OnceTitle />
      <SAbout />
      <TwiceTitle />
      <TAbout />
      {/* <Projects /> */}
      <ThirdTitle />
      <Portfolio />
      <Skills />
      <PricingCard />
      <Faqs />
      {/* <Contact /> */}
    </main>
  );
} 

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 30rem);
    gap: 1rem;
  }
`;