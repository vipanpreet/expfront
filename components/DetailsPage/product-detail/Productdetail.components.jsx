import Productimages from "../../HomePage/product-images/Productimages.components";
import { addItem } from "../../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Productdetail = ({ addItem, singleProduct }) => {
  // useEffect(() => {
  //   setProduct(products.find((item) => item.id === id));
  // });

  // const [products] = useState([
  //   {
  //     id: "0000001",
  //     img_src: "assets/products/shirt1.jpg",
  //     Brand: "Gucci",
  //     name: "Lined Top",
  //     price: "100.12",
  //   },
  //   {
  //     id: "0000002",
  //     img_src: "assets/products/shirt2.jpg",
  //     Brand: "U.S.Polo",
  //     name: "Blue Shirt",
  //     price: "45.26",
  //   },
  //   {
  //     id: "0000003",
  //     img_src: "assets/products/shirt3.jpg",
  //     Brand: "GAP",
  //     name: "Navy Blue Polo T-shirt",
  //     price: "75",
  //   },
  //   {
  //     id: "0000004",
  //     img_src: "assets/products/shirt4.jpg",
  //     Brand: "Armani",
  //     name: "Black Leather Jacket",
  //     price: "250",
  //   },
  //   {
  //     id: "0000005",
  //     img_src: "assets/products/customizable-mug.jpg",
  //     Brand: "Jack & Jones",
  //     name: "Printed T-shirt",
  //     price: "30",
  //   },
  //   {
  //     id: "0000006",
  //     img_src: "assets/products/mountain-fox-notebook.jpg",
  //     Brand: "Armani",
  //     name: "Black slippers",
  //     price: "150",
  //   },
  //   {
  //     id: "0000007",
  //     img_src: "assets/products/mug-the-best-is-yet-to-come.jpg",
  //     Brand: "Zara",
  //     name: "Kurta round neck",
  //     price: "90",
  //   },
  //   {
  //     id: "0000008",
  //     img_src: "assets/products/pack-mug-framed-poster.jpg",
  //     Brand: "Gucci",
  //     name: "Pixy cool Shirt",
  //     price: "120.42",
  //   },
  // ]);
  // const [product_info, setProduct] = useState({});

  const handleAddToCart = () => {
    if (singleProduct) {
      addItem({ singleProduct });
    }
  };

  return (
    <div className="pdetails mt-2">
      <div className="row">
        <div className="col-lg-5">
          <Productimages />
        </div>

        <div className="col-lg-7">
          <div className="pdetails__body">
            <div className="pdetails__body--title">{singleProduct.name}</div>
            <div className="pdetails__body__rating">
              <span className="pdetails__body__rating--stars">
                <embed src="/assets/static/icon-star-full.svg" />
                <embed src="/assets/static/icon-star-full.svg" />
                <embed src="/assets/static/icon-star-full.svg" />
                <embed src="/assets/static/icon-star-full.svg" />
                <embed src="/assets/static/icon-star-outline.svg" />
              </span>
              <span className="pdetails__body__rating--count">3 Reviews</span>
            </div>
            <div className="split"></div>
            <div className="pdetails__body--price">
              <span className="old-price">$200</span>
              <span className="new-price">${singleProduct.price}</span>
            </div>
            <div className="pdetails__body--details">
              className Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odit beatae dolorum deleniti officiis exercitationem, minima
              debitis. Sequi illum culpa consequuntur, quisquam delectus sed
              odio laudantium ipsum repudiandae doloribus repellat et.
            </div>
            <div className="pdetails__body--availibility mt-5">
              <div className="av">
                Availibility: <span>available</span>
              </div>
              <div className="de">
                One Day Delivery available <ion-icon name="flash"></ion-icon>
              </div>
            </div>
            <div className="pdetails__body--colors">
              <span>colors :</span>
              <select className="select" name="" id="">
                <option value="">Red</option>
                <option value="">White</option>
                <option value="">Black</option>
              </select>
            </div>
            <div className="pdetails__body__sizes">
              <span>sizes :</span>
              <select className="select" name="" id="">
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>
              <div className="pdetails__body__sizes--guide">
                <a href="#">
                  {" "}
                  <ion-icon name="list-outline"></ion-icon> Size Guide{" "}
                </a>
              </div>
            </div>
            <div className="pdetails__body--cart">
              <button onClick={handleAddToCart}>
                <span>Add to Cart</span>
                <ion-icon name="cart"></ion-icon>
              </button>
              <button className="bg-font">
                <span>Add to wishlist</span>
                <ion-icon name="heart"></ion-icon>
              </button>
            </div>
            <div className="pdetails__body__extras">
              <div className="pdetails__body__extras--cat">
                <span>Category:</span> T Shirts
              </div>
              <div className="pdetails__body__extras--share">
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="mail-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="link-outline"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// export default Productdetail;
export default connect(null, mapDispatchToProps)(Productdetail);
