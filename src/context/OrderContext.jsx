import { createContext, useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { useUser } from "./UserContext"
import useApi from "../services/interceptor/interceptor"

const URL = import.meta.env.VITE_SERVER

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

export default function OrderProvider({ children }) {
    const { user } = useUser()
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [order, setOrder] = useState([])
    const [toggleModal, setToggleModal] = useState(false)
    const api = useApi()

    // Calcular cantidades y totales cuando cambia la orden
    useEffect(() => {
        calculateCount()
        calculateTotal()
    }, [order])

    // Añadir productos a la orden
    function addOrderItem(product) {
        const productExists = order.find((prod) => prod._id === product._id)
        if (productExists) {
            const updatedOrder = order.map((prod) =>
                prod._id === product._id ? { ...prod, quantity: prod.quantity + 1 } : prod
            )
            setOrder(updatedOrder)
        } else {
            setOrder([...order, { ...product, quantity: 1 }])
        }

        Swal.fire({
            position: 'center',
            icon: 'success',
            padding: '.5rem',
            title: 'Producto Agregado',
            width: '300px'
        })
    }

    // Calcular cantidad de ítems
    function calculateCount() {
        const quantityItems = order.reduce((total, item) => total + item.quantity, 0)
        setCount(quantityItems)
    }

    // Calcular total de la orden
    function calculateTotal() {
        const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0)
        setTotal(total)
    }

    // Remover un ítem de la orden
    function removeItemFromOrder(_id) {
        setOrder(order.filter((prod) => prod._id !== _id))
    }

    // Cambiar cantidad de un ítem en la orden
    function changeItemQuantity(_id, quantity) {
        setOrder(order.map((prod) => (prod._id === _id ? { ...prod, quantity } : prod)))
    }

    // Obtener todas las órdenes y mostrarlas en consola
    async function getOrders() {
        try {
            const response = await api.get(`${URL}/orders`)
            console.log("Órdenes creadas:", response.data)
        } catch (error) {
            console.error("Error al obtener las órdenes:", error)
        }
    }

    // Crear orden
    async function createOrder() {
        try {
            if (!user?._id) {
                Swal.fire({
                    title: "No iniciaste sesión",
                    text: "Debes iniciar sesión para poder crear una orden",
                    icon: "error"
                })
                return
            }

            const products = order.map((prod) => ({
                product: prod._id,
                quantity: prod.quantity,
                price: prod.price,
            }))

            const newOrder = {
                products,
                user: user._id,
                total,
            }

            await api.post(`${URL}/orders`, newOrder)

            Swal.fire({
                title: "Orden Creada",
                text: "La orden fue creada correctamente",
                icon: "success",
                timer: 1500
            })

            // Llama a getOrders para mostrar todas las órdenes en la consola
            getOrders()

        } catch (error) {
            console.error("Error al crear la orden:", error)
            Swal.fire({
                title: "Error al crear la orden",
                text: "La orden no pudo ser creada",
                icon: "error"
            })
        }
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
                changeItemQuantity,
                createOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}
