import Link from "next/link";
const LifestyleWomenDealSection = () => {
  return (
    <section className="section-dealoftheday rtl">
      <div className="upsell__extra">
        <img src="/assets/sections/section-upsell2.jpg" alt="" />
      </div>
      <div className="upsell-wrapper">
        <div className="upsell__body">
          <div className="subtitle font-default">
            A Unique Watch That Fits <br />
            Your Style
          </div>
          <div className="para mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            minima quibusdam consectetur eos deleniti quae aut a dolores, dicta,
            quisquam explicabo non molestias voluptas aliquid eius eum porro
            neque error.
          </div>
          <div className="mt-3">
            <a href="#" className="btn btn--female btn--arrow">
              See product
            </a>
          </div>
        </div>
        <div className="upsell__img">
          <div className="upsell__img--image">
            <img src="/assets/offers/blue watch _1.png" alt="" />
          </div>
          <div className="upsell__img--content text-center">
            <h1 className="title __300">BlueFace watch</h1>
            <h3 className="subheading">$ 250</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleWomenDealSection;
