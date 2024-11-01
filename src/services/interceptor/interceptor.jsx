import axios from "axios"
import { useUser } from "../../context/UserContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER
});

const useApi = () => {
    const { token, logout } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        const requestInterceptor = api.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = token
            }
            return config;
        });

        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            (error) => {
                console.log(error)
                // Desloguearlo si el error en la respuesta fue un status 401
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                        title: "Sesión Expirada",
                        text: "Por favor, inicia sesión de nuevo.",
                        icon: "warning",
                        confirmButtonText: "Aceptar"
                    }).then(() => {
                        logout() // Cierra la sesión
                        navigate("/"); // Redirige al usuario a la página principal
                    });
                }
                return Promise.reject(error); // Rechaza el error para que pueda manejarse más adelante si es necesario
            }
        );

        // Limpiar los interceptores al desmontar
        return () => {
            api.interceptors.request.eject(requestInterceptor)
            api.interceptors.response.eject(responseInterceptor)
        };
    }, [token, logout, navigate])

    return api
}

export default useApi
