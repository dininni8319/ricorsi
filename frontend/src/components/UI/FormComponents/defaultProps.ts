export const defaultProps = {
    title: 'Avvia un ricorso',
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
            label: 'Legale Controparte ( Nominativo, Fax Obbligatori ) textarea',
            name: 'indirizzo',
            type: 'text',
            id: 12,
      },
      {
            label: 'Legale Controparte ( Nominativo, Fax Obbligatori ) textarea',
            name: 'legale_controparte',
            type: 'text',
            id: 13,
      },
      {
            label: 'Pec',
            name: 'pec',
            type: 'text',
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
            type: 'text',
            id: 16,
      }, 
      {
            label: 'Importo Atto €',
            name: 'importo_atto ',
            type: 'text',
            id: 17,
      }, 
      {
            label: 'Notifica tramite Email',
            name: 'email_notification',
            type: 'checkbox',
            id: 18,
      }, 
    ],
     subMitBtn: 'Sign In',
//      onChange: ((form: any) => console.log(form)),
  /*   redirect: {
        label: "Don't have an account",
        link: "Register",
        to: '/register'
    } */
}

