import React, { useEffect } from "react";
import DetailsProduct from "../../components/DetailsPage/Details-product/DetailsProduct.components";
import { getSingleProduct } from "../../redux/products/products.actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Spinner from "../../components/Layout/Spinner/Spinner";

// This is Detail Page for the single product
const Details = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { productId } = router.query;
  const { singleProduct, loading } = useSelector(
    (state) => state.productsState
  );

  useEffect(() => {
    if (productId) {
      dispatch(getSingleProduct(productId));
    }
  }, [dispatch, productId]);

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        {loading ? (
          <>
            <h2
              style={{
                // position: "absolute",
                // left: "45%",
                marginLeft: "45%",
                transform: "translate(-50%)",
                minHeight: "100vh",
              }}
            >
              <Spinner />
            </h2>
          </>
        ) : (
          singleProduct && <DetailsProduct singleProduct={singleProduct} />
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
