import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import useApi from "../services/interceptor/interceptor"

const URL = import.meta.env.VITE_SERVER

export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    // Iniciar `user` y `token` con valores de `localStorage`, si están disponibles
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null)
    const [token, setToken] = useState(() => localStorage.getItem("token") || null)
    const api = useApi()
    const navigate = useNavigate()

    // Guardar en localStorage cuando user o token cambian
    useEffect(() => {
        if (user && token) {
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
        }
    }, [user, token])

    async function login(data) {
        try {
            const response = await api.post(`${URL}/login`, data)
            const { user, token } = response.data

            setUser(user)
            setToken(token)

            Swal.fire({
                icon: "success",
                title: "Login exitoso",
                text: "Bienvenido al sistema",
                timer: 2000
            }).then(() => {
                navigate("/")
            });

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Error en el login",
                text: error.response?.data.message || "Ocurrió un error",
            })
        }
    }

    function logout() {
        setUser(null)
        setToken(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ login, logout, user, token }}>
            {children}
        </UserContext.Provider>
    );
};
