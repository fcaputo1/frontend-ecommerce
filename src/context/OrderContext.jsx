import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useUser } from "./UserContext";
import useApi from "../services/interceptor/interceptor";

const URL = import.meta.env.VITE_SERVER

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

export default function OrderProvider({ children }) {

    const { user, token } = useUser()
    const [ count, setCount ] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [ order, setOrder ] = useState([])
    const [ toggleModal, setToggleModal ] = useState(false)
    const api = useApi()

    //Guarda la orden en Local Storage y calcula Totales
    useEffect(() => {
        calculateCount();
        calculateTotal();
    }, [order]);

    //Añadir productos a la orden
    function addOrderItem(product) {

        console.log("Add product", product.name)
        const productExists = order.find(prod => prod._id === product._id)

        if(productExists) {
            const updatedOrder = order.map(prod => {
                if (prod._id === product._id) {
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
    function removeItemFromOrder(_id) {
        const orderFiltered = order.filter(prod => prod._id !== _id)
        setOrder(orderFiltered)
    }

    //Cambiar cantidad de un item en la orden
    function changeItemQuantity(_id, quantity) {
        const product = order.find(prod => prod._id === _id)
        product.quantity = quantity
        setOrder([ ...order])
    }

    async function createOrder() {
        try {
            if(!user._id) {
                Swal.fire({
                    title: "No iniciaste sesión",
                    text: "Debes iniciar sesión para poder crear una orden",
                    icon: "error"
                })
                return
            }
            const products = order.map(prod => {
                return {
                    product: prod._id,
                    quantity: prod.quantity,
                    price: prod.price
                }
            })
            const newOrder = {
                products,
                user: user._id,
                total
            }
            console.log(user)
            await api.post(
                `${URL}/orders`, newOrder, 
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            Swal.fire({
                title: "Orden Creada",
                text: "La orden fue creada correctamente",
                icon: "success",
                timer: 1500
            });
        } catch (error) {
            console.log(error)
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
            { children }
        </OrderContext.Provider>
    )
}