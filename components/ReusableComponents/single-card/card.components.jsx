import Link from "next/link";
import { addItem } from "../../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { useState } from "react";

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const Card = ({ singleProduct, addItem }) => {
  const handleButton = () => {
    addItem({ singleProduct });
  };
  return (
    <Link href="/details/[productId]" as={`/details/${singleProduct._id}`}>
      <div className="card">
        <div className="card--img">
          <img
            src={singleProduct.images[0] && singleProduct.images[0].url}
            alt=""
          />
          <a href="#!" className="card--img--cart">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
        </div>
        <div className="card__body">
          <div className="card__body--align">
            <div className="card__body--left">
              <div className="card__body--cat">T shirts</div>
              <a href="#" className="card__body--name">
                {singleProduct.name}
              </a>
            </div>
            <div className="card__body--right">
              <div className="card__body--price">${singleProduct.price}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    // <div className="card">
    //   <div className="card--img">
    //     <img src="/assets/products/shirt3.jpg" alt="" />
    //   </div>
    //   <div className="card__hover">
    //     <a
    //       className="card__hover--item card__hover--cart"
    //       onClick={handleButton}
    //     >
    //       <ion-icon name="cart-outline"></ion-icon>
    //     </a>
    //     <a href="#!" className="card__hover--item card__hover--wish">
    //       <ion-icon name="heart"></ion-icon>
    //     </a>

    //     <a href="#!" className="card__hover--item card__hover--delivery">
    //       <ion-icon name="flash"></ion-icon>
    //       {/* <!-- <ion-icon name="flash-off"></ion-icon> --> */}
    //     </a>
    //   </div>

    //   <div className="card__body">
    //     <div className="card--view">
    //       <Link
    //         href="/details/[productId]"
    //         as={`/details/${singleProduct._id}`}
    //       >
    //         <a>View Item</a>
    //       </Link>
    //     </div>
    //     <div className="card__body--align">
    //       <div className="card__body--left">
    //         <div className="card__body--cat">{singleProduct.brand}</div>
    //         <a href="#" className="card__body--name">
    //           {singleProduct.name}
    //         </a>
    //       </div>
    //       <a className="card__body--right">
    //         <div className="card__body--price">${singleProduct.price}</div>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

// export default Card;
export default connect(null, mapDispatchToProps)(Card);
