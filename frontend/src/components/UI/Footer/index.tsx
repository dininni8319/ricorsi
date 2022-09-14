import LogoComponent from '../Navbar/LogoComponent';
import { FormContainer } from "./style";
import logo from '../../../assets/icons/logo_inv2.png';
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import FontAwesomeComponent from './FontAwesomeComponent';

  const Footer = () => {

      return (
          <FormContainer>
              <section className='md:flex items-center justify-around pt-5'>
                <div className="flex flex-col text-white">
                  <h5 className="capitalize font-bold py-2">credit network & finance</h5>
                  <p className="text-small py-2">Sede legale e amministrativa:</p>
                  <p className="text-small">Via Flavio Gioia 39 37135 Verona P.IVA: 05863840962</p>  
                </div>
      
               <div className="flex flex-col">
                  <h5 className="font-bold">Contatti</h5>
                  <p className="text-white my-2"><i className="fa-solid fa-house-user "></i>Cap. Soc. 10.000.000</p>
                  <h5>Informazioni</h5>
                  <FontAwesomeComponent href="https://reclami@cienneffe.com/" fontIcon={faEnvelope}></FontAwesomeComponent>
                  <h5 className="">Reclami</h5> 
                  {/* <FontAwesomeComponent href="https://reclami@cienneffe.com/" fontIcon={faEnvelope} /> */}
               </div>
               
               <div className="flex flex-col">
                    <LogoComponent imageUrl={logo} w='200px' h="200px" />
                    <FontAwesomeComponent href="https://www.linkedin.com" fontIcon={faEnvelope} />
                </div>
              </section>
      
              <section className="col-12 text-center text-white px-1 py-2">
                  © 2015 CNF - Credit Network & Finance S.p.A. a socio unico Cap. Soc. 10.000.000 i.v. - All rights reserved | P.IVA: 05863840962 | Privacy Sito
                <a className="text-success px-2 mt-10" href="https://www.cienneffe.com/" target="blank">www.cienneffe.com</a>
              </section>
          </FormContainer>
      )
  }

  export default Footer;
