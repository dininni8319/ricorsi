//Ricorsi
export const selectPropsTributi = {
    title: 'Tributo',
    name: 'tributo',
    values: [
        {
            value: 'Imu'
        },
        {
            value: 'Tari'
        },
        {
            value: 'Tarsu'
        },
        {
            value: 'Tassa rifiuti'
        },
        {
            value: 'Pubblicità'
        },
        {
            value: 'Occ. suolo'
        },
        {
            value: 'C.u.patr'
        },
        {
            value: 'Cod.stradale'
        },
        {
            value: 'Mensa'
        },
        {
            value: 'Tasi'
        }
    ]
};

export const selectPropsTipologiaAtto = {
    title: "Tipologia dell'Atto",
    name: 'tipologia_atto',
    values: [
        {
            value: 'Accertamento'
        },
        {
            value: 'Fermo Amministrativo'
        },
        {
            value: 'Ingiunzione'
        },
        {
            value: 'Intimazione'
        },
        {
            value: 'Liquidazione'
        },
        {
            value: 'Pignoramento'
        },
        {
            value: 'Preavviso'
        },
        {
            value: 'Preavviso fermo'
        },
        {
            value: 'Rimborso'
        },
        {
            value: 'Riscossione'
        },
        {
            value: 'Sollecito'
        }
    ]
};

export const selectPropsEsito = {
    title: 'Esito',
    name: 'esito',
    values: [
        {
            value: 'Aperto'
        },
        {
            value: 'Vinto'
        },
        {
            value: 'Perso'
        },
        {
            value: 'Chiuso'
        }
    ]
};

//Cartoline
export const selectPropsEsitoCartoline = {
    title: 'Esito',
    name: 'esito_notifica',
    values: [
        {
            value: 'Ricevuto-Destinatario'
        },
        {
            value: 'Ricevuto-Familiare Convivente'
        },
        {
            value: "Ricevuto-Addetto all'Immobile"
        },
        {
            value: 'Ricevuto-Portiere'
        },
        {
            value: 'Ritirato'
        },
        {
            value: 'Compiuta Giacenza'
        },
        {
            value: 'Rifiutato'
        },
        {
            value: 'Destinatario irreperibile'
        },
        {
            value: 'Destinatario deceduto'
        },
        {
            value: 'Destinatario sconosciuto'
        },
        {
            value: 'Destinatario trasferito'
        },
        {
            value: 'Indirizzo inesatto'
        },
        {
            value: 'Indirizzo insufficiente'
        },
        {
            value: 'Indirizzo inesistente'
        },
        {
            value: 'CAD'
        }
    ]
};

//fase
export const selectEsitoSentenza = {
    title: 'Esito Sentenza',
    name: 'esito',
    values: [
        {
            value: 'accolto'
        },
        {
            value: 'accolto parz'
        },
        {
            value: 'rigettato'
        },
        {
            value: 'cessata materia del contendere'
        }
    ]
};

export const selectEsitoDefinitivo = {
    title: 'Esito Definitivo Relativo la Sentenza',
    name: 'esito_definitivo',
    values: [
        {
            value: 'Accoglimento totale'
        },
        {
            value: 'Accoglimento parziale'
        },
        {
            value: 'Rigettato'
        },
        {
            value: 'Proposta convocazione'
        }
    ]
};

export const selectStatoFase = {
    title: 'Stato Fase',
    name: 'fase',
    values: [
        {
            value: 1
        },
        {
            value: 2
        },
        {
            value: 3
        },
        {
            value: 4
        }
    ]
};

export const selectTipologiaFile = {
    title: 'Tipologia File',
    name: 'tipologia_file',
    values: [
        {
            value: 'Ricorso'
        },
        {
            value: 'Istruttoria'
        },
        {
            value: 'Doc Varia Ricorso'
        },
        {
            value: 'Accertamento'
        },
        {
            value: 'Note Tecniche'
        },
        {
            value: 'Controdeduzioni'
        },
        {
            value: 'Nota Integrativa'
        },
        {
            value: 'Dispositivo'
        },
        {
            value: 'Appello'
        },
        {
            value: 'Controdeduzioni Appello'
        },
        {
            value: 'Doc Varia Appello'
        },
        {
            value: 'Dispositivo'
        },
        {
            value: 'Sentenza II Grado'
        },
        {
            value: 'Ricorso Cassazione'
        },
        {
            value: 'Controdeduzioni Cassazione'
        },
        {
            value: 'Dispositivo Cassazione'
        },
        {
            value: 'Sentenza Cassazione'
        },
        {
            value: 'Varie'
        }
    ]
};

//Lotti di spedizione
export const selectEntrataTributo = {
    title: 'Entrata Tributo',
    name: 'entrata_tributo',
    values: [
        {
            value: 'Canone unico Patrimoniale'
        },
        {
            value: 'Imu'
        },
        {
            value: 'Tasi'
        },
        {
            value: 'Rsu'
        },
        {
            value: 'Icp'
        },
        {
            value: 'Osap'
        },
        {
            value: 'Dpa'
        },
        {
            value: 'Canone unico'
        },
        {
            value: 'Lvo'
        },
        {
            value: 'Cds'
        },
        {
            value: 'Mense'
        },
        {
            value: 'Trasporti'
        },
        {
            value: 'Imposta di Soggiorno'
        },
        {
            value: 'Numerazione Civica'
        },
        {
            value: 'Riscossione Coattiva'
        },
        {
            value: 'Varie'
        }
    ]
};

export const tipologiaFile = {
        label: 'Tipologia file',
        name: 'tipologia_file',
        type: 'text',
        id: 11,
        required: true,
        values: [
            {id: 0, title: 'Ricorso', value: 'Ricorso'},
            {id: 1, title: 'Istruttoria', value: 'Istruttoria'},
            {id: 2, title: 'Doc Varia Ricorso', value: 'DocVaria_Ricorso'},
            {id: 3, title: 'Accertamento', value: 'Accertamento'},
            {id: 4, title: 'Note Tecniche', value: 'Note_Tecniche'},
            {id: 5, title: 'Controdeduzioni', value: 'Controdeduzioni'},
            {id: 6, title: 'Nota Integrativa', value: 'Nota_Integrativa'},
            {id: 7, title: 'Dispositivo', value: 'Dispositivo'},
            {id: 8, title: 'Appello', value: 'Appello'},
            {id: 9, title: 'Controdeduzioni Appello', value: 'Controdeduzioni_Appello'},
            {id: 10, title: 'Doc Varia Appello', value: 'DocVaria_Appello'},
            {id: 11, title: 'Sentenza II Grado', value: 'Sentenza_II_Grado'},
            {id: 12, title: 'Ricorso Cassazione', value: 'Ricorso_Cassazione'},
            {id: 13, title: 'Controdeduzioni Cassazione', value: '16_Controdeduzioni_Cassazione'},
            {id: 14, title: 'Dispositivo Cassazione', value: 'Dispositivo_Cassazione'},
            {id: 15, title: 'Varie', value: 'Varie'},
        ]
    
}
export const selectTipologiaDocumenti = {
    title: 'Tipologia Documenti',
    name: 'tipologia_documenti',
    values: [
        {
            value: 'Avviso Bonario'
        },
        {
            value: 'Ingiunzioni'
        },
        {
            value: 'Accertamenti'
        },
        {
            value: 'Atti Giudiziari'
        },
        {
            value: 'Solleciti'
        },
        {
            value: 'Avvisi Bonari'
        },
        {
            value: 'Rateizzazioni'
        },
        {
            value: 'Altro'
        }
    ]
};

export const selectTipologiaSpedizione = {
    title: 'Tipologia Spedizione',
    name: 'tipologia_spedizioni',
    values: [
        {
            value: 'Posta ordinaria'
        },
        {
            value: 'Raccomandata'
        },
        {
            value: 'Atto giudiziario'
        },
        {
            value: 'Posta Ordinaria'
        }
    ]
};

//select tasks imput
export const selectTasks = {
    title: 'Invia una notifica prima della scadenza',
    name: 'reminder',
    values: [
        {
            value: 'uno'
        },
        {
            value: 'due'
        },
        {
            value: 'tre'
        },
        {
            value: 'cinque'
        },
        {
            value: 'settimana'
        }
    ]
};

export const selectMeseRendicondazione = {
    title: 'Mese',
    name: 'mese',
    values: [
        {
            value: 'Gennaio'
        },
        {
            value: 'Febbraio'
        },
        {
            value: 'Marzo'
        },
        {
            value: 'Aprile'
        },
        {
            value: 'Maggio'
        },
        {
            value: 'Giugno'
        },
        {
            value: 'Luglio'
        },
        {
            value: 'Agosto'
        },
        {
            value: 'Settembre'
        },
        {
            value: 'Ottobre'
        },
        {
            value: 'Novembre'
        },
        {
            value: 'Dicembre'
        }
    ]
};

export const selectTipologiaAttivita = {
    title: 'Tipologia di attivita',
    name: 'tipologia_attivita',
    values: [
        {
            value: 'ordinario'
        },
        {
            value: 'accertamento'
        },
        {
            value: 'riscossione'
        },
    ]
};

export const selectTipologiaServizi = {
    title: 'Tipologia servizi',
    name: 'tipologia_servizi',
    values: [
        {
            value: 'imu'
        },
        {
            value: 'tasi'
        },
        {
            value: 'cup'
        },
        {
            value: 'mense'
        },
        {
            value: 'transporti'
        },
        {
            value: 'rifiuti'
        },
        {
            value: 'cds'
        },
        {
            value: 'idrico'
        },
    ]
};