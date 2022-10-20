import photo from "../../../assets/images/man_suit.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";

const SideHeader = () => {
  return (
    <section className="section-img">
      <FontAwesomeIcon
        icon={faFontAwesome}
        className={`fa-3x mx-1 icon-custom-style`}
      />
      <h2>I Professionisti dei Crediti Problematici!</h2>
      <p>Siamo conosciuti per la nostra alta professionalità!</p>
      <img src={photo} alt="man with suit" />
    </section>
  );
};

export default SideHeader;
