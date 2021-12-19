import "./Section2.css";
import React from "react"

function Section2(){
    return (
        <div className="becomeSeller">
            <h1>Start earning in three steps</h1>
            <div className="threesteps">
            <div className="step1 steps">
                <h2>1) Setup Your Wallet</h2>
                <p>Setup your wallet with MetaMask by clicking connect wallet button on top right
                    and follow steps.
                </p>
            </div>
            <div className="step2 steps">
                <h2>2) Upload Your Works</h2>
                <p>Upload your works (picture, music, 3D art) by clicking your profile button,  add a title,
                     description and select niche of the art.</p>
            </div>
            <div className="step3 steps">
                <h2>3) Setup an Auction</h2>
                <p>Add your works to auction by choosing end time of the auction and minumum price, and boom you will 
                    recieve amount.
                </p>
            </div>
            </div><br/><br/>
            <button id="become-a-seller" type="submit" value="become">Become a Creater</button>
        </div>
    )
}

export default Section2;