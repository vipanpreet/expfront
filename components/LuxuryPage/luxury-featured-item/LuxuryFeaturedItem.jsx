import React from "react";

const LuxuryFeaturedItem = () => {
  return (
    <section className="section-featured-item">
      <div className="featured-item-container">
        <div className="featured-item">
          <div className="featured-item--img">
            <img src="/assets/luxury/featured/item1.webp" alt="" />
          </div>
          <div className="featured-item--body">
            <h4>watches</h4>
            <h1>Luxurious Watch</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              voluptate, excepturi praesentium quis blanditiis vel optio laborum
              eligendi similique distinctio explicabo autem natus quaerat.
            </p>
            <div className="mt-2">
              <a href="#" className="btn btn--arrow btn--luxury-gold">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item--img">
            <img src="/assets/luxury/featured/item2.webp" alt="" />
          </div>
          <div className="featured-item--body">
            <h4>perfumes</h4>
            <h1>Luxurious Perfume</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              voluptate, excepturi praesentium quis blanditiis vel optio laborum
              eligendi similique distinctio explicabo autem natus quaerat.
            </p>
            <div className="mt-2">
              <a href="#" className="btn btn--arrow btn--luxury-gold">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryFeaturedItem;
