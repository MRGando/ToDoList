import React from "react";
import { AiFillHeart } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <span>
        Designed by{" "}
        <AiFillHeart style={{ color: "red", marginBottom: "-3px" }} />{" "}
        (fitDesign.ir)
      </span>
    </footer>
  );
}

export default Footer;
