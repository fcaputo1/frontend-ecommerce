import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import axios from "axios";
import { useUser } from "../../context/UserContext";

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function ProductGallery() {

    const [ products, setProducts ] = useState([])

    const { token, logout } = useUser()
    
    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {

            const response = await axios.get(`${URL}/products`)
            
            setProducts(response.data)

            const userResponse = await axios.get(`${URL}/users`, {
                headers: {
                    Authorization: token
                }
            })
            console.log(userResponse);

        } catch (error) {

            if (error.response.status === 401) {
                alert("La sesión ha expirado")
                logout()
                return
            }
            alert("Error al obtener los productos")
            console.log(error)
        }
    }

    return (
        <>
            <h1 className="product-title">
                Productos <span>destacados</span>
            </h1>
            <div className="product-card-container">
                { 
                    products.map(product => <ProductCard key={product.id} prod={product}/>)
                }
            </div>
        </>
    )
}
