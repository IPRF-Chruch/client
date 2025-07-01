import HeroSection from "../components/section/hero-section";
import WartaJemaatSection from "../components/section/news-section";
import ValuesSection from "../components/section/values-section";
import VisiMisiSection from "../components/section/visimisi-section";

export default function HomeContainer() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <VisiMisiSection />
      <ValuesSection />
      <WartaJemaatSection />
    </div>
  );
}
