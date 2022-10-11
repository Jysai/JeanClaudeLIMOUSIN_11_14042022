import { useState } from "react";

const Carrousel = (arrayPictures) => {
  let [indexImg, setIndexImg] = useState(0);


  const prevPicture = () => {
    if (arrayPictures.img.length !== 1) {
      setIndexImg((indexImg = indexImg - 1));

      if (indexImg < 0) {
        setIndexImg(arrayPictures.img.length - 1);
      }
    }
  };

  const nextPicture = () => {
    if (arrayPictures.img.length !== 1) {
      setIndexImg((indexImg = indexImg + 1));

      if (indexImg + 1 > arrayPictures.img.length) {
        setIndexImg(0);
      }
    }
  };

  return (
    <div className="carrousel">
      <img
        className="picture"
        src={arrayPictures.img && arrayPictures.img[indexImg]}
        alt="hosting-gallery-image"
      />

      <div className="carrousel-options">
        <div className="carrousel-prev" onClick={prevPicture}>
          {<i className="fa-solid fa-chevron-left carrousel-chevron-prev"></i>}
        </div>

        <div className="carrousel-next" onClick={nextPicture}>
          {<i className="fa-solid fa-chevron-right carrousel-chevron-next"></i>}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
