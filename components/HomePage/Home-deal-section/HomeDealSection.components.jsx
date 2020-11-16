const HomeDealSection = () => {
  return (
    <section className="section-dealoftheday">
      <div className="container-fluid">
        <div className="dealoftheday">
          <div className="dealoftheday--img">
            <img src="/assets/sections/section-deal.jpg" alt="" />
          </div>
          <div className="dealoftheday__body">
            <div className="title">Deal of the day</div>
            <div className="dealoftheday__body--name">
              the perfect complete set of clothing
            </div>
            <div className="para mt-2">
              Designed with our most technical fabrication, DO Os products are
              made to keep you warm and dry in harsh weather conditions. From
              lightweight windbreakers to heavier shells, explore the collection
              of weather-resistant jackets & more.
            </div>
            <div className="mt-3">
              <a className="btn btn--primary" href="#">
                Check out
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDealSection;
