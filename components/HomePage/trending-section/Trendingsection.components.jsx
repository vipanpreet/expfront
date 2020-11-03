import Card from "../../ReusableComponents/single-card/card.components";

const Trendingsection = ({ products }) => {
  return (
    <div>
      <section className="section-trending">
        <div className="tending-body">
          <div className="container-xlarge mt-5">
            <div className="title">Trending site wide</div>
            <div className="row no-gutters row-cols-2">
              <div className="col-lg-3">
                <div className="trending-menu mt-5">
                  <li className="trending-menu--item active">Shorts</li>
                  <li className="trending-menu--item">Shoes</li>
                  <li className="trending-menu--item">Jeans</li>
                  <li className="trending-menu--item">Sunglasses</li>
                  <li className="trending-menu--item">Shirts</li>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row row-cols-2">
                  <div className="col-lg-2">
                    <div className="card no-hover">
                      <div className="card--img">
                        <img src="assets/products/shirt1.jpg" alt="" />
                      </div>
                      <div className="card__body">
                        <div className="card__body--align">
                          <div className="card__body--left">
                            <div className="card__body--cat">T shirts</div>
                            <a href="#" className="card__body--name">
                              Pixy Cool Shirt{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ padding: "24px 0" }}
                      className="bg-light text-center"
                    >
                      <a className="btn btn--text" href="#">
                        See all
                      </a>
                    </div>
                  </div>
                  {products.slice(0, 3).map((product) => {
                    return (
                      <div className="col-md-3" key={product._id}>
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
