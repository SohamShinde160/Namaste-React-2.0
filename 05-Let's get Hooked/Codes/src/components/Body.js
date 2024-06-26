import RestaurantCard from "./RestaurantCard";
import reslist from "../utilis/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurant, setlistOfRestaurant] = useState(reslist);

  return (
    <div className="body">
      <div className="cont-bn">
        <div className="Search">Search</div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.4
            );
            setlistOfRestaurant(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;