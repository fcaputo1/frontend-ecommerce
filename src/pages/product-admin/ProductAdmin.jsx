import './ProductAdmin.css'
import { useForm } from 'react-hook-form'
import '../../styles/form.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AdminTable from '../../components/admin-table/AdminTable'
import Swal from 'sweetalert2'

const URL = "https://66cd01308ca9aa6c8cc93b27.mockapi.io/api/v1"

export default function ProductAdmin() {
  const [ products, setProducts ] = useState([])
  const { register, handleSubmit, formState: { errors, isValid } } = useForm()

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    
    try {
      //carga de productos
      const response = await axios.get(`${URL}/products`)
      
      setProducts(response.data)
      
    } catch (error) {
      console.log(error)
      //SWAL para error
    }
  }

function deleteProduct(id) {

    Swal.fire({
      title: "Borrar Producto",
      text: "Realmente deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true
    }). then(async(result) => {
      try {

        if(result.isConfirmed) {

          const response = await axios.delete(`${URL}/products/${id}`)
  
          getProducts()

        }

      } catch (error) {
        console.log(error)
        
        Swal.fire({
          title: "Error al borrar",
          text: "El producto no pudo ser eliminado",
          icon: "error"
        })
      }
    })
}

  async function onProductSubmit (product) {
    try {
      const prod = await axios.post(`${URL}/products`, product)
      console.log(prod)

      getProducts()

    } catch (error) {
      console.log(error)
      //SWAL y mostrar el error
    }
  }
  
  return (
    <>
      <h2 className="product-admin-title-text">
        <span>A</span>dministrador de Productos
      </h2>
      <div className="product-admin-container">
        <div className="product-admin-form">
          <h2 className="product-admin-form-title"><span>A</span>ñadir Producto</h2>
          <form onSubmit={handleSubmit(onProductSubmit)}>
            <div className="input-group">
              <label htmlFor="name" className="input-label">Nombre Producto</label>
              <input type="text" {...register("name", {required:true, minLength: 3})}/>
              { errors.name?.type === "required" && <div className="input-error">El campo es requerido</div> }
              { errors.name?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 3</div> }
            </div>
            <div className="input-group">
              <label htmlFor="price" className="input-label">Precio</label>
              <input type="number" {...register("price", {required:true})} className="input-group"/>
              { errors.price?.type && <div className="input-error">El campo es requerido</div> }
            </div>
            <div className="input-group">
              <label htmlFor="description" className="input-label">Description</label>
              <textarea {...register("description")} rows={5} className="input-group"/>
            </div>
            <div className="input-group">
              <label htmlFor="category" className="input-label">Categoría</label>
              <select {...register("category")} className="input-group">
                <option value="Lujo">Autos de Lujo</option>
                <option value="Deportivo">Auto deportivo</option>
                <option value="SuperDeportivo">Super Deportivo</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="createdAt" className="input-label">Fecha de Ingreso</label>
              <input type="date" {...register("createdAt")} className="input-group"/>
            </div>
            <div className="input-group">
              <label htmlFor="image" className="input-label">Imagen</label>
              <input type="url" {...register("image")} className="input-group"/>
            </div>
            <div className="input-group">
              <button type='submit' disabled={!isValid}>Crear</button>
            </div>
          </form>
        </div>

        <div className="product-admin-section">
          <h2 className="product-admin-table-title"><span>P</span>roductos</h2>
            <AdminTable products={products} deleteProduct={deleteProduct} />
    </div>

    </div>
    
    </>
    

  )
}