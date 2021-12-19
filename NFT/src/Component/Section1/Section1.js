import './Section1.css';
import React from 'react';
import etheriumImg from './etherium.png';
import { Link } from 'react-router-dom';

function Section1 (){
   return(<div className="section1">
    <div className="about">
        <h1>The Largest NFT<br/> Marketplace</h1>
        <p>The World's largest digital marketplace for crypto collectibles and Non Fungible Tokens(NFTs),
            including ERC721 and ERC1155 assets. Buy, sell and discover exclusive digital assets like Exies, ENS 
            (Etherium Name Services) names, Cryptokitties, Decentraland and more</p><br/>
            <Link to = "/browse"><button id="explore" type="submit" value="explore">Explore</button></Link>
            <button id="create" type="submit" value="create">Create</button>
    </div>
    
</div>
   ) 
}

export default Section1;