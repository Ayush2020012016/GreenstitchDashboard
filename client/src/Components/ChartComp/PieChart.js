import React from "react";
import { Chart } from "react-google-charts";
import Ellipse from "../../utils/icons/Ellipse";

function PieChart() {
  const chartData = [
    ["Label", "Value"],
    ["Spinning", 22],
    ["Transportation", 16],
    ["Carding", 27],
    ["Headting & Coding", 35],
  ];

  return (
    <div className="relative w-[333px] h-[395px] mt-4 bg-white shadow-md">
      <div className="font-bold text-[22px] absolute top-[18px] left-10 z-10">
        Top Emisssion by Chart
      </div>
      <Chart
        className=" mx-auto"
        chartType="PieChart"
        data={chartData}
        options={{
          pieHole: 0.8,
          colors: ["#57cc78", "#55dbdb", "#e2ff32", "#fec102"],
          legend: { position: "none" },
        }}
        width="100%"
        height="90%"
      />

      <div className="absolute bottom-[10px] w-[300px] text-[12px]">
        <div className="flex items-center  px-[50px] mt-2 mr-3 justify-between ">
          <div className="">
            <Ellipse color={"#57CC78"} text={"Spinning"} />
            <span className="ml-[2px]">Spining</span>
          </div>
          <div>22%</div>
        </div>
        <div className="flex items-center px-[50px] mt-2 mr-3 justify-between ">
          <div>
            <Ellipse color={"#55dbdb"} text={"Spinning"} />
            <span className="ml-[2px]">Transportation</span>
          </div>
          <div>16%</div>
        </div>
        <div className="flex items-center px-[50px] mt-2 mr-3 justify-between ">
          <div>
            <Ellipse color={"#e2ff32"} text={"Spinning"} />
            <span className="ml-[2px]">Carding</span>
          </div>
          <div>27%</div>
        </div>
        <div className="flex items-center px-[50px] mt-2 mr-3 justify-between ">
          <div>
            <Ellipse color={"#fec102"} text={"Spinning"} />
            <span className="ml-[2px]">Heating and cooling</span>
          </div>
          <div>35%</div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
