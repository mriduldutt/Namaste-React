import React, { useState } from "react";
import CategoriesItemList from "./CategoriesItemList";
import ItemList from "./ItemList";

const RestrauntCategory = (props) => {
  const { data } = props;
  // console.log(data);
  const itemCard = data.categories.map((c) => c.itemCards);

  const [showItem, setShowItem] = useState(false);

  const handle_Hide_Show = () => {
    setShowItem(!showItem);
    // setShowIndex();
  };

    return (
      <div className="panel">
        <div className="w-6/12 p-4 my-4 m-auto">
          {/* Accordion Header */}
          <div
            className="flex justify-between cursor-pointer accordion" onClick={handle_Hide_Show}>
            <span className="font-bold text-lg">
              {data.title}
            </span>
            <span>🔻</span>
          </div>

          {/* Accordion Body */}
          {showItem && <ItemList items={itemCard} />}
        </div>

        <hr className="w-6/12 m-auto h-2 border-none  bg-gray-200" />
      </div>
    );
  };





//   return (
//     <div className="panel">
//       <div className="w-6/12  bg-gray-50  p-4 my-4 m-auto">
//         {/* Accordion Header */}
//         <div className="flex justify-between cursor-pointer accordion">
//           <span className="font-bold text-lg">
//             {data.title}
//           </span>
//           <span>🔻</span>
//         </div>

//         {/* Accordion Body */}
//         {<ItemList items={itemCard} />}
      
//       </div>




//       <hr className="w-6/12 m-auto h-2 border-none  bg-gray-200" />
//     </div>
//   );
// };

export default RestrauntCategory;
