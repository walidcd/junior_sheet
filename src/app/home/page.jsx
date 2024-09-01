import React from "react";
import Topics from "../../../components/GridCards";
import MainHeader from "../../../components/header";

const cardItems = [
  { title: "array.map", url: "array.map" },
  { title: "array.filter", url: "array.filter" },
  { title: "array.reduce", url: "array.reduce" },
];
const Home = () => {
  return (
    <div>
      <MainHeader />
      <Topics />
    </div>
  );
};

export default Home;
