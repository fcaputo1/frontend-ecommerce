import './ProductAdmin.css'
import { useForm } from 'react-hook-form'
import '../../styles/form.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AdminTable from '../../components/admin-table/AdminTable'
import Swal from 'sweetalert2'

const URL = import.meta.env.VITE_SERVER_URL

export default function ProductAdmin() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { register, setValue, reset, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" })

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {

    if (selectedProduct) {
      setValue("name", selectedProduct.name),
        setValue("price", selectedProduct.price),
        setValue("description", selectedProduct.description),
        setValue("image", selectedProduct.image),
        setValue("category", selectedProduct.category),
        setValue("createdAt", selectedProduct.createdAt)
    }


  }, [selectedProduct])

  //Traer productos desde el backend
  async function getProducts() {

    try {
      const response = await axios.get(`${URL}/products`)
      setProducts(response.data)

    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "Error al cargar productos",
        text: "No se pudieron cargar los productos",
        icon: "error"
      })
    }
  }

  //Eliminar productos
  function deleteProduct(id) {

    Swal.fire({
      title: "Borrar Producto",
      text: "Realmente deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
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
  
  //Agregar o Editar productos
  async function onProductSubmit(product) {

    try {

      if (selectedProduct) {
        const { id } = selectedProduct
        const response = await axios.put(`${URL}/products/${id}`, product)

        Swal.fire({
          title: "Actualizacion correcta",
          text: "El producto fue actualizado correctamente",
          icon: "success",
          timer: 1500
        })
        setSelectedProduct(null)

      } else {
        const prod = await axios.post(`${URL}/products`, product)
        console.log(prod)

        Swal.fire({
          title: "Producto Registrado",
          text: "El producto fue registrado correctamente",
          icon: "success",
          timer: 1500
        })
      }

      reset()
      getProducts()

    } catch (error) {
      console.log(error)
      if (selectedProduct) {
        Swal.fire({
          title: "Error al actualizar el producto",
          text: "El producto no pudo ser actualizado",
          icon: "error",
          timer: 1500
        })
      } else {
        Swal.fire({
          title: "Error al agregar el producto",
          text: "El producto no pudo ser agregado",
          icon: "error",
          timer: 1500
        })
      }
    }
  }

  //Editar Productos
  function handleEditProduct(product) {
    console.log('Producto a editar', product)
    setSelectedProduct(product)
  }

  return (
    <>
      <h2 className="product-admin-title-text">
        <span>A</span>dministrador de Productos
      </h2>
      <div className="product-admin-container">
        {/* START FORM */}
        <div className="product-admin-form">
          <h2 className="product-admin-form-title"><span>A</span>ñadir Producto</h2>
          <form onSubmit={handleSubmit(onProductSubmit)}>
            <div className="input-group">
              <label htmlFor="name" className="input-label">Nombre Producto</label>
              <input type="text" {...register("name", { required: true, minLength: 3, maxLength: 80 })} />
              {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}
              {errors.name?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 3</div>}
            </div>
            <div className="input-group">
              <label htmlFor="price" className="input-label">Precio</label>
              <input type="number" {...register("price", { required: true })} min={1} className="input-group" />
              {errors.price?.type === "required" && <div className="input-error">El campo es requerido</div>}
              {errors.price?.type === "min" && <div className="input-error">El precio mínimo es 0</div>}
            </div>
            <div className="input-group">
              <label htmlFor="description" className="input-label">Descripción</label>
              <textarea {...register("description", { required: true })} rows={5} className="input-group" />
              {errors.description?.type === "required" && <div className="input-error">El campo es requerido</div>}
            </div>
            <div className="input-group">
              <label htmlFor="category" className="input-label">Categoría</label>
              <select {...register("category", { required: true })} className="input-group">
                <option value="Lujo">Autos de Lujo</option>
                <option value="Deportivo">Auto deportivo</option>
                <option value="SuperDeportivo">Super Deportivo</option>
              </select>
              {errors.category?.type === "required" && <div className="input-error">El campo es requerido</div>}
            </div>
            <div className="input-group">
              <label htmlFor="createdAt" className="input-label">Fecha de Ingreso</label>
              <input type="date" {...register("createdAt", { required: true })} className="input-group" />
              {errors.createdAt?.type === "required" && <div className="input-error">El campo es requerido</div>}
            </div>
            <div className="input-group">
              <label htmlFor="image" className="input-label">
                Imagen
              </label>
              <input
                type="url"
                {...register("image", {
                  required: true,
                  pattern: {
                    value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
                  }
                })}
              />
              {errors.image?.type === "required" && (
                <div className="input-error">El campo es requerido</div>
              )}
              {errors.image?.type === "pattern" && (
                <div className="input-error">El campo no contiene una URL válida</div>
              )}
            </div>

            <div className="input-group">
              <button type='submit' disabled={!isValid}>
                {
                  selectedProduct ? "Editar" : "Crear"
                }
              </button>
            </div>
          </form>
        </div>
        {/* END FORM */}

        <div className="product-admin-section">
          {/* START PRODUCT ADMIN TABLE */}
          <h2 className="product-admin-table-title"><span>P</span>roductos</h2>
          <AdminTable products={products}
            deleteProduct={deleteProduct}
            handleEditProduct={handleEditProduct}
          />
        </div>
        {/* END PRODUCT ADMIN TABLE */}

      </div>

    </>


  )
}
