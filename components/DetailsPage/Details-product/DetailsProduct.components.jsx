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
      <div class="product">
        <div class="product__images">
          <div class="product__images--container">
            <div class="product__images--img">
              <img
                src={singleProduct.images[0] && singleProduct.images[0].url}
                alt=""
              />
            </div>
            <div class="product__images-nav">
              <span class="product__body-nav--back">
                <ion-icon name="chevron-back"></ion-icon>
              </span>
              <span class="product__body-nav--forward">
                <ion-icon name="chevron-forward"></ion-icon>
              </span>
            </div>
          </div>
        </div>
        <div class="product__body">
          <div class="product__body-nav">
            <span class="product__body-nav--back"> back </span>/
            <span class="product__body-nav--forward"> next </span>
          </div>
          <Link href={`/${storeType}/${department}`}>
            <h2 class="product__body--back">Back to Shirts</h2>
          </Link>
          <h4 class="product__body--price">${singleProduct.price}</h4>
          <h1 class="product__body--name">{singleProduct.name}</h1>
          <div class="product__body__rating">
            <span class="product__body__rating--stars">
              <UserRating value={singleProduct.rating} />
            </span>
            <span class="product__body__rating--num">
              {singleProduct.rating} / 5.0
            </span>
          </div>
          <h4 class="product__body--brand">
            <span>Brand</span> louis vuitton
          </h4>
          <p class="product__body--description">
            Red and white night suit consists of t-shirt and pyjamas Red and
            white printed t-shirt, has a round neck, short sleeves A pair of red
            and white printed pyjamas, has drawstring closure, two pockets..
          </p>

          <div class="product__body__sizes">
            <span class="product__body__sizes--title"> Select Sizes: </span>
            <span class="product__body__sizes--container">
              {singleProduct && singleProduct.sizes.length > 0 ? (
                <>
                  {singleProduct.sizes.map((size) => (
                    <>
                      {size.quantity > 0 && (
                        <span key={size._id}>
                          <input
                            type="radio"
                            name="size"
                            id={size.name}
                            value={size.name}
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
                  <label htmlFor="regular">REGULAR</label>
                </>
              )}
            </span>
          </div>
          <div class="product__body--offers">
            This is product is already at its best price
          </div>
          <div class="product__body--pin">
            <span class="product__body__sizes--title">Check Availibility:</span>
            <section class="input-container">
              <label>
                <input type="text" placeholder="Pincode" name="product_name" />
                <span>Pincode</span>
              </label>
            </section>
          </div>
          <div class="product__body__usage">
            <span class="product__body__sizes--title">How To Use:</span>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos
                ad saepe quisquam eum impedit asperiores quas nobis
                reprehenderit debitis accusantium obcaecati officiis recusandae
                maxime ipsa, soluta eligendi quis neque!
              </p>
              <ul>
                <li>Shake well</li>
                <li>Squeeze bottle and rub some syrup on your palm</li>
                <li>apply it on your face gently</li>
                <li>leave for 5 minutes &amp; wash your face</li>
              </ul>
            </div>
          </div>
          <div class="mt-5">
            <button class="product__body--btn mr-2" onClick={handleAddToCart}>
              Add to Bag <ion-icon name="bag-outline"></ion-icon>
            </button>
            <button
              class="product__body--btn"
              onClick={() => {
                handleAddToWishlist(singleProduct._id);
              }}
            >
              Wishlist <ion-icon name="heart-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <Productadditional singleProduct={singleProduct} />
    </>
  );
};

// export default Productdetail;
export default DetailsProduct;
