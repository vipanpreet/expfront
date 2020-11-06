const HomeHeader = () => {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="header--title animate__animated animate__fadeInDown">
            Brands and fashion you adore
          </div>
          <div className="header--subtitle animate__animated animate__fadeIn">
            upto 15% OFF
          </div>
          <div className="header--starting animate__animated animate__fadeInUp">
            Starting AT $<span>149.99</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
