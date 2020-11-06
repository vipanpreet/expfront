import React, { useState } from "react";
import Navbar from "../../components/Layout/nav-bar/Navbar.components";
import Breadcrum from "../../components/ReusableComponents/breadcrum/Breadcrum.components";
import DetailsProduct from "../../components/DetailsPage/Details-product/DetailsProduct.components";
import Productadditional from "../../components/DetailsPage/Details-product-additional/Productadditional.components";
import Footer from "../../components/ReusableComponents/footer/Footer.components";

// This is Detail Page for the single product
const Details = (props) => {
  const singleProduct = props.singleProduct;

  return (
    <div>
      <Navbar />
      <main>
        <DetailsProduct singleProduct={singleProduct} />
      </main>
      <Footer />
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
