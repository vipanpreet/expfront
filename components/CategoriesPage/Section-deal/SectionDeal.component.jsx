import React from "react";

const SectionDeal = () => {
  return (
    <section className="section-deal">
      <div className="row">
        <div className="featured-card">
          <div className="featured-card--left">
            <div className="featured-card__full">
              <div className="featured-card__full--container">
                <h4>Special Offer</h4>
                <h1>This weekend most wanted</h1>
                <div>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-card--right">
            <div className="featured-card__half featured-card__half--1">
              <div className="featured-card__half--container">
                <h4>Limited time</h4>
                <h1>30% off on cool office wear</h1>
                <div>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="featured-card__half featured-card__half--2">
              <div className="featured-card__half--container">
                <h4>users love</h4>
                <h1>Cool shades of clothing</h1>
                <div>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionDeal;
