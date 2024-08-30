export default function AdminRow({ product, deleteProduct }) {
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
                <button className="edit-button">
                    Editar
                </button>
                <button className="delete-button" onClick={() => deleteProduct(product.id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
