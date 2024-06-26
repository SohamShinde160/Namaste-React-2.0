import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo , sla} = resData?.info;
  return (
    <div className="res-card">
      <img
        style={{ width: "100%", height: "140px" }}
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <span>★ {avgRating} </span> &nbsp; Ratings
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;