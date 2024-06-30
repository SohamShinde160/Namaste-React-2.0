import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card" data-testid="resCard">
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

  // Higher Order Component
  // input = <RestaurantCard/>  ==> <RestaurantCardPromoted/>

  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute text-white bg-green-700 m-1 rounded-lg p-1">OPEN</label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

export default RestaurantCard;
