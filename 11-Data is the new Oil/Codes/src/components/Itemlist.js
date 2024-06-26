import React from 'react';
import { CDN_URL } from '../utilis/constants';

const Itemlist = ({ items }) => {
    console.log(items);
  return (
    <div>
      {items.map((res) => (
        <div className="newmenuinfo shadow-lg" key={res?.card?.info?.id}>
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
              <button className="p-2 bg-white right-96 mt-36 text-green-600 shadow-lg rounded-lg absolute m-auto">Add +</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Itemlist;