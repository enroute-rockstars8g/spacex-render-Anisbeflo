export const getShipByID = async (id:string) => {
  try{
    const response = await fetch(`https://api.spacex.land/rest/ship/${id}`);
    if(response.status!== 200) return;

    const ship = await response.json();
    return ship;
  }catch(e){
    console.error(e);
  }
};
