import { NavLink, useParams } from "react-router-dom"
import './product.css'
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const URL = import.meta.env.VITE_SERVER_URL

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {

        try {
            //carga de productos
            const response = await axios.get(`${URL}/products/${id}`)
            setProduct(response.data)
            
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
                        src={product?.image}
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
                    <div className="product-header-card-price">${product.price}</div>
                    <div className="product-header-card-footer">
                        <button className="buy-button">
                            <NavLink to={`/product-detail/${product?.id}`} className="buy-link">Comprar</NavLink>
                        </button>
                    </div>
                </div>
            </section>
            <section className="main-product-info">
                <ul>
                    <li>
                        Disponible en variantes coupé (488 GTB) y descapotable (488 Spider), el
                        488 ofrece opciones para satisfacer los gustos y necesidades de cada
                        conductor. Ya sea disfrutando de un paseo tranquilo por la ciudad o
                        desatando su potencia en la pista, el Ferrari 488 brinda una experiencia
                        de conducción incomparable que captura la esencia del espíritu italiano
                        y la pasión por la automoción de alto rendimiento.
                    </li>
                    <li>
                        En el interior, el Ferrari 488 ofrece un ambiente lujoso y orientado al
                        conductor. Los materiales de alta calidad, como el cuero y la fibra de
                        carbono, se combinan con una ergonomía meticulosa para crear un espacio
                        donde la comodidad y el rendimiento se fusionan. La tecnología a bordo,
                        incluido un sistema de infoentretenimiento avanzado y opciones de
                        personalización, eleva aún más la experiencia de conducción.
                    </li>
                    <li>
                        Además de su impresionante rendimiento y diseño, el Ferrari 488 ha sido
                        elogiado por su maniobrabilidad y control. La suspensión
                        magnetorheológica, el sistema de frenos cerámicos de carbono y la
                        dirección asistida eléctrica contribuyen a una conducción precisa y
                        reactiva, ya sea en la carretera o en la pista.
                    </li>
                    <li>
                        En resumen, el Ferrari 488 es un superdeportivo que combina potencia
                        bruta, diseño aerodinámico y lujo interior, manteniendo el legado de
                        Ferrari en la creación de vehículos que ofrecen una experiencia de
                        conducción incomparable.
                    </li>
                </ul>
            </section>
        </>
    )
}
