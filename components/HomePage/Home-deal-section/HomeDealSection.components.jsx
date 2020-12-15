import Link from "next/link";
const HomeDealSection = () => {
  return (
    <section class="section-dealoftheday">
      <div class="container-xlarge">
        <div class="row">
          <div class="col-md-6">
            <div class="img-res">
              <img src="/assets/sections/dealoftheday.jpg" alt="" />
            </div>
          </div>
          <div class="col-md-6 section-dealoftheday--p">
            <div class="title-special">
              Deal <br />
              of the day
            </div>
            <div class="subtitle mt-3">Premium shirt for women</div>
            <p class="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              nisi repellat non quod adipisci libero reiciendis ut suscipit?
              Sapiente voluptatum pariatur dolorem accusantium consectetur iusto
              veniam totam reprehenderit, debitis perferendis.
            </p>

            <div class="mt-3">
              <Link href="/details/5fca9754acf6bf3558a1dc01">
                <a href="#" class="btn btn--female">
                  Explore the deal
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDealSection;
