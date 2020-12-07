import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../components/ReusableComponents/single-card/card.components";
import ProductSidebar from "../../components/ProductsPage/products-sidebar/ProductsSidebar.components";

// redux
import productList from "../../redux/products/products.actions";
import { useDispatch, useSelector } from "react-redux";
import { removeSubCategoryState } from "../../redux/category/category.actions";

// Animations
import { setAlert } from "../../redux/Alert/alert.actions";
import Spinner from "../../components/Layout/Spinner/Spinner";

const Products = () => {
  const dispatch = useDispatch();
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [sort, setSort] = useState("");
  const [sortBy, setSortBy] = useState("counter");
  const [sortDirection, setSortDirection] = useState("desc");
  const [items, setItems] = useState(products);
  const [pg, setPg] = useState(1);

  // View Options
  const [viewOption, setViewOption] = useState(3);

  // getting the list of products from the store
  const productsList = useSelector((state) => state.productsList);
  const { products, pages, loading } = productsList;

  //  getting the selected category from the store
  const categoriesList = useSelector((state) => state.categoryList);
  const { category } = categoriesList;

  // getting the selected subcategory from the store
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategory } = subCategoryList;

  useEffect(() => {
    if (isAlertShown === false) {
      dispatch(setAlert("Personalising Fashion for you", "loading", 1500));
      setIsAlertShown(true);
    }
    dispatch(
      productList(
        category,
        subCategory,
        pg && pg,
        sortBy && sortBy,
        sortDirection && sortDirection
      )
    );
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, [dispatch, setAlert, pg, sortBy, category, subCategory, sortDirection]);

  const removeSubcat = (e) => {
    dispatch(removeSubCategoryState(e));
  };

  const handleSortOnChange = (e) => {
    const { value } = e.target;
    value === "priceASC" && (setSortBy("price"), setSortDirection("asc"));
    value === "priceDESC" && (setSortBy("price"), setSortDirection("desc"));
    value === "nameASC" && (setSortBy("name"), setSortDirection("asc"));
    value === "nameDESC" && (setSortBy("name"), setSortDirection("desc"));
    value === "counter" && (setSortBy("counter"), setSortDirection("desc"));
    setSort(e.target.value);
    setPg(1);
    setItems(products);
  };

  return (
    <div>
      <main>
        <div className="container-xlarge">
          <section className="wrapper">
            <ProductSidebar
              products={products}
              setItems={setItems}
              setPg={setPg}
            />

            <div className="products">
              {/* Trending product */}

              <>
                <section class="section-newcomer">
                  <div class="newcomer">
                    <img src="/assets/sections/trendingproduct.webp" alt="" />
                  </div>
                </section>

                <div class="title mt-3">Women {pages * 30}</div>
                <div class="para mb-5 mt-2 __400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque temporibus magni reiciendis rem quod sequi quos
                  quas nam nobis non! Eos porro commodi quaerat aliquam natus
                  nostrum exercitationem unde excepturi.
                </div>
                <hr />
              </>
              {/* FILTERS AND SORT AND VIEW */}
              <div className="filters--wrapper">
                <div class="filters">
                  <div class="views">
                    <div
                      style={{ cursor: "pointer" }}
                      class="views--icon"
                      onClick={(e) => setViewOption(3)}
                    >
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      class="views--icon"
                      onClick={(e) => setViewOption(4)}
                    >
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      class="views--icon"
                      onClick={(e) => setViewOption(12)}
                    >
                      <ion-icon name="list-outline"></ion-icon>
                    </div>
                  </div>
                  <div>
                    <label
                      className="custom-select"
                      style={{ marginRight: "25px" }}
                    >
                      <select
                        name="options"
                        onChange={(e) => handleSortOnChange(e)}
                        value={sort}
                      >
                        <option value="counter">Relevance</option>
                        <option value="nameASC">Alphabetically A-Z </option>
                        <option value="nameDESC">Alphabetically Z-A </option>
                        <option value="priceASC">Price: Low to High</option>
                        <option value="priceDESC">Price: High to Low</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              {/* Show subcategory on top with X */}
              {!loading && subCategory ? (
                <span style={{ fontSize: "16px", fontWeight: 400 }}>
                  {subCategory && subCategory}
                  <span
                    style={{
                      cursor: "pointer",
                      paddingLeft: 5,
                      fontWeight: 400,
                    }}
                    onClick={(e) => removeSubcat(subCategory)}
                  >
                    x
                  </span>
                </span>
              ) : null}

              <div
                className={
                  viewOption === 12 ? "row mt-5" : "row row-cols-2 mt-5"
                }
                style={{ minHeight: 1000 }}
              >
                {loading ? (
                  <>
                    <h2
                      style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%)",
                      }}
                    >
                      <Spinner />
                    </h2>
                  </>
                ) : (
                  products &&
                  products.map((product) => {
                    return (
                      <div className={`col-lg-${viewOption}`}>
                        <Card
                          col12={viewOption === 12 ? true : false}
                          singleProduct={product}
                          key={product._id}
                        />
                      </div>
                    );
                  })
                )}
              </div>
              <div className="mt-2 text-center">
                {pg >= 2 ? (
                  <button
                    style={{ display: "inline-block" }}
                    onClick={() => setPg(pg - 1)}
                    className="btn btn--primary-simple"
                  >
                    Previous Page
                  </button>
                ) : null}
                <button
                  style={{ display: "inline-block" }}
                  onClick={() => setPg(pg + 1)}
                  className="btn btn--primary-simple"
                >
                  Next Page
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// this is to preload the html static page at build time for faster result
// export async function getStaticPaths() {
//   // here paths will be added from api for all categroies
//   const paths = [
//     { params: { subcategory: "men-casual-shirts" } },
//     { params: { subcategory: "men-jeans" } },
//   ];
//   return { paths, fallback: true };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `http://localhost:5000/api/products/${context.params.subcategory}`
//   );
//   const products = await res.json();
//   // Pass data to the page via props
//   return { props: { products } };
// }

export default Products;
