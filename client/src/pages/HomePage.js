import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Smallcard from "../Components/Smallcard/Smallcard";
import Charts from "../Components/ChartComp/Chart";
import PieChart from "../Components/ChartComp/PieChart";
import Mainsection from "../Components/MainSection/Mainsection";

const HomePage = () => {
  return (
    <div className="relative">
      <Sidebar />
      <Navbar />
      <Mainsection />
    </div>
  );
};

export default HomePage;
