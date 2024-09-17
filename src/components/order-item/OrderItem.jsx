import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './orderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/OrderContext'

export default function OrderItem({ item }) {

    const { removeItemFromOrder, changeItemQuantity } = useOrder()

    return (
        <li className="order-item">
            <div className="item-image">
                <img src={item.image} alt="" />
            </div>
            <div className="item-info">
                {item.name}
            </div>
            <div className="item-price">
                ${Number(item.price).toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
            </div>
            <div className="item-count">
                <input type="number" defaultValue={item.quantity} min={1} onChange={(evt) => changeItemQuantity(item.id, evt.target.valueAsNumber)} className='item-input'/>
            </div>
            <div className="item-actions">
                <button onClick={() => removeItemFromOrder(item.id)} className='btn-item'>
                    <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
                </button>
            </div>
        </li>
    )
}
