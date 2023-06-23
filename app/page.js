import Header from "./components/header/Header";
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
      w-full items-center justify-start flex flex-col p-6"
      >
        <Header />
      </section>
    </main>
  );
}
