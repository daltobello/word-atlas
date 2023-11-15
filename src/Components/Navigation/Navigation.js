import "./Navigation.css";
import { Router, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-wrapper">
        <NavLink to={"/dictionary"} className="nav-link" activeClassName="active-link">
          Dictionary
        </NavLink>
        <NavLink to={"/thesaurus"} className="nav-link" activeClassName="active-link">
          Thesaurus
        </NavLink>
    </nav>
  );
}
export default Navigation;


