import { ExportComponentStyle } from "./style";
import { useContext } from 'react';
import { ConfigContext } from "../../../Contexts/Config";

const ExportCSV = () => {
  const { api_urls: { backend }} = useContext(ConfigContext);

  return (
    <ExportComponentStyle>
        <h3>
          Esporta in formato CSV
        </h3>
        <div>
          <a href={`${backend}/export_lotti`}>Esporta</a>
        </div>
    </ExportComponentStyle>
  )
}

export default ExportCSV;