import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FormProps {
    title: string,
    formArr: any,
    subMitBtn: string,
    /*onSubmit: any,
    redirect: any */
};

export interface PropsInput {
    typeIn: string,
    label: string,
    name: string,
    index?: number,
    handleData: (e: React.ChangeEvent<HTMLInputElement>,
        index?: number) => any;
};

export interface PropsIcons {
    fontIcon: IconProp,
    href: string
};

export interface LogoProps {
    imageUrl: string | undefined;
    w: string,
    h: string
};

export type ObjSelectType = {
    title: string,
    name: string,
    values: {value: string}[],
}

export interface ObjFormType {
    id: number,
    nominativo: string,
    mail: string,
    cf_piva:string,
    telefono: string,
    cap:string,
    città: string,
    numero_ricorso: string,
    numero_protocollo_interno: string,
    ente: string,
    data_ricezione_ricorso: string,
    data_presentazione_ricorso: string,
    indirizzo: string,
    legale_controparte: string,
    pec: string,
    oggetto_ricorso: string,
    anno_imposta: string,
    importo_atto:string,
    email_notification: string,
    esito: string,
    tributo: string,
    tipologia_atto: string,
    informazioni_aggiuntive: string,
}



