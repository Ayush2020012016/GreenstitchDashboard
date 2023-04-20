import React, { useEffect, useState } from "react";
import Smallcard from "../Smallcard/Smallcard";
import Charts from "../ChartComp/Chart";
import PieChart from "../ChartComp/PieChart";
import { BASE_URI } from "../../services/helper";


const Mainsection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cardloadedData , setcardloadedData] = useState([])

  useEffect(()=>{
   try {
    const loaddata = async()=>{
      const response = await fetch(`${BASE_URI}/carddata`)
      const data = await response.json();
      setcardloadedData(data);
      console.log(data)
    }
    loaddata();
   } catch (error) {
      console.log(error)
   }
   finally{
    setIsLoading(false)
   }
  },[])
  return (
    <div className="ml-[330px]">
      {
        isLoading ? <>loading...</>:<>
<div className="flex">
      {cardloadedData.map((item,index)=>{
        return (
            <Smallcard emission={item["emission"]}
             amount = {item["amount"]}
             badge = {item["badge"]}
             highlighted={item["highlighted"]}
             badgeHighlighted={item["badgeHighlighted"]}/>
        )
      })}
      </div>
        </>
      }
      
      <div className="flex">
        <Charts />
        <PieChart />
      </div>
    </div>
  );
};

export default Mainsection;
