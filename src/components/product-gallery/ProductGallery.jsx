import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard"
import useAPI from "../../services/interceptor/interceptor"

const URL = import.meta.env.VITE_SERVER

export default function ProductGallery() {

    const [ products, setProducts ] = useState([])
    const api = useAPI()
    
    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {
            const response = await api.get(`${URL}/products`)
            setProducts(response.data)
        } catch (error) {
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
                    products.map(product => <ProductCard key={product._id} prod={product}/>)
                }
            </div>
        </>
    )
}
