import './Register.css'
import '../../styles/form.css'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import axios from 'axios'

const URL = import.meta.env.VITE_SERVER_URL

export default function Register() {

  const { register, watch, setFocus, reset, handleSubmit, formState: { errors, isValid } } = useForm({mode: "all"})

  useEffect(() => {
    setFocus("name")
  }, [setFocus])

  async function onUserSubmit (user) {

    //Enviar la contraseña una sola vez a el backend
    const { repeatpassword, ...userData } = user

    try {
        const newUser = await axios.post(`${URL}/users`, userData)
        console.log(user)

        Swal.fire({
          title: "Usuario Registrado",
          text: "El usuario fue registrado correctamente",
          icon: "success",
          timer: 1500
      })

      reset()

    } catch (error) {
      console.log(error)
        Swal.fire({
          title: "Error al agregar el usuario",
          text: "El usuario no pudo ser agregado",
          icon: "error", 
          timer: 1500
        })
      }
    }

  return (
    <section className="register-section">
      <h2 className="register-title-text">
        <span>R</span>egistro
      </h2>
      {/* START FORM */}
      <div className="register-form">
        <form onSubmit={handleSubmit(onUserSubmit)}>
          <div className="input-group">
            <label htmlFor="name" className="input-label">
              Nombre Completo
            </label>
            <input
              type="text" {...register("name", {required: true, minLength: 4, maxLength: 80})}
            />
            { errors.name?.type === "required" && <div className="input-error">El campo es requerido</div> }
            { errors.name?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div> }
            { errors.name?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 80</div> }
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Correo Electrónico
            </label>
            <input
              type="email" {...register("email", {required: true, minLength: 4, maxLength: 90, pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/}})}
            />
            { errors.email?.type === "required" && <div className="input-error">El campo es requerido</div> }
            { errors.email?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div> }
            { errors.email?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 90</div> }
            { errors.email?.type === "pattern" && <div className="input-error">Ingrese un email válido</div> }
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Contraseña
            </label>
            <input
              type="password" {...register("password", {required: true, minLength: 4, maxLength: 16})}
            />
            { errors.password?.type === "required" && <div className="input-error">El campo es requerido</div> }
            { errors.password?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div> }
            { errors.password?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 16</div> }
          </div>
          <div className="input-group">
            <label htmlFor="repeatpassword" className="input-label">
              Repetir Contraseña
            </label>
            {/*Entre las validaciones verifico que el password repetido coincida con el original usando watch*/}
            <input
              type="password" {...register("repeatpassword", {required: true, minLength: 4, maxLength: 16, validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden"})}
            />
            { errors.repeatpassword?.type === "required" && <div className="input-error">El campo es requerido</div> }
            { errors.repeatpassword?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div> }
            { errors.repeatpassword?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 16</div> }
            { errors.repeatpassword?.message && <div className="input-error">{errors.repeatpassword.message}</div> }
          </div>
          <div className="input-group">
            <label htmlFor="birthday" className="input-label">
              Fecha de Nacimiento
            </label>
            <input
              type="date" {...register("birthday", {required: true})}
            />
            { errors.birthday?.type === "required" && <div className="input-error">El campo es requerido</div> }
          </div>
          <div className="input-group">
            <label htmlFor="country" className="input-label">
              Seleccione su País
            </label>
            <select {...register("country", {required:true})}>
              <option value="" />
              <option value="AR">Argentina</option>
              <option value="CH">Chile</option>
              <option value="CO">Colombia</option>
              <option value="BR">Brasil</option>
              <option value="PA">Paraguay</option>
              <option value="UY">Uruguay</option>
              <option value="VE">Venezuela</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="avatar" className="input-label">
              Avatar
            </label>
            <input type="url" {...register("avatar")} />
          </div>
          <div className="input-group">
            <label htmlFor="observations" className="input-label">
              Observaciones
            </label>
            <textarea {...register("observations")} rows={5} defaultValue={""}
            />
          </div>
          <div className="input-group">
            <button type="submit" disabled={!isValid}>Registrarse</button>
          </div>
        </form>
      </div>
      {/* END FORM */}
    </section>
  )
}
