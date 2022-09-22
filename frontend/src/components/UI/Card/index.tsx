import { ObjFormType } from "../../interfaces/interfaces";
import { CardHeaderStyle } from "./style";

const Card = ({ricorsi, id }: {ricorsi:ObjFormType, id: number}) => {
    return (
        <div className="card card-style bg-base-100 shadow-xl m-2" key={id}>
            <CardHeaderStyle></CardHeaderStyle>
         {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">Tributo: {ricorsi.tributo} <span>Anno imposta:{ricorsi.anno_imposta}</span></h2>
                <p>{ricorsi.oggetto_ricorso}</p>
                <div className="card-actions justify-end">
                   <p>Numero Ricorso: {ricorsi.numero_ricorso}, Ente: {ricorsi.ente}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;