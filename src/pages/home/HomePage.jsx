import useMetaData from "../../hooks/useMetaData";
import Banner from "./banner/Banner";
// import Header from "./header/Header";

const HomePage = () => {
  useMetaData("Home");
  return (
    <div>
      {/* <Header /> */}
      <Banner />
    </div>
  );
};

export default HomePage;
