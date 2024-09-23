import React from "react";
import { Route, Routes } from "react-router-dom";
import Resister from "../components/Resister";
import Home from "../components/Home";

function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Resister />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AllRouter;
