export const formRicorsiLabels = {
      title: 'Avvia un Ricorso',
      formArr: [
        {
              label: 'Nominativo',
              name: 'nominativo',
              type: 'text',
              id: 0,
        },
        {
              label: 'E-mail',
              name: 'mail',
              type: 'email',
              id: 1,
        },
        {
              label: 'Indirizzo',
              name: 'indirizzo',
              type: 'text',
              id: 2
        },
        {
              label: 'Codice Fiscale o Partita Iva',
              name: 'cf_piva',
              type: 'text',
              id: 3,
        },
        {
              label: 'Telefono',
              name: 'telefono',
              type: 'number',
              id: 4,
        },
        {
              label: 'Cap',
              name: 'cap',
              type: 'number',
              id: 5,
        },
        {
              label: 'Città',
              name: 'città',
              type: 'text',
              id: 6,
        },
        {
              label: 'Numero Ricorso Numero Registro (N.R.G.R)',
              name: 'numero_ricorso',
              type: 'text',
              id: 7,
        },
        {
              label: 'Numero di Protocollo Interno',
              name: 'numero_protocollo_interno',
              type: 'text',
              id: 8,
        },
        {
              label: 'Ente',
              name: 'ente',
              type: 'text',
              id: 9,
        },
        {
              label: 'Data Ricezione Ricorso',
              name: 'data_ricezione_ricorso',
              type: 'date',
              id: 10,
        },
        {
              label: 'Data Presentazione Ricorso',
              name: 'data_presentazione_ricorso',
              type: 'date',
              id: 11,
        },
        {
              label: 'Indirizzo',
              name: 'indirizzo',
              type: 'text',
              id: 12,
        },
        {
              label: 'Legale Controparte ( Nominativo, Fax Obbligatori )',
              name: 'legale_controparte',
              type: 'text',
              id: 13,
        },
        {
              label: 'Pec',
              name: 'pec',
              type: 'email',
              id: 14,
        },
        {
              label: 'Oggetto Ricorso textarea',
              name: 'oggetto_ricorso',
              type: 'text',
              id: 15,
        }, 
        {
              label: 'Anno Imposta',
              name: 'anno_imposta',
              type: 'number',
              id: 16,
        }, 
        {
              label: 'Importo Atto €',
              name: 'importo_atto',
              type: 'number',
              id: 17,
        },
        {
            label: 'Informazioni Aggiuntive',
            name: 'informazioni_aggiuntive',
            type: 'text',
            id: 18,
        },  
        {
              label: 'Notifica tramite Email',
              name: 'email_notification',
              type: 'checkbox',
              id: 19,
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
      //   {
      //       label: 'File',
      //       name: 'nome_file',
      //       type: 'file',
      //       id: 11,
      //   },
      ],
      subMitBtn: 'Invia',
  }
