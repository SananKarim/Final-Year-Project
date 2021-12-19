import "./Creator.css";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../Images/pic.jpg";

const User = () => {
  return (
    <>
      <div className="account-area">
        <div className="edit">
          <button id="edit-profile">Edit Profile</button>
          <button id="share-btn">Share Profile</button>
        </div>
        <div className="creator-account">
          <div className="personal-data">
            <img id="profilepic" src={Profile} alt="pic" />
            <p>Sanan</p>
            <p>@sanan</p>
            <p>Bio</p>
            <p>This is a simple bio of the user</p>
            <p>Links</p>
            <p>No social links</p>
          </div>
          <div className="content-area">
            <div className="created">
              <button>CREATED</button>
            </div>
            <div className="collected">
              <button>COLLECTED</button>
            </div>
            <div className="activity">
              <button>ACTIVITY</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
