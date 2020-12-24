import Head from "next/head";
import HomeIntroSection from "../components/HomePage/home-into-section/HomeIntroSection.components";
import HomeLifestyleSection from "../components/HomePage/home-lifestyle-section/HomeLifestyleSection.components";
import HomeLuxurySection from "../components/HomePage/home-luxury-section/HomeLuxurySection.components";
import HomeMentions from "../components/HomePage/home-mentions/HomeMentions.components";
import HomeAbout from "../components/HomePage/home-about/HomeAbout.components";

function Home() {
  return (
    <>
      <Head>
        <title>Arktastic</title>
      </Head>
      <main>
        <HomeIntroSection />
        <HomeLifestyleSection />
        <HomeLuxurySection />
        <HomeAbout />
        <HomeMentions />
      </main>
    </>
  );
}

export default Home;
