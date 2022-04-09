import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getRockets } from "../../services/spacex/service";

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
    <div>
      <p>Rockets</p>
      {Rocket!== undefined ? (
        <div>
          {Rocket.map((rocketIndex:any)=>(
            <div>
              <p>Name: {rocketIndex.name}</p>
              <p>Active: {rocketIndex.active ? "yes" : "no"}</p>
              <p>First Flight: {rocketIndex.first_flight}</p>
              <p>Description: {rocketIndex.description}</p>
              <br/>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};


