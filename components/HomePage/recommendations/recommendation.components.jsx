import { useState } from "react";
import Card from "../../ReusableComponents/single-card/card.components";

const Recommendationbox = ({ products }) => {
  return (
    <div>
      <section className="section-recommendation">
        <div className="container-xlarge mt-6 ">
          <div className="title ml-2 mb-2">Recommendations</div>

          <div className="row row-cols-2">
            {products.map((product) => {
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

export default Recommendationbox;
