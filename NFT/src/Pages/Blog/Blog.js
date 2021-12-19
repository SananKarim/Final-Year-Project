import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="working-heading nft-blog">
          <h2>
            In this article we are going to answer below questions about NFTs,
            digital coins and their working
          </h2>
          <br></br>
          <h3>1) What are NFTs?</h3>
          <h3>2) How to create an NFT?</h3>
          <h3>3) How to sell an NFT?</h3>
          <h3>4) What are digital coins?</h3>
          <h3>5) What is Etherium?</h3>
          <h3>6) How NFTs market works?</h3>
          <p>Now let's start with question number 1</p>
        </div>
        <div className="nft nft-blog">
          <h1>1) What is an NFT?</h1>
          <p>
            NFT stands for Non Fungible Token, is a digital asset that
            represents real-world objects like art, music, in-game items and
            videos. They are bought and sold online, frequently with
            cryptocurrency, and they are generally encoded with the same
            underlying software as many cryptos.{" "}
          </p>
        </div>
        <div className="nft-working nft-blog">
          <h1>2) How to create an NFT?</h1>
          <p>
            You can create an NFT by drawing by hand, creating an art in a
            software (adobe photoshot), creating music and a game. When you
            store them to digital computer now it is an NFT
          </p>
        </div>
        <div className="nft nft-blog">
          <h1>3) How to sell an NFT?</h1>
          <p>
            {" "}
            <p>
              You can sell your NFTs on various existing marketplaces including
              our marketplace PakArts.
            </p>
          </p>
        </div>
        <div className="coins nft-blog">
          <h1>4)What is a digital currency?</h1>
          <p>
            Digital currency is any currency, money, or money-like asset that is
            primarily managed, stored or exchanged on digital computer systems,
            especially over the internet. There are dozens of digital currencies
            exists, some popular ones including Bitcoin, Etherium, litecoin,
            Dogecoin and many more
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
