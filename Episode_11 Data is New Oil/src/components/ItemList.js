import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = (props) => {
  const { items } = props;

  console.log(items);
  console.log(items[0]);
  return (
    <div>
      {items.map((itemee) =>
        itemee.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-200 shadow-lg text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-4">
                <span className="">{item?.card?.info?.name}</span>
                <span className="">
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-600">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="bg-green-500 shadow-lg mx-16 rounded-lg p-2 text-white">
                  {" "}
                  Add +
                </button>{" "}
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full"
                alt=""
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
