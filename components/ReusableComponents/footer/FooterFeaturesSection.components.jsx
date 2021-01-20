const FooterFeaturesSection = ({ dark }) => {
  return (
    <section className={`section-features`}>
      <div className={`feature ${dark ? "bg-black text-white" : ""}`}>
        <div className="feature-item">
          <div className="feature-item--icon">
            <ion-icon name="car-sport-outline"></ion-icon>
          </div>
          <div className="feature-item__body">
            <h1>Lightning delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-item--icon">
            <ion-icon name="headset-outline"></ion-icon>
          </div>
          <div className="feature-item__body">
            <h1>Customer support</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-item--icon">
            <ion-icon name="card-outline"></ion-icon>
          </div>
          <div className="feature-item__body">
            <h1>Secure payments</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterFeaturesSection;
