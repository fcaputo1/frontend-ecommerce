import axios from "axios";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER,
});

const useApi = () => {
    const userContext = useUser() // Verificar si el contexto está disponible

    const token = userContext?.token // Verificar si `token` está disponible
    const logout = userContext?.logout
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) return // Salir si `token` no está disponible

        const requestInterceptor = api.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = token
            }
            return config
        });

        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        Swal.fire({
                            title: "Sesión Expirada",
                            text: "Por favor, inicia sesión de nuevo.",
                            icon: "warning",
                            confirmButtonText: "Aceptar"
                        }).then(() => {
                            logout?.() // Ejecutar `logout` solo si está disponible
                            navigate("/login")
                        });
                    } else if (error.response.status === 403) {
                        Swal.fire({
                            title: "Acceso Denegado",
                            text: "No tienes permisos para acceder a este recurso.",
                            icon: "error",
                            confirmButtonText: "Aceptar"
                        })
                    }
                }
                return Promise.reject(error)
            }
        );

        return () => {
            api.interceptors.request.eject(requestInterceptor)
            api.interceptors.response.eject(responseInterceptor)
        }
    }, [token, logout, navigate])

    return api
}

export default useApi
