import { useState, useRef } from "react";
import Card from "../../ReusableComponents/single-card/card.components";

const HomeRecommendationBox = ({ products }) => {
  return (
    <div>
      <section className="section-recommendation ">
        <div className="container-xlarge mt-6 ">
          <div className="d-flex justify-space">
            <div className="title mb-2 ml-2">Recommendations</div>
            <div>
              <span className="recommended-prev">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
              <span className="recommended-next">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </div>
          </div>

          <div className="row">
            {products.slice(0, 10).map((product) => {
              return (
                <div key={product._id} className="col-md-2">
                  <Card singleProduct={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeRecommendationBox;
