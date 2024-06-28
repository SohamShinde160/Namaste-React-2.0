import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constants";
import { useState , useContext} from "react";
import useOnlineStatus from "../utilis/useOnlineStatus";
import userContext from "../utilis/UserContext";
const Header = () => {
  
  const [btnName, setBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const {isLoggedUser} = useContext(userContext);
  console.log(isLoggedUser);
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
          <li>Cart</li>
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