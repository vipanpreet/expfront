import Head from "next/head";
import Navbar from "../components/Layout/nav-bar/Navbar.components";
import HomeHeader from "../components/HomePage/home-header/HomeHeader.components";
import HomeCategoriesSection from "../components/HomePage/home-categories-section/HomeCategoriesSection.components";
import HomeRecommendationBox from "../components/HomePage/home-recommendations/HomeRecommendation.components";
import HomePageads from "../components/HomePage/home-pageads/HomePageads.components";
import HomeUpsellSection from "../components/HomePage/home-upsell-section/HomeUpsellSection.components";
import HomeTrendingSection from "../components/HomePage/home-trending-section/HomeTrendingSection.components";
import HomeThemesBanner from "../components/HomePage/home-themes-banner/HomeThemesBanner.components";
import HomeFeaturesSection from "../components/HomePage/home-features-section/HomeFeaturesSection.components";
import Footer from "../components/ReusableComponents/footer/Footer.components";

// this is Home page
function Home({ products }) {
  console.log(products);
  return (
    <div>
      <Head>
        <title>Arktastic</title>
      </Head>
      <Navbar />
      <HomeHeader />
      <HomeCategoriesSection />
      <HomeRecommendationBox products={products} />
      <HomePageads />
      <HomeUpsellSection />
      <HomeTrendingSection products={products} />
      <HomeThemesBanner />
      <HomeFeaturesSection />
      <Footer />
    </div>
  );
}

// fetching the products form backend in server side
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://arktasticbackend.herokuapp.com/api/products`
  );
  const products = await res.json();
  // Pass data to the page via props
  return { props: { products } };
}

export default Home;
