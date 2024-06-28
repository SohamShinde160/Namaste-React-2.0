import React from 'react';
import { CDN_URL } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utilis/cartSlice';

const Itemlist = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch()
  
  const handleAddItem = (res) => {
    // dispatch an action
    dispatch(addItem(res));
    alert("item added to cart")
  };

  return (
    <div>
      {items.map((res) => (
        <div
          className="newmenuinfo shadow-lg flex justify-between"
          key={res?.card?.info?.id}
        >
          <div className="menucont">
            <div className="menutile">{res?.card?.info?.name}</div>
            <div>
              ₹&nbsp;
              {res?.card?.info?.defaultPrice / 100 ||
                res?.card?.info?.price / 100}
            </div>
            <div className="menudesc">{res?.card?.info?.description}</div>
          </div>
          <img
            width="156px"
            className="imgmenu"
            src={CDN_URL + res?.card?.info?.imageId}
          ></img>
          <button
            className="p-2 bg-black right-96  mt-36 text-white shadow-lg rounded-lg absolute m-auto"
            onClick={() => handleAddItem(res)}
          >
            Add +
          </button>
          {/* <hr /> */}
        </div>
      ))}
    </div>
  );
}

export default Itemlist;