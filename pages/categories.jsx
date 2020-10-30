import Head from "next/head";
import Navbar from "../components/ReusableComponents/nav-bar/Navbar.components";
import Categorieslist from "../components/CategoriesPage/Categories-list/Categories-list.component";
import Headercategories from "../components/CategoriesPage/Header-categories/Header-categories.component";
import Sectiondeal from "../components//CategoriesPage/Section-deal/Section-deal.component";

// this is Home page
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Arktastic</title>
      </Head>
      <Navbar />
      <Headercategories />
      <main>
        <div class="container-xlarge">
          <Categorieslist />
          <Sectiondeal />
        </div>
      </main>
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
