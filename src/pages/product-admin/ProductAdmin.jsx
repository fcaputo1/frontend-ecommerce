import './ProductAdmin.css'

export default function ProductAdmin() {
  return (
    <section className="product-admin-section">
      <h2 className="product-admin-title-text">
        <span>A</span>dministrador de Productos
      </h2>
      <div className="add-product-button">
        <button className="add-button">
          <a href="#">Añadir</a>
        </button>
      </div>
      <table className="product-admin-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Fecha de ingreso</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari 488/ferrari-488-main-page.png"
                alt="Ferrari 488"
              />
            </td>
            <td className="product-name">Ferrari 488</td>
            <td className="product-description">
              El Ferrari 488 es un superdeportivo italiano con un motor V8 biturbo
              de 3.9 litros que genera 670 caballos de fuerza. Introducido en 2015,
              acelera de 0 a 100 km/h en 3 segundos y alcanza una velocidad máxima
              de 330 km/h. Destaca por su diseño aerodinámico y avanzada tecnología,
              ofreciendo una experiencia de conducción excepcional.
            </td>
            <td className="product-date">02/05/2023</td>
            <td className="product-price">$550.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari 436/ferrari-436-main-page.png"
                alt="Ferrari 436"
              />
            </td>
            <td className="product-name">Ferrari 436</td>
            <td className="product-description">
              El Ferrari 436 es un modelo conceptual de la marca italiana, diseñado
              para combinar rendimiento y eficiencia. Equipado con un motor híbrido
              V6 de 3.0 litros. Con un diseño aerodinámico y tecnología avanzada, el
              Ferrari 436 promete una experiencia de conducción innovadora y
              sostenible, manteniendo la esencia de velocidad y lujo de Ferrari.
            </td>
            <td className="product-date">12/02/2024</td>
            <td className="product-price">$350.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari roma/ferrari-roma-main-page.png"
                alt="Ferrari Roma"
              />
            </td>
            <td className="product-name">Ferrari Roma</td>
            <td className="product-description">
              El Ferrari Roma es un elegante coupé deportivo presentado en 2019.
              Equipado con un motor V8 biturbo de 3.9 litros, acelera de 0 a 100
              km/h en 3.4 segundos. Con un diseño sofisticado y tecnología de
              vanguardia, el Roma combina el rendimiento excepcional con el lujo y
              la comodidad, representando el estilo de vida italiano en su máxima
              expresión.
            </td>
            <td className="product-date">02/05/2023</td>
            <td className="product-price">$223.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari f12/ferrari-f12-main-page.png"
                alt="Ferrari F12"
              />
            </td>
            <td className="product-name">Ferrari F12</td>
            <td className="product-description">
              El Ferrari F12 es un icónico gran turismo presentado en 2012. Equipado
              con un motor V12 de 6.3 litros, acelera de 0 a 100 km/h en 3.1
              segundos y alcanza una velocidad máxima de 340 km/h. Con su diseño
              aerodinámico y avanzada tecnología, el F12 ofrece una experiencia de
              conducción inigualable, combinando potencia y elegancia.
            </td>
            <td className="product-date">22/01/2024</td>
            <td className="product-price">$725.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari california/ferrari-california-main-page.png"
                alt="Ferrari California"
              />
            </td>
            <td className="product-name">Ferrari California</td>
            <td className="product-description">
              El Ferrari California es un elegante descapotable presentado en 2008.
              Cuenta con un motor V8 produce 460 caballos de fuerza, permitiéndole
              acelerar de 0 a 100 km/h en menos de 4 segundos. Con su diseño
              sofisticado y techo duro retráctil, el California combina rendimiento
              deportivo con comodidad y estilo, ideal para una conducción lujosa y
              dinámica.
            </td>
            <td className="product-date">03/11/2023</td>
            <td className="product-price">$250.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari f40/ferrari-f40-main-page.png"
                alt="Ferrari F40"
              />
            </td>
            <td className="product-name">Ferrari F40</td>
            <td className="product-description">
              El Ferrari F40, presentado en 1987 para conmemorar el 40 aniversario
              de Ferrari, es uno de los superdeportivos más icónicos de la marca.
              Equipado con un motor V8 biturbo que produce 478 caballos de fuerza,
              acelera de 0 a 100 km/h en 4.1 segundos. Su diseño aerodinámico lo
              convirtieron en un símbolo de legado automovilístico
            </td>
            <td className="product-date">01/05/2024</td>
            <td className="product-price">$620.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
            </button>
            </td>
          </tr>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari enzo/ferrari-enzo-main-page.png"
                alt="Ferrari Enzo"
              />
            </td>
            <td className="product-name">Ferrari Enzo</td>
            <td className="product-description">
              El Ferrari Enzo, lanzado en 2002, es un superdeportivo que rinde
              homenaje al fundador de la marca. Equipado con un motor V12 de 6.0
              litros que genera 660 caballos de fuerza, acelera de 0 a 100 km/h en
              3.6 segundos y alcanza una velocidad máxima de 350 km/h. Con su diseño
              futurista y avanzada tecnología derivada de la Fórmula 1.
            </td>
            <td className="product-date">10/02/2024</td>
            <td className="product-price">$2.000.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td className="product-image">
              <img
                src="/assets/images/product/ferrari laferrari/laferrari-main-page.png"
                alt="Ferrari LaFerrari"
              />
            </td>
            <td className="product-name">Ferrari LaFerrari</td>
            <td className="product-description">
              LaFerrari, presentada en 2013, es un superdeportivo híbrido que
              combina un motor V12 de 6.3 litros con un motor eléctrico, generando
              un total de 963 caballos de fuerza. Con su diseño innovador y
              tecnología avanzada, LaFerrari representa la cúspide del rendimiento y
            la eficiencia en la ingeniería automotriz.
            </td>
            <td className="product-date">03/04/2024</td>
            <td className="product-price">$2.550.000,00</td>
            <td className="product-actions">
              <button className="edit-button">
                <a href="#">
                  <i className="fa-solid fa-pen-to-square" />
                </a>
              </button>
              <button className="delete-button">
                <a href="#">
                  <i className="fa-solid fa-trash-can" />
                </a>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </section>

  )
}
