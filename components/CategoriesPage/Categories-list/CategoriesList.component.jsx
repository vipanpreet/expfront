import React from "react";

const CategoriesList = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="cat">
          <a href="#">Upperwear</a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="cat">
          <a href="#">lowers</a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="cat">
          <a href="#">accessories</a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="cat">
          <a href="#">footwear</a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="cat">
          <a href="#">Health & Beauty</a>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
