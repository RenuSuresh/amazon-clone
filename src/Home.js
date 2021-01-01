import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      {/* https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg */}
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        alt=""
      />
      {/* product */}
      <div className="home__row">
        <Product
          id="1231231"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Bestselling/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB412300631_.jpg"
        />
        <Product
          id="2"
          title="Refurbished mobiles"
          price={45.8}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Ver2_GW._SY304_CB446171261_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1231231"
          title="Effective dishwashing for Indian cooking"
          price={78.9}
          rating={6}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/379x304._SY304_CB414475836_.jpg"
        />
        <Product
          id="1231231"
          title="Fire TV Stick Lite"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/MSO_Nov/Sheldon1X2._SY304_CB416935227_.jpg"
        />
        <Product
          id="1231231"
          title="LAPTOPS FROM TOP BRANDS"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1231231"
          title="Home Furnishing"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
