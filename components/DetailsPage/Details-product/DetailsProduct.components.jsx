import Link from "next/link";

import { addItem } from "../../../redux/cart/cart.actions";
import { addItemWishlist } from "../../../redux/profile/profile.actions";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../redux/Alert/alert.actions";

import Productadditional from "../Details-product-additional/Productadditional.components";
import UserRating from "../Details-rating/UserRating.component";

const DetailsProduct = ({ singleProduct }) => {
  const dispatch = useDispatch();
  const lifestyleState = useSelector((state) => state.storeSelectState);
  const { storeType, department } = lifestyleState;

  const handleAddToCart = () => {
    if (singleProduct) {
      let cart = [];
      const cartLocal = JSON.parse(localStorage.getItem("cart"));
      if (cartLocal) {
        for (var i = 0; i < cartLocal.products.length; i++) {
          cart.push({
            ...cartLocal.products[i].product,
            count: cartLocal.products[i].count,
          });
        }
      }
      // checking if the product is already in the localstorage
      const index = cart.findIndex(
        (element) => element._id == singleProduct._id
      );
      if (index >= 0) {
        // if the product is there in the localstorage than increase its count
        var newCount = cart[index].count + 1;
        cart[index] = { ...cart[index], count: newCount };
      } else {
        singleProduct["count"] = 1;
        cart.push(singleProduct);
      }
      // calling the action to add item to cart
      dispatch(addItem(cart));
    }
    dispatch(setAlert("Adding to Cart", "success", 2500));
  };

  const handleAddToWishlist = (id) => {
    dispatch(addItemWishlist(id));
  };

  return (
    <>
      <div className="pdetails">
        <div className="pdetails__img">
          <div className="pdetails__img--img">
            <img
              src={singleProduct.images[0] && singleProduct.images[0].url}
              alt=""
            />
          </div>
        </div>
        <div id="pdetails__body" className="pdetails__body">
          <Link href={`/${storeType}/${department}`}>
            <a style={{ cursor: "pointer" }} className="pdetails__body--back">
              <ion-icon name="arrow-back-outline"></ion-icon> Back to Shirts
            </a>
          </Link>

          <div className="pdetails__body--brand">{singleProduct.brand}</div>
          <div className="pdetails__body--name">{singleProduct.name}</div>
          <div className="pdetails__body--rating">
            <span className="pdetails__body--rating--stars">
              <UserRating value={singleProduct.rating} />
            </span>
            <span className="pdetails__body--rating--count">
              ({singleProduct.numReviews} Reviews)
            </span>
          </div>

          <div className="pdetails__body--price">
            <s>AUD {singleProduct.defaultPrice}</s> AUD {singleProduct.price}
          </div>
          <div className="pdetails__body--btns">
            <h4>Select Color</h4>
            <input
              type="radio"
              id="grey"
              name="color"
              value="grey"
              defaultChecked
            />
            <label htmlFor="grey">Grey</label>

            <input type="radio" id="black" name="color" value="black" />
            <label htmlFor="black">Black</label>

            <input type="radio" id="white" name="color" value="white" />
            <label htmlFor="white">White</label>
          </div>
          <div className="pdetails__body--btns">
            <h4>Select Size</h4>
            {singleProduct && singleProduct.sizes.length > 0 ? (
              <>
                {singleProduct.sizes.map((size) => (
                  <>
                    {size.quantity > 0 && (
                      <span key={size._id}>
                        <input
                          type="radio"
                          id={size.name}
                          name="size"
                          value={size.name}
                          defaultChecked
                        />
                        <label htmlFor={size.name}>{size.name}</label>
                      </span>
                    )}
                  </>
                ))}
              </>
            ) : (
              <>
                <input
                  type="radio"
                  id="regular"
                  name="size"
                  value="regular"
                  defaultChecked
                />
                <label htmlFor="regular">Regular</label>
              </>
            )}
          </div>
          <div className="pdetails__body--category">
            Category: <span>{singleProduct.category}</span> <a href=""></a>
          </div>

          <div className="pdetails__body__cart">
            <div className="pdetails__body__cart--buttons">
              <button
                className="btn btn--primary btn--simple mr-2"
                onClick={handleAddToCart}
              >
                Add to Bag <ion-icon name="bag-add-outline"></ion-icon>
              </button>
              <button
                className="btn btn--female btn--simple"
                onClick={() => {
                  handleAddToWishlist(singleProduct._id);
                }}
              >
                Add to wishlist <ion-icon name="list-outline"></ion-icon>
              </button>
            </div>
          </div>

          {/* Product Others */}
          <Productadditional singleProduct={singleProduct} />
        </div>
      </div>
    </>
  );
};

// export default Productdetail;
export default DetailsProduct;
