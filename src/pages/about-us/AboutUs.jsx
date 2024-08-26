import './AboutUs.css'
import Profile from '../../assets/images/about-us/profile.jpg'

export default function AboutUs() {
  return (
    <section className="about-us-section">
      <h2 className="about-us-title-text">
        <span>A</span>cerca de Nosotros
      </h2>
      <div className="about-us-description">
        <p>
          En el corazón de nuestra filosofía reside una pasión inquebrantable por la
          excelencia automotriz. Nos enorgullece ser los arquitectos de experiencias
          únicas, donde el lujo y la innovación se fusionan en cada detalle. Nos
          dedicamos a ofrecer un servicio excepcional que trasciende las
          expectativas, brindando acceso privilegiado a una colección cuidadosamente
          seleccionada de vehículos de élite, con especial énfasis en la icónica
          marca Ferrari.
        </p>
        <p>
          Nuestra misión es mucho más que proporcionar automóviles extraordinarios;
          se trata de crear un vínculo duradero con nuestros clientes, entendiendo
          sus deseos más profundos y ofreciendo soluciones personalizadas para
          satisfacer sus necesidades automotrices más exigentes. Desde el momento en
          que nos eligen como su socio en esta emocionante travesía, nos
          comprometemos a acompañarlos con una atención inigualable y un
          conocimiento experto que garantiza una experiencia de compra
          verdaderamente excepcional.
        </p>
        <p>
          Con un equipo apasionado de entusiastas del automóvil y una red global de
          recursos, estamos aquí para hacer realidad sus sueños automovilísticos más
          audaces. Nos enorgullece ser más que simplemente vendedores de
          automóviles; somos narradores de historias, conectando a nuestros clientes
          con la rica herencia y la emocionante innovación que define el mundo del
          lujo automotriz.
        </p>
        <p>
          En resumen, somos su guía en el apasionante viaje hacia la adquisición de
          automóviles de élite. Bienvenido a un universo donde la elegancia se
          encuentra con la potencia, donde cada curva y cada revolución del motor
          narran una historia de emoción y excelencia. Bienvenido a nuestra
          comunidad, donde su pasión por los autos de lujo se convierte en nuestra
          misión compartida.
        </p>
      </div>
      <div className="team-members-title">
        <h2 className="team-members-title-text">
          <span>I</span>ntegrantes del Equipo
        </h2>
      </div>
      <div className="team-members-data-container">
        <div className="team-members-image">
          <img src={Profile} alt="" />
        </div>
        <div className="team-members-description">
          <h3>
            <span>F</span>rancisco <span>R</span>odolfo <span>C</span>aputo{" "}
            <span>N</span>apolano
          </h3>
          <p>
            El visionario detrás de nuestra empresa es un líder multifacético con
            una pasión innata por la tecnología y una dedicación inquebrantable
            hacia la excelencia. Con una sólida experiencia en programación y una
            profunda comprensión de la infraestructura de sistemas, ha creado un
            entorno donde la innovación y la eficiencia se entrelazan en cada
            aspecto de nuestras operaciones. Su compromiso con la calidad y la
            atención al detalle se reflejan en el núcleo de nuestra filosofía
            empresarial, asegurando que cada interacción con nuestros clientes sea
            una experiencia memorable. Como defensor incansable de la excelencia,
            lidera nuestro equipo hacia nuevos horizontes, donde la tecnología y el
            lujo convergen para crear un mundo de posibilidades infinitas
          </p>
        </div>
      </div>
    </section>
  )
}
