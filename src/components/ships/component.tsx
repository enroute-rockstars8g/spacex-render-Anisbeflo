import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { getShipByID } from "../../services/spacex/service";

export const Ship: FC = ()=>{
  const [shipID,setShipID] = useState<string>("GOMSTREE");
  const [actualShip,setActualShip] = useState<any>(undefined);

  useEffect(()=>{
    const firstShip = async ()=>{
      const newShip = await getShipByID(shipID);
      setActualShip(newShip);
    };
    firstShip();
  },[]);

  const getShipID = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value!=="") setShipID(event.target.value);
    else setShipID("GOMSTREE");
  };

  // const fetchPokemon = async() => {
  //   const newPokemon = await getPokemonByID(pokemonID);
  //   setActualPokemon(newPokemon);
  // };

  // const renderIndexes = (listIndex:any) => {
  //   const paragraphs = [];

  //   for (const index of listIndex){
  //     paragraphs.push(
  //       <p>
  //         Juego: {index.version.name}, indice: {index.game_index}
  //       </p>
  //     );
  //   }
  //   return paragraphs;
  // };

  console.log(actualShip);
  return(
    <div>
      <p>Ships</p>
      <p>Write the number of the ship you want to know</p>
      <input type="text" onChange={getShipID}/>
      {actualShip!== undefined ? (
        <div>
          <p>Name: {actualShip}</p>
          
        </div>
      ) : null}
    </div>
  );
};
