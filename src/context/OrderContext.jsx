import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

export default function OrderProvider({ children }) {

    const [ count, setCount ] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [ order, setOrder ] = useState([])
    const [ toggleModal, setToggleModal ] = useState(false)

    //Carga orden desde Local Storage
    useEffect(() => {
        const storedOrder = localStorage.getItem("order");
        if (storedOrder) {
            setOrder(JSON.parse(storedOrder));
        }
    }, []);

    //Guarda la orden en Local Storage y calcula Totales
    useEffect(() => {
        if (order.length > 0) {
            localStorage.setItem("order", JSON.stringify(order));
        } else {
            localStorage.removeItem("order");  // Elimina el localStorage si no hay productos
        }
        calculateCount();
        calculateTotal();
    }, [order]);

    //Añadir productos a la orden
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

    //Caalcular cantidad de items
    function calculateCount() {
        let quantityItems = 0

        for(let item of order) {
            quantityItems += item.quantity
        }
        setCount(quantityItems)
    }

    //Calcular total de la orden
    function calculateTotal() {
        let total = 0

        order.forEach(item => {
            total += item.price * item.quantity
        })
        setTotal(total)
    }

    //Remover item de la orden
    function removeItemFromOrder(id) {
        const orderFiltered = order.filter(prod => prod.id !== id)
        setOrder(orderFiltered)
    }

    //Cambiar cantidad de un item en la orden
    function changeItemQuantity(id, quantity) {
        const product = order.find(prod => prod.id === id)
        product.quantity = quantity
        setOrder([ ...order])
    }

    return (
        <OrderContext.Provider
            value={{
                order,
                addOrderItem, 
                toggleModal,
                setToggleModal, 
                count, 
                total,
                removeItemFromOrder, 
                changeItemQuantity
            }}
        >
            { children }
        </OrderContext.Provider>
    )
}