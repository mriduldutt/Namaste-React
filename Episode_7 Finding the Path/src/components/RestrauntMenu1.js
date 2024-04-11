import React, { useState,useEffect } from 'react'

const RestrauntMenu1 = () => {

    const [resInfo, setResInfo] = useState(null);
  
    useEffect(() => {
      fetchMenu();
    }, []);
  
    const fetchMenu = async () => {
      const url = ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6465998&lng=77.3395938&restaurantId=577703&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
      const data = await fetch(url);
      const json = await data.json();
    //   setResInfo(json.data);
      console.log( json);

    };
  
  return (
    <div className='menu'>
         <h1>Restraunt Name</h1>
      <p>
        
        cuisnes name - Cost
      </p>
      <h2>Menu</h2>
      <ul>
         <li>Burgers</li>
        {/* <li>{itemCards[1]?.card?.info?.name}</li> */}
        {/* {itemCards?.map((item) => {
          return (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {<span>&#x20B9;</span>}
            {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price /100}
          </li>);
        })} */}
      </ul>
    </div>
  )
}

export default RestrauntMenu1
