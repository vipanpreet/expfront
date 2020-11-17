import Header from "../../components/HomePage/home-header/HomeHeader.components";
import ProductsSubcategories from "../../components/ProductsPage/product-section-subcategories/ProductsSubcategories.components";
import Card from "../../components/ReusableComponents/single-card/card.components";

const Products = ({ products }) => {
  return (
    <div>
      <Header />
      <ProductsSubcategories />
      <main>
        <div className="container-xlarge mt">
          <div className="row row-cols-2">
            {products ? (
              products.map((product) => {
                return (
                  <div className="col-lg-2">
                    <Card singleProduct={product} key={product._id} />
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

// this is to preload the html static page at build time for faster result
export async function getStaticPaths() {
  // here paths will be added from api for all categroies
  const paths = [
    { params: { subcategory: "men-casual-shirts" } },
    { params: { subcategory: "men-jeans" } },
  ];
  return { paths, fallback: true };
}

export async function getStaticProps() {
  const res = await fetch(
    `https://arktasticbackend.herokuapp.com/api/products`
  );
  const products = await res.json();
  // Pass data to the page via props
  return { props: { products } };
}

export default Products;
