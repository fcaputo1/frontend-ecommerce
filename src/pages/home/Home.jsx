import bannerImage from '../../assets/images/main/main-banner-image.jpg'
import bannerImageSmall from '../../assets/images/main/main-banner-image-small.jpg'

export default function Home() {
  return (
    <>
  {/* START BANNER SECTION */}
  <section className="banner-section">
    <picture>
      <source
        srcSet={bannerImageSmall}
        media="(width < 500px)"
      />
      <img
        src={bannerImage}
        alt="Imagen Principal del Banner"
      />
    </picture>
    <div className="banner-info">
      <h2 className="banner-title">Nosotros somos la competencia</h2>
      <p className="banner-text">
        Con una historia arraigada en la pasión por la ingeniería de precisión y
        la búsqueda constante de la excelencia, los Ferrari ofrecen una
        experiencia de conducción incomparable. Desde su diseño aerodinámico
        hasta su potente motor, cada detalle de un Ferrari está meticulosamente
        diseñado para brindar un rendimiento excepcional en la carretera y en la
        pista. Si buscas un automóvil que combine elegancia, velocidad y una
        experiencia de conducción única, un Ferrari es la elección perfecta para
        ti.
      </p>
    </div>
  </section>
  {/* END BANNER SECTION */}
  {/* START MAIN SECTION */}
  <main className="main-container">
    <section className="product-section">
      <h1 className="product-title">
        Productos <span>destacados</span>
      </h1>
      <div className="product-card-container">
        {/* START CARD 1 */}
        <a href="/pages/products/product.html"></a>
        <article className="product-card">
          <a href="/pages/products/product.html">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari 488/ferrari-488-main-page.png"
                  alt="Ferrari 488"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="/pages/products/product.html"></a>
            <div className="product-name">
              <a href="/pages/products/product.html"></a>
              <a href="/pages/products/product.html">Ferrari 488</a>
            </div>
            <div className="product-entry-date">02/05/2023</div>
            <div className="product-description">
              <p>
                El Ferrari 488 es un superdeportivo italiano con un motor V8
                biturbo de 3.9 litros que genera 670 caballos de fuerza.
                Introducido en 2015, acelera de 0 a 100 km/h en 3 segundos y
                alcanza una velocidad máxima de 330 km/h. Destaca por su diseño
                aerodinámico y avanzada tecnología, ofreciendo una experiencia
                de conducción excepcional.
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$550.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 1 */}
        {/* START CARD 2 */}
        <a href="#"></a>
        <article className="product-card">
          <a href="#">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari 436/ferrari-436-main-page.png"
                  alt="Ferrari 436"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="#"></a>
            <div className="product-name">
              <a href="#"></a>
              <a href="#">Ferrari 436</a>
            </div>
            <div className="product-entry-date">12/02/2024</div>
            <div className="product-description">
              <p>
                El Ferrari 436 es un modelo conceptual de la marca italiana,
                diseñado para combinar rendimiento y eficiencia. Equipado con un
                motor híbrido V6 de 3.0 litros. Con un diseño aerodinámico y
                tecnología avanzada, el Ferrari 436 promete una experiencia de
                conducción innovadora y sostenible, manteniendo la esencia de
                velocidad y lujo de Ferrari.
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$350.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 2 */}
        {/* START CARD 3 */}
        <a href="#"></a>
        <article className="product-card">
          <a href="#">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari roma/ferrari-roma-main-page.png"
                  alt="Ferrari Roma"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="#"></a>
            <div className="product-name">
              <a href="#"></a>
              <a href="#">Ferrari Roma</a>
            </div>
            <div className="product-entry-date">02/05/2023</div>
            <div className="product-description">
              <p>
                El Ferrari Roma es un elegante coupé deportivo presentado en
                2019. Equipado con un motor V8 biturbo de 3.9 litros, acelera de
                0 a 100 km/h en 3.4 segundos. Con un diseño sofisticado y
                tecnología de vanguardia, el Roma combina el rendimiento
                excepcional con el lujo y la comodidad, representando el estilo
                de vida italiano en su máxima expresión.
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$223.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 3 */}
        {/* START CARD 4 */}
        <a href="#"></a>
        <article className="product-card">
          <a href="#">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari f12/ferrari-f12-main-page.png"
                  alt="Ferrari F12"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="#"></a>
            <div className="product-name">
              <a href="#"></a>
              <a href="#">Ferrari F12</a>
            </div>
            <div className="product-entry-date">22/01/2024</div>
            <div className="product-description">
              <p>
                El Ferrari F12 es un icónico gran turismo presentado en 2012.
                Equipado con un motor V12 de 6.3 litros, acelera de 0 a 100 km/h
                en 3.1 segundos y alcanza una velocidad máxima de 340 km/h. Con
                su diseño aerodinámico y avanzada tecnología, el F12 ofrece una
                experiencia de conducción inigualable, combinando potencia y
                elegancia.
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$725.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 4 */}
        {/* START CARD 5 */}
        <a href="#"></a>
        <article className="product-card">
          <a href="#">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari california/ferrari-california-main-page.png"
                  alt="Ferrari California"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="#"></a>
            <div className="product-name">
              <a href="#"></a>
              <a href="#">Ferrari California</a>
            </div>
            <div className="product-entry-date">03/11/2023</div>
            <div className="product-description">
              <p>
                El Ferrari California es un elegante descapotable presentado en
                2008. Cuenta con un motor V8 produce 460 caballos de fuerza,
                permitiéndole acelerar de 0 a 100 km/h en menos de 4 segundos.
                Con su diseño sofisticado y techo duro retráctil, el California
                combina rendimiento deportivo con comodidad y estilo, ideal para
                una conducción lujosa y dinámica.
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$250.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 5 */}
        {/* START CARD 6 */}
        <a href="#"></a>
        <article className="product-card">
          <a href="#">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari f40/ferrari-f40-main-page.png"
                  alt="Ferrari F40"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="#"></a>
            <div className="product-name">
              <a href="#"></a>
              <a href="#">Ferrari F40</a>
            </div>
            <div className="product-entry-date">01/05/2024</div>
            <div className="product-description">
              <p>
                El Ferrari F40, presentado en 1987 para conmemorar el 40
                aniversario de Ferrari, es uno de los superdeportivos más
                icónicos de la marca. Equipado con un motor V8 biturbo que
                produce 478 caballos de fuerza, acelera de 0 a 100 km/h en 4.1
                segundos. Su diseño aerodinámico lo convirtieron en un símbolo
                de legado automovilístico
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$620.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 6 */}
        {/* START CARD 7 */}
        <a href="#"></a>
        <article className="product-card">
          <a href="#">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari enzo/ferrari-enzo-main-page.png"
                  alt="Ferrari Enzo"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="#"></a>
            <div className="product-name">
              <a href="#"></a>
              <a href="#">Ferrari Enzo</a>
            </div>
            <div className="product-entry-date">10/02/2024</div>
            <div className="product-description">
              <p>
                El Ferrari Enzo, lanzado en 2002, es un superdeportivo que rinde
                homenaje al fundador de la marca. Equipado con un motor V12 de
                6.0 litros que genera 660 caballos de fuerza, acelera de 0 a 100
                km/h en 3.6 segundos y alcanza una velocidad máxima de 350 km/h.
                Con su diseño futurista y avanzada tecnología derivada de la
                Fórmula 1.
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$2.000.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 7 */}
        {/* START CARD 8 */}
        <a href="#"></a>
        <article className="product-card">
          <a href="#">
            <div className="card-header">
              <div className="product-image">
                <img
                  src="/assets/images/product/ferrari laferrari/laferrari-main-page.png"
                  alt="LaFerrari"
                />
              </div>
            </div>
          </a>
          <div className="card-body">
            <a href="#"></a>
            <div className="product-name">
              <a href="#"></a>
              <a href="#">LaFerrari</a>
            </div>
            <div className="product-entry-date">03/04/2024</div>
            <div className="product-description">
              <p>
                LaFerrari, presentada en 2013, es un superdeportivo híbrido que
                combina un motor V12 de 6.3 litros con un motor eléctrico,
                generando un total de 963 caballos de fuerza. Con su diseño
                innovador y tecnología avanzada, LaFerrari representa la cúspide
                del rendimiento y la eficiencia en la ingeniería automotriz.
              </p>
            </div>
            <div className="product-price">
              <div className="product-price-number">$2.550.000,00</div>
            </div>
            <div className="card-footer">
              <button className="buy-button">
                <a href="#">Comprar</a>
              </button>
            </div>
          </div>
        </article>
        {/* END CARD 8 */}
      </div>
    </section>
    {/* START SERVICES SECTION */}
    <section className="services-section">
      <article className="service-card service-1">
        <i className="fa-solid fa-compass" />
        <div className="service-text-1">Retira tu auto en 24 horas</div>
      </article>
      <article className="service-card service-2">
        <i className="fa-solid fa-shop" />
        <div className="service-text-2">
          Visitas técnicas directo a tu hogar
        </div>
      </article>
      <article className="service-card service-3">
        <i className="fa-solid fa-toolbox" />
        <div className="service-text-3">
          Servicio gratis durante el primer año
        </div>
      </article>
    </section>
    {/* END SERVICES SECTION */}
  </main>
</>

  )
}
