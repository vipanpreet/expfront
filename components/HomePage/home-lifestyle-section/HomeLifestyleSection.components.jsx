import Link from "next/link";

const HomeLifestyleSection = () => {
  return (
    <section className="section-lifestyle">
      <div className="section-lifestyle--extra">LIFESTYLE</div>
      <Link href="/lifestyle/men">
        <a href="#" className="section-lifestyle--men">
          <h1>HIM</h1>
        </a>
      </Link>
      <Link href="/lifestyle/women">
        <a href="#" className="section-lifestyle--women">
          <h1>HER</h1>
        </a>
      </Link>
    </section>
  );
};

export default HomeLifestyleSection;
