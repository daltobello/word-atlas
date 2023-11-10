import "./Navigation.css";
import { Router, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-wrapper">
        <NavLink to={"/dictionary"} className="dict-nav-link">
          Dictionary
        </NavLink>
        <NavLink to={"/thesaurus"} className="thes-nav-link">
          Thesaurus
        </NavLink>
    </nav>
  );
}
export default Navigation;


