import '../../styles/table.css'
import AdminRow from '../admin-row/AdminRow'

export default function AdminTable({ products, deleteProduct, handleEditProduct }) {
    return (
        <table className="product-admin-table">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Fecha de ingreso</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(prod => {
                        return <AdminRow    key={prod._id} 
                                            product={prod} 
                                            deleteProduct={deleteProduct}
                                            handleEditProduct={handleEditProduct}/>
                    })
                }
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}
