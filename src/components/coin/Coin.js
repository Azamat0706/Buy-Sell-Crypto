import React from "react";
import "./coin.css";
import img1 from "../assets/img3.png";
import img2 from "../assets/img4.png";
import img3 from "../assets/img5.png";

const Coin = () => {
  return (
    <div className="coin01">
      <div className="coin1">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <h3> COIN SWAP</h3>
          <p>Lorem Ipsum is dummy text often used </p>
          <button>Swap</button>
        </div>
      </div>
      <div className="coin2">
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <h3> Defi Platform</h3>
          <p>Lorem Ipsum is dummy text often used </p>
          <button>Go now</button>
        </div>
      </div>
      <div className="coin3">
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <h3>Online Shop</h3>
          <p>Lorem Ipsum is dummy text often used </p>
          <button>buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Coin;
