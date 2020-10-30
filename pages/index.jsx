import Head from "next/head";
import Navbar from "../components/ReusableComponents/nav-bar/Navbar.components";
import Header from "../components/HomePage/header/Header.components";
import Categoriessection from "../components/HomePage/categories-section/Categoriessection.components";
import Recommendationbox from "../components/HomePage/recommendations/recommendation.components";
import Pageads from "../components/HomePage/Pageads/Pageads.components";
import Upsellsection from "../components/HomePage/upsell-section/Upsellsection.components";
import Trendingsection from "../components/HomePage/trending-section/Trendingsection.components";
import Themesbanner from "../components/HomePage/themes-banner/Themesbanner.components";
import Featuressection from "../components/HomePage/features-section/Featuressection.components";

// this is Home page
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Arktastic</title>
      </Head>
      <Navbar />
      <Header /> 
      <Categoriessection />
      <Recommendationbox products={products} />
      <Pageads />
      <Upsellsection />
      <Trendingsection products={products} />
      <Themesbanner />
      <Featuressection />
    </div>
  );
}

// fetching the products form backend in server side
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/api/products`);
  const products = await res.json();
  // Pass data to the page via props
  return { props: { products } };
}
