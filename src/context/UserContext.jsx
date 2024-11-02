import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useApi from "../services/interceptor/interceptor";

const URL = import.meta.env.VITE_SERVER;

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado solo en memoria, sin localStorage
    const [token, setToken] = useState(null);
    const api = useApi();
    const navigate = useNavigate();

    async function login(data) {
        try {
            const response = await api.post(`${URL}/login`, data);
            const { user, token } = response.data;

            setUser(user);    // Guardar `user` solo en memoria
            setToken(token);  // Guardar `token` solo en memoria

            Swal.fire({
                icon: "success",
                title: "Login exitoso",
                text: "Bienvenido al sistema",
                timer: 2000
            }).then(() => {
                navigate("/");
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Error en el login",
                text: error.response?.data.message || "Ocurrió un error",
            });
        }
    }

    function logout() {
        setUser(null);   // Limpiar `user` en el estado de memoria
        setToken(null);  // Limpiar `token` en el estado de memoria
        navigate("/");
    }

    return (
        <UserContext.Provider value={{ login, logout, user, token }}>
            {children}
        </UserContext.Provider>
    );
};
