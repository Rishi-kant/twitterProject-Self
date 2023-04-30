import React from "react";

import style from "./HomeNav.module.css";

function HomeNav() {
  return (
    <nav  className={style.nav}>
      <div className={style.container}>
      <div className={style.mainHeading}>
        <h1>Home</h1>
      </div>
      <div className={style.lowerContent}>
        <div>
          <h3>Foryou</h3>
        </div>
        <div>
          <h3>Following</h3>
        </div>
      </div>
      </div>
     
    </nav>
  );
}

export default HomeNav;
