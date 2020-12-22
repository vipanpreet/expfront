import Link from "next/link";

const HomeLuxurySection = () => {
  return (
    <>
      <section class="section-luxury">
        <div class="section-luxury--extra">luxury</div>
        <Link href="/luxury/men">
          <a href="/luxury/men" class="section-luxury--men">
            <h1>HIM</h1>
          </a>
        </Link>
        <Link href="/luxury/women">
          <a href="/luxury/women" class="section-luxury--women">
            <h1>HER</h1>
          </a>
        </Link>
      </section>
    </>
  );
};

export default HomeLuxurySection;
