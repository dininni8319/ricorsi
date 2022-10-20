const Details = ( { ricorso }:any ) => {
  return (
    <ul className="ul-detail-style">
      <li>
        Nominativo:<span>{ricorso.nominativo}</span>
      </li>
      <li>
        Numero Ricorso:
        <span>{ricorso.numero_ricorso}</span>
      </li>
      <li>
        Tributo:<span>{ricorso.tributo}</span>
      </li>
      <li>
        Ente:<span>{ricorso.ente}</span>
      </li>
      <li>
        Anno imposta:<span>{ricorso.anno_imposta}</span>
      </li>
      <li>
        Importo Atto:<span>{ricorso.importo_atto}</span>
      </li>
      <li>
        Esito:<span>{ricorso.esito}</span>
      </li>

      <li>
        Numero di protocollo interno:
        <span>{ricorso.numero_protocollo_interno}</span>
      </li>
      <li>
        Indirizzo:<span>{ricorso.indirizzo}</span>
      </li>
      <li>
        Email:<span>{ricorso.mail}</span>
      </li>
      <li>
        Telefono:<span>{ricorso.telefono}</span>
      </li>

      <li>
        Cod. Fiscale/P.Iva:
        <span>{ricorso.cf_piva}</span>
      </li>
      <li>
        Cod. Fiscale/P.Iva:
        <span>{ricorso.tipologia_atto}</span>
      </li>
      <li>
        <p className="font-serif mt-5">
          Oggetto Ricorso: <span>{ricorso.oggetto_ricorso}</span>
        </p>
      </li>
  </ul>
  );
}

export default Details;