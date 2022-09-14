export const defaultProps = {
    title: 'Sign In',
    formArr: [
      {
            label: 'Nominativo',
            name: 'nominativo',
            type: 'text',
      },
      {
            label: 'E-mail',
            name: 'mail',
            type: 'email',
      },
      {
            label: 'Indirizzo',
            name: 'indirizzo',
            type: 'text',
      },
      {
            label: 'Codice Fiscale o Partita Iva',
            name: 'cf_piva',
            type: 'text',
      },
      {
            label: 'Telefono',
            name: 'telefono',
            type: 'number',
      },
      {
            label: 'Cap',
            name: 'cap',
            type: 'number',
      },
      {
            label: 'Città',
            name: 'città',
            type: 'text',
      },
      {
            label: 'Numero Ricorso Numero Registro (N.R.G.R)',
            name: 'numero_ricorso',
            type: 'text',
      },
      {
            label: 'Numero di Protocollo Interno',
            name: 'numero_protocollo_interno',
            type: 'text',
      },
      {
            label: 'Ente',
            name: 'ente',
            type: 'text',
      },
      {
            label: 'Data Ricezione Ricorso',
            name: 'data_ricezione_ricorso',
            type: 'date',
      },
      {
            label: 'Data Presentazione Ricorso',
            name: 'data_presentazione_ricorso',
            type: 'datw',
      },
      {
            label: 'Legale Controparte ( Nominativo, Fax Obbligatori ) textarea',
            name: 'indirizzo',
            type: 'text',
      },
      {
            label: 'Legale Controparte ( Nominativo, Fax Obbligatori ) textarea',
            name: 'legale_controparte',
            type: 'text',
      },
      {
            label: 'Pec',
            name: 'pec',
            type: 'text',
      },
      {
            label: 'Oggetto Ricorso textarea',
            name: 'oggetto_ricorso ',
            type: 'text',
      },

      
    ],

     subMitBtn: 'Sign In',
    /* onSubmit: ((form: any) => console.log(form)), */
  /*   redirect: {
        label: "Don't have an account",
        link: "Register",
        to: '/register'
    } */
}
