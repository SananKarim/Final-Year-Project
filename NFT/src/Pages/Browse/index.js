import { cardsData } from "../../CardsData.js";
import Cards from "../../Component/Cards/Cards.js";

import "./index.css";
const Browse = () => {
  return (
    <div className="browsee">
      <div className="filters">
        <div className="type">
          <label>Type</label>
          <select id="pickup" name="pickup">
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="picture">Picture</option>
            <option value="cartoon">Cartoon</option>
            <option value="music">Music</option>
            <option value="gif">Gif</option>
          </select>
        </div>

        <div className="sort">
          <label>Duration</label>
          <select id="pickup" name="pickup">
            <option value="all">All</option>
            <option value="recentCreated">Recently Created</option>
            <option value="recentlySold">Recently sold</option>
            <option value="recentlyBid">Recently bid</option>
            <option value="mostViewed">Most Viewed</option>
            <option value="highestPrice">Highest price</option>
            <option value="lowestPrice">Lowest Price</option>
          </select>
        </div>
      </div>
      <div className="all-cards">
        {cardsData.map((item, index) => (
          <Cards
            key={index}
            src={item.src}
            author={item.author}
            price={item.price}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  );
};
export default Browse;
