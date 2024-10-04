"use client";
import React from "react";
import HorizontalWrapper from "@/components/HorizontalWrapper";
import SectionLayout from "@/components/SectionLayout";
import { cards } from "@/actions/cards";
import About from "@/components/about";
import Card from "@/components/cards";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import PricingCard from "@/components/PricingCard";
import { TwiceTitle } from "@/components/title";
import Faqs from "@/components/faqs";
import Integration from "@/components/interg";
import ImageS, { PortfolioCub } from "@/components/image";
import FirstAbout from "@/components/fabout";
import FeatureGrid from "@/components/FeaturesGrid";
import EndBack from "@/components/EndBack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Integration />
      <FirstAbout />
      <SectionLayout>
        <HorizontalWrapper height="25rem" direction={500}>
          <div className="cards" style={{ right: 100 }}>
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
      <ImageS />
      <About />
      <EndBack />
      <TwiceTitle />
      <FeatureGrid />
      <PortfolioCub />
      <Skills />
      <PricingCard />
      <Faqs />
    </main>
  );
}
