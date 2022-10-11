import React from "react";
import starSolid from "../assets/img/star-solid.png";
import starEmpty from "../assets/img/star-empty.png";

const Rating = (arrayHost) => {
  const ratingStars = [1, 2, 3, 4, 5];

  return (
    <div className="rating-wrapper">
      {ratingStars.map((ratingStar, index) =>
        ratingStar <= arrayHost.rating ? (
          <img src={starSolid} key={index} alt="star-solid" className="star-solid"></img>
        ) : (
          <img src={starEmpty} key={index} alt="star-empty" className="star-empty"></img>
        )
      )}
    </div>
  );
};

export default Rating;
