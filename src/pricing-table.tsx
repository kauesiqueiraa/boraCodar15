export function PricingTable() {

  return (
    <div className="pricing-table">
      <section className="essentials">
        <div className="inner">
          <p>Para você começar</p>
          <div className="title-price">
            <strong className="title">Essentials</strong>
            <span className="price">R$ <strong>19,97</strong></span>
          </div>

          <button className="primary">Assinar agora</button>

          <ul>
            <li>
              <i className="ph ph-check"></i>
              <span>Até 3 usuários</span>
              <i className="ph ph-info"></i>
            </li>

            <li>
              <i className="ph ph-check"></i>
              <span>Autoatendimento</span>
              <i className="ph ph-info"></i>
            </li>
          </ul>
        </div>
      </section>

      <section className="ultimate" >
        <div className="inner">
          <p>Para você decolar</p>
          <div className="title-price">
            <strong className="title">Ultimate</strong>
            <span className="price"> R$ <strong>29,97</strong></span>
          </div>
          <button className="secondary">Assinar agora</button>
          <ul>
            <li>
              <i className="ph ph-check"></i>
              <span>Usuários ilimitados</span>
              <i className="ph ph-info"></i>
            </li>
            <li>
              <i className="ph ph-check"></i>
              <span>Suporte 24/7</span>
              <i className="ph ph-info"></i>
            </li>
            <li>
              <i className="ph ph-check"></i>
              <span>CMS Dedicado</span>
              <i className="ph ph-info"></i>
            </li>
            <li>
              <i className="ph ph-check"></i>
              <span>Treinamentos</span>
              <i className="ph ph-info"></i>
            </li>
          </ul>
        </div>
      </section>

      <section className="enterprise">
        <div className="inner">
          <p>Para sua emporesa</p>
          <div className="title-price">
            <strong className="title">Enterprise</strong>
          </div>

          <button className="primary">Fale com a gente</button>

          <ul>
            <li>
              <i className="ph ph-check"></i>
              <span>Plano customizado especialmente para a necessidade de seu negocio </span>
            </li>
          </ul>
        </div>
      </section>


    </div>
  )
}