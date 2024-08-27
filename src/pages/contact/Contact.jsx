import './Contact.css'
import '../../styles/form.css'

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title-text">
        <span>C</span>ontáctanos
      </h2>
      <div className="contact-subtitle">
        ¿Listo para experimentar el lujo en su máxima expresión? Nuestro equipo
        experto está aquí para hacer realidad tus sueños automotrices. Desde{" "}
        <span>asesoramiento personalizado</span> hasta pruebas de manejo exclusivas,
        estamos comprometidos a brindarte una experiencia de servicio excepcional en
        cada paso del camino. Contacta con nosotros hoy mismo para descubrir cómo
        podemos llevarte al volante de tu auto de ensueño. ¡El lujo te está
        esperando!
      </div>
      <div className="contact-subtitle-mobile">
        ¿Listo para experimentar el lujo en su máxima expresión? Nuestro equipo
        experto está aquí para hacer realidad tus sueños automotrices.
      </div>
      <div className="contact-location-container">
        <div className="contact-form">
          <h2 className="contact-form-title">FORMULARIO CONTACTO</h2>
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
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <div className="location-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.263138539597!2d-80.36117632388297!3d25.827873105866296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bbf0940488bb%3A0xc1714d1cdcd888e9!2s5960%20NW%2099th%20Ave%2C%20Doral%2C%20FL%2033178%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1715545977773!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
