import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({ array, lenght }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isArrayShort = lenght === 1;

  const goFurther = () => {
    if (currentIndex === lenght - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goBack = () => {
    if (currentIndex === 0) {
      setCurrentIndex(lenght - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return isArrayShort ? (
    <div
      className="gallery_container"
      style={{
        backgroundImage: `url(${array[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "50%",
      }}
    ></div>
  ) : (
    <div
      className="gallery_container"
      style={{
        backgroundImage: `url(${array[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "50%",
      }}
    >
      <FaChevronLeft className="gallery_icon" onClick={() => goBack()} />
      <FaChevronRight className="gallery_icon" onClick={() => goFurther()} />
    </div>
  );
}

export default Carousel;
