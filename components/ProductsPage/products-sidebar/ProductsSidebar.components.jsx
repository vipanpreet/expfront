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

  useEffect(() => {
    // fetching the categories list on render.
    dispatch(listCategories());
    dispatch(saveCategoryState(router.query.subcategory));
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    // getting the list of subcategories using cateogory Id and showing on the UI
    dispatch(listSubCategories(category.slug));
    // filtering the products by passing category
    dispatch(saveCategoryState(category.name));
  };

  const handleSubCategoryClick = (subcategory) => {
    // to filter products based on subcategory we need slug of category
    const category = categories.find(
      (category) => category.slug === subcategory.parent
    );

    // save the selected subcategory in the store
    category && dispatch(saveSubCategoryState(subcategory.slug));
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
      <div
        style={{ paddingRight: 60 }}
        className="sidebar"
        ref={(el) => (sideBar = el)}
      >
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
              <a href="#">Recommended Products</a>
            </li>
          </div>
        </div>

        <div className="sidebar--group">
          <div className="title">Categories</div>
          <div className="mt-2">
            {categories.map((category) => {
              return (
                <li className="sidebar--item" key={category._id}>
                  <Link href={`/products/${category.name}`}>
                    <a
                      value={category}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
        <div className="sidebar--group">
          <div className="title">SubCategories</div>
          <div className="mt-2">
            {subcategories.map((subcategory) => {
              return (
                <li
                  className="sidebar--item"
                  key={subcategory._id}
                  onClick={() => handleSubCategoryClick(subcategory)}
                >
                  <a href="#">{subcategory.name}</a>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div class="options" onClick={isOpen ? closeSideBar : openSideBar}>
        <a style={{ cursor: "pointer" }}>
          <ion-icon name="options-outline"></ion-icon>
        </a>
      </div>
    </>
  );
};

export default ProductSidebar;
