import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constants";
import { useState , useContext} from "react";
import useOnlineStatus from "../utilis/useOnlineStatus";
import userContext from "../utilis/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  
  const [btnName, setBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const {isLoggedUser} = useContext(userContext);
  // console.log(isLoggedUser);
  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✔" : "❌"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 bg-green-500 rounded-lg">
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <button
            className="btn"
            onClick={() => {
              btnName === "Login"
                ? setBtnName(isLoggedUser)
                : setBtnName(isLoggedUser);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;