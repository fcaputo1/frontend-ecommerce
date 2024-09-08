import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import axios from "axios";

const URL = import.meta.env.VITE_SERVER_URL

export default function ProductGallery() {

    const [ products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {

            const response = await axios.get(`${URL}/products`)
            setProducts(response.data)

        } catch (error) {
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