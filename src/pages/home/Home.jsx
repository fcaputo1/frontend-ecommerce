import bannerImage from '../../assets/images/main/main-banner-image.jpg'
import bannerImageSmall from '../../assets/images/main/main-banner-image-small.jpg'
import ProductGallery from '../../components/product-gallery/ProductGallery'

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
      <ProductGallery />
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
