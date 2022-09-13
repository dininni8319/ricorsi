
const Footer = () => {

    return (
        <footer className="text-lg-start footer-backgroud-color w-100">
        <section className="row">
         
            <section className="d-md-flex justify-content-md-between p-3 border-bottom">
              <div className="px-3 d-md-flex flex-column col-12 col-md-3">
 
                  <div className="p-3">
                    <a href="" className="me-5 text-decoration-none text-white">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  
                    <a href="https://www.cienneffe.com/" className="me-5 text-decoration-none text-white">
                      <i className="fab fa-google"></i>
                    </a>
                  
                    <a href="https://www.linkedin.com/company/credit-network-&-finance?original_referer=https%3A%2F%2Fwww.bing.com%2F" className="me-5 text-decoration-none text-white">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  
                  </div>
              </div>
    
              <div className="col-12 col-md-3 mb-2">
              
                <h5 className="text-capitalize fw-bold mb-1 text-white">
                  <i className="fas fa-gem"></i> Credit Network & Finance
                </h5>
                <p className="text-small tc-dark-white">Sede legale e amministrativa:</p>
                <p className="text-small tc-dark-white">Via Flavio Gioia 39 37135 Verona P.IVA: 05863840962</p>
                
              </div>
    
              <div className="col-12 col-md-3 mb-2">
                <h5 className="text-capitalize fw-bold mb-2 text-white">Contatti</h5>
                <p className="tc-dark-white"><i className="fa-solid fa-house-user text-white pe-1"></i>Cap. Soc. 10.000.000</p>
              </div>
    
              <div className="col-12 col-md-3 mb-2 d-flex flex-column">
                
                <h5 className="text-white">Informazioni</h5>
                <a href="https://reclami@cienneffe.com/" target='blank' className="tc-dark-white">
                  <i className="fas fa-envelope me-1 text-white"></i>
                  info@cienneffe.com
                </a> 
                <h5 className="text-white mt-2">Reclami</h5> 
                <a className="tc-dark-white" href="https://reclami@cienneffe.com/" target='blank'>
                  <i className="fas fa-envelope me-1 text-white"></i>
                    reclami@cienneffe.com 
                </a>
              </div>
      
            </section>
        </section>
    
        <section className="col-12 text-center text-white p-4">
            © 2015 CNF - Credit Network & Finance S.p.A. a socio unico Cap. Soc. 10.000.000 i.v. - All rights reserved | P.IVA: 05863840962 | Privacy Sito
          <a className="text-reset text-success fw-bold " href="https://www.cienneffe.com/" target="blank">www.cienneffe.com</a>
        </section>
    </footer>
    )
}

export default Footer;
