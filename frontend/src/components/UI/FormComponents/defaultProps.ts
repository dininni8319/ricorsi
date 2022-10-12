export const formRicorsiLabels = {
    title: 'Avvia un Ricorso',
    formArr: [
        {
            label: 'Nominativo',
            name: 'nominativo',
            type: 'text',
            id: 0,
            errorMessage: 'Il nominativo è obbligatorio!',
            required: true
        },
        {
            label: 'E-mail',
            name: 'mail',
            type: 'email',
            id: 1,
            errorMessage: "L'email è obbligatoria ed deve essere valida!",
            pattern:
                "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
            required: true
        },
        {
            label: 'Indirizzo',
            name: 'indirizzo',
            type: 'text',
            id: 2,
            errorMessage: "L'indirizzo è obbligatorio!",
            required: true
        },
        {
            label: 'Codice Fiscale o Partita Iva',
            name: 'cf_piva',
            type: 'text',
            id: 3,
            errorMessage:
                'Il codice Fiscale è obbligatorio, deve essere un codice alfanumnerico di 16 caratteri!',
            pattern: '^[A-Z0-9]{16}',
            required: true
        },
        {
            label: 'Telefono',
            name: 'telefono',
            type: 'text',
            pattern: '^[0-9]{3,16}',
            errorMessage: 'Il numero di Telefono deve contenere solo numeri, e un massimo di 16 num!',
            id: 4,
        },
        {
            label: 'Cap',
            name: 'cap',
            type: 'text',
            id: 5,
            errorMessage: 'Il Cap è obbligatorio, deve essere di 5 caratteri!',
            pattern: '[0-9]{5}',
            required: true
        },
        {
            label: 'Città',
            name: 'città',
            type: 'text',
            id: 6,
            errorMessage: ''
        },
        {
            label: 'Numero Ricorso Numero Registro (N.R.G.R)',
            name: 'numero_ricorso',
            type: 'text',
            id: 7,
            errorMessage: 'Il Numero Ricorso è obbligatorio',
            required: true
        },
        {
            label: 'Numero di Protocollo Interno',
            name: 'numero_protocollo_interno',
            type: 'text',
            id: 8,
            errorMessage: 'Il Numero di Protocollo Interno è obbligatorio',
            required: true
        },
        {
            label: 'Ente',
            name: 'ente',
            type: 'text',
            id: 9,
            //example of patern
            //   pattern: '^[A-Za-z0-9]{3, 16}$',
            required: true,
            errorMessage: ''
        },
        {
            label: 'Data Ricezione Ricorso',
            name: 'data_ricezione_ricorso',
            type: 'date',
            id: 10,
            errorMessage: ''
        },
        {
            label: 'Data Presentazione Ricorso',
            name: 'data_presentazione_ricorso',
            type: 'date',
            id: 11,
            errorMessage: ''
        },
        {
            label: 'Indirizzo',
            name: 'indirizzo',
            type: 'text',
            id: 12,
            errorMessage: ''
        },
        {
            label: 'Legale Controparte ( Nominativo, Fax Obbligatori )',
            name: 'legale_controparte',
            type: 'text',
            id: 13,
            errorMessage: ''
        },
        {
            label: 'Pec',
            name: 'pec',
            type: 'email',
            id: 14,
            errorMessage: ''
        },
        {
            label: 'Oggetto Ricorso textarea',
            name: 'oggetto_ricorso',
            type: 'text',
            id: 15,
            errorMessage: ''
        },
        {
            label: 'Anno Imposta',
            name: 'anno_imposta',
            type: 'number',
            id: 16,
            errorMessage: ''
        },
        {
            label: 'Importo Atto €',
            name: 'importo_atto',
            type: 'number',
            pattern: '^[1-9]d*(.d+)?$',
            required: true,
            errorMessage: "L' importo deve essere almeno numberi e decimali",
            id: 17,
        },
        {
            label: 'Informazioni Aggiuntive',
            name: 'informazioni_aggiuntive',
            type: 'text',
            id: 18,
            errorMessage: ''
        },
        {
            label: 'Notifica tramite Email',
            name: 'email_notification',
            type: 'checkbox',
            id: 19,
            errorMessage: ''
        }
    ],
};

export const cartolineFormData = {
    title: 'Avvia un Cartolina',
    formArr: [
        {
            label: 'Descrizione Mandante',
            name: 'descrizione_mandante',
            type: 'text',
            id: 0,
            errorMessage: ''
        },
        {
            label: 'Codice della mandante',
            name: 'codice_mandate',
            type: 'text',
            id: 1,
            errorMessage: ''
        },
        {
            label: 'Nome e cognome del debitore',
            name: 'nome_cognome_debitore',
            type: 'text',
            id: 2,
            errorMessage: ''
        },
        {
            label: 'Codice Fiscale/P.I del debitore',
            name: 'cf_piva_debitore',
            type: 'text',
            id: 3,
            errorMessage: ''
        },
        {
            label: 'NDG',
            name: 'ndg',
            type: 'text',
            id: 4,
            errorMessage: ''
        },
        {
            label: 'Data comunicazione/Data spedizione',
            name: 'data_spedizione',
            type: 'date',
            id: 5,
            errorMessage: ''
        },
        {
            label: 'Data notifica',
            name: 'data_notifica',
            type: 'date',
            id: 6,
            errorMessage: ''
        },
        {
            label: 'Numero Raccomandata',
            name: 'numero_raccomandata',
            type: 'text',
            id: 7,
            errorMessage: ''
        },
        {
            label: 'Chiave pratica',
            name: 'chiave_pratica',
            type: 'text',
            id: 8,
            errorMessage: ''
        },
        {
            label: 'Fase',
            name: 'fase',
            type: 'text',
            id: 9,
            errorMessage: ''
        },
        {
            label: 'File',
            name: 'nome_file',
            type: 'file',
            id: 10,
            errorMessage: ''
        }
    ],
};

export const fasiFormData = {
    title: 'Avvia un Fase',
    formArr: [
        {
            label: 'Controdeduzione Tax Unit',
            name: 'contro_deduzioni_tax_unit',
            type: 'text',
            id: 0,
            errorMessage: ''
        },
        {
            label: 'Presentato da',
            name: 'presentato',
            type: 'text',
            id: 1,
            errorMessage: ''
        },
        {
            label: 'Contro Deduzioni Uff. Legale',
            name: 'contro_deduzioni_uff_legale',
            type: 'text',
            id: 2,
            errorMessage: ''
        },
        {
            label: 'Data Presentazione Ricorso',
            name: 'data_presentazione',
            type: 'date',
            id: 3,
            errorMessage: ''
        },
        {
            label: 'Data Convocazione',
            name: 'data_convocazione',
            type: 'date',
            id: 4,
            errorMessage: ''
        },
        {
            label: 'Data Deposito',
            name: 'data_deposito',
            type: 'date',
            id: 5,
            errorMessage: ''
        },
        {
            label: 'Sede',
            name: 'sede',
            type: 'text',
            id: 6,
            errorMessage: ''
        },
        {
            label: 'Data Deposito Sentenza',
            name: 'data_deposito_sentenza',
            type: 'date',
            id: 7,
            errorMessage: ''
        },
        {
            label: 'Data Notifica Sentenza',
            name: 'data_notifica_sentenza',
            type: 'date',
            id: 8,
            errorMessage: ''
        },
        {
            label: 'Motivazione',
            name: 'motivazione',
            type: 'text',
            id: 9,
            errorMessage: ''
        },
        {
            label: 'Spese Legali',
            name: 'spese',
            type: 'number',
            id: 10,
            errorMessage: ''
        }
        //   {
        //       label: 'File',
        //       name: 'nome_file',
        //       type: 'file',
        //       id: 11,
        //       errorMessage: ''
        //   },
    ],
};

export const LottiSpedizioneFormData = {
    title: 'Avvia un Lotto di Spedizione',
    formArr: [
        {
            label: 'Descrizione Spedizione',
            name: 'descrizione_spedizione',
            type: 'text',
            id: 0,
            errorMessage: ''
        },
        {
            label: 'Numberi degli Atti',
            name: 'nr_atti',
            type: 'text',
            id: 1,
            errorMessage: ''
        },
        {
            label: 'Data di Consegna al Service',
            name: 'data_consegna_service',
            type: 'date',
            id: 2,
            errorMessage: ''
        },
        {
            label: 'Data Conferma Anteprime',
            name: 'data_conferma_anteprime',
            type: 'date',
            id: 3,
            errorMessage: ''
        },
        {
            label: 'Numeri Atti Spediti',
            name: 'nr_atti_spediti',
            type: 'text',
            id: 4,
            errorMessage: ''
        },
        {
            label: 'Cartoline Ritorno Inserite',
            name: 'cartoline_ritorno_inserite',
            type: 'text',
            id: 5,
            errorMessage: ''
        },
        {
            label: 'Notifiche Positive',
            name: 'notifiche_positive',
            type: 'text',
            id: 6,
            errorMessage: ''
        },
        {
            label: 'Notifiche Negative',
            name: 'notifiche_negative',
            type: 'text',
            id: 7,
            errorMessage: ''
        },
        {
            label: 'Numero Atti Rinotificare',
            name: 'numero_atti_rinotificare',
            type: 'text',
            id: 8,
            errorMessage: ''
        },
        {
            label: 'Numero Atti Annullati',
            name: 'nr_atti_annullati',
            type: 'text',
            id: 9,
            errorMessage: ''
        },
        {
            label: 'Importo Atti Annullati',
            name: 'importo_atti_annullati',
            type: 'text',
            id: 10,
            errorMessage: ''
        },
        {
            label: 'Atti Rettificati',
            name: 'atti_rettificati',
            type: 'text',
            id: 11,
            errorMessage: ''
        },
        {
            label: 'Importo Atti Rettificati',
            name: 'importo_atti_rettificati',
            type: 'text',
            id: 12,
            errorMessage: ''
        },
        //   {
        //       label: 'File',
        //       name: 'nome_file',
        //       type: 'file',
        //       id: 11,
        //       errorMessage: ''
        //   },
    ],
};

