// import { useEffect, useState } from "react";
import "./homepage.css";
import Navbar from "../navbar/navbar";
import Popular from "../popular/Popular";
import { useData } from "../dataContext";

const Homepage = () => {
  const allItems = useData();

  return (
    <>
      <Navbar />
      <h1>My homepage</h1>
      <div className="topBanner">
        <h3>Fake Store</h3>
        This is not a commercial project. You can&apos;t buy any products here
        and all of the prices are generated to imitate a real shop. <br />
        Enjoy! 😄
      </div>
      <Popular allItems={allItems} />
    </>
  );
};

export default Homepage;
