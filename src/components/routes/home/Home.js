import React from "react";
import Directory from "../../directory/Directory";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
