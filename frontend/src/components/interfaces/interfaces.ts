import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Methods =
  | "head"
  | "options"
  | "put"
  | "post"
  | "patch"
  | "delete"
  | "get";

export interface FormWrapperType {
  title: string;
  subMitBtn: string;
  children?: JSX.Element;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export type InitialState = {
  status: number | undefined;
  response: object | undefined;
};

export interface FormProps {
  id?: string | number;
  title: string;
  navPath: string;
  createPath: string;
  subMitBtn: string;
  //key and value pair definition in typescript
  data: { [key: string]: string | number };
  children?: JSX.Element;
  method?: string
  // ricorso: {[key: string]: string} | undefined,
  // errors?: ErrorType
  // formData: ObjSelectType,
};

export type ErrorType = {
  status: boolean;
  message: string;
};

export interface DefaultData {
  type: string;
  name: string;
  label: string;
  id: number;
};

export interface PropsInput {
  type?: string;
  label: string;
  name: string;
  id?: number;
  value?: string | number;
  errorMessage?: string;
  focused?: string;
  handleData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => any;
}

export interface RicorsoProps {
  slug?: string | number;
  children?: JSX.Element;
};

export interface PropsTextArea {
  label: string;
  name: string;
  index?: number;
  typeIn?: string;
  value?: string | number;
  handleData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => any;
};

export interface PropsIcons {
  fontIcon: IconProp;
  href: string;
};

export interface LogoProps {
  imageUrl: string | undefined;
};

export type ObjSelectType = {
  title: string;
  name: string;
  values: { value: string | number }[];
  ricorso?: object;
};

export interface FasiListProps {
  fasi?: Fasi[];
};

export type RequestConfigType = {
  url: string,
  method?: string,
  headers?: any,
  body?: Fasi;
};

export interface Fasi {
  [key: string]: string | number;
};

export interface ObjFormType {
  id?: number;
  nominativo: string;
  mail: string;
  cf_piva: string;
  telefono: string;
  cap: string;
  città: string;
  numero_ricorso: string;
  numero_protocollo_interno: string;
  ente: string;
  data_ricezione_ricorso: string;
  data_presentazione_ricorso: string;
  indirizzo: string;
  legale_controparte: string;
  pec: string;
  oggetto_ricorso: string;
  anno_imposta: string;
  importo_atto: string;
  email_notification: string;
  esito: string;
  tributo: string;
  tipologia_atto: string;
  informazioni_aggiuntive: string;
};

export interface FasiFieldsTypes {
  ricorsi_id: number,
  id: number,
  fase: number;
  contro_deduzioni_tax_unit: string;
  contro_deduzioni_uff_legale: string;
  presentato: string;
  data_presentazione: string;
  data_convocazione: string;
  data_deposito: string;
  sede: string;
  esito: string;
  esito_definitivo: string;
  motivazione: string;
  spese: string;
  data_deposito_sentenza: string;
  data_notifica_sentenza: string;
};

export interface IRiscossione {
  atti_rettificati: string;
  cartoline_ritorno_inserite: string;
  data_conferma_anteprime: string;
  data_consegna_service: string;
  descrizione_spedizione: string;
  entrata_tributo: string;
  importo_atti_annullati: string;
  importo_atti_rettificati: string;
  notifiche_negative: string;
  notifiche_positive: string;
  nr_atti: string;
  nr_atti_annullati: string;
  nr_atti_spediti: string;
  numero_atti_rinotificare: string;
  tipologia_documenti: string;
  tipologia_spedizioni: string;
};

export type ChildrenProps = {
  children: JSX.Element;
};

export type LoginTypes = {
  username: string;
  token: string;
  id: number;
};

export interface UserType {
  last_name: string;
  first_name: string;
  token: string;
  id: number;
};

export type AuthConfigType = {
  user?: UserType;
  login?: any;
  logout?: any;
};

export type ConfigContextType = {
  api_urls: { backend?: string };
};

export type PerPageType = {
  pageCount: number
  currentItems: CartolinaType[]
}

export type CartolinaType = {
  cf_piva_debitore: string;
  chiave_pratica: string;
  codice_mandate: string
  created_at: string;
  data_notifica: string;
  data_spedizione: string;
  descrizione_mandante: string;
  esito_notifica: string;
  fase: string; 
  id: number;
  ndg: string;
  nome_cognome_debitore: string;
  nome_file: string;
  numero_raccomandata: string;
  path_file: string;
  updated_at: string;
}

export type ErrorObjType = {
  errorsTitle: string 
}