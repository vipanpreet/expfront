const HomeThemesBanner = () => {
  return (
    <div>
      <section className="section-homethemes">
        <div className="subtitle text-upper text-center">Shop by Themes</div>
        <div className="container-xlarge mt-6">
          <div className="row">
            <div className="col-md-4">
              <div className="themecard themecard__active">
                <div className="themecard--container">
                  <div className="text-white subtitle">Shop in activewear</div>
                  <div className="mt-3">
                    <a className="btn btn--white" href="#">
                      Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="themecard themecard__office">
                <div className="themecard--container">
                  <div className="subtitle">Shop in officewear</div>
                  <div className="mt-3">
                    <a className="btn btn--font" href="#">
                      Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="themecard themecard__party">
                <div className="themecard--container">
                  <div className="subtitle">Shop in partywear</div>
                  <div className="mt-3">
                    <a className="btn btn--font" href="#">
                      Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeThemesBanner;
