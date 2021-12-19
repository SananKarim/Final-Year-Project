import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import buttons from "../Buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  connectWallet,
  disconnectWallet,
} from "../../Features/wallet/wallet.actions";

function Navbar() {
  const dispatch = useDispatch();
  const {
    Wallet: { isWalletConnected },
  } = useSelector((state) => state);

  const handleDisconnectWallet = () => {
    dispatch(disconnectWallet());
  };
  const handleWalletConnect = () => {
    dispatch(connectWallet());
  };
  return (
    <div className="header">
      <div className="logo">
        <h1>
          Pak<span>Arts</span>
        </h1>
      </div>
      <div className="menu">
        <div className="menu-links">
          <ul className="menu-items">
            <li>
              <Link to="/home" id="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/browse" id="browse">
                Browse
              </Link>
            </li>
            <li>
              <Link to="/shop" id="shop">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" id="about">
                About
              </Link>
            </li>
            <li>
              <Link to="/wallet" id="about">
                login
              </Link>
            </li>
          </ul>
        </div>
        <div className="search">
          <form>
            <input type="text" placeholder="Search an NFT"></input>
          </form>
        </div>
      </div>
      <div className="wallet">
        {isWalletConnected ? (
          <button onClick={handleDisconnectWallet}>Disconnect Wallet</button>
        ) : (
          <button onClick={handleWalletConnect}>Connect Wallet</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
