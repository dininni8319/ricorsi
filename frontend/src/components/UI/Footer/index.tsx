import LogoComponent from "../Navbar/LogoComponent";
import { FormContainer } from "./style";
import logo from "../../../assets/icons/logo_inv2.png";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeComponent from "./FontAwesomeComponent";
import { useState, memo } from "react";

const Footer = () => {
  return (
    <FormContainer>
      <section className="md:flex md:align-middle md:justify-around pt-5 footer-container-custom">
        <div>
          <LogoComponent imageUrl={logo} />
          <div className="pt-2">
            <a
              href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A743119&keywords=credit%20network%20%26%20finance&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=44fd7983-1d17-4c84-b9da-a94b9b6576dc&sid=a(O"
              className="text-success"
            >
              www.linkedIn.com/cienneffe
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="capitalize font-bold pb-1">
            credit network & finance
          </h2>
          <p className="text-sm py-2">Sede legale e amministrativa:</p>
          <p className="text-sm">
            Via Flavio Gioia 39 37135 Verona P.IVA: 05863840962
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="font-bold pb-1">informazioni</h4>
          <div className="flex">
            <i className="pr-3 text-sm">Reclami</i>
            <FontAwesomeComponent
              href="https://reclami@cienneffe.com/"
              fontIcon={faEnvelope}
            ></FontAwesomeComponent>
          </div>
        </div>
      </section>

      <section className="md:flex md:justify-center md:align-middle px-5 pt-10">
        <p className="text-sm">
          © 2015 CNF - Credit Network & Finance S.p.A. a socio unico{" "}
          <i>Cap. Soc. 10.000.000</i> i.v. - All rights reserved | P.IVA:
          05863840962 | Privacy Sito
        </p>
        <a
          className="text-success md:px-2 text-center"
          href="https://www.cienneffe.com/"
          target="blank"
        >
          www.cienneffe.com
        </a>
      </section>
    </FormContainer>
  );
};

export default memo(Footer);
