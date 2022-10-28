import { useState } from "react";

const Carrousel = (props) => {

  let [indexImg, setIndexImg] = useState(0);

  const arrayPicturesLength = () => {
    if (props.img !== undefined) {
      return props.img.length == 1;
    }
  };

  const prevPicture = () => {
    if (props.img.length !== 1) {
      setIndexImg((indexImg = indexImg - 1));

      if (indexImg < 0) {
        setIndexImg(props.img.length - 1);
      }
    }
  };

  const nextPicture = () => {
    if (props.img.length !== 1) {
      setIndexImg((indexImg = indexImg + 1));

      if (indexImg + 1 > props.img.length) {
        setIndexImg(0);
      }
    }
  };

  return (
    <div className="carrousel">
      <img
        className="picture"
        src={props.img && props.img[indexImg]}
        alt="hosting-gallery-image"
      />
      {arrayPicturesLength() == false ? (
        <div className="carrousel-options">
          <div className="carrousel-prev" onClick={prevPicture}>
            <i className="fa-solid fa-chevron-left carrousel-chevron-prev"></i>
          </div>

          <div className="carrousel-next" onClick={nextPicture}>
            <i className="fa-solid fa-chevron-right carrousel-chevron-next"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carrousel;
