import React, { useState } from 'react'
import Itemlist from './Itemlist';

const ResCategory = ({ data, showItems, setShowIndex }) => {
  const handlerClick = () => {
    console.log("clicked");
    // setShowItems(!showItems);
    setShowIndex()
  };

  return (
    <div>
      {/* Header */}
      <div className="w-full my-6 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handlerClick}
        >
          <span className="text-lg">
            {data.title} &nbsp;({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <Itemlist items={data.itemCards} />}
      </div>
      {/* Body */}
    </div>
  );
};

export default ResCategory;