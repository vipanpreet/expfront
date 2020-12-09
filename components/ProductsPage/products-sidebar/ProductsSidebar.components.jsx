import { useDispatch, useSelector } from "react-redux";
import {
  listCategories,
  listSubCategories,
  saveCategoryState,
  saveSubCategoryState,
} from "../../../redux/category/category.actions";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TweenMax, Power3 } from "gsap";

const ProductSidebar = () => {
  let sideBar = useRef(null);
  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  //  getting the list of categories from the store
  const categoriesList = useSelector((state) => state.categoryList);
  const { categories } = categoriesList;

  // getting the list of subcategoires from the store
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subcategories } = subCategoryList;

  var { category, subcategory, sortby, sortdirection, page, q } = router.query;

  var queryList = {};
  q && (queryList.q = q);
  category && (queryList.category = category);
  subcategory && (queryList.subcategory = subcategory);
  page && (queryList.page = 1);

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });

    // fetching the categories list on render.
    if (categories.length < 2) {
      dispatch(listCategories());
    }
    if (category) {
      dispatch(listSubCategories(router.query.category));
    }
  }, [dispatch, category]);

  const handleCategory = (e) => {
    queryList.category = e;
    const { subcategory, ...newQuery } = queryList;
    router.push({
      pathname: "/products",
      query: newQuery,
    });
  };

  const openSideBar = () => {
    TweenMax.to(sideBar, 0.6, {
      left: "0px",
      ease: Power3.easeOut,
    });
    setIsOpen(true);
  };
  const closeSideBar = () => {
    TweenMax.to(sideBar, 0.6, {
      left: "-60%",
      ease: Power3.easeOut,
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="sidebar" ref={(el) => (sideBar = el)}>
        <div className="sidebar--group">
          <div className="title">Explore</div>
          <div className="mt-2">
            <li className="sidebar--item">
              <a href="#">Trending Products</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Newly Added</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Recommended </a>
            </li>
          </div>
        </div>

        <div className="sidebar--group">
          <div className="title">Categories</div>
          <div className="mt-2">
            {categories &&
              categories.map((category) => {
                return (
                  <li
                    className="sidebar--item"
                    style={{ cursor: "pointer" }}
                    key={category._id}
                  >
                    <button
                      onClick={(e) => handleCategory(category.slug)}
                      style={{ cursor: "pointer" }}
                    >
                      {category.name}
                    </button>
                  </li>
                );
              })}
          </div>
        </div>
        <div className="sidebar--group">
          {subcategories.length > 2 && (
            <div className="title">SubCategories</div>
          )}
          <div className="mt-2">
            {subcategories.map((subcategory) => {
              return (
                <Link
                  href={{
                    pathname: "/products",
                    query: { ...queryList, subcategory: subcategory.slug },
                  }}
                >
                  <li
                    className="sidebar--item"
                    style={{ cursor: "pointer" }}
                    key={subcategory._id}
                  >
                    <button style={{ cursor: "pointer" }}>
                      {subcategory.name}
                    </button>
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div
        class="options"
        style={{ position: "absolute", top: "46%", right: 50 }}
        onClick={isOpen ? closeSideBar : openSideBar}
      >
        <a style={{ cursor: "pointer" }}>
          <ion-icon name="options-outline"></ion-icon>
        </a>
      </div>
    </>
  );
};

export default ProductSidebar;
