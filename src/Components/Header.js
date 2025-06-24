import {LOGO_URL} from "../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className ="logo"
                src ={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;