import React from "react";

const UserRating = ({ value }) => {
  return (
    <>
      {value >= 1 ? (
        <ion-icon name="star"></ion-icon>
      ) : value >= 0.5 ? (
        <ion-icon name="star-half"></ion-icon>
      ) : (
        <ion-icon name="star-outline"></ion-icon>
      )}
      {value >= 2 ? (
        <ion-icon name="star"></ion-icon>
      ) : value >= 1.5 ? (
        <ion-icon name="star-half"></ion-icon>
      ) : (
        <ion-icon name="star-outline"></ion-icon>
      )}
      {value >= 3 ? (
        <ion-icon name="star"></ion-icon>
      ) : value >= 2.5 ? (
        <ion-icon name="star-half"></ion-icon>
      ) : (
        <ion-icon name="star-outline"></ion-icon>
      )}
      {value >= 4 ? (
        <ion-icon name="star"></ion-icon>
      ) : value >= 3.5 ? (
        <ion-icon name="star-half"></ion-icon>
      ) : (
        <ion-icon name="star-outline"></ion-icon>
      )}
      {value >= 5 ? (
        <ion-icon name="star"></ion-icon>
      ) : value >= 4.5 ? (
        <ion-icon name="star-half"></ion-icon>
      ) : (
        <ion-icon name="star-outline"></ion-icon>
      )}
    </>
  );
};

export default UserRating;
