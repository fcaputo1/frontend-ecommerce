import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function ProductCard({ prod }) {

    return (
    <>
        {/* START CARD 1 */}
        <a href="/pages/products/product.html"></a>
            <article className="product-card">
            <a href="/pages/products/product.html">
                <div className="card-header">
                    <div className="product-image">
                        <img
                            src={prod.image}
                            alt={prod.image}
                        />
                    </div>
                </div>
            </a>
            <div className="card-body">
                <a href="/pages/products/product.html"></a>
                <div className="product-name">
                    <a href="/pages/products/product.html"></a>
                    <a href="/pages/products/product.html">{prod.name}</a>
                </div>
                <div className="product-entry-date">{prod.createdAt}</div>
                <div className="product-description">
                    <p>{prod.description}</p>
                </div>
                <div className="product-price">
                    <div className="product-price-number">{prod.price}</div>
                </div>
                <div className="card-footer">
                    <button className="buy-button">
                        Comprar
                    </button>
                    <NavLink to={`/product-detail/${prod.id}`} className="buy-button">
                        <button className="buy-button">Detalles</button>
                    </NavLink>
                </div>
            </div>
        </article>
        {/* END CARD 1 */}
    </>
    )
}
