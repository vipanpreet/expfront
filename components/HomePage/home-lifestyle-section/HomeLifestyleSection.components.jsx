import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { saveLifestyleState } from "../../../redux/lifestyle/lifestyle.actions";
import Link from "next/link";

const HomeLifestyleSection = () => {
  // const dispatch = useDispatch();
  // const handleMenButton = () => {
  //   // dispatch(
  //   //   saveLifestyleState({
  //   //     storeType: "lifestyle",
  //   //     department: "men",
  //   //   })
  //   // );
  // };

  // const handleWomenButton = () => {
  //   // dispatch(
  //   //   saveLifestyleState({
  //   //     storeType: "lifestyle",
  //   //     department: "women",
  //   //   })
  //   // );
  // };
  return (
    <>
      <section className="section-lifestyle">
        <div className="container-centered text-center bg-white p-4">
          <div className="subtitle __300">Shop in Lifestyle</div>
          <div className="para mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni illo
            eaque laborum, necessitatibus error quam fugit, debitis suscipit
            architecto impedit aspernatur molestiae fuga quia distinctio modi
            ipsa labore .
          </div>
          <div className="mt-4">
            <Link href="/lifestyle/men">
              <a className="btn btn--arrow btn--primary mr-3">Shop in Men</a>
            </Link>
            <Link href="/lifestyle/women">
              <a className="btn btn--arrow btn--primary">Shop in Women</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLifestyleSection;
