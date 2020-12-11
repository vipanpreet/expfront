import { useEffect } from "react";
import { addItemWishlist } from "../../../redux/profile/profile.actions";
import { useDispatch } from "react-redux";
import "animate.css";

const Card = ({ singleProduct, col12, col3, windowDimensions }) => {
  const dispatch = useDispatch();

  const handleWishlist = (id) => {
    dispatch(addItemWishlist(id));
  };

  return (
    <div className="card animate__animated animate__fadeIn">
      <div class="card--inner">
        <div className="card__img">
          <img
            src={singleProduct.images[0] && singleProduct.images[0].url}
            alt=""
          />
          <div class="card__img--type">L</div>
        </div>

        <div class="card__body">
          <div class="card__body--brand">{singleProduct.brand}</div>
          <div class="card__body--name">{singleProduct.name}</div>
          <div class="card__hover">
            <div class="card__hover--wrapper">
              <div class="card__hover--desc">
                {col12
                  ? windowDimensions.width <= 1025
                    ? singleProduct.description.slice(0, 50)
                    : singleProduct.description.slice(0, 240)
                  : singleProduct.description.slice(0, 120)}
              </div>
              <div class="card__hover__btns">
                <a
                  onClick={() => handleWishlist(singleProduct._id)}
                  href="#!"
                  class="card__hover__btns--wishlist"
                >
                  <ion-icon name="heart-outline"></ion-icon>
                </a>
                <div
                  href={`/details/${singleProduct._id}`}
                  target="_blank"
                  as={`/details/${singleProduct._id}`}
                  class="card__hover__btns--showproduct"
                >
                  {col12 ? (
                    <a
                      style={{ marginLeft: 0, paddingLeft: 0 }}
                      className="btn btn--primary"
                    >
                      Show this product
                    </a>
                  ) : (
                    "View"
                  )}
                </div>
                <a href="#" class="card__hover__btns--options">
                  <ion-icon name="options-outline"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div class="card__body--price">AUD {singleProduct.price}</div>
        </div>
      </div>
    </div>
  );
};

// export default Card;
export default Card;
