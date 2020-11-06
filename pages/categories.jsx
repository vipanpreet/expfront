import Head from "next/head";
import Navbar from "../components/Layout/nav-bar/Navbar.components";
import CategoriesList from "../components/CategoriesPage/Categories-list/CategoriesList.component";
import CategoriesHeader from "../components/CategoriesPage/Categories-header/CategoriesHeader.component";
import SectionDeal from "../components/CategoriesPage/Section-deal/SectionDeal.component";
import Footer from "../components/ReusableComponents/footer/Footer.components";

// this is Home page
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Arktastic</title>
      </Head>
      <Navbar />
      <CategoriesHeader />
      <main>
        <div class="container-xlarge">
          <CategoriesList />
          <SectionDeal />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// fetching the products form backend in server side
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://arktasticbackend.herokuapp.com/api/products`
  );
  const products = await res.json();
  // Pass data to the page via props
  return { props: { products } };
}
