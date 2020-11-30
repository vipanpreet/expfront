import React from "react";
import Link from "next/link";

const ProductPaginate = ({ pages, page, category }) => {
  return (
    pages > 1 && (
      <div className="pagination">
        {[...Array(pages).keys()].map((x) => (
          <Link key={x + 1} href={`/products/${category}/?pagenumber=${x + 1}`}>
            <li active={x + 1 === page}>
              <a style={{ cursor: "pointer" }}>{x + 1}</a>
            </li>
          </Link>
        ))}
      </div>
    )
  );
};

export default ProductPaginate;
