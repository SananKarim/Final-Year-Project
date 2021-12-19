import './Counts.css';
import React from 'react';

function Counts(){
    return(
        <div className="counts">
            <h1>Some Counts That Matters!</h1>
            <p>Our acheivements in the journey depicted in numbers</p><br/>
            <div className="total">
                <div className="products">
                    <h1>581820</h1>
                    <p>Products</p>
                </div>
                <div className="Creators">
                    <h1>41820</h1>
                    <p>Creators</p>
                </div>
                <div className="Buy/Sell">
                    <h1>36254</h1>
                    <p>Buy/Sell</p>
                </div>
                <div className="journey">
                    <h1>5</h1>
                    <p>Years of journey</p>
                </div>
            </div>
        </div>
    )
}

export default Counts;