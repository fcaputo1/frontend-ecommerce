import './Register.css'
import '../../styles/form.css'

export default function Register() {
  return (
    <section className="register-section">
      <h2 className="register-title-text">
        <span>R</span>egistro
      </h2>
      <div className="register-form">
        <form action="">
          <div className="input-group">
            <label htmlFor="fullname" className="input-label">
              Nombre Completo
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              required=""
              minLength={4}
              maxLength={80}
              autoFocus=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required=""
              minLength={4}
              maxLength={90}
              placeholder="ejemplo@correo.com"
              pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required=""
              minLength={4}
              maxLength={16}
            />
          </div>
          <div className="input-group">
            <label htmlFor="repeat-password" className="input-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              name="repeat-password"
              id="repeat-password"
              required=""
              minLength={4}
              maxLength={16}
            />
          </div>
          <div className="input-group">
            <label htmlFor="birthday" className="input-label">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              max="2006-05-13"
              required=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="country" className="input-label">
              Seleccione su País
            </label>
            <select name="pais" id="country" required="">
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
            <input type="file" name="avatar" id="avatar" required="" />
          </div>
          <div className="input-group">
            <label htmlFor="observations" className="input-label">
              Observaciones
            </label>
            <textarea
              name="observations"
              id="observations"
              rows={5}
              defaultValue={""}
            />
          </div>
          <div className="input-group">
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </div>
    </section>
  )
}
