import { CallToAction } from "@/components/CallToAction";
import { CustomerStorySection } from "@/components/Customer-Story-Section";
import { FeatureSection } from "@/components/Feature-Section";
import { HeroSection } from "@/components/Hero-Section";
import { SupportSection } from "@/components/Support-Section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />

        <FeatureSection />

        <SupportSection />

        <CustomerStorySection />

        <CallToAction />
      </article>
    </>
  );
}
