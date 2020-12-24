import React, { useEffect } from "react";
import DetailsProduct from "../../components/DetailsPage/Details-product/DetailsProduct.components";
import { getSingleProduct } from "../../redux/products/products.actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// This is Detail Page for the single product
const Details = (props) => {
  // const singleProduct1 = props.singleProduct;
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.productsState);
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId);

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  return (
    <>
      <main>
        {singleProduct ? (
          <DetailsProduct singleProduct={singleProduct} />
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

// fetching the products form backend in server side
// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `${BACK_URI}/api/products/single/${context.query.productId}`
//   );
//   const singleProduct = await res.json();
//   return { props: { singleProduct } };
// }
export default Details;
