import photo from "../../../assets/images/financial-building.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { SideHeaderStyleComponent } from "./style";
import LogoComponent from "../Navbar/LogoComponent";
import logo from "../../../assets/icons/logo_inv2.png";
const SideHeader = () => {
  return (
    <SideHeaderStyleComponent>
      <section className="section-img">
        <LogoComponent imageUrl={logo} />
        {/* <FontAwesomeIcon
          icon={faFontAwesome}
          className={`fa-3x mx-1 icon-custom-style`}
        /> */}
        <h2>I Professionisti dei Crediti Problematici!</h2>
        <img src={photo} alt="man with suit" />
        <p>Siamo un servicer specializzato nella gestione di crediti problematici attivo su tutto il territorio italiano. Grazie a un team di esperti dedicati e ai più avanzati sistemi di information technology, offriamo servizi personalizzati in considerazione delle specifiche esigenze di chi opera nel settore dei crediti bancari e finanziari e multi utilities.</p>
      </section>
    </SideHeaderStyleComponent>
  );
};

export default SideHeader;
