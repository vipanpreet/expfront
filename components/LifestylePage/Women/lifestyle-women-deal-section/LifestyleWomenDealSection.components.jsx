import Link from "next/link";
const LifestyleWomenDealSection = () => {
  return (
    <section class="section-dealoftheday rtl">
      <div class="upsell__extra">
        <img src="/assets/sections/section-upsell2.jpg" alt="" />
      </div>
      <div class="upsell-wrapper">
        <div class="upsell__body">
          <div class="subtitle font-default">
            A Unique Watch That Fits <br />
            Your Style
          </div>
          <div class="para mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            minima quibusdam consectetur eos deleniti quae aut a dolores, dicta,
            quisquam explicabo non molestias voluptas aliquid eius eum porro
            neque error.
          </div>
          <div class="mt-3">
            <a href="#" class="btn btn--female btn--arrow">
              See product
            </a>
          </div>
        </div>
        <div class="upsell__img">
          <div class="upsell__img--image">
            <img src="/assets/offers/blue watch _1.png" alt="" />
          </div>
          <div class="upsell__img--content text-center">
            <h1 class="title __300">BlueFace watch</h1>
            <h3 class="subheading">$ 250</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleWomenDealSection;
