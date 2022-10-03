export const defaultFormProps = {
    title: 'Avvia un Ricorso',
    formArr: [
      {
            label: 'Controdeduzione Tax Unit',
            name: 'contro_deduzioni_tax_unit',
            type: 'text',
            id: 0,
      },
      {
            label: 'Presentato da',
            name: 'presentato',
            type: 'text',
            id: 1,
      },
      {
            label: 'Contro Deduzioni Uff. Legale',
            name: 'contro_deduzioni_uff_legale',
            type: 'text',
            id: 2
      },
      {
            label: 'Data Presentazione Ricorso',
            name: 'data_presentazione',
            type: 'date',
            id: 3,
      },
      {
            label: 'Data Convocazione',
            name: 'data_convocazione',
            type: 'date',
            id: 4,
      },
      {
            label: 'Data Deposito',
            name: 'data_deposito',
            type: 'date',
            id: 5,
      },
      {
            label: 'Sede',
            name: 'sede',
            type: 'text',
            id: 6,
      },
      {
            label: 'Data Deposito Sentenza',
            name: 'data_deposito_sentenza',
            type: 'date',
            id: 7,
      },
      {
            label: 'Data Notifica Sentenza',
            name: 'data_notifica_sentenza',
            type: 'date',
            id: 8,
      },
      {
            label: 'Motivazione',
            name: 'motivazione',
            type: 'text',
            id: 9,
      },
      {
            label: 'Spese Legali',
            name: 'spese',
            type: 'number',
            id: 10,
      },
      {
            label: 'Oggetto Ricorso',
            name: 'oggetto_ricorso',
            type: '',
            id: 11,
      },
      {
            label: 'Informazioni aggiuntive',
            name: '',
            type: '',
            id: 11,
      },

    ],
     subMitBtn: 'Invia',
}

export const cartolineFormData = {
      title: 'Avvia un Cartolina',
      formArr: [
        {
              label: 'Descrizione Mandante',
              name: 'descrizione_mandante',
              type: 'text',
              id: 0,
        },
        {
              label: 'Codice della mandante',
              name: 'codice_mandate',
              type: 'text',
              id: 1,
        },
        {
              label: 'Nome e cognome del debitore',
              name: 'nome_cognome_debitore',
              type: 'text',
              id: 2
        },
        {
              label: 'Codice Fiscale/P.I del debitore',
              name: 'cf_piva_debitore',
              type: 'text',
              id: 3,
        },
        {
              label: 'NDG',
              name: 'ndg',
              type: 'text',
              id: 4,
        },
        {
              label: 'Data comunicazione/Data spedizione',
              name: 'data_spedizione',
              type: 'date',
              id: 5,
        },
        {
              label: 'Data notifica',
              name: 'data_notifica',
              type: 'date',
              id: 6,
        },
        {
              label: 'Numero Raccomandata',
              name: 'numero_raccomandata',
              type: 'text',
              id: 7,
        },
        {
              label: 'Chiave pratica',
              name: 'chiave_pratica',
              type: 'text',
              id: 8,
        },
        {
              label: 'Fase',
              name: 'fase',
              type: 'text',
              id: 9,
        },
        {
              label: 'File',
              name: 'nome_file',
              type: 'file',
              id: 10,
        },
      ],
       subMitBtn: 'Invia',
  }

  export const fasiFormData = {
      title: 'Avvia un Fase',
      formArr: [
        {
            label: 'Fase',
            name: 'fase',
            type: 'text',
            id: 9,
        },
        {
              label: 'Descrizione Mandante',
              name: 'descrizione_mandante',
              type: 'text',
              id: 0,
        },
        {
              label: 'Codice della mandante',
              name: 'codice_mandate',
              type: 'text',
              id: 1,
        },
        {
              label: 'Nome e cognome del debitore',
              name: 'nome_cognome_debitore',
              type: 'text',
              id: 2
        },
        {
              label: 'Codice Fiscale/P.I del debitore',
              name: 'cf_piva_debitore',
              type: 'text',
              id: 3,
        },
        {
              label: 'NDG',
              name: 'ndg',
              type: 'text',
              id: 4,
        },
        {
              label: 'Data comunicazione/Data spedizione',
              name: 'data_spedizione',
              type: 'date',
              id: 5,
        },
        {
              label: 'Data notifica',
              name: 'data_notifica',
              type: 'date',
              id: 6,
        },
        {
              label: 'Numero Raccomandata',
              name: 'numero_raccomandata',
              type: 'text',
              id: 7,
        },
        {
              label: 'Chiave pratica',
              name: 'chiave_pratica',
              type: 'text',
              id: 8,
        },
        {
              label: 'File',
              name: 'nome_file',
              type: 'file',
              id: 10,
        },
      ],
       subMitBtn: 'Invia',
  }
