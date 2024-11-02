import { faCartShopping, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";
import { formatDate } from "../../utils/formatDate";

const URL = import.meta.env.VITE_SERVER

export default function ProductCard({ prod }) {
    const { addOrderItem } = useOrder()

    return (
        <>
            <NavLink to={`/product-detail/${prod?._id}`}></NavLink>
            <article className="product-card">
                <NavLink to={`/product-detail/${prod?._id}`}>
                    <div className="card-header">
                        <div className="product-image">
                            <img
                                src={`${URL}/images/products/${prod?.image}`}
                                alt={prod?.name}
                            />
                        </div>
                    </div>
                </NavLink>
                <div className="card-body">
                    <NavLink to={`/product-detail/${prod?._id}`}></NavLink>
                    <div className="product-name">
                        <NavLink to={`/product-detail/${prod?._id}`} className="product-link"></NavLink>
                        <NavLink to={`/product-detail/${prod?._id}`} className="product-link">{prod?.name}</NavLink>
                    </div>
                    <div className="product-data-container">
                        <button className="product-category">
                            {prod?.category}
                        </button>
                        <div className="product-entry-date">
                            {formatDate(prod.createdAt)}
                        </div>
                    </div>
                    <div className="product-description">
                        {prod?.description}
                    </div>
                    <div className="product-price">
                        <div className="product-price-number">
                            ${Number(prod?.price).toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="buy-button" onClick={() => addOrderItem(prod)}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                        <NavLink to={`/product-detail/${prod._id}`} className="product-detail-link">
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
