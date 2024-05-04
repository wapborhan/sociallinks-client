"use client";
import Header from "./header/Header";
import Developers from "./developer/Developers";
import Footer from "./footer/Footer";
import { useState } from "react";
import Banner from "./banner/Banner";
// import Dark from "./shared/theme/Dark";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");

  const handleDataSubmit = (data) => {
    setSearchData(data);
  };

  return (
    <main className="main-page-wrapper spybody">
      <Header onDataSubmit={handleDataSubmit} />
      <Banner />
      {/* <Developers searchData={searchData} /> */}
      {/* <Dark /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default HomePage;
