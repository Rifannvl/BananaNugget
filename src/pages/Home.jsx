import BaseLayout from "../layout/BaseLayout";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import HeroSection from "./HeroSection";
import Menu from "./Menu";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <Menu />
      <About />
      <Contact />
      <Faq />
    </BaseLayout>
  );
}
