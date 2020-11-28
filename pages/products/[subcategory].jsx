import ProductFilters from "../../components/ProductsPage/products-filters/ProductsFilters.components";
import ProductSidebar from "../../components/ProductsPage/products-sidebar/ProductsSidebar.components";
import Card from "../../components/ReusableComponents/single-card/card.components";

const Products = ({ products }) => {
  return (
    <div>
      <main>
        <ProductFilters />
        <div class="container-xlarge mt-6">
          <section class="section-products">
            <ProductSidebar />

            <div class="products-list">
              <div class="heading">30 Products</div>
              <div class="row row-cols-2 mt-5">
                {products ? (
                  products.map((product) => {
                    return (
                      <div class="col-lg-2">
                        <Card singleProduct={product} key={product._id} />
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </section>
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

export async function getStaticProps(context) {
  const res = await fetch(
    `https://arktasticbackend.herokuapp.com/api/products/${context.params.subcategory}`
  );
  const products = await res.json();
  // Pass data to the page via props
  return { props: { products } };
}

export default Products;
