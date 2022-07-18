import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/PChero/3000/IN-PD-22-teaser-GW_3000x1200_rtb_eng._CB632706317_.jpg"
          alt="Hey there is a banner here!"
        />

        <div className="home_row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
            price={573.00}
            rating={5}
            image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
          />
          <Product
            title="Boldfit N95 face mask for men and women (Pack of 5) N95 mask PM 0.3 Filtration BIS Approved Masks N95 Masks"
            price={347.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZhGcb5LcS._SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="QUARANT 3 Ply Protective Surgical Face Mask, UV Sterilized, ISI, BIS, CE & ISO Certified, Melt Blown - SMMS (Blue, Pack of 100)"
            price={399.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FfJV9pX5L._SL1500_.jpg"
          />
          <Product
            title="boAt Wave Lite Smartwatch with 1.69 Inches(41cm) HD Display, Heart Rate & SpO2 Level Monitor, Multiple Watch Faces, Activity Tracker, Multiple Sports Modes & IP68 (Deep Blue), One Size"
            price={1799.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61yMzD6RG8L._SL1500_.jpg"
          />
          <Product
            title="Fire-Boltt Ninja 2 Max 1.5 inches(3.9cm) Full Touch Display Smartwatch with SpO2, Heart Rate Tracking 20 Sports Mode Sleep Monitor, Gesture, Camera Music Control, IP68 Dust Sweat Resistance (Rose Gold, L)"
            price={1899.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ls76+JYPL._SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Space Grey (4th Generation)"
            price={66900.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71LJWOMyP4L._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
