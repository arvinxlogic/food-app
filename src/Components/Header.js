import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  useEffect(()=>{
    console.log("useffect called")

  },[])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            
            <Link to="">Home</Link></li>
          <li><Link to="/about">about us</Link></li>
          <li><Link to="/contact">contact us</Link></li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
