import { useOrder } from '../../context/OrderContext'
import OrderItem from '../order-item/OrderItem'
import './OrderDialog.css'

export default function OrderDialog() {

    const { order, toggleModal, setToggleModal, total } = useOrder()
    
    if(!toggleModal) return

    return (
        <div className='modal-overlay' onClick={() => setToggleModal(!toggleModal)}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <div className="modal-header">
                    <span>O</span>rden de <span>C</span>ompras
                </div>

                <div className="modal-body">
                    <ul className='order-list'>
                        {
                            order.map(item => (
                                <OrderItem key={item.id} item={item} />
                            ))
                        }
                    </ul>
                    <div className='list-total'>
                            $ {total?.toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                    </div>
                </div>

                <div className="modal-footer">
                    <button className='close-modal-btn'onClick={() => setToggleModal(!toggleModal)}>
                        Cerrar
                    </button>
                    <button className='finalize-shopping-btn'>
                        Finalizar Compra
                    </button>
                </div>

            </div>
        </div>
    )
}
