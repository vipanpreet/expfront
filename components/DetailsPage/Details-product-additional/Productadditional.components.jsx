import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "../../../redux/products/products.actions";
import { setAlert } from "../../../redux/Alert/alert.actions";

import Moment from "react-moment";
import UserRating from "../Details-rating/UserRating.component";

const Productadditional = ({ singleProduct }) => {
  const [alreadyCommented, setAlreadyCommented] = useState(null);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const { message, error } = productsState;

  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;
  useEffect(() => {
    let aDone = singleProduct.reviews.find((x) => x.user === userInfo.id);
    console.log(aDone);
    setAlreadyCommented(aDone);
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRating(singleProduct._id, rating, comment));
    dispatch(setAlert("Review will appear later", "success", 2500));
  };

  const [detailsActive, setDetailsActive] = useState(true);
  const [additionalsActive, setAdditionalsActive] = useState(false);
  const [reviewsActive, setReviewsActive] = useState(false);

  const openDetails = () => {
    setDetailsActive(true);
    setAdditionalsActive(false);
    setReviewsActive(false);
  };
  const openAdditionals = () => {
    setDetailsActive(false);
    setAdditionalsActive(true);
    setReviewsActive(false);
  };
  const openReviews = () => {
    setDetailsActive(false);
    setAdditionalsActive(false);
    setReviewsActive(true);
  };

  return (
    <div className="pothers mt-6">
      <div className="pothers__menu">
        <li
          style={{ cursor: "pointer" }}
          className={`pothers__menu--item ${detailsActive ? "active" : ""}`}
          onClick={openDetails}
        >
          Description
        </li>
        <li
          style={{ cursor: "pointer" }}
          className={`pothers__menu--item  ${
            additionalsActive ? "active" : ""
          }`}
          onClick={openAdditionals}
        >
          Additional Details
        </li>
        <li
          style={{ cursor: "pointer" }}
          className={`pothers__menu--item  ${reviewsActive ? "active" : ""}`}
          onClick={openReviews}
        >
          Reviews
        </li>
      </div>
      <div className="pothers__body">
        {/* <!-- ------- PANEL 1 DESCRIPTION --------- --> */}
        {detailsActive && (
          <div className="pothers__body--item pothers__body--desc display-block">
            {singleProduct.description}
          </div>
        )}
        {/* <!-- ------- PANEL 2 ADDITIONAL --------- --> */}
        {additionalsActive && (
          <div className="pothers__body--item pothers__body--add display-block">
            Molestiae harum voluptatibus quas, exercitationem, amet delectus
            quam nihil atque iste tempora illo?
          </div>
        )}

        {/* <!-- ------- PANEL 3 REVIEWS --------- --> */}
        {reviewsActive && (
          <div className="pothers__body--item pothers__body--rev display-block">
            <h1 className="title">{message && message}</h1>
            <h1 className="title">{error && error}</h1>
            {alreadyCommented !== undefined ? (
              <div className="bg-cream p-3 mt-2">
                <div className="title __300 text-center">
                  Already Reviewed by you
                </div>
              </div>
            ) : (
              <div className="bg-cream p-3 mt-2">
                <div className="title __300 ">Add a Review</div>
                <div className="subheading mt-3">Your Rating</div>
                <select
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  name=""
                  className="select"
                  id=""
                >
                  <option value="1">1 star</option>
                  <option value="2">2 stars</option>
                  <option value="3">3 stars</option>
                  <option value="4">4 stars</option>
                  <option value="5">5 stars</option>
                </select>
                <div className="subheading mt-3">Your Review</div>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  rows="5"
                  value={comment}
                  className="input bg-white"
                ></textarea>
                <div className="mt-3">
                  <button
                    onClick={submitHandler}
                    className="btn btn--primary btn--simple"
                    href="#"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            {/* <!-- Reviews --> */}
            <div className="preview">
              <div className="title">
                {singleProduct.numReviews}
                comment on {singleProduct.name}
              </div>

              {/* <!-- REVIEWS FROM DB --> */}
              {singleProduct.reviews.length > 0 ? (
                <>
                  {singleProduct.reviews.map((review) => (
                    <div key={review._id} className="preview-item">
                      <div className="preview-item__body">
                        <div className="preview-item__body--stars">
                          <UserRating key={review._id} value={review.rating} />
                        </div>
                        <div className="preview-item__body--username">
                          <span>{review.name}</span>
                          <span>
                            <Moment format="YYYY/MM/DD">
                              {review.createdAt}
                            </Moment>
                          </span>
                        </div>
                        <div className="para">{review.comment}</div>
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productadditional;
