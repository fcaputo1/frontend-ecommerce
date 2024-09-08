import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminRow({ product, deleteProduct, handleEditProduct }) {
  
    return (
        <tr>
            <td className="product-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
            </td>
            <td className="product-name">
                {product.name}
            </td>
            <td className="product-description">
                <div className="description-container">
                    {product.description}
                </div>
            </td>
            <td className="product-date">
                {product.createdAt}
            </td>
            <td className="product-price">
                {product.price}
            </td>
            <td className="product-actions">
                <button className="edit-button" onClick={ () => handleEditProduct(product) }>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className="delete-button" onClick={ () => deleteProduct(product.id) }>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}
