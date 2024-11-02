import { useForm } from "react-hook-form";
import "./Login.css";
import { useUser } from "../../context/UserContext";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useUser();

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(login)}>
        <h1>Login</h1>
        <label className="form-label">Correo electrónico</label>
        <input
          type="email" className="form-input"
          placeholder="Correo electrónico"
          {...register("email", {
            required: "El email es requerido",
            minLength: {
              value: 4,
              message: "La mínima cantidad de caracteres es 4",
            },
          })}
        />

        <label className="form-label">Contraseña</label>
        <input
          type="password" className="form-input"
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
