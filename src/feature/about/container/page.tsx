import HeroSection from "../components/section/hero-section";
import PastorSection from "../components/section/pastor-section";

export default function AboutContainer() {
  return (
    <div className="space-y-10 pb-14">
      <HeroSection />
      <PastorSection />
    </div>
  );
}
