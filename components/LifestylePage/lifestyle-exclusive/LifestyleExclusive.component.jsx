const LifestyleExclusive = () => {
  return (
    <section className="section-exclusive">
      <div className="container-large">
        <div className="container-divide w-50">
          <div>
            <div className="img-res">
              <img src="/assets/offers/exclusive.jpg" alt="" />
            </div>
          </div>
          <div className="no-border">
            <h1 className="title-special">
              Exclusive <br />
              deals
            </h1>
            <div className="subtitle text-upper __300 mt-2">
              Glass bottle of perfume
            </div>
            <div className="para mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum eveniet quidem dolores natus ratione nulla, delectus
              consequuntur necessitatibus excepturi tenetur placeat esse sit
              deleniti earum minus modi quaerat enim aut.
            </div>
            <div className="mt-2">
              <a href="#" className="btn btn--primary btn--underline">
                See Deal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleExclusive;
