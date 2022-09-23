// import { string } from "yup";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from 'react-router';
import Input from '../Input/index';
import { FormContainer } from "./style";
import { defaultProps } from "../defaultProps";
import { formData } from'../formData';
import { selectPropsTributi, selectPropsTipologiaAtto, selectPropsEsito } from "../selectPropsTributi";
import { FormProps } from "../../../interfaces/interfaces";
import { baseURL } from "../../../Utilities/index";
import SelectInput from '../SelectInput/index';
import useApiRequest from '../../../state/useApiRequest';

const Form: React.FC<FormProps> = ({ title, formArr, subMitBtn }) => {
    
    let { slug } = useParams();
    const [ data, setData ] = useState(formData);
    
    const [ { status, response }, makeRequest ] = useApiRequest(
        `${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
            verb: 'get',      
        }
    )

    useEffect(() => {
        let detailRicorso = makeRequest();
        
    },[])

    let ricorso = {...response?.data?.ricorso}
    
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();

        //post a ricorso
        fetch(`${baseURL}/api/cienneffe/crea_ricorso/${ricorso?.id ? ricorso?.id : ''}`, {
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
     const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, index?: number) => {
        setData({...data, [e.target.name]: 
        e.target.value});
    };
 
    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1 className='font-bold text-amber-500 text-3xl'>{title}</h1>
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
                         key={index}
                         ricorso={ricorso}
                      />
                      
                    </>
                  );
                })}

            <div className='md:flex'>
                <SelectInput
                   selectProps={selectPropsTributi}
                   handleData={handleData}
                   ricorso={ricorso}
                />

                <SelectInput
                    selectProps={selectPropsTipologiaAtto}
                    handleData={handleData}
                    ricorso={ricorso}
                />
                <SelectInput
                    selectProps={selectPropsEsito}
                    handleData={handleData}
                    ricorso={ricorso}
                />
            </div>
                <button className='bg-amber-500 border-solid text-white font-bold mt-5 py-2'>{subMitBtn}</button>
            </section>
        </FormContainer>
    )
}

export default Form;