export let defaultRicorsiData = {
  nominativo: "",
  mail: "",
  cf_piva: "",
  telefono: "",
  cap: "",
  città: "",
  numero_ricorso: "",
  numero_protocollo_interno: "",
  ente: "",
  data_ricezione_ricorso: "",
  data_presentazione_ricorso: "",
  indirizzo: "",
  legale_controparte: "",
  pec: "",
  oggetto_ricorso: "",
  anno_imposta: "",
  importo_atto: "",
  email_notification: "",
  esito: "",
  tributo: "",
  tipologia_atto: "",
  informazioni_aggiuntive: "",
};

export let defaultCartolineData = {
  descrizione_mandante: "",
  codice_mandate: "",
  nome_cognome_debitore: "",
  cf_piva_debitore: "",
  ndg: "",
  data_spedizione: "",
  numero_raccomandata: "",
  data_notifica: "",
  esito_notifica: "",
  chiave_pratica: "",
  fase: "",
};

export let defaultFasiData = {
  fase: 0,
  contro_deduzioni_tax_unit: "",
  contro_deduzioni_uff_legale: "",
  presentato: "",
  data_presentazione: "",
  data_convocazione: "",
  data_deposito: "",
  sede: "",
  esito: "",
  esito_definitivo: "",
  motivazione: "",
  spese: "",
  data_deposito_sentenza: "",
  data_notifica_sentenza: "",
};

export let defaultLottoData = {
  descrizione_spedizione: "",
  entrata_tributo: "",
  tipologia_documenti: "",
  tipologia_spedizioni: "",
  nr_atti: "",
  data_consegna_service: "",
  data_conferma_anteprime: "",
  nr_atti_spediti: "",
  cartoline_ritorno_inserite: "",
  notifiche_positive: "",
  notifiche_negative: "",
  numero_atti_rinotificare: "",
  nr_atti_annullati: "",
  importo_atti_annullati: "",
  atti_rettificati: "",
  importo_atti_rettificati: "",
};

export let defaultRemainderData = {
  scadenza_del_compito: "",
  descrizione_compito: "",
  reminder: "",
};

export const defaultLoginData = {
  email: '',
  password: ''
}

export const defaultRegisterData = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
}