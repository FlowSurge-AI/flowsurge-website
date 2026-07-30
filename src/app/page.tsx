import Hero from "@/components/sections/Hero";
import SolutionPillars from "@/components/sections/SolutionPillars";
import ScreenshotCarousel from "@/components/sections/ScreenshotCarousel";
import SocialProof from "@/components/sections/SocialProof";
import Testimonials from "@/components/sections/Testimonials";
import HipaaCompliance from "@/components/sections/HipaaCompliance";
import CtaForm from "@/components/sections/CtaForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionPillars />
      <ScreenshotCarousel />
      <SocialProof />
      <Testimonials />
      <HipaaCompliance />
      <CtaForm />
    </main>
  );
}
