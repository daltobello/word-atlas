import "./Header.css";
import { Router, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <div className='title-container'>
        <h1>Word Atlas</h1>
      </div>
      <div className='nav-wrapper'>
        <NavLink to={"/dictionary"} className='nav-link'>
          Dictionary
        </NavLink>
        <NavLink to={"/thesaurus"} className='nav-link'>
          Thesaurus
        </NavLink>
      </div>
    </header>
  );
}
export default Header;


