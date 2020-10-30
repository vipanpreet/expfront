import { useState } from "react";
import Card from "../../ReusableComponents/single-card/card.components";

const Trendingsection = ({ products }) => {
  // const [trending_products] = useState([
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
  // ]);

  return (
    <div>
      <section className="section-trending">
        <div className="tending-body">
          <div className="container-xlarge mt-5">
            <div className="title">Trending site wide</div>
            <div className="row no-gutters row-cols-2">
              <div class="col-md-3">
                <div class="trending-menu mt-5">
                  <li class="trending-menu--item active">Shorts</li>
                  <li class="trending-menu--item">Shoes</li>
                  <li class="trending-menu--item">Jeans</li>
                  <li class="trending-menu--item">Sunglasses</li>
                  <li class="trending-menu--item">Shirts</li>
                </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-lg-2">
                    <div class="card no-hover">
                      <div class="card--img">
                        <img src="assets/products/shirt1.jpg" alt="" />
                      </div>
                      <div class="card__body">
                        <div class="card__body--align">
                          <div class="card__body--left">
                            <div class="card__body--cat">T shirts</div>
                            <a href="#" class="card__body--name">
                              Pixy Cool Shirt{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ padding: "24px 0" }}
                      class="bg-light text-center"
                    >
                      <a class="btn btn--text" href="#">
                        See all
                      </a>
                    </div>
                  </div>
                  {products.slice(0, 3).map((product) => {
                    return (
                      <div className="col-md-3">
                        <Card singleProduct={product} key={product._id} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trendingsection;
