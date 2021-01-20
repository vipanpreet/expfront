import Head from "next/head";
import HomeIntroSection from "../components/HomePage/home-into-section/HomeIntroSection.components";
import HomeMentions from "../components/HomePage/home-mentions/HomeMentions.components";
import HomeAbout from "../components/HomePage/home-about/HomeAbout.components";
import HomeSelectionSection from "../components/HomePage/home-selection-section/HomeSelectionSection.components";

function Home() {
  return (
    <>
      <Head>
        <title>Arktastic</title>
      </Head>
      <main>
        <HomeIntroSection />
        <HomeSelectionSection />
        <HomeAbout />
        <HomeMentions />
      </main>
    </>
  );
}

export default Home;
