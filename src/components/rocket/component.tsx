import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getRockets } from "../../services/spacex/service";
import "../../styles.css";

export const Rocket: FC = ()=>{
  const [Rocket,setRocket] = useState<any>(undefined);

  useEffect(()=>{
    const loadRockets = async ()=>{
      const Rockets = await getRockets();
      setRocket(Rockets);
    };
    loadRockets();
  },[]);

  console.log(Rocket);
  return(
    <>
      <div className="title">Rockets</div>
      {Rocket!== undefined ? (
        <div className="card-group">
          {Rocket.map((rocketIndex:any)=>(
            <div className="card">
              <p><b>Name:</b> {rocketIndex.name}</p>
              <p className="status"><b>Active:</b> {rocketIndex.active ? <div className="active"/> : <div className="inactive"/>}</p>
              <p><b>First Flight:</b> {rocketIndex.first_flight}</p>
              <p><b>Description:</b> {rocketIndex.description}</p>
              <br/>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};


