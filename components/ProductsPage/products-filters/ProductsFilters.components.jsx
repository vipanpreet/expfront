const ProductsFilters = () => {
  return (
    <div>
      <div className="filters--wrapper">
        <label className="custom-select">
          <select name="options">
            <option value="">Sort by</option>
            <option value="1">Relevance</option>
            <option value="1">Alphabetically</option>
            <option value="1">Newest</option>
            <option value="1">Oldest</option>
            <option value="2">Highest Rated</option>
            <option value="3">Lowest Rated</option>
          </select>
        </label>
        <label className="custom-select">
          <select name="options">
            <option value="">Rating Wise</option>
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="3">4 Star</option>
            <option value="3">5 Star</option>
          </select>
        </label>
        <label className="custom-select">
          <select name="options">
            <option value="">Choose your size</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="3">XL</option>
            <option value="3">XXL</option>
            <option value="3">XXXL</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProductsFilters;
