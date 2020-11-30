import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productList from "../../../redux/products/products.actions";

const ProductsFilters = () => {
  const pageNumber = router.query.pagenumber || 1;
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();

  //  getting the selected category from the store
  const categoriesList = useSelector((state) => state.categoryList);
  const { category } = categoriesList;

  // getting the selected subcategory from the store
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategory } = subCategoryList;

  const handleSortOnChange = (e) => {
    var sortBy = "";
    var sortDirection = "";
    const { value } = e.target;
    sortBy = e.target.value;

    value === "priceASC" && ((sortBy = "price"), (sortDirection = "asc"));
    value === "priceDESC" && ((sortBy = "price"), (sortDirection = "desc"));
    value === "nameASC" && ((sortBy = "name"), (sortDirection = "asc"));
    value === "nameDESC" && ((sortBy = "name"), (sortDirection = "desc"));
    value === "counter" && ((sortBy = "counter"), (sortDirection = "desc"));

    sortBy && sortBy.toLowerCase();
    sortDirection && sortDirection.toLowerCase();
    setSort(e.target.value);
    dispatch(
      productList(
        category,
        subCategory,
        sortBy && sortBy,
        sortDirection && sortDirection
      )
    );
  };

  return (
    <div>
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
    </div>
  );
};

export default ProductsFilters;
