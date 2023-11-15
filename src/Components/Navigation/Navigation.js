import "./Navigation.css";
import { Router, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-wrapper">
        <NavLink to={"/"} className="nav-link" activeclassname="active-link">
          Dictionary
        </NavLink>
        <NavLink to={"/thesaurus"} className="nav-link" activeclassname="active-link">
          Thesaurus
        </NavLink>
    </nav>
  );
}
export default Navigation;


