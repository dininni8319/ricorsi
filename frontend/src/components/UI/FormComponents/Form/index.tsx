// import { string } from "yup";
import React, { useState, ChangeEvent } from "react";
import Input from '../Input/index';
import { FormContainer } from "./style";
import { defaultProps } from "../defaultProps";
import { formData } from'../formData';
import { selectPropsTributi, selectPropsTipologiaAtto, selectPropsEsito } from "../selectPropsTributi";
import { FormProps } from "../../../interfaces/interfaces";
import { baseURL } from "../../../Utilities/index";
import SelectInput from '../SelectInput/index';

const Form: React.FC<FormProps> = ({ title, formArr, subMitBtn }) => {
    const [ data, setData ] = useState(formData);
    
    console.log(data);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();

        //post a ricorso
        fetch(`${baseURL}/api/cienneffe/crea_ricorso`, {
            method: 'POST',
            headers: { 'Content-Type' : "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => console.log(response))
    }

     // onChange
     const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, index?: number ) => {
        // const i = defaultProps.formArr.findIndex(el => el.id === index)
        setData({ ...data, [e.target.name]: 
        e.target.value});
    };
 
    return (
        <FormContainer onSubmit={handleSubmit}>
            <section className="form-row">
                { defaultProps.formArr?.map(({ label, name, type }, index) => {
                  return (
                    <>
                      <Input
                         label={label}                       
                         name={name}
                         typeIn={type}
                         handleData={handleData}
                         index={index}
                      />
                      
                    </>
                  );
                })}

            <div className='flex'>
                <SelectInput
                   selectProps={selectPropsTributi}
                   handleData={handleData}
                />

                <SelectInput
                    selectProps={selectPropsTipologiaAtto}
                    handleData={handleData}
                />
                <SelectInput
                    selectProps={selectPropsEsito}
                    handleData={handleData}
                />
            </div>
                
                <button className='bg-amber-500 border-solid text-white font-bold mt-5 py-2'>{subMitBtn}</button>

            </section>
        </FormContainer>
    )
}

export default Form;