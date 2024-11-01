import './UserAdmin.css'
import { useForm } from 'react-hook-form'
import '../../styles/form.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import UserTable from '../../components/user-admin-table/UserTable'
import { useUser } from '../../context/UserContext'

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function UserAdmin() {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const { register, setValue, reset, watch, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" })
    const { token } = useUser()

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        if (selectedUser) {
            setValue("name", selectedUser.name),
                setValue("email", selectedUser.email),
                //setValue("password", selectedUser.password),
                setValue("avatar", selectedUser.avatar),
                setValue("country", selectedUser.country),
                setValue("birthday", selectedUser.birthday),
                setValue("observations", selectedUser.observations)
                //setValue("repeatpassword", selectedUser.password)
        }
    }, [selectedUser])

    //Traer usuarios desde backend
    async function getUsers() {

        try {
            const response = await axios.get(`${URL}/users`, {
                headers: {
                    Authorization: token
                }
            })
            setUsers(response.data)

        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Error al traer usuarios",
                text: "No se pueden traer los usuarios",
                icon: "error"
            })
        }
    }

    //Eliminar usuarios
    function deleteUser(_id) {

        Swal.fire({
            title: "Borrar Usuario",
            text: "Realmente deseas eliminar este usuario?",
            icon: "warning",
            showCancelButton: true,
            reverseButtons: true
        }).then(async (result) => {

            try {
                if (result.isConfirmed) {
                    const response = await axios.delete(`${URL}/users/${_id}`, {
                        headers: {
                            Authorization: token
                        }
                    })
                    getUsers()
                }
            } catch (error) {
                console.log(error)
                Swal.fire({
                    title: "Error al borrar",
                    text: "El usuario no pudo ser eliminado",
                    icon: "error"
                })
            }
        })
    }

    //Agregar o actualizar usuarios
    async function onUserSubmit(user) {
        try {
            const formData = new FormData();
            formData.append("name", user.name);
            formData.append("email", user.email);
            if (!selectedUser) {
                // Solo agregar password si es un usuario nuevo
                formData.append("password", user.password);
            }
            formData.append("birthday", user.birthday);
            formData.append("country", user.country);
            if (user.avatar && user.avatar[0]) {
                formData.append("avatar", user.avatar[0]);
            }
            formData.append("observations", user.observations);

            if (selectedUser) {
                const { _id } = selectedUser;
                await axios.put(`${URL}/users/${_id}`, formData, {
                    headers: {
                        Authorization: token
                    }
                });

                Swal.fire({
                    title: "Actualización correcta",
                    text: "El usuario fue actualizado correctamente",
                    icon: "success",
                    timer: 1500
                });
                setSelectedUser(null);

            } else {
                await axios.post(`${URL}/users`, formData, {
                    headers: {
                        Authorization: token
                    }
                });

                Swal.fire({
                    title: "Usuario Registrado",
                    text: "El usuario fue registrado correctamente",
                    icon: "success",
                    timer: 1500
                });
            }

            reset();
            getUsers();

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: selectedUser ? "Error al actualizar el usuario" : "Error al crear el usuario",
                text: "El usuario no pudo ser procesado",
                icon: "error",
                timer: 1500
            });
        }
    }


    //Editar usuarios
    function handleEditUser(user) {
        console.log('Usuario a editar', user)
        setSelectedUser(user)
    }

    return (
        <>
            <h2 className="product-admin-title-text">
                <span>A</span>dministrador de Usuarios
            </h2>
            <div className="product-admin-container">
                {/* START FORM */}
                <div className="product-admin-form">
                    <h2 className="product-admin-form-title"><span>C</span>rear Usuario</h2>
                    <form onSubmit={handleSubmit(onUserSubmit)}>
                        <div className="input-group">
                            <label htmlFor="name" className="input-label">
                                Nombre Completo
                            </label>
                            <input
                                type="text" {...register("name", { required: true, minLength: 4, maxLength: 80 })}
                            />
                            {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.name?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div>}
                            {errors.name?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 80</div>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="email" className="input-label">
                                Correo Electrónico
                            </label>
                            <input
                                type="email" {...register("email", { required: true, minLength: 4, maxLength: 90, pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ } })}
                            />
                            {errors.email?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.email?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div>}
                            {errors.email?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 90</div>}
                            {errors.email?.type === "pattern" && <div className="input-error">Ingrese un email válido</div>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="password" className="input-label">
                                Contraseña
                            </label>
                            <input
                                type="password" {...register("password", { required: true, minLength: 4, maxLength: 16 })}
                            />
                            {errors.password?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.password?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div>}
                            {errors.password?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 16</div>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="repeatpassword" className="input-label">
                                Repetir Contraseña
                            </label>
                            <input
                                type="password" {...register("repeatpassword", {
                                    required: true, minLength: 4, maxLength: 16, validate: (value) =>
                                        value === watch("password") || "Las contraseñas no coinciden"
                                })}
                            />
                            {errors.repeatpassword?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.repeatpassword?.type === "minLength" && <div className="input-error">Mínimo de caracteres es 4</div>}
                            {errors.repeatpassword?.type === "maxLength" && <div className="input-error">Máximo de caracteres es 16</div>}
                            {errors.repeatpassword?.message && <div className="input-error">{errors.repeatpassword.message}</div>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="birthday" className="input-label">
                                Fecha de Nacimiento
                            </label>
                            <input
                                type="date" {...register("birthday", { required: true })}
                            />
                            {errors.birthday?.type === "required" && <div className="input-error">El campo es requerido</div>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="country" className="input-label">
                                Seleccione su País
                            </label>
                            <select {...register("country", { required: true })}>
                                <option value="" />
                                <option value="AR">Argentina</option>
                                <option value="CH">Chile</option>
                                <option value="CO">Colombia</option>
                                <option value="BR">Brasil</option>
                                <option value="PA">Paraguay</option>
                                <option value="UY">Uruguay</option>
                                <option value="VE">Venezuela</option>
                            </select>
                            {errors.country?.type === "required" && <div className="input-error">El campo es requerido</div>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="avatar" className="input-label">Avatar</label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("avatar")}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="observations" className="input-label">
                                Observaciones
                            </label>
                            <textarea {...register("observations")} rows={5} defaultValue={""} />
                        </div>
                        <div className="input-group">
                            <button type="submit" disabled={!isValid}>
                                {
                                    selectedUser ? "Editar" : "Registrar"
                                }
                            </button>
                        </div>
                    </form>
                </div>
                {/* END FORM */}

                <div className="product-admin-section">
                    {/* START USER TABLE */}
                    <h2 className="product-admin-table-title"><span>U</span>suarios</h2>
                    <UserTable users={users}
                        deleteUser={deleteUser}
                        handleEditUser={handleEditUser}
                    />
                </div>
                {/* END USER TABLE */}

            </div>

        </>


    )
}

