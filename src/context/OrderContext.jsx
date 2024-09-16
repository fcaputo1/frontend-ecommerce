import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

export default function OrderProvider({ children }) {

    const [ count, setCount ] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [ order, setOrder ] = useState([])
    const [ toggleModal, setToggleModal ] = useState(false)

    useEffect(() => {
        calculateCount()
        calculateTotal()
    }, [order])

    function addOrderItem(product) {

        console.log("Add product", product.name)
        const productExists = order.find(prod => prod.id === product.id)

        if(productExists) {
            const updatedOrder = order.map(prod => {
                if (prod.id === product.id) {
                    prod.quantity++
                }
                return prod
            })
            setOrder(updatedOrder)
        } else {
            product.quantity = 1
            setOrder([ ...order, product ])
        }
        Swal.fire({
            position: 'center',
            icon: 'success',
            padding: '.5rem',
            title: 'Producto Agregado',
            width: '300px'
        })

    }
    function calculateCount() {
        let quantityItems = 0

        for(let item of order) {
            quantityItems += item.quantity
        }
        setCount(quantityItems)
    }

    function calculateTotal() {
        let total = 0

        order.forEach(item => {
            total += item.price * item.quantity
        })
        setTotal(total)
    }

    return (
        <OrderContext.Provider
            value={{
                order,
                addOrderItem, 
                toggleModal,
                setToggleModal, 
                count, 
                total
            }}
        >
            { children }
        </OrderContext.Provider>
    )
}