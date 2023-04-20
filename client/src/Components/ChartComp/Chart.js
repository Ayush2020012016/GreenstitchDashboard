import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import data from "../../data";
import Ellipse from "../../utils/icons/Ellipse";
import barchart from "../../utils/icons/barchart.svg";
import { BASE_URI } from "../../services/helper";

function Charts() {
  const [isLoading, setIsLoading] = useState(true)
  const [chartLoadData, setchartLoadData] = useState([])
  const [chartData, setChartData] = useState([["Month", "Spinning", "Transportation", "Carding", "HeatingandCooling"]]);
  useEffect(()=>{
      try {
        const fetchData = async ()=>{
          const response = await fetch(`${BASE_URI}/chartdata`)
          const data = await response.json();
          if(data){
            setchartLoadData(data);
          }
        }
        fetchData()
    } catch (error) {
        console.log(error)
    }

  },[])
  
  useEffect(()=>{
  const rows = chartLoadData?.map((item) => [
      item.month,
      parseInt(item["Spinning"]),
      parseInt(item["Transportation"]),
      parseInt(item["Carding"]),
      parseInt(item["HeatingandCooling"]),

  ]);
  setChartData((prevState) => [...prevState, ...rows]);
  console.log(chartLoadData+ "this is chart load data")
 if(chartLoadData.length!=0)
 {   setIsLoading(false)}
  

  },[chartLoadData])

  return (
    <>
    {isLoading ? <> <div>Loading...</div> </>: 
      <>
       <div className="mt-4 mr-4 relative shadow-md">
      <Chart
        chartType="ColumnChart"
        data={chartData}
        options={{
          isStacked: true,
          fontName: "Inter",
          baselineColor: "black",
          hAxis: {
            titleTextStyle: { color: "#333" },
            baseline: 10,
            baselineColor: "black",
          },
          vAxis: {
            minValue: 0,
            gridlines: { color: "transparent" },
            format: "#k",
            baselineColor: "#e3e3e3",
          },
          legend: {
            position: "none",
          },

          colors: ["#57cc78", "#55dbdb", "#e2ff32", "#fec102"],
        }}
        width="700px"
        height="400px"
      />
      <div className="flex items-center absolute top-0 left-0">
        <div className="font-[#282828] font-bold  text-[1.3rem] ml-[31px] mr-[75px]">
          Carbon Footprint{" "}
        </div>
        <div className="flex items-center text-[12px]">
          <div className="flex items-center mr-3">
            <Ellipse color={"#57CC78"} text={"Spinning"} />
            <span className="ml-[2px]">Spining</span>
          </div>
          <div className="flex items-center mr-3">
            <Ellipse color={"#55dbdb"} text={"Spinning"} />
            <span className="ml-[2px]">Transportation</span>
          </div>
          <div className="flex items-center mr-3">
            <Ellipse color={"#e2ff32"} text={"Spinning"} />
            <span className="ml-[2px]">Carding</span>
          </div>
          <div className="flex items-center mr-3">
            <Ellipse color={"#fec102"} text={"Spinning"} />
            <span className="ml-[2px]">Heating and Cooling</span>
          </div>
          <div className="flex items-center mr-3">
            <img src={barchart} alt="barchart" />
          </div>
        </div>
      </div>
    </div>
      </>
    }
     
    
    </>
  );
}

export default Charts;
