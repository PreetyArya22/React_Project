import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Custom Previous Arrow
export const CustomPrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className}`}  // Using the passed className
      style={{ ...style  ,color:"black" }}  // Ensuring the arrow is displayed
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={30} />  {/* Use MdKeyboardArrowLeft */}
    </div>
  );
};

// Custom Next Arrow
export const CustomNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className}`}  // Using the passed className
      style={{ ...style, display: "block" }}  // Ensuring the arrow is displayed
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={30} />  {/* Use MdKeyboardArrowRight */}
    </div>
  );
};
