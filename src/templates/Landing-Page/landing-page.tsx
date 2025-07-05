import {
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToAction,
  HeroSection,
} from "./Sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />

      <FeatureSection />

      <SupportSection />

      <CustomerStorySection />

      <CallToAction />
    </article>
  );
};
