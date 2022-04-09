export const getRockets = async () => {
  try{
    const response = await fetch(`https://api.spacex.land/rest/rockets`);
    if(response.status!== 200) return;

    const rocket = await response.json();
    return rocket;
  }catch(e){
    console.error(e);
  }
};
