import React from "react";
import "./style.css";
import ImgDetail from "../../../src/Images/3.jpg";
import Pic from "../../Images/pic.jpg";
import { Link } from "react-router-dom";
const NftDetails = () => {
  return (
    <div className="nftDetails">
      <div className="art-main">
        <div className="art-bg">
          <div className="art">
            <img src={ImgDetail} />
          </div>
        </div>
      </div>
      <div className="artDetails">
        <div className="desc-price">
          <div className="desc">
            <p>Zuhaib Alam</p>
            <h1 id="art-title">Art Name</h1>
            <h3>Description</h3>
            <p id="art-p">
              SHIBOSHIS are 10,000 lovable Shiba Inu generated Non Fungible
              Tokens (NFTS) eternally written on the Ethereum blockchain. These
              Shibs have varying traits that make each unique and collectible
              (for instance Laser Eyes or Party Hat). Furthermore, each trait
              corresponds to an enhancement of the base ShibaStrength of the
              Shiboshi in our upcoming Shiboshi Game. You’ll be able to
              purchase, and trade these SHIBOSHIS here and at ShibaSwap without
              fees.<br></br>
              <br></br>
              Pic Size<br></br>
              <br></br>
              400X400
            </p>
          </div>
          <div className="art-auction-details">
            <div className="price-auction-artist-history">
              <div className="bid">
                <div className="bid-details">
                  <h3>Current Bid</h3>
                  <h1>0.50 ETH</h1>
                  <p>$2564</p>
                </div>
                <div className="buy">
                  <button id="bid-btn" className="bid-button">
                    Buy
                  </button>
                </div>
              </div>
              <div className="auction">
                <h3>Auction Ending in</h3>
                <div className="auction-time">
                  <div className="time">
                    <h1>23</h1>
                    <h1>44</h1>
                    <h1>29</h1>
                  </div>
                  <div className="time-in-words">
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                  </div>
                </div>
                <div className="place-a-bid">
                  <button id="place-a-bid-btn" className="place-a-bid-btn">
                    Place a bid
                  </button>
                </div>
              </div>
            </div>

            <div className="creator">
              <div className="creator-pic">
                <img src={Pic} />
              </div>
              <Link to="/creator">
                <div className="creator-name">
                  <h1>Zuhaib Alam</h1>
                  <p>Zuhaib_artist</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
