import Link from "next/link";

const HomeLuxurySection = () => {
  return (
    <>
      <section className="section-luxury">
        <div className="section-luxury--extra">luxury</div>
        <Link href="/luxury/men">
          <a href="/luxury/men" className="section-luxury--men">
            <h1>HIM</h1>
          </a>
        </Link>
        <Link href="/luxury/women">
          <a href="/luxury/women" className="section-luxury--women">
            <h1>HER</h1>
          </a>
        </Link>
      </section>
    </>
  );
};

export default HomeLuxurySection;
