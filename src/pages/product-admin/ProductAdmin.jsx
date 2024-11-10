import './ProductAdmin.css'
import { useForm } from 'react-hook-form'
import '../../styles/form.css'
import { useEffect, useState } from 'react'
import AdminTable from '../../components/admin-table/AdminTable'
import Swal from 'sweetalert2'
import { useUser } from '../../context/UserContext'
import useApi from '../../services/interceptor/interceptor'

const URL = import.meta.env.VITE_SERVER

export default function ProductAdmin() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [ categories, setCategories ] = useState([])
  const { register, setValue, reset, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" })
  const { token } = useUser()
  const api = useApi()

  useEffect(() => {
    getProducts()
    getCategories()
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

  async function getCategories() {
    try {
      const response = await api.get(`${URL}/categories`)
      console.log(response.data)
      setCategories(response.data.categories)
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "Error al cargar las categorías",
        text: "No se pudieron cargar las categorías",
        icon: "error",
        timer: 1500
      })
    }
  }

  //Traer productos desde el backend
  async function getProducts() {

    try {
      const response = await api.get(`${URL}/products`)
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
  function deleteProduct(_id) {

    Swal.fire({
      title: "Borrar Producto",
      text: "Realmente deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await api.delete(`${URL}/products/${_id}`, 
            {
              headers: {
                Authorization: token
              }
            }
          );
          Swal.fire({
            title: "Producto Eliminado",
            text: "El producto fue eliminado correctamente",
            icon: "success",
            timer: 1500
          })
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
      const formData = new FormData()
      formData.append("name", product.name)
      formData.append("price", product.price)
      formData.append("description", product.description)
      formData.append("category", product.category)
  
      // Verificar y agregar la imagen
      if (product.image && product.image[0]) {
        formData.append("image", product.image[0])
      } else {
        console.log("No se seleccionó ninguna imagen.")
      }
  
      if (selectedProduct) {
        const { _id } = selectedProduct;
        await api.put(`${URL}/products/${_id}`, formData, {
          headers: {
            Authorization: token
          }
        });
  
        Swal.fire({
          title: "Actualización correcta",
          text: "El producto fue actualizado correctamente",
          icon: "success",
          timer: 1500
        });
        setSelectedProduct(null); // Limpiar el producto seleccionado después de la edición
      } else {
        await api.post(`${URL}/products`, formData, {
          headers: {
            Authorization: token
          }
        });
  
        Swal.fire({
          title: "Producto Registrado",
          text: "El producto fue registrado correctamente",
          icon: "success",
          timer: 1500
        });
      }
  
      reset(); // Reiniciar el formulario
      getProducts(); // Refrescar la lista de productos
    } catch (error) {
      console.error("Error en la carga del producto:", error);
      const errorMessage = selectedProduct
        ? "Error al actualizar el producto"
        : "Error al agregar el producto";
      Swal.fire({
        title: errorMessage,
        text: "El producto no pudo ser procesado",
        icon: "error",
        timer: 1500
      });
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
                {
                  categories.map(cat => (
                    <option key={cat._id} value={cat.name}>{ cat.viewValue }</option>
                  ))
                }
              </select>
              {errors.category?.type === "required" && <div className="input-error">El campo es requerido</div>}
            </div>
            <div className="input-group">
              <label htmlFor="image" className="input-label">
                Imagen
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("image", {
                  required: true
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
