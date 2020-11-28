const ProductSidebar = () => {
  return (
    <div>
      <div className="sidebar">
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
            <li className="sidebar--item">
              <a href="#">Upperwear</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Lowers</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Accessories</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Health &amp; Beauty</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Footwear</a>
            </li>
            <li className="sidebar--item sidebar--sustainable">
              <a href="#">Sustainable</a>
            </li>
          </div>
        </div>
        <div className="sidebar--group">
          <div className="title">SubCategories</div>
          <div className="mt-2">
            <li className="sidebar--item">
              <a href="#">T shirts</a>
            </li>
            <li className="sidebar--item">
              <a href="#">shirts</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Tops</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Polos</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Cardigans</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Knitwares</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Hoodies</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Denims</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Jacket & Blazers</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Dresses</a>
            </li>
            <li className="sidebar--item">
              <a href="#">Jumpers</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
