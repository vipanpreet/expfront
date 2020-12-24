import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../components/ReusableComponents/single-card/card.components";
import ProductSidebar from "../components/ProductsPage/products-sidebar/ProductsSidebar.components";
// redux
import { productList } from "../redux/products/products.actions";
import { useDispatch, useSelector } from "react-redux";

// Animations
import { setAlert } from "../redux/Alert/alert.actions";
import Spinner from "../components/Layout/Spinner/Spinner";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    var { innerWidth: width, innerHeight: height } = window;
  }
  //
  return {
    width,
    height,
  };
}

const Products = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isAlertShown, setIsAlertShown] = useState(false);
  const [isDirection, setIsDirection] = useState(false);

  // View Options
  const [viewOption, setViewOption] = useState(3);

  // getting the list of products from the store
  const productsState = useSelector((state) => state.productsState);
  const { products, loading } = productsState;

  var {
    category,
    subcategory,
    sortby,
    sortdirection,
    page,
    q,
    department,
    type,
  } = router.query;

  var queryList = {};

  // Filters
  department && (queryList.department = department);
  type && (queryList.type = type);

  // search
  q && (queryList.q = decodeURI(q));

  // categorize
  category && (queryList.category = category);
  subcategory && (queryList.subcategory = subcategory);

  // SORTING
  sortby && (queryList.sortby = sortby);
  sortdirection && (queryList.sortdirection = sortdirection);

  // pagination
  !page && (queryList.page = 1);

  // Function to handle all queries
  const handleQuery = (newQuery, type) => {
    window.scrollTo({ top: 500, behavior: "smooth" });

    if (type === "sortby") {
      router.push({
        pathname: "/products",
        query: { ...queryList, sortby: newQuery },
      });
    } else if (type === "sortdirection") {
      setIsDirection(!isDirection);
      if (isDirection) {
        router.push({
          pathname: "/products",
          query: { ...queryList, sortdirection: "desc" },
        });
      } else {
        router.push({
          pathname: "/products",
          query: { ...queryList, sortdirection: "asc" },
        });
      }
    } else if (type === "removecategory") {
      const { category, subcategory, ...newQuery } = queryList;
      router.push({
        pathname: "/products",
        query: newQuery,
      });
    } else if (type === "removesubcategory") {
      const { subcategory, ...newQuery } = queryList;
      router.push({
        pathname: "/products",
        query: newQuery,
      });
    } else if (type === "removeq") {
      const { q, ...newQuery } = queryList;
      router.push({
        pathname: "/products",
        query: newQuery,
      });
    } else if (type === "removetype") {
      const { type, ...newQuery } = queryList;
      router.push({
        pathname: "/products",
        query: newQuery,
      });
    } else if (type === "removedepartment") {
      const { department, ...newQuery } = queryList;
      router.push({
        pathname: "/products",
        query: newQuery,
      });
    } else if (type === "nextpage") {
      router.push({
        pathname: "/products",
        query: { ...queryList, page: page === "" ? 1 : parseInt(page) + 1 },
      });
    } else if (type === "prevpage") {
      router.push({
        pathname: "/products",
        query: { ...queryList, page: parseInt(page) - 1 },
      });
    }
  };

  useEffect(() => {
    if (isAlertShown === false) {
      dispatch(setAlert("Personalising Fashion for you", "loading", 1500));
      setIsAlertShown(true);
    }

    if (!router.query.page) {
      router.push({
        pathname: "/products",
        query: { ...queryList, page: 1 },
      });
    }
    dispatch(
      productList(
        category && category,
        subcategory && subcategory,
        q && q,
        type && type,
        department && department,
        (page && page) || 1,
        sortby && sortby,
        sortdirection && sortdirection
      )
    );
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [router.query]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  return (
    <div>
      <main>
        {/* Container */}
        <div className="container-xlarge">
          <section className="wrapper">
            <ProductSidebar products={products} />

            <div className="products">
              {/* Trending product */}

              <>
                <section className="section-newcomer">
                  <div className="newcomer">
                    <img src="/assets/offers/trendingproduct.webp" alt="" />
                  </div>
                </section>

                <div className="title mt-3">
                  <span>
                    {department} Page - {page}{" "}
                  </span>
                </div>
                <div className="para mb-5 mt-2 __400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque temporibus magni reiciendis rem quod sequi quos
                  quas nam nobis non! Eos porro commodi quaerat aliquam natus
                  nostrum exercitationem unde excepturi.
                </div>
                <hr />
              </>
              {/* ------------------------------- FILTERS AND SORT AND VIEW  --------------------------- */}
              <div className="filters--wrapper">
                <div className="filters">
                  <div className="views">
                    {windowDimensions.width >= 1025 && (
                      <div
                        style={{ cursor: "pointer" }}
                        className="views--icon"
                        onClick={(e) => setViewOption(3)}
                      >
                        <ion-icon name="apps-outline"></ion-icon>
                      </div>
                    )}
                    <div
                      style={{ cursor: "pointer" }}
                      className="views--icon"
                      onClick={(e) => setViewOption(4)}
                    >
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      className="views--icon"
                      onClick={(e) => setViewOption(12)}
                    >
                      <ion-icon name="list-outline"></ion-icon>
                    </div>
                  </div>
                  <div className="sort">
                    <button
                      className="sortdirection"
                      onClick={(e) => {
                        handleQuery(e.target.value, "sortdirection");
                      }}
                    >
                      {isDirection === true ? (
                        <ion-icon name="arrow-up-outline"></ion-icon>
                      ) : (
                        <ion-icon name="arrow-down-outline"></ion-icon>
                      )}
                    </button>
                    <label
                      className="custom-select"
                      style={{ marginRight: "25px" }}
                    >
                      <select
                        name="options"
                        onChange={(e) => {
                          handleQuery(e.target.value, "sortby");
                        }}
                      >
                        <option value="counter">Relevance</option>
                        <option value="numReviews">Reviews</option>
                        <option value="name">Alphabetically</option>
                        <option value="price">Price</option>
                        <option value="brand">Brand</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              {/* removables */}
              <div className="tags">
                {!loading && category && (
                  <div
                    className="link"
                    onClick={(e) => {
                      handleQuery(e.target.value, "removecategory");
                    }}
                  >
                    {category && category} <span>x</span>
                  </div>
                )}

                {!loading && subcategory && (
                  <div
                    onClick={(e) => {
                      handleQuery(e.target.value, "removesubcategory");
                    }}
                  >
                    {subcategory && subcategory} <span>x</span>
                  </div>
                )}

                {!loading && q && (
                  <div
                    onClick={(e) => {
                      handleQuery(e.target.value, "removeq");
                    }}
                  >
                    {q && q} <span>x</span>
                  </div>
                )}

                {!loading && type && (
                  <div
                    onClick={(e) => {
                      handleQuery(e.target.value, "removetype");
                    }}
                  >
                    {type && type} <span>x</span>
                  </div>
                )}

                {!loading && department && (
                  <div
                    onClick={(e) => {
                      handleQuery(e.target.value, "removedepartment");
                    }}
                  >
                    {department && department} <span>x</span>
                  </div>
                )}
              </div>

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
                        left: "45%",
                        transform: "translate(-50%)",
                      }}
                    >
                      <Spinner />
                    </h2>
                  </>
                ) : (
                  products.length > 0 &&
                  products.map((product) => {
                    return (
                      <div key={product._id} className={`col-lg-${viewOption}`}>
                        <Card
                          col12={viewOption === 12 ? true : false}
                          singleProduct={product}
                          windowDimensions={windowDimensions}
                          key={product._id}
                        />
                      </div>
                    );
                  })
                )}
              </div>
              <div className="mt-2 text-center">
                {page >= 2 ? (
                  <button
                    style={{ display: "inline-block" }}
                    onClick={(e) => {
                      handleQuery(e.target.value, "prevpage");
                    }}
                    className="btn btn--primary-simple"
                  >
                    Previous Page
                  </button>
                ) : null}
                <button
                  style={{ display: "inline-block" }}
                  onClick={(e) => {
                    handleQuery(e.target.value, "nextpage");
                  }}
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

export default Products;
