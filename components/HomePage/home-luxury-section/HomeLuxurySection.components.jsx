import Link from "next/link";

const HomeLuxurySection = () => {
  return (
    <>
      <section className="section-luxury">
        <div className="container-centered text-center bg-white p-4">
          <div className="subtitle __300">Shop in Luxury</div>
          <div className="para mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni illo
            eaque laborum, necessitatibus error quam fugit, debitis suscipit
            architecto impedit aspernatur molestiae fuga quia distinctio modi
            ipsa labore .
          </div>
          <div className="mt-4">
            <Link href="/luxury/men">
              <a href="#" className="btn btn--arrow btn--primary mr-3">
                Shop in Men
              </a>
            </Link>
            <Link href="/luxury/women">
              <a href="#" className="btn btn--arrow btn--primary">
                Shop in Women
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLuxurySection;
