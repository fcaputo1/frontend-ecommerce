import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/images/logo/logo.png'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="main-footer">
      <section className="footer-social">
        <ul className="social-networks">
          <li className="social-item">
            <NavLink to="#" className="social-item-link">
              <FontAwesomeIcon icon={faFacebook} />
              <div className="item-text">Facebook</div>
            </NavLink>
          </li>
          <li className="social-item">
            <NavLink to="#" className="social-item-link">
              <FontAwesomeIcon icon={faInstagram} />
              <div className="item-text">Instagram</div>
            </NavLink>
          </li>
          <li className="social-item">
            <NavLink to="#" className="social-item-link">
              <FontAwesomeIcon icon={faTwitter} />
              <div className="item-text">Twitter</div>
            </NavLink>
          </li>
          <li className="social-item">
            <NavLink to="#" className="social-item-link">
              <FontAwesomeIcon icon={faWhatsapp} />
              <div className="item-text">Whatsapp</div>
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="footer-logo">
        <img
          src={Logo}
          alt="Ferrari"
          className="footer-logo-img"
        />
      </section>
      <section className="address">
        <ul className="address-list">
          <li className="address-item">5960 NW 99 av</li>
          <li className="address-item">Doral, Florida, 33178</li>
          <li className="address-item">+17869098859</li>
        </ul>
      </section>
    </footer>
  )
}
