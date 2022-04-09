import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getRockets } from "../../services/spacex/service";

export const Rocket: FC = ()=>{
  const [actualRocket,setActualRocket] = useState<any>(undefined);

  useEffect(()=>{
    const loadRockets = async ()=>{
      const Rockets = await getRockets();
      setActualRocket(Rockets);
    };
    loadRockets();
  },[]);

  console.log(actualRocket);
  return(
    <div>
      <p>Rockets</p>
      {actualRocket!== undefined ? (
        <div>
          {actualRocket.map((rocketIndex:any)=>(
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


