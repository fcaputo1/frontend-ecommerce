import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import userImg from '../../assets/images/default-user.png'
import { useOrder } from "../../context/OrderContext";

export default function Header() {
  const { setToggleModal, count } = useOrder()
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
              <li className="nav-item">
                <NavLink to='/user-admin'className="nav-link">
                  ADMIN USUARIOS
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* User Info Panel */}
        <div className="user-info">
          <div className='cart-button'>
            <div className="order-count">{count}</div>
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" onClick={() => setToggleModal((modal) => !modal)}/>
          </div>
          <div className="avatar">
            <img src={userImg} alt="" />
          </div>
        </div>
      </header>
  )
}
