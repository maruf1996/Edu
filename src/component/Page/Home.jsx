import React from "react";
import Banner from "../UI/Banner";
import Courses from "../UI/Courses";
import HomeAbout from "../UI/HomeAbout";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <HomeAbout></HomeAbout>
      <Courses></Courses>
    </div>
  );
};

export default Home;
