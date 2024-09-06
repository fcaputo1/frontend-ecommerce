import { useParams } from "react-router-dom"

export default function ProductDetail() {
    const params = useParams()
    //get con use effect de ese producto en particular

    return (
    <>
  <h2 className="product-title-text">
    <span>F</span>errari F488
  </h2>
  <section className="product-header">
    <div className="product-header-image">
      <img
        src="/assets/images/product/ferrari 488/ferrari-488-main-page.png"
        alt=""
      />
    </div>
    <div className="product-header-card">
      <div className="product-header-card-title">
        <span>F</span>errari <span>F488</span>
      </div>
      <div className="product-header-card-description">
        <p>
          El Ferrari 488, presentado en 2015 como sucesor del icónico 458
          Italia, es un superdeportivo que encarna la esencia de la ingeniería y
          el diseño de Ferrari. Equipado con un motor V8 biturbo de 3.9 litros
          que produce 670 caballos de fuerza y 760 Nm de par motor, el 488
          ofrece un rendimiento excepcional. Con una aceleración de 0 a 100 km/h
          en apenas 3 segundos y una velocidad máxima de 330 km/h, es una
          máquina formidable en carretera y pista.
        </p>
        <br />
        <p>
          El diseño del 488 es una combinación perfecta de elegancia y
          agresividad aerodinámica. Cada línea y detalle está cuidadosamente
          esculpido para optimizar la eficiencia aerodinámica y la refrigeración
          del motor. El resultado es una estética que transmite potencia y
          velocidad incluso cuando el vehículo está en reposo.
        </p>
      </div>
      <div className="product-header-card-price">$550.000,00</div>
      <div className="product-header-card-footer">
        <button className="buy-button">
          <a href="/pages/products/product.html">Comprar</a>
        </button>
      </div>
    </div>
  </section>
  <section className="main-product-info">
    <ul>
      <li>
        Disponible en variantes coupé (488 GTB) y descapotable (488 Spider), el
        488 ofrece opciones para satisfacer los gustos y necesidades de cada
        conductor. Ya sea disfrutando de un paseo tranquilo por la ciudad o
        desatando su potencia en la pista, el Ferrari 488 brinda una experiencia
        de conducción incomparable que captura la esencia del espíritu italiano
        y la pasión por la automoción de alto rendimiento.
      </li>
      <li>
        En el interior, el Ferrari 488 ofrece un ambiente lujoso y orientado al
        conductor. Los materiales de alta calidad, como el cuero y la fibra de
        carbono, se combinan con una ergonomía meticulosa para crear un espacio
        donde la comodidad y el rendimiento se fusionan. La tecnología a bordo,
        incluido un sistema de infoentretenimiento avanzado y opciones de
        personalización, eleva aún más la experiencia de conducción.
      </li>
      <li>
        Además de su impresionante rendimiento y diseño, el Ferrari 488 ha sido
        elogiado por su maniobrabilidad y control. La suspensión
        magnetorheológica, el sistema de frenos cerámicos de carbono y la
        dirección asistida eléctrica contribuyen a una conducción precisa y
        reactiva, ya sea en la carretera o en la pista.
      </li>
      <li>
        En resumen, el Ferrari 488 es un superdeportivo que combina potencia
        bruta, diseño aerodinámico y lujo interior, manteniendo el legado de
        Ferrari en la creación de vehículos que ofrecen una experiencia de
        conducción incomparable.
      </li>
    </ul>
  </section>
</>

  )
}
