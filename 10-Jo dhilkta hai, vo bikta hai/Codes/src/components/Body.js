import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

// definition of state react variable
// ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body rendering");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfRestaurant(
      // optional chaining:-
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (<h1>Looks like you are offline !! check your Internet Connection</h1>)
  }


  // conditional rendering - Rendering on the basis of Condition
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="cont-bn">
        <div className="Search">
          <input
            className="search-box"
            placeholder="Search your Restaurant..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn"
            onClick={() => {
              // filter the restaurant cards & update the UI
              const filteredRestaurant = listOfRestaurant.filter((res) => {
                res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
              // search Text
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredData);
            console.log(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
