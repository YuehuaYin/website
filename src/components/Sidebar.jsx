import "./Sidebar.css";
import catPicPath from "../assets/oiiai.png";
import catGifPath from "../assets/oiiai_spinning.gif";
import { useState } from "react";

function SpinningCat() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("cat hovered");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("cat un-hovered");
    setIsHovered(false);
  };

  const catPath = isHovered ? catGifPath : catPicPath;

  return (
    <img
      className="spinningCat"
      src={catPath}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

function Sidebar() {
  return (
    <>
      <div className="sidebar" id="leftSidebar">
        <SpinningCat />
      </div>

      <div className="sidebar" id="rightSidebar">
        <SpinningCat />
      </div>
    </>
  );
}

export default Sidebar;
