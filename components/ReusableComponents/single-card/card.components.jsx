import { addItemWishlist } from "../../../redux/profile/profile.actions";
import { useDispatch, useSelector } from "react-redux";
import userRating from "../../DetailsPage/Details-rating/UserRating.component";
import "animate.css";
import UserRating from "../../DetailsPage/Details-rating/UserRating.component";

const Card = ({ singleProduct, col12, col3, windowDimensions }) => {
  const dispatch = useDispatch();
  const lifestyleState = useSelector((state) => state.lifestyleState);
  const { storeType, department } = lifestyleState; // will be used somewhere else

  const handleWishlist = (id) => {
    dispatch(addItemWishlist(id));
  };

  return (
    <div className={`card animate__animated animate__fadeIn ${department}`}>
      <div className="card--inner">
        <div className="card__img">
          <img
            src={singleProduct.images[0] && singleProduct.images[0].url}
            alt=""
          />
          <div className="card__img--type">L</div>
        </div>

        <div className="card__body">
          <div className="card__body--brand">{singleProduct.brand}</div>
          <div className="card__body--name">{singleProduct.name}</div>
          <div className="card__hover">
            <div className="card__hover--wrapper">
              <div class="card__hover--rating">
                <UserRating value={singleProduct.rating} />
              </div>
              <div className="card__hover--desc">
                {col12
                  ? windowDimensions.width <= 1025
                    ? singleProduct.description.slice(0, 50)
                    : singleProduct.description.slice(0, 90)
                  : singleProduct.description.slice(0, 90)}
              </div>
              <div className="card__hover__btns">
                <a
                  onClick={() => handleWishlist(singleProduct._id)}
                  href="#!"
                  className="card__hover__btns--wishlist"
                >
                  <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a
                  href={`/details/${singleProduct._id}`}
                  target="_blank"
                  as={`/details/${singleProduct._id}`}
                  className="card__hover__btns--showproduct link"
                >
                  {col12 ? (
                    <a
                      style={{ marginLeft: 0, paddingLeft: 0 }}
                      className="btn btn--primary btn--underline"
                    >
                      Show this product
                    </a>
                  ) : (
                    "View"
                  )}
                </a>
                {col12 ? null : (
                  <a href="#" className="card__hover__btns--options">
                    <ion-icon name="options-outline"></ion-icon>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="card__body--price">AUD {singleProduct.price}</div>
        </div>
      </div>
    </div>
  );
};

// export default Card;
export default Card;
