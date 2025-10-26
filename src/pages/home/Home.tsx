import React from "react";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

interface HomeProps {
  isMobile: boolean;
}

const Home: React.FC<HomeProps> = ({ isMobile }) => {
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default Home;
