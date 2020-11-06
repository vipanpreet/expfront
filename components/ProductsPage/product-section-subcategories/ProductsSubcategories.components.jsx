const ProductsSubcategories = () => {
  return (
    <div>
      <section className="section-subcategories mt">
        <div className="container-large">
          <div className="row">
            <div className="col-lg-2">
              <div className="subcat">
                <div className="subcat--img">
                  <img src="/assets/glasses.png" alt="{category.name}" />
                </div>
                <div className="subcat--body">
                  <a className="subcat--title" href="#">
                    <p>Shop</p>
                    Sunglasses
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="subcat">
                <div className="subcat--img">
                  <img src="/assets/accessories.jpg" alt="{category.name}" />
                </div>
                <div className="subcat--body">
                  <a className="subcat--title" href="#">
                    <p>Shop</p>
                    accessories
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="subcat">
                <div className="subcat--img">
                  <img src="/assets/nail_polish.png" alt="{category.name}" />
                </div>
                <div className="subcat--body">
                  <a className="subcat--title" href="#">
                    <p>Shop</p>
                    NailPolish
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="subcat">
                <div className="subcat--img">
                  <img src="/assets/handbags.png" alt="{category.name}" />
                </div>
                <div className="subcat--body">
                  <a className="subcat--title" href="#">
                    <p>Shop</p>
                    Handbags
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="subcat">
                <div className="subcat--img">
                  <img src="/assets/denims.png" alt="{category.name}" />
                </div>
                <div className="subcat--body">
                  <a className="subcat--title" href="#">
                    <p>Shop</p>
                    Denimwares
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="subcat">
                <div className="subcat--img">
                  <img src="/assets/shorts.png" alt="{category.name}" />
                </div>
                <div className="subcat--body">
                  <a className="subcat--title" href="#">
                    <p>Shop</p>
                    Shorts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSubcategories;
