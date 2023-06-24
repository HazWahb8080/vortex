import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Clients from "./components/sections/clients/Clients";
import Features from "./components/sections/features/Features";
import FeaturesTabs from "./components/sections/featuresTabs/FeaturesTabs";
import SolutionsTabs from "./components/sections/solutionsTabs/SolutionsTabs";
import TopBanner from "./components/topBanner/TopBanner";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col
     items-center justify-start"
    >
      <TopBanner />
      <section
        className="pb-12 -mt-[8vh] rounded-t-[50px] bg-white min-h-screen 
      w-full items-center justify-start flex flex-col px-6"
      >
        <Header />
        <Hero />
        <Clients />
        <Features />
        <FeaturesTabs />
        <SolutionsTabs />
      </section>
    </main>
  );
}
