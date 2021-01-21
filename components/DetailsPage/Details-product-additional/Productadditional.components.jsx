import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "../../../redux/products/products.actions";
import { setAlert } from "../../../redux/Alert/alert.actions";

import Moment from "react-moment";
import UserRating from "../Details-rating/UserRating.component";
// islogin

const Productadditional = ({ userInfo, singleProduct }) => {
  const [alreadyCommented, setAlreadyCommented] = useState(false);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();



  useEffect(() => {
    if (singleProduct.reviews.find((x) => x.user === userInfo.id)) {
      setAlreadyCommented(true);
    }
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRating(singleProduct._id, rating, comment));
    dispatch(setAlert("Review will appear later", "success", 2500));
  };

  return (
    <div class="productdetails">
      <div class="container-xlarge">
        <div class="productdetails__description">
          <div class="title __600">Description</div>
          <div>
            <h3>
              Red and white night suit consists of t-shirt and pyjamas Red and
              white printed t-shirt, has a round neck, short sleeves A pair of
              red and white printed pyjamas, has drawstring closure, two pockets
            </h3>
            <br />
            <h3>
              <b>Size & Fit</b>
            </h3>
            <h3>The model (height 5'8') is wearing a size S</h3>
            <br />
            <h3>
              <b>Material & Care</b>
            </h3>
            <h3>
              Top fabric: 52% cotton, 48% polyester Bottom fabric: 52% cotton,
              48% polyester Machine-wash
            </h3>
          </div>
        </div>
        <div class="productdetails__specification mt-3">
          <div class="d-flex">
            <div class="title __600">Composition:</div>
            <div class="title __400">{singleProduct.composition}</div>
          </div>
        </div>
        <div class="productdetails__reviews mt-3 mb">
          <div class="title __600">
            {alreadyCommented ? "You have already reviewed" : "User Reviews"}
          </div>
          <div class="reviews-sys">
            {userInfo && userInfo.length > 0 && !alreadyCommented ? (
              <div class="review-sys__form">
                <div class="form">
                  <input
                    type="text"
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="add review here"
                    value={comment}
                  />
                  <select
                    name="rating"
                    value={rating}
                    id=""
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="5">5 stars</option>
                    <option value="4">4 stars</option>
                    <option value="3">3 stars</option>
                    <option value="2">2 stars</option>
                    <option value="1">1 stars</option>
                  </select>
                </div>
                <div class="mt-2">
                  <button onClick={submitHandler} class="btn btn--cream">
                    Add Review
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div class={`review-sys__reviews ${userInfo && userInfo.length > 0 ? "mt-4" : ""}`}>
              <div class="review-sys__reviews--title">
                {singleProduct.numReviews} comment on {singleProduct.name}
              </div>
              {singleProduct.reviews.length > 0 ? (
                <>
                  {singleProduct.reviews.map((review) => (
                    <div key={review._id} class="review-sys__item">
                      <div class="review-sys__item--user">
                        <span className="text-upper">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div class="review-sys__item__body">
                        <div class="review-sys__item__body--name">
                          {review.name}
                        </div>
                        <div class="review-sys__item__body__rating">
                          <div class="review-sys__item__body__rating--stars">
                            <UserRating
                              key={review._id}
                              value={review.rating}
                            />
                          </div>
                          <p>
                            <Moment format="DD-MM-YYYY">
                              {review.createdAt}
                            </Moment>
                          </p>
                        </div>
                        <div class="review-sys__item__body--desc">
                          <p class="para">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productadditional;
