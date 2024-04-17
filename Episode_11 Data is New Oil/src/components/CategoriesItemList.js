import React from 'react'

const CategoriesItemList = (props) => {
   const {items} = props;
   console.log(items);
    return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item?.card?.info?.id}>
            <div>
               <span>{item?.card?.info?.name}</span>  
               <span>{item?.card?.info?.price}</span>
            </div>
            <p>
              {item?.card?.info?.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesItemList
