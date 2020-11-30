import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Head from "next/head";
import HomeHeader from "../components/HomePage/home-header/HomeHeader.component";
import HomeSection from "../components/HomePage/Home-section/HomeSection.component";
import HomeDealSection from "../components/HomePage/Home-deal-section/HomeDealSection.components";
import HomeRecommendationBox from "../components/HomePage/home-recommendations/HomeRecommendation.components";
import HomeTrendingSection from "../components/HomePage/home-trending-section/HomeTrendingSection.components";
import HomeBarginSection from "../components/HomePage/home-bargin-section/HomeBarginSection.components";
import HomeFeaturesSection from "../components/HomePage/home-features-section/HomeFeaturesSection.components";
import HomeTopBrands from "../components/HomePage/home-top-brands/HomeTopBrands.component";
import HomeSustainable from "../components/HomePage/home-sustainable/HomeSustainable.components";
import { getProfile } from "../redux/profile/profile.actions";
// this is Home page

function Home({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <>
      <Head>
        <title>Arktastic</title>
      </Head>
      <HomeHeader />
      <HomeSection />
      <HomeDealSection />
      <HomeTrendingSection products={products} />
      <HomeTopBrands />
      <HomeBarginSection />
      <HomeSustainable />
      <HomeRecommendationBox products={products} />
      <HomeFeaturesSection />
    </>
  );
}

// fetching the products form backend in server side
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://arktasticbackend.herokuapp.com/api/products/recommended/`
  );
  const products = await res.json();
  // Pass data to the page via props
  return { props: { products } };
}

export default Home;
