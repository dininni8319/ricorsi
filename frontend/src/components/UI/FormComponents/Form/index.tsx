// import { string } from "yup";
import React, { useState, ChangeEvent } from "react";
import { useNavigate } from 'react-router';
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
    
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();

        //post a ricorso
        fetch(`${baseURL}/api/cienneffe/crea_ricorso`, {
            method: 'POST',
            headers: { 'Content-Type' : "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                navigate('/')
            } else {
                alert('Something went wrong!')
            }
        })
    }

     // onChange
     const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, index?: number ) => {
        // const i = defaultProps.formArr.findIndex(el => el.id === index)
        setData({...data, [e.target.name]: 
        e.target.value});
    };
 
    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1 className='font-bold text-amber-500 text-3xl'>{defaultProps.title}</h1>
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

            <div className='md:flex'>
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