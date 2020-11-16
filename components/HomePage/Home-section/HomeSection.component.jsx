const HomeSection = () => {
  return (
    <section className="section-categories mt-2">
      <div className="container-fluid">
        <div className="category--wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="category">
                <div className="category__img">
                  <img src="/assets/cat/uppers.jpg" alt="" />
                </div>
                <div className="category__body">
                  <a className="category__body--link" href="#">
                    Upperwear
                  </a>
                  <h1>Visit Collection</h1>
                  <div>
                    <span>T shirt</span>
                    <span>Polos</span>
                    <span>Shirts</span>
                    <span>Hoodies</span> and more..
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category">
                <div className="category__img">
                  <img src="/assets/cat/lowers.jpg" alt="" />
                </div>
                <div className="category__body">
                  <a className="category__body--link" href="#">
                    Lowers
                  </a>
                  <h1>Cute Pants shop</h1>
                  <div>
                    <span>Jeans</span>
                    <span>Pants</span>
                    <span>Shorts</span>
                    <span>Skirts</span> and more..
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category">
                <div className="category__img">
                  <img src="/assets/cat/accessorie.jpg" alt="" />
                </div>
                <div className="category__body">
                  <a className="category__body--link" href="#">
                    Accessories
                  </a>
                  <h1>Everything you want</h1>
                  <div>
                    <span>Jewellery</span>
                    <span>Wallets</span>
                    <span>Watches</span>
                    <span>Belts</span> and more..
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
