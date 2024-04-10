import React, { useEffect} from 'react'

const RestrauntMenu = () => {
  
  const fetchMenu = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6394246&lng=77.3109035&restaurantId=55474&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
      const json = await data.json();
      console.log(json);
  }


  useEffect(()=>{
       fetchMenu();
  },[])


  return (
    <div className="menu">
      <h1>Name of the Restraunt</h1>
      <h2>Menu</h2>
      <ul>
        <li>Burgers</li>
        <li>Briyani</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  )
}

export default RestrauntMenu;
