import { Link, NavLink } from "react-router-dom";
import Logo from "../lib/img/logo"
import Search from "../lib/img/search";
import Karzinka from "../lib/img/karzinka";
import HeaderBtn from "../lib/img/headerBtn";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/"><Logo /></Link>
      </div>
      <ul className="header__list">
        <li className="header__list-item">
          <NavLink to="/home" className="header__link" style={({ isActive }) =>
            isActive
              ? {
                borderBottom: '3px solid #46A358',
                paddingBottom: '32px',
              }
              : {
                borderBottom: 'none',
                paddingBottom: '0'
              }
          }><span className="header__list-text">Home</span></NavLink>
        </li>
        <li className="header__list-item">
          <NavLink to="/shop" className="header__link" style={({ isActive }) =>
            isActive
              ? {
                borderBottom: '3px solid #46A358',
                paddingBottom: '32px',
              }
              : {
                borderBottom: 'none',
                paddingBottom: '0'
              }
          }><span className="header__list-text">Shop</span></NavLink>
        </li>
        <li className="header__list-item">
          <NavLink to="/plant" className="header__link" style={({ isActive }) =>
            isActive
              ? {
                borderBottom: '3px solid #46A358',
                paddingBottom: '32px',
              }
              : {
                borderBottom: 'none',
                paddingBottom: '0'
              }
          }><span className="header__list-text">Plant Care</span></NavLink>
        </li>
        <li className="header__list-item">
          <NavLink to="/blogs" className="header__link" style={({ isActive }) =>
            isActive
              ? {
                borderBottom: '3px solid #46A358',
                paddingBottom: '32px',
              }
              : {
                borderBottom: 'none',
                paddingBottom: '0'
              }
          }><span className="header__list-text">Blogs</span></NavLink>
        </li>
      </ul>
      <div className="header__media">
        <input type="text" className="header__media-input" placeholder="Find your plants" />
        <div className="header__media-search"><Search /></div>
        <div className="header__media-karzinka"><Karzinka />
          <span className="bagle">0</span>
        </div>
        <button className="header__btn">
          <HeaderBtn />
          <span>Login</span>
        </button>
        
      </div>
    </div>
  )
}
export default Header;