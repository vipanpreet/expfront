import Link from "next/link";
import { addItem } from "../../../redux/cart/cart.actions";
import Productadditional from "../Details-product-additional/Productadditional.components";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DetailsProduct = ({ singleProduct }) => {
  const dispatch = useDispatch();

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
  };

  return (
    <div initial="initial" animate="animate" exit={{ opacity: 0 }}>
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
          <Link href="/">
            <a style={{ cursor: "pointer" }} className="pdetails__body--back">
              <ion-icon name="arrow-back-outline"></ion-icon> Back to Shirts
            </a>
          </Link>

          <div className="pdetails__body--brand">{singleProduct.brand}</div>
          <div className="pdetails__body--name">{singleProduct.name}</div>
          <div className="pdetails__body--rating">
            <span className="pdetails__body--rating--stars">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half"></ion-icon>
            </span>
            <span className="pdetails__body--rating--count">
              4.5 (3 Reviews)
            </span>
          </div>

          <div className="pdetails__body--price">
            <s>AUD {singleProduct.defaultPrice}</s> AUD {singleProduct.price}
          </div>
          <div className="pdetails__body--btns">
            <h4>Select Color</h4>
            <input type="radio" id="grey" name="color" value="grey" checked />
            <label htmlFor="grey">Grey</label>

            <input type="radio" id="black" name="color" value="black" />
            <label htmlFor="black">Black</label>

            <input type="radio" id="white" name="color" value="white" />
            <label htmlFor="white">White</label>
          </div>
          <div className="pdetails__body--btns">
            <h4>Select Size</h4>
            <input
              type="radio"
              id="medium"
              name="size"
              value="medium"
              checked
            />
            <label htmlFor="medium">Medium</label>

            <input type="radio" id="large" name="size" value="large" checked />
            <label htmlFor="large">Large</label>

            <input type="radio" id="xl" name="size" value="xl" />
            <label htmlFor="xl">Extra Large</label>

            <input type="radio" id="xxl" name="size" value="xxl" />
            <label htmlFor="xxl">XX Large</label>
          </div>
          <div className="pdetails__body--category">
            Category: <span>{singleProduct.category}</span> <a href=""></a>
          </div>

          <div class="pdetails__body__cart">
            <div class="pdetails__body__cart--counter">
              <span>+</span> 1 <span>-</span>
            </div>
            <div class="pdetails__body__cart--buttons">
              <button
                class="btn btn--primary btn--simple"
                onClick={handleAddToCart}
              >
                Add to Bag
              </button>
              <button class="btn btn--female btn--simple">
                Add to wishlist
              </button>
            </div>
          </div>

          {/* Product Others */}
          <div className="pothers mt-6">
            <div className="pothers__menu">
              <li className="pothers__menu--item pothers__menu--desc active">
                Description
              </li>
              <li className="pothers__menu--item pothers__menu--add">
                Additional Details
              </li>
              <li className="pothers__menu--item pothers__menu--rev">
                Reviews
              </li>
            </div>
            <div className="pothers__body">
              {/* <!-- ------- PANEL 1 DESCRIPTION --------- --> */}
              <div className="pothers__body--item pothers__body--desc display-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id
                aut dicta dolorem beatae provident molestias perferendis.
                Molestiae harum voluptatibus quas, exercitationem, amet delectus
                quam nihil atque iste tempora illo? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Unde id aut dicta dolorem beatae
                provident molestias perferendis. <br />
                <br />
                Molestiae harum voluptatibus quas, exercitationem, amet delectus
                quam nihil atque iste tempora illo? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Unde id aut dicta dolorem beatae
                provident molestias perferendis. Molestiae harum voluptatibus
                quas, exercitationem, amet delectus quam nihil atque iste
                tempora illo?
              </div>
              {/* <!-- ------- PANEL 2 ADDITIONAL --------- --> */}
              <div className="pothers__body--item pothers__body--add">
                Molestiae harum voluptatibus quas, exercitationem, amet delectus
                quam nihil atque iste tempora illo?
              </div>

              {/* <!-- ------- PANEL 3 REVIEWS --------- --> */}
              <div className="pothers__body--item pothers__body--rev">
                <div className="row">
                  <div className="col-lg-6">
                    {/* <!-- Reviews --> */}
                    <div className="preview">
                      <div className="preview--heading">
                        3 Reviews for Cream Shirt with Sleeves
                      </div>
                      {/* <!-- Review 1 --> */}
                      <div className="preview-item">
                        <div className="preview-item__img">
                          <div>
                            <img src="/assets/users/demo.jpg" alt="" />
                          </div>
                        </div>
                        <div className="preview-item__body">
                          <div className="preview-item__body--stars">
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                          </div>
                          <div className="preview-item__body--username">
                            <span>John Doe</span> <span>- 11 January 2020</span>
                          </div>
                          <div className="para">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolorum sunt est, voluptas accusantium aliquam
                            officia ab a quas.
                          </div>
                        </div>
                      </div>

                      {/* <!-- Review 2 --> */}
                      <div className="preview-item">
                        <div className="preview-item__img">
                          <div>
                            <img src="/assets/users/demo.jpg" alt="" />
                          </div>
                        </div>
                        <div className="preview-item__body">
                          <div className="preview-item__body--stars">
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-half.svg" />
                          </div>
                          <div className="preview-item__body--username">
                            <span>John Doe</span> <span>- 11 January 2020</span>
                          </div>
                          <div className="para">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolorum sunt est, voluptas accusantium aliquam
                            officia ab a quas ratione praesentium harum error,
                            pariatur cupiditate architecto impedit vitae?
                            Reiciendis, maiores laboriosam?
                          </div>
                        </div>
                      </div>

                      {/* <!-- Review 3 --> */}
                      <div className="preview-item">
                        <div className="preview-item__img">
                          <div>
                            <img src="/assets/users/demo.jpg" alt="" />
                          </div>
                        </div>
                        <div className="preview-item__body">
                          <div className="preview-item__body--stars">
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-full.svg" />
                            <embed src="assets/static/icon-star-half.svg" />
                            <embed src="assets/static/icon-star-outline.svg" />
                          </div>
                          <div className="preview-item__body--username">
                            <span>John Doe</span> <span>- 11 January 2020</span>
                          </div>
                          <div className="para">
                            Lrum error, pclassNameariatur cupiditate architecto
                            impedit vitae.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="bg-cream-light p-3 mt-3">
                      <div className="title __600">Add a Review</div>
                      <div className="subheading mt-3">Your Rating</div>
                      <select name="" className="select" id="">
                        <option value="">1 star</option>
                        <option value="">2 stars</option>
                        <option value="">3 stars</option>
                        <option value="">4 stars</option>
                        <option value="">5 stars</option>
                      </select>
                      <div className="subheading mt-3">Your Review</div>
                      <textarea rows="5" className="input bg-white"></textarea>
                      <div className="mt-3">
                        <a className="btn btn--primary" href="#">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Productdetail;
export default DetailsProduct;
