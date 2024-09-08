import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminRow({ product, deleteProduct, handleEditProduct }) {
  
    return (
        <tr>
            <td className="table-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
            </td>
            <td className="table-name">
                {product.name}
            </td>
            <td className="table-description">
                <div className="description-container">
                    {product.description}
                </div>
            </td>
            <td className="table-date">
                {product.createdAt}
            </td>
            <td className="table-price">
                {product.price}
            </td>
            <td className="table-actions">
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
