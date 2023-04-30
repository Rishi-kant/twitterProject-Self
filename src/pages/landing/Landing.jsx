import React from "react";
import Navbar from "../../components/Navbar";
import Feeds from "../home/feeds/Feeds";

import style from "./Landing.module.css";

function Landing() {
  return (
    <div className={style.container}>
      <div className={style.MiddleContainer}>
        <Feeds />
        <Navbar />
      </div>
    </div>
  );
}

export default Landing;
