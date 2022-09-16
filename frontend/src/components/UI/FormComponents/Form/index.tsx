// import { string } from "yup";
import React, { useState } from "react";

import Input from '../Input/index';
import { FormContainer } from "./style";
import { selectPropsTributi, selectPropsTipologiaAtto, selectPropsEsito } from "../selectPropsTributi";
import { FormProps, PropsInput, ObjFormType } from "../../../interfaces/interfaces";
import { baseURL } from "../../../Utilities/index";
import SelectInput from '../SelectInput/index';

const Form: React.FC<FormProps> = ({ title, formArr, subMitBtn/*  onSubmit, redirect */ }) => {
    
    const [ data, setData ] = useState({
            nominativo: '',
            mail: '',
            cf_piva:'',
            telefono: '',
            cap:'',
            città: '',
            numero_ricorso: '',
            numero_protocollo_interno: '',
            ente: '',
            data_ricezione_ricorso: '',
            data_presentazione_ricorso: '',
            indirizzo: '',
            legale_controparte: '',
            pec: '',
            oggetto_ricorso: '',
            anno_imposta: '',
            importo_atto:'',
            email_notification: '',
            esito: '',
            tributo: '',
            tipologia_atto: '',
            informazioni_aggiuntive: '',
    });

    //post a ricorso
    fetch(`${baseURL}/api/crea_ricorso`, {
        method: 'POST',
        headers: { 'Content-Type' : "application/json"},
        body: JSON.stringify(data)
    })
    .then(response => console.log(response))

    const handleData = (e: { target: HTMLInputElement }):ObjFormType => {
        const newData = {...data};
        newData[e.target.id as keyof typeof data] = e.target.value

        return newData;
    }
        /* .then(data => ) */
    return (
        <FormContainer>
            <section className="form-row">
                {formArr.map(({ label, name, typeIn }:PropsInput , index: number) =>{
                    return (
                        <>
                            <Input
                                key={index}
                                label={label}
                                name={name}
                                typeIn={typeIn}
                            />
                        </>
                    )
                })}
            <div className='flex'>
                <SelectInput
                selectProps={selectPropsTributi}
                />

                <SelectInput
                selectProps={selectPropsTipologiaAtto}
                />
                <SelectInput
                selectProps={selectPropsEsito}
                />
            </div>
                
                <button>{subMitBtn}</button>

            </section>
        </FormContainer>
    )
}

export default Form;