import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";


const useRestrauntMenu = (resID) => {
  
  const [resInfo, setResInfo] = useState(null);
    // fetch Data
     // const  json1 = useLoaderData();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData= async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestrauntMenu;

// export const LoaderfromMenu = async () => {
//   const data = await fetch(MENU_API+resID);
//   const json = await data.json();
//   return json.data;
// }