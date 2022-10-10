import { formRicorsiLabels } from '../UI/FormComponents/defaultProps';
import { defaultRicorsiData } from "../UI/FormComponents/defaultData";
import { selectPropsTributi, selectPropsTipologiaAtto, selectPropsEsito } from "../UI/FormComponents/selectPropsTributi";
import useInput from '../../Hooks/useInput';
import { Input, SelectInput, TextArea, Form } from '../UI/index';
import { isTextarea, validate } from '../Utilities/index';
import { baseURL } from "../Utilities/index";
import useFetch from "../../Hooks/useFetch";
import { useParams } from 'react-router';
import { useState } from "react";

const Workflow = () => {

    let { slug } = useParams();
    // const [ errors, setErrors ] = useState({
    //     status: false,
    //     errorTitle: ''
    // });
    const { data, handleData } = useInput(defaultRicorsiData);
    let { payload } = useFetch(`${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
        verb: 'get',      
    })

    // if(validate(data.mail)) {
    
    //     let invalid = validate(data.mail)
    //     console.log(invalid);
    //     setErrors({
    //         status: true,
    //         errorTitle: 'email not valid'
    //     })
    // }
   
    
    return (
        <div className="height-custom">
            <Form
                title='Avvia un Ricorso' 
                createPath='crea_ricorso'
                navPath="ricorsi_detail" 
                subMitBtn='Invio'
                data={data}
                // ricorso={payload.ricorso}
            >
              <>
              
                {formRicorsiLabels?.formArr.map(({ label, name, type, id}, index) => {
                  return (
                    isTextarea(id) ? (<TextArea 
                                        label={label}                       
                                        name={name}
                                        handleData={handleData}
                                        index={index}
                                        key={index}
                                    />): 
                                  (  <Input
                                        label={label}                       
                                        name={name}
                                        typeIn={type}
                                        handleData={handleData}
                                        index={index}
                                        key={index}
                                />)
                  )
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
              </>
           </Form>
          {/* {errors && <span></span>} */}
        </div>
    );
}

export default Workflow;