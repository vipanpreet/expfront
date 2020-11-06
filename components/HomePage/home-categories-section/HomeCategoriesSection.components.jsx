const HomeCategoriesSection = () => {
  return (
    <div>
      <section className="section-categories">
        <div className="categories">
          <div className="categories__sub">
            <div className="categories--uppers categories--item">
              <div>
                <a href="#">Upperwear</a>
                <p>lifestyle</p>
              </div>
            </div>
            <div className="categories__sub__small">
              <div className="categories--health categories--item">
                <div>
                  <a href="#">Health &amp; Beauty</a>
                  <p>lifestyle</p>
                </div>
              </div>
              <div className="categories--sustainable categories--item">
                <div>
                  <a href="#">Sustainable</a>
                  <p>Special</p>
                </div>
              </div>
            </div>
          </div>
          <div className="categories__sub">
            <div className="categories__sub__small">
              <div className="categories--accessories categories--item">
                <div>
                  <a href="#">Accessories</a>
                  <p>lifestyle</p>
                </div>
              </div>
              <div className="categories--footwear categories--item">
                <div>
                  <a href="#">Footwear</a>
                  <p>lifestyle</p>
                </div>
              </div>
            </div>
            <div className="categories--lowers categories--item">
              <div>
                <a href="#">Lowers</a>
                <p>lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCategoriesSection;
