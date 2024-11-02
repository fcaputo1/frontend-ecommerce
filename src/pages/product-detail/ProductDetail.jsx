import { useParams } from "react-router-dom"
import './product.css'
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useOrder } from "../../context/OrderContext";

const URL = import.meta.env.VITE_SERVER

export default function ProductDetail() {
    const { addOrderItem } = useOrder()
    const { id } = useParams()
    const [ product, setProduct ] = useState([])
    
    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {

        try {
            //carga de productos
            const response = await axios.get(`${URL}/products/${id}`)
            setProduct(response.data.product)
            
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Error al cargar el producto",
                text: "No se puede cargar el producto",
                icon: "error"
            })
        }
    }

    if (!product) {
        return <Spinner animation="border"/>
    }

    return (
        <>
            <h2 className="product-title-text">
                {product?.name}
            </h2>
            <section className="product-header">
                <div className="product-header-image">
                    <img
                        src={`${URL}/images/products/${product.image}`}
                        alt={product?.name}
                    />
                </div>
                <div className="product-header-card">
                    <div className="product-header-card-title">
                        {product?.name}  
                    </div>
                    <div className="product-header-card-description">
                        <p>
                            {product?.description}
                        </p>
                    </div>
                    <div className="product-header-internal-container">
                        <button className="product-header-category">
                            {product.category}
                        </button>
                        <div className="product-header-card-price">
                        ${Number(product.price)?.toLocaleString('es-ES', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                        </div>
                    </div>
                    <div className="product-header-card-footer">
                        <button className="buy-button" onClick={() => addOrderItem(product)}>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </section>
            <section className="main-product-info">
            <ul>
                <li>
                    {product?.description} 
                </li>
            </ul>
        </section>
        </>
    )
}
