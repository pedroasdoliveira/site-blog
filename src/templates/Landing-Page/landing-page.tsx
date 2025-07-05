import {
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToAction,
  HeroSection,
} from "./Sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />

      <FeatureSection />

      <SupportSection />

      <CustomerStorySection />

      <CallToAction />
    </article>
  );
};
