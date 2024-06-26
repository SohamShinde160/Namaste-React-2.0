import Shimmer1 from "./Shimmer1";
import { CDN_URL } from "../utilis/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";

const RestaurantMenuCard = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer1 />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
    areaName,
    sla,
    feeDetails,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <div className="title1">
        Home/India/{resInfo?.cards[0]?.card?.card.text}
      </div>
      <h1 className="heading11">{name}</h1>
      <hr />
      <div className="menucard">
        <div>
          <div className="rating">
            <span className="span">★</span> &nbsp;
            {avgRatingString}({totalRatingsString})&nbsp; • &nbsp;
            {costForTwoMessage}
          </div>
        </div>
        <div className="cuisines">{cuisines}</div>
        <div className="outlet">
          <div className="sc-lizKOf bBYPYZ">
            <div className="sc-fsvrbR jnMRZP"></div>
            <div className="sc-jOnpCo kEBcrx"></div>
            <div className="sc-fsvrbR jnMRZP"></div>
          </div>
          <div className="wewqdiok">
            Outlet
            <span className="card1">&nbsp; &nbsp;{areaName}</span>▾
            <div>{sla?.slaString}</div>
          </div>
        </div>
        <hr />
        <div className="msg">
          <img
            width="20px"
            height="20px"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
          />
          {feeDetails?.message.replace("<b>2.3 kms</b>", "2.3 km ")}
        </div>
      </div>
      <div className="boxgray"></div>
      <div>Recommanded (20)</div>
      <div>
        {itemCards.map((res) => (
          <div className="newmenuinfo" key={res?.card?.info?.id}>
            <div className="menucont">
              <div className="menutile">{res?.card?.info?.name}</div>
              <div>
                ₹&nbsp;{
                  res?.card?.info?.defaultPrice / 100
                  // res?.card?.info?.variantsV2?.pricingModels?.price / 100
                }
              </div>
              <div className="menudesc">{res?.card?.info?.description}</div>
            </div>
            <img width="156px" className="imgmenu" src={CDN_URL + res?.card?.info?.imageId}></img>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
