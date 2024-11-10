import axios from "axios"
import { useUser } from "../../context/UserContext"
import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Swal from "sweetalert2"

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER
})

// Variable global para controlar la alerta
let isGlobalAlertShown = false

const useApi = () => {
    const userContext = useUser() // Verificar si el contexto está disponible

    const token = userContext?.token // Verificar si `token` está disponible
    const logout = userContext?.logout
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!token) return // Salir si `token` no está disponible

        const requestInterceptor = api.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = token // Enviar el token directamente sin `Bearer`
            }
            return config
        })

        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                // Verificar si es un error 401 y que no se esté mostrando ya la alerta
                if (error.response && error.response.status === 401 && !isGlobalAlertShown) {
                    isGlobalAlertShown = true // Marcar la alerta como mostrada
                    await Swal.fire({
                        title: "Sesión Expirada",
                        text: "Por favor, inicia sesión de nuevo.",
                        icon: "warning",
                        confirmButtonText: "Aceptar"
                    })

                    if (logout) {
                        await logout() // Asegurarse de que `logout` se ejecute completamente
                    }

                    // Verificar si la ubicación actual ya es la página de login para evitar redirecciones adicionales
                    if (location.pathname !== "/login") {
                        navigate("/login")
                    }
                } else if (error.response && error.response.status === 403) {
                    await Swal.fire({
                        title: "Acceso Denegado",
                        text: "No tienes permisos para acceder a este recurso.",
                        icon: "error",
                        confirmButtonText: "Aceptar"
                    })
                }
                return Promise.reject(error)
            }
        )

        return () => {
            api.interceptors.request.eject(requestInterceptor)
            api.interceptors.response.eject(responseInterceptor)
        }
    }, [token, logout, navigate, location])

    return api
}

export default useApi
