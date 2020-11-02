import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles["foot-entries"]}>
          <div className={styles.help}>
            <h3> Help & Support</h3>
            <ul className={styles["entries-list"]}>
              <li className={styles.entries}>
                <a href="#">Delivery </a>
              </li>
              <li className={styles.entries}>
                <a href="#">Returns </a>
              </li>
              <li className={styles.entries}>
                <a href="#">Cancellations</a>
              </li>
              <li className={styles.entries}>
                <a href="#">FaQ's</a>
              </li>
              <li className={styles.entries}>
                <a href="#">Track Your Order</a>
              </li>
              <li className={styles.entries}>
                <a href="#">Size Guides</a>
              </li>
              <li className={styles.entries}>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className={styles.about}>
            <h3>ARKTASTIC</h3>
            <ul className={styles["entries-list"]}>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  About Us{" "}
                </a>
              </li>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Affiliates{" "}
                </a>
              </li>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Privacy policy
                </a>
              </li>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Terms of Use
                </a>
              </li>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Terms & Conditions
                </a>
              </li>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Careers
                </a>
              </li>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Request a brand
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.gift}>
            <h3>Gift Someone</h3>
            <ul className={styles["entries-list"]}>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Send a gift{" "}
                </a>
              </li>
              <li className={styles.entries}>
                <a className={styles.links} href="#">
                  Gift cards{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <h3>Social</h3>
            <div className={styles["entries-list-social"]}>
              <img src="assets/instagram.png" alt="Instagram" />
              <img src="assets/twitter.png" alt="twitter" />
            </div>
            <div className={styles["entries-list-social"]}>
              <img src="assets/snapchat.png" alt="snapchat" />
              <img src="assets/facebook.png" alt="facebook" />
            </div>
          </div>
        </div>
        <div className={styles["bottom-line"]}>
          <div className={styles.payement}>
            <img src="assets/mc.png" alt="Master Card" />
            <img src="assets/visa.png" alt="Visa" />
            <img src="assets/ax.png" alt="American Express" />
          </div>
          <p> Copyright @2020 | ARKTASTIC.COM</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
