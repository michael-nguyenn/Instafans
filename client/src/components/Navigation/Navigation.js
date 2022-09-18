import "./Navigation.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Navigation() {
  let { userId } = useParams();
  console.log(userId);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        <h3 className="navbar__text">InstaFans</h3>
        <img src={logo} className="navbar__logo"></img>
      </Link>
      {/* {if (useId = dashboard) } */}
      <Link to="/start" className="navbar__account">
        Try another account
      </Link>
    </nav>
  );
}
