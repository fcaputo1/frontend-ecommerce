import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="main-header">
            <input type="checkbox" id="responsive-menu" className="input-burger" />
            <label className="burger-menu" htmlFor="responsive-menu">
                <div className="burger-line" />
            </label>
            <div className="main-header-sidebar">
                <NavLink to="/" className="main-logo">
                    <img src={Logo} className="main-logo-img" />
                </NavLink>
                <nav className="nav-main-bar">
                    <ul className="main-bar-list">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">
                                PRINCIPAL
                            </NavLink>
                        </li>
              <li className="nav-item">
                <NavLink to='/register' className="nav-link">
                  REGISTRO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link">
                  CONTACTO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about-us' className="nav-link">
                  ACERCA DE NOSOTROS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/product-admin'className="nav-link">
                  ADMIN PRODUCTOS
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* User Info Panel */}
        <div className="user-info">
          <span className="user-name">FRANK CAPUTO</span>
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>
        </div>
      </header>
  )
}