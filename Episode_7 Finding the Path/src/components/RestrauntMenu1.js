import React, { useEffect, useState } from 'react'
import { MENU_API } from '../utils/constant';
import Shimmer from './Shimmer';

const RestrauntMenu1 = () => {
 const [resData, setResData] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+'47169');
    const json = await data.json();
    console.log(json.data);
    setResData(json.data);
  }
  useEffect(() => {
    fetchMenu();
  },[]);

  if(resData === null) {
    return (
      <Shimmer/>
    )
  }

  const { name, cuisines, avgRating, costForTwoMessage, sla } = 
  resData?.cards[2]?.card?.card?.info;

  const {itemCards} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines} - {costForTwoMessage}</h3>
       <ul>
        <li>Item 1</li>
       </ul>
      
    </div>
  )
}

export default RestrauntMenu1
