import React from "react";
import "../stylecss/home.css";
import SideBar from "../pages/SideBar";
import Main from "../pages/Main";
function Home() {
  return (
    <div className="home">
      <div>
        <SideBar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default Home;
