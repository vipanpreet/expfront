import Link from "next/link";
import { addItem } from "../../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6 },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const Card = ({ singleProduct, addItem }) => {
  const handleButton = () => {
    addItem({ singleProduct });
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="card"
    >
      <div className="card--img">
        <motion.img
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          src="assets/products/shirt3.jpg"
          alt=""
        />
      </div>
      <div className="card__hover">
        <a
          className="card__hover--item card__hover--cart"
          onClick={handleButton}
        >
          <ion-icon name="cart-outline"></ion-icon>
        </a>
        <a href="#!" className="card__hover--item card__hover--wish">
          <ion-icon name="heart"></ion-icon>
        </a>

        <a href="#!" className="card__hover--item card__hover--delivery">
          <ion-icon name="flash"></ion-icon>
          {/* <!-- <ion-icon name="flash-off"></ion-icon> --> */}
        </a>
      </div>

      <motion.div variants={stagger} className="card__body">
        <div className="card--view">
          <Link
            href="/details/[productId]"
            as={`/details/${singleProduct.slug}`}
          >
            <a>View Item</a>
          </Link>
        </div>
        <motion.div className="card__body--align">
          <div className="card__body--left">
            <div className="card__body--cat">{singleProduct.brand}</div>
            <motion.a variants={fadeInUp} href="#" className="card__body--name">
              {singleProduct.name}
            </motion.a>
          </div>
          <motion.a variants={fadeInUp} className="card__body--right">
            <div className="card__body--price">${singleProduct.price}</div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// export default Card;
export default connect(null, mapDispatchToProps)(Card);
