import React, { useState } from "react";
import Navbar from "../../components/ReusableComponents/nav-bar/Navbar.components";
import Breadcrum from "../../components/DetailsPage/breadcrum/Breadcrum.components";
import Productdetail from "../../components/DetailsPage/product-detail/Productdetail.components";
import Productadditional from "../../components/DetailsPage/product-details-additional/Productadditional.components";

// This is Detail Page for the single product
const Details = (props) => {
  const singleProduct = props.singleProduct;

  return (
    <div>
      <Navbar />
      <main>
        <Productdetail singleProduct={singleProduct} />
      </main>
    </div>
  );
};

// fetching the products form backend in server side
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://arktasticbackend.herokuapp.com/api/products/${context.query.productId}`
  );
  const singleProduct = await res.json();
  return { props: { singleProduct } };
}
export default Details;
