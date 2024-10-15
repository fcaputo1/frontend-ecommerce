import { useForm } from "react-hook-form";
import "./Login.css";
import { useUser } from "../../context/UserContext";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useUser();

  return (
    <div className="login-container">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <form className="login-form" onSubmit={handleSubmit(login)}>
        <h1>Login</h1>
        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", {
            required: "El email es requerido",
            minLength: {
              value: 4,
              message: "La mínima cantidad de caracteres es 4",
            },
          })}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: "El password es requerido" })}
        />

        <button type="submit" className="button">
          Ingresar
        </button>
      </form>
    </div>
  );
}
