import React, { useState } from 'react'
import CategoriesItemList from './CategoriesItemList';

const RestrauntCategories = (props) => {
    const {data} = props;

    const [showItem, setShowItem] = useState(false);
    
    const handle_Hide_Show = () => {
      setShowItem(!showItem);
    }


    return (

    <div>
      {/* Header */}

      <div className='w-6/12  p-4 my-4 m-auto'>
        <div className='flex justify-between cursor-pointer' onClick={handle_Hide_Show}>
        <span className='font-bold text-lg'>{data.title}  ({data.itemCards.length})</span>
        <span>🔻</span>
        </div>
        


       { showItem && <CategoriesItemList items={data.itemCards}/>}
      </div>

      <hr className='w-6/12 m-auto h-2 border-none  bg-gray-200'/>
      {/* Body */}
   
    </div>
  )
}

export default RestrauntCategories
