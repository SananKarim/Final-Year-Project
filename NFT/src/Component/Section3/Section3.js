import "./Section3.css";
import React from "react";
import { Link } from "react-router-dom";

function Section3() {
  return (
    <div className="section3">
      <div className="section3-text">
        <h1>
          THIS IS THE <br /> NEW CREATIVE ECONOMY
        </h1>
        <p>
          We are bringing digital content creators and digital assets collectors
          together to move culture forward
        </p>
        <br></br>
        <Link to="/blog">
          {" "}
          <button id="become-a-creator" type="submit" value="learnmore">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Section3;
