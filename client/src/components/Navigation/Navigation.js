import "./Navigation.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Navigation() {
  let location = useLocation();
  let slicedPath = location.pathname.slice(1, 10);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        <img src={logo} className="navbar__logo"></img>
      </Link>
      {slicedPath == "dashboard" ? (
        <Link to="/start" className="navbar__account">
          Try another account
        </Link>
      ) : null}
    </nav>
  );
}
