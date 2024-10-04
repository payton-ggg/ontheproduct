import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <section className="flex overflow-hidden flex-col justify-center items-center self-stretch p-4 my-auto min-h-[155px] min-w-[240px] w-[244px]">
    <h3 className="text-lg font-medium leading-8">{title}</h3>
    <p className="mt-4 text-sm font-light leading-6">{description}</p>
  </section>
);

export default FeatureCard;
