import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const CategoriesList = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    // checking if we have subcategories in session storage or not
    const sessionSubcategories = JSON.parse(
      sessionStorage.getItem("subCategories")
    );
    if (!sessionSubcategories) {
      fetchData();
    } else {
      setSubCategories(sessionSubcategories);
    }
  }, []);

  // function to fetch all the subcategories
  async function fetchData() {
    const response = await axios.get(`${BACK_URI}/api/subcategory`);
    setSubCategories(response.data);
    sessionStorage.removeItem("subCategories");
    sessionStorage.setItem("subCategories", JSON.stringify(response.data));
  }

  // method to return the Subcategories based on the parent passed
  const returnSubCategories = (subCategories, parent) => {
    return subCategories
      .filter((subcategory) => subcategory.parent == parent)
      .map((sub) => {
        return (
          <Link href={`/products?category=${parent}&subcategory=${sub.slug}`}>
            <li>
              <a href="#">{sub.name}</a>
            </li>
          </Link>
        );
      });
  };

  return (
    <section className="section-categories-page">
      <div className="container-xlarge">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6 mb-8">
                <div className="text-center">
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "upperwear" },
                    }}
                  >
                    <a>
                      <div className="img-res">
                        <img src="/assets/cat/uppers.jpg" alt="" />
                      </div>

                      <a className="title display-block" href="#">
                        Upperwear
                      </a>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mb-8">
                <div className="text-center">
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "lowers" },
                    }}
                  >
                    <a>
                      <div className="img-res">
                        <img src="/assets/cat/lowers.jpg" alt="" />
                      </div>
                      <a className="title display-block" href="#">
                        Lowers
                      </a>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mb-8">
                <div className="text-center">
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "accessories" },
                    }}
                  >
                    <a>
                      <div className="img-res">
                        <img src="/assets/cat/accessorie.jpg" alt="" />
                      </div>
                      <a className="title display-block" href="#">
                        Accessories
                      </a>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mb-8">
                <div className="text-center">
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "footwear" },
                    }}
                  >
                    <a>
                      <div className="img-res">
                        <img src="/assets/cat/shoes.jpg" alt="" />
                      </div>
                      <a className="title display-block" href="#">
                        Footwear
                      </a>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mb-8">
                <div className="text-center">
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "health-and-beauty" },
                    }}
                  >
                    <a>
                      <div className="img-res">
                        <img src="/assets/cat/lowers.jpg" alt="" />
                      </div>
                      <a className="title display-block" href="#">
                        health & beauty
                      </a>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="section-categories-page__list">
              <div className="mt-2">
                <a className="section-categories-page__list--cat" href="#">
                  Upperwear
                </a>
                <ul>{returnSubCategories(subCategories, "upperwear")}</ul>
              </div>
              <div className="mt-2">
                <a className="section-categories-page__list--cat" href="#">
                  Lowers
                </a>
                <ul>{returnSubCategories(subCategories, "lowers")}</ul>
              </div>
              <div className="mt-2">
                <a className="section-categories-page__list--cat" href="#">
                  Accessories
                </a>
                <ul>{returnSubCategories(subCategories, "accessories")}</ul>
              </div>
              <div className="mt-2">
                <a className="section-categories-page__list--cat" href="#">
                  footwear
                </a>
                <ul>{returnSubCategories(subCategories, "footwear")}</ul>
              </div>
              <div className="mt-2">
                <a className="section-categories-page__list--cat" href="#">
                  health &amp; beauty
                </a>
                <ul>
                  {returnSubCategories(subCategories, "health-and-beauty")}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesList;
