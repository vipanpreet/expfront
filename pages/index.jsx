import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import HomeHeader from "../components/HomePage/home-header/HomeHeader.component";
import HomeSection from "../components/HomePage/Home-section/HomeSection.component";
import HomeDealSection from "../components/HomePage/Home-deal-section/HomeDealSection.components";
import HomeUpsellSection from "../components/HomePage/Home-upsell-section/HomeUpsellSection.components";
import HomeRecommendationBox from "../components/HomePage/home-recommendations/HomeRecommendation.components";
import HomeTrendingSection from "../components/HomePage/home-trending-section/HomeTrendingSection.components";
import HomeJoinusSection from "../components/HomePage/Home-joinus-section/HomeJoinusSection.components";
import HomeFeaturesSection from "../components/HomePage/home-features-section/HomeFeaturesSection.components";
import HomeTopBrands from "../components/HomePage/home-top-brands/HomeTopBrands.component";
import HomeInstagramSection from "../components/HomePage/Home-instagram-section/HomeInstagramSection.components";
// import HomeSustainable from "../components/HomePage/home-sustainable/HomeSustainable.components";
import { getProfile } from "../redux/profile/profile.actions";
// this is Home page

function Home({ products }) {
  const dispatch = useDispatch();
  const profileGet = useSelector((state) => state.profileGet);
  const { profile } = profileGet;
  useEffect(() => {
    if (!profile) {
      dispatch(getProfile());
    }
  }, []);
  return (
    <>
      <Head>
        <title>Arktastic</title>
      </Head>

      <HomeHeader />
      <HomeSection />
      <HomeDealSection />
      <HomeUpsellSection />
      <HomeTrendingSection products={products} />
      <HomeRecommendationBox />
      <HomeTopBrands />
      {/* <HomeSustainable /> */}
      <HomeJoinusSection />
      <HomeInstagramSection />
      <HomeFeaturesSection />
    </>
  );
}

// fetching the products form backend in server side
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://arktasticbackend.herokuapp.com/api/products/recommended`
  );
  const products = await res.json();
  // Pass data to the page via props
  return { props: { products } };
}

export default Home;
