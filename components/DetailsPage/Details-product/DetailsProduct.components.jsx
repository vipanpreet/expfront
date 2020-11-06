import Link from "next/link";
import { addItem } from "../../../redux/cart/cart.actions";
import { connect } from "react-redux";
import Productadditional from "../Details-product-additional/Productadditional.components";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInRight = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.6,
      delay: 0.2,
      ease: easing,
    },
  },
};
const DetailsProduct = ({ addItem, singleProduct }) => {
  const [width, setWidth] = useState(null);
  const imgref = useRef(null);

  console.log(singleProduct);
  useLayoutEffect(() => {
    // setTimeout(() => {
    //   setWidth(imgref.current.offsetWidth);
    //   document.getElementById("pdetails__body").style.marginLeft = `${width}px`;
    // }, 50);
  }, [width, imgref.current]);

  const handleAddToCart = () => {
    if (singleProduct) {
      addItem({ singleProduct });
    }
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="pdetails">
        <motion.div ref={imgref} className="pdetails__img">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="pdetails__img--img"
          >
            <motion.img
              className="imgrr"
              src="/assets/products/2M8A9308small - Copy.jpg"
              alt=""
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={stagger}
          id="pdetails__body"
          className="pdetails__body"
        >
          <Link href="/">
            <motion.a
              style={{ cursor: "pointer" }}
              variants={fadeInUp}
              className="pdetails__body--back"
            >
              <ion-icon name="arrow-back-outline"></ion-icon> Back to Shirts
            </motion.a>
          </Link>

          <motion.div variants={fadeInUp} className="pdetails__body--brand">
            {singleProduct.brand}
          </motion.div>
          <motion.div variants={fadeInUp} className="pdetails__body--name">
            {singleProduct.name}
          </motion.div>
          <motion.div variants={fadeInUp} className="pdetails__body--rating">
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
          </motion.div>

          <motion.div variants={fadeInUp} className="pdetails__body--price">
            <s>AUD {singleProduct.defaultPrice}</s> AUD {singleProduct.price}
          </motion.div>
          <motion.div variants={fadeInUp} className="pdetails__body--btns">
            <h4>Select Color</h4>
            <input type="radio" id="grey" name="color" value="grey" checked />
            <label htmlFor="grey">Grey</label>

            <input type="radio" id="black" name="color" value="black" />
            <label htmlFor="black">Black</label>

            <input type="radio" id="white" name="color" value="white" />
            <label htmlFor="white">White</label>
          </motion.div>
          <motion.div variants={fadeInUp} className="pdetails__body--btns">
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
          </motion.div>
          <motion.div variants={fadeInUp} className="pdetails__body--category">
            Category: <span>{singleProduct.category}</span> <a href=""></a>
          </motion.div>

          <motion.div variants={fadeInRight} className="paddtocart">
            <div class="paddtocart__share">
              <div>
                <a href="#">
                  <ion-icon name="share-social"></ion-icon>
                </a>
              </div>
            </div>
            <div class="paddtocart__quantity">
              <span>Quantity:</span>
              <div>1</div>
              <div class="paddtocart__quantity--btn">+</div>
            </div>
            <div class="paddtocart__buy">
              <div class="paddtocart__buy--buy">
                <button class="paddtocart__buy--buy--wish">
                  <ion-icon name="heart"></ion-icon>
                </button>
                <button class="paddtocart__buy--buy--cart">
                  <span class="paddtocart__buy--buy--cart--span">
                    Add to cart
                  </span>
                  <ion-icon name="bag"></ion-icon>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product Others */}
          <motion.div variants={fadeInUp} className="pothers mt-6">
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
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// export default Productdetail;
export default connect(null, mapDispatchToProps)(DetailsProduct);
