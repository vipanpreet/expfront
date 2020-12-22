import Link from "next/link";

const HomeLifestyleSection = () => {
  return (
    <section class="section-lifestyle">
      <div class="section-lifestyle--extra">LIFESTYLE</div>
      <Link href="/lifestyle/men">
        <a href="#" class="section-lifestyle--men">
          <h1>HIM</h1>
        </a>
      </Link>
      <Link href="/lifestyle/women">
        <a href="#" class="section-lifestyle--women">
          <h1>HER</h1>
        </a>
      </Link>
    </section>
  );
};

export default HomeLifestyleSection;
