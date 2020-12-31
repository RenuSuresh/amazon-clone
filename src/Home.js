import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      {/* https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg */}
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        alt=""
      />
    </div>
  );
}

export default Home;