import React from "react";
import Link from "next/link";

const ProductPaginate = ({ pages, page, category }) => {
  return (
    pages > 1 && (
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
      >
        {[...Array(pages).keys()].map((x) => (
          <Link key={x + 1} href={`/products/${category}/?pagenumber=${x + 1}`}>
            <span
              style={{
                padding: "1px 5px",
                marginRight: "2px",
                background: "#333",
                color: "#fff",
                cursor: "pointer",
              }}
              active={x + 1 === page}
            >
              {x + 1}
            </span>
          </Link>
        ))}
      </div>
    )
  );
};

export default ProductPaginate;
