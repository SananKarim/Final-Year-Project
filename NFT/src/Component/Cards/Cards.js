import "../Cards/Cards.css";
import "../Buttons/Buttons.css";
import "../../CardsData";
import React from "react";
import { Link } from "react-router-dom";
import { cardsData } from "../../CardsData";
import buttons from "../Buttons/Buttons";
const Cards = (props) => {
  return (
    <Link className="links" to="/browse/details">
      <div className="cards">
        <img src={props.src} />
        <div className="author-and-price">
          <p>{props.author}</p>
          <p>{props.price}</p>
        </div>
        <div className="title-and-price">
          <h3>{props.title}</h3>
          <h3>{props.amount}</h3>
        </div>
        <div className="card-btn">
          <button id="bid">Buy Now</button>
          <button id="details">Details</button>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
