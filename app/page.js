"use client";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Clients from "./components/sections/clients/Clients";
import FAQs from "./components/sections/faqs/FAQs";
import Features from "./components/sections/features/Features";
import FeaturesTabs from "./components/sections/featuresTabs/FeaturesTabs";
import Pricing from "./components/sections/pricing/Pricing";
import Process from "./components/sections/process/Process";
import Showcase from "./components/sections/showcase/Showcase";
import SolutionsTabs from "./components/sections/solutionsTabs/SolutionsTabs";
import Testimonials from "./components/sections/testimonials/Testimonials";
import TopBanner from "./components/topBanner/TopBanner";

function Home() {
  return (
    <main
      className="flex min-h-screen flex-col
     items-center justify-start overflow-x-hidden"
    >
      <TopBanner />
      <section
        className="pb-12 -mt-[8vh] lg:rounded-t-[50px] bg-white min-h-screen 
      w-full items-center justify-start flex flex-col"
      >
        <Header />
        <Hero />
        <Clients />
        <Features />
        <FeaturesTabs />
        <SolutionsTabs />
        <Showcase />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQs />
        <Clients />
        <Banner />
        <Footer />
      </section>
    </main>
  );
}
export default Home;
