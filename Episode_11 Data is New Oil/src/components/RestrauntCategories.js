import React from 'react'
import CategoriesItemList from './CategoriesItemList';

const RestrauntCategories = (props) => {
    const {data} = props;

    return (
    <div>
      {/* Header */}
      <div className='w-6/12 bg-gray-50 shadow-lg p-4 my-4 m-auto'>
        <div className='flex justify-between'>
        <span className='font-bold text-lg'>{data.title}  ({data.itemCards.length})</span>
        <span>🔻</span>
        </div>


        <CategoriesItemList items={data.itemCards}/>
      </div>

      {/* Body */}
   
    </div>
  )
}

export default RestrauntCategories
