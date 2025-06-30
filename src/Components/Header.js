import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

 const onlineStatus=useOnlineStatus();

  return (
    <div className="justify-between flex bg-cyan-100 shadow-lg sm:bg-yellow-100 lg:to-blue-200 ">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
            <li className="px-4"> online status:{onlineStatus?"✅":"🔴"}</li>
          <li>
            <Link to="">Home</Link></li>
          <li className="px-4"><Link to="/about">about us</Link></li>
          <li className="px-4"><Link to="/contact">contact us</Link></li>
          <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
          <li className="px-4">cart</li>
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