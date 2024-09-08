import { faCartShopping, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function ProductCard({ prod }) {

    return (
        <>
            <NavLink to={`/product-detail/${prod.id}`}></NavLink>
            <article className="product-card">
                <NavLink to={`/product-detail/${prod.id}`}>
                    <div className="card-header">
                        <div className="product-image">
                            <img
                                src={prod.image}
                                alt={prod.image}
                            />
                        </div>
                    </div>
                </NavLink>
                <div className="card-body">
                    <NavLink to={`/product-detail/${prod.id}`}></NavLink>
                    <div className="product-name">
                        <NavLink to={`/product-detail/${prod.id}`} className="product-link"></NavLink>
                        <NavLink to={`/product-detail/${prod.id}`} className="product-link">{prod.name}</NavLink>
                    </div>
                    <div className="product-entry-date">{prod.createdAt}</div>
                    <div className="product-description">
                        <p>{prod.description}</p>
                    </div>
                    <div className="product-price">
                        <div className="product-price-number">
                            {prod.price}
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="buy-button">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                        <NavLink to={`/product-detail/${prod.id}`} className="product-detail-link">
                            <button className="buy-button">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </article>
        </>
    )
}
