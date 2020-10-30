import { useState } from "react";
import Card from "../../ReusableComponents/single-card/card.components";

const Recommendationbox = ({ products }) => {
  // console.log(props.products);
  // const [recommended_products] = useState([
  //   {
  //     id: "0000001",
  //     img_src: "assets/products/shirt1.jpg",
  //     Brand: "Gucci",
  //     name: "Lined Top",
  //     price: "100.12",
  //   },
  //   {
  //     id: "0000002",
  //     img_src: "assets/products/shirt2.jpg",
  //     Brand: "U.S.Polo",
  //     name: "Blue Shirt",
  //     price: "45.26",
  //   },
  //   {
  //     id: "0000003",
  //     img_src: "assets/products/shirt3.jpg",
  //     Brand: "GAP",
  //     name: "Navy Blue Polo T-shirt",
  //     price: "75",
  //   },
  //   {
  //     id: "0000004",
  //     img_src: "assets/products/shirt4.jpg",
  //     Brand: "Armani",
  //     name: "Black Leather Jacket",
  //     price: "250",
  //   },
  //   {
  //     id: "0000005",
  //     img_src: "assets/products/customizable-mug.jpg",
  //     Brand: "Jack & Jones",
  //     name: "Printed T-shirt",
  //     price: "30",
  //   },
  //   {
  //     id: "0000006",
  //     img_src: "assets/products/mountain-fox-notebook.jpg",
  //     Brand: "Armani",
  //     name: "Black slippers",
  //     price: "150",
  //   },
  //   {
  //     id: "0000007",
  //     img_src: "assets/products/mug-the-best-is-yet-to-come.jpg",
  //     Brand: "Zara",
  //     name: "Kurta round neck",
  //     price: "90",
  //   },
  //   {
  //     id: "0000008",
  //     img_src: "assets/products/pack-mug-framed-poster.jpg",
  //     Brand: "Gucci",
  //     name: "Pixy cool Shirt",
  //     price: "120.42",
  //   },
  // ]);
  return (
    <div>
      <section className="section-recommendation">
        <div className="container-xlarge mt-6 ">
        <div className="title ml-2 mb-2">Recommendations</div>

          <div className="row row-cols-2">
            
            {products.map((product) => {
              return(
                <div key={product._id} className="col-md-2">
                <Card singleProduct={product}  />
               </div>
              )
             
            })}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendationbox;
