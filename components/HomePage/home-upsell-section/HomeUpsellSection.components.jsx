const HomeUpsellSection = () => {
  return (
    <div>
      <section className="section-oneproduct">
        <div className="section-oneproduct--img"></div>
        <div className="section-oneproduct__body">
          <h1>Cozy Inside & Outside</h1>
          <p>A perfect comibination for your beautiful steps</p>
          <div className="section-oneproduct__body--img">
            <img src="/assets/sections/bestselling.jpg" alt="" />
          </div>
          <h3>$150</h3>
          <div className="mt-4">
            <a href="#" className="btn btn--primary">
              Show product
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeUpsellSection;
