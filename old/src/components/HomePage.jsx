"use_client";
import Header from "./header/Header";
import Developers from "./developer/Developers";
import Banner from "./banner/Banner";
import { useContext } from "react";

const HomePage = () => {
  return (
    <main className="main-page-wrapper spybody">
      <Header />
      <Banner />
      {/* <Developers */}
      {/* <Footer /> */}
    </main>
  );
};

export default HomePage;
