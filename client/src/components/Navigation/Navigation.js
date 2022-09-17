import "./Navigation.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        <h3 className="navbar__text">InstaFans</h3>
        <img src={logo} className="navbar__logo"></img>
      </Link>
    </nav>
  );
}
