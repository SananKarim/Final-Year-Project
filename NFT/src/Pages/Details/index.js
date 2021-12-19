import React from "react";
import "./index.css";
import { cardsData } from "../../CardsData.js";
import NftDetails from "../../Component/CardDetails/index";

const Details = () => {
  return (
    <div>
      <div className="details">
        <NftDetails />
      </div>
    </div>
  );
};

export default Details;
