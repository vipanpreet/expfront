import { useState, useEffect, useRef } from "react";
import ProductSidebar from "../../components/ProductsPage/products-sidebar/ProductsSidebar.components";
import Card from "../../components/ReusableComponents/single-card/card.components";
import { useDispatch, useSelector } from "react-redux";
import productList from "../../redux/products/products.actions";
import { useRouter } from "next/router";
import ProductPaginate from "../../components/ProductsPage/product-paginate/ProductPaginate";
import { removeSubCategoryState } from "../../redux/category/category.actions";
import { setAlert } from "../../redux/Alert/alert.actions";

const Products = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [sort, setSort] = useState("");
  const [sortBy, setSortBy] = useState("counter");
  const [sortDirection, setSortDirection] = useState("desc");

  const pageNumber = router.query.pagenumber || 1;

  // getting the list of products from the store
  const productsList = useSelector((state) => state.productsList);
  const { products, page, pages, loading } = productsList;

  //  getting the selected category from the store
  const categoriesList = useSelector((state) => state.categoryList);
  const { category } = categoriesList;

  // getting the selected subcategory from the store
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategory } = subCategoryList;

  const handleSortOnChange = (e) => {
    const { value } = e.target;
    value === "priceASC" && (setSortBy("price"), setSortDirection("asc"));
    value === "priceDESC" && (setSortBy("price"), setSortDirection("desc"));
    value === "nameASC" && (setSortBy("name"), setSortDirection("asc"));
    value === "nameDESC" && (setSortBy("name"), setSortDirection("desc"));
    value === "counter" && (setSortBy("counter"), setSortDirection("desc"));
    setSort(e.target.value);
  };

  useEffect(() => {
    if (isAlertShown === false) {
      dispatch(setAlert("Personalising Fashion for you", "loading", 1500));
      setIsAlertShown(true);
    }
    dispatch(
      productList(
        category,
        subCategory,
        pageNumber && pageNumber,
        sortBy && sortBy,
        sortDirection && sortDirection
      )
    );
  }, [
    dispatch,
    setAlert,
    sortBy,
    category,
    subCategory,
    sortDirection,
    pageNumber,
  ]);

  const removeSubcat = (e) => {
    dispatch(removeSubCategoryState(e));
  };
  return (
    <div>
      <main>
        <div className="filters--wrapper">
          <label
            style={{
              fontSize: "14px",
              marginRight: 5,
              fontWeight: 400,
            }}
          >
            SORT:
          </label>
          <label className="custom-select" style={{ marginRight: "25px" }}>
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
          <label style={{ fontSize: "14px", marginRight: 5, fontWeight: 400 }}>
            RATING:
          </label>
          <label className="custom-select">
            <select name="options">
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
              <option value="2">2 Star</option>
              <option value="1">1 Star</option>
            </select>
          </label>
        </div>

        <div className="container-xlarge mt-6">
          <section className="section-products">
            <ProductSidebar />

            <div className="products-list">
              {!loading && pages ? (
                <div className="heading" style={{ marginBottom: 10 }}>
                  {pages * 30} Products
                </div>
              ) : null}

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

              <div className="row row-cols-2 mt-5">
                {loading ? (
                  <h2
                    style={{
                      position: "absolute",
                      left: "50%",
                    }}
                  >
                    Loading
                  </h2>
                ) : (
                  products &&
                  products.map((product) => {
                    return (
                      <div className="col-lg-2">
                        <Card singleProduct={product} key={product._id} />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </div>
        <ProductPaginate category={category} pages={pages} page={page} />
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
