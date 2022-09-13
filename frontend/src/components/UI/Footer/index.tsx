  import LogoComponent from '../Navbar/LogoComponent';
  import classes from './style.module.css';
  import logo from '../../../assets/icons/logo_inv2.png';
  import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
  import { IconProp } from '@fortawesome/fontawesome-svg-core';

  import FontAwesomeComponent from './FontAwesomeComponent';

  const Footer = () => {

      return (
          <footer className={`text-start ${classes['footer-backgroud-color']}`}>
              <section>
                <div className="p-3 flex column">
                    <LogoComponent imageUrl={logo} w='200px' h="200px" />
                    <FontAwesomeComponent href="https://www.linkedin.com" fontIcon={faEnvelope} />
                    <FontAwesomeComponent href="https://www.linkedin.com" fontIcon={faLink} />  
                </div>
      
                <div className="mb-2 flex column">
                
                  <h5 className="text-capitalize fw-bold mb-1">
                    <i className="fas fa-gem"></i> Credit Network & Finance
                  </h5>
                  <p className="text-small">Sede legale e amministrativa:</p>
                  <p className="text-small">Via Flavio Gioia 39 37135 Verona P.IVA: 05863840962</p>
                  
                  <h5 className="text-capitalize fw-bold mb-2">Contatti</h5>
                  <p className="text-white"><i className="fa-solid fa-house-user  pe-1"></i>Cap. Soc. 10.000.000</p>
              
                  
                  <h5>Informazioni</h5>
                  <FontAwesomeComponent href="https://reclami@cienneffe.com/" fontIcon={faEnvelope} />
                  
                  <h5 className="mt-2">Reclami</h5> 
                  <FontAwesomeComponent href="https://reclami@cienneffe.com/" fontIcon={faEnvelope} />
               </div>
      
              </section>
      
              <section className="col-12 text-center text-white p-4">
                  © 2015 CNF - Credit Network & Finance S.p.A. a socio unico Cap. Soc. 10.000.000 i.v. - All rights reserved | P.IVA: 05863840962 | Privacy Sito
                <a className="text-success" href="https://www.cienneffe.com/" target="blank">www.cienneffe.com</a>
              </section>
          </footer>
      )
  }

  export default Footer;
