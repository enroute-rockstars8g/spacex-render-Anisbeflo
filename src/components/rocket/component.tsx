import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getRockets } from "../../services/spacex/service";
import "../../styles.css";

export const Rocket: FC = ()=>{
  const [Rocket,setRocket] = useState<any>(undefined);
  const [filter,setFilter] = useState<any>("all");

  useEffect(()=>{
    const loadRockets = async ()=>{
      const Rockets = await getRockets();
      setRocket(Rockets);
    };
    loadRockets();
  },[]);

  const filterByActive = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value==="active")
      setFilter(true);
    else if (event.target.value==="inactive")
      setFilter(false);
    else setFilter("all");
  };

  return(
    <>
      <div className="title">Rockets</div>
      <div className="filter"><b>Show:</b>
        <select className="select" onChange={filterByActive}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      {Rocket!== undefined ? (
        <div className="card-group">
          {Rocket.map((rocketIndex:any)=>(
            <>
            {rocketIndex.active===filter||filter==="all" ? (
            <div className="card">
            <p><b>Name:</b> {rocketIndex.name}</p>
            <p className="status"><b>Active:</b> {rocketIndex.active ? <div className="active"/> : <div className="inactive"/>}</p>
            <p><b>First Flight:</b> {rocketIndex.first_flight}</p>
            <p><b>Description:</b> {rocketIndex.description}</p>
            <br/>
          </div>)
          : null
          }</>

          ))}
        </div>
      ) : null}
    </>
  );
};


