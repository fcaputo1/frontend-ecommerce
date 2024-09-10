import './OrderDialog.css'

export default function OrderDialog({ showModal, setToggleModal }) {

    if(!showModal) return

    return (
        <div className='modal-overlay'>
            <div className="modal-content">

                <div className="modal-header">Titulo del Modal</div>

                <div className="modal-body">

                    <ul className='order-list'>
                        <li className="order-item">
                            Producto 1
                        </li>
                        <li className="order-item">
                            Producto 2
                        </li>
                    </ul>

                </div>

                <div className="modal-footer">
                    <button onClick={() => setToggleModal(!showModal)}>
                        Cerrar
                    </button>
                    <button>
                        Finalizar Compra
                    </button>
                </div>

            </div>
        </div>
    )
}
