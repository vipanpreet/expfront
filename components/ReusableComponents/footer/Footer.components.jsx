import styles from "./Footer.module.scss";
import FooterFeatuesSection from "./FooterFeaturesSection.components";

const Footer = () => {
  return (
    <>
      <FooterFeatuesSection />
      <footer className="footer">
        <div className="container-large">
          <div className="row  row-cols-2">
            <div className="col-md-4">
              <div className="subtitle text-upper __800">arktastic</div>
              <p className="para mt-3">
                We work to bring happiness to all.
                <br />
                Arktastic
                <b>The Artist Retreat</b>
              </p>
            </div>
            <div className="col-md-2">
              <div className="menu">Explore</div>
              <div className="mt-2">
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Cancellations</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Track your order</a>
                </li>
                <li>
                  <a href="#">Size guide</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </div>
            </div>
            <div className="col-md-2">
              <div className="menu">Legal</div>
              <div className="mt-2">
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </div>
            </div>
            <div className="col-md-2">
              <div className="menu">Follow</div>
              <div className="mt-2">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </div>
            </div>
            <div className="col-md-2">
              <div className="menu">About Us</div>
              <div className="mt-2">
                <li>
                  <a href="#">Who we are?</a>
                </li>
                <li>
                  <a href="#">Request a brand</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
