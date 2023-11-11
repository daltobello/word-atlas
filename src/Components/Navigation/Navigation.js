import "./Navigation.css";
import { Router, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-wrapper">
        <NavLink to={"/dictionary"} className="nav-link">
          Dictionary
        </NavLink>
        <NavLink to={"/thesaurus"} className="nav-link">
          Thesaurus
        </NavLink>
    </nav>
  );
}
export default Navigation;


