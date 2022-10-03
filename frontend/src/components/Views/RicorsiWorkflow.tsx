import { defaultFormProps } from '../UI/FormComponents/defaultProps';
import { defaultRicorsiData } from "../UI/FormComponents/defaultData";
import { selectPropsTributi, selectPropsTipologiaAtto, selectPropsEsito } from "../UI/FormComponents/selectPropsTributi";
import useInput from '../../Hooks/useInput';
import { Input, SelectInput, TextArea, Form } from '../UI/index';

const Workflow = () => {
   const { data, handleData } = useInput(defaultRicorsiData);

    return (
        <div className="height-custom">
            <Form
                title='Avvia un Ricorso' 
                navPath="/" 
                createPath='crea_ricorso'
                subMitBtn='Invio'
                data={data}
            >
              <>
              
                {defaultFormProps?.formArr.map(({ label, name, type }, index) => {
                return (
                    <Input
                        label={label}                       
                        name={name}
                        typeIn={type}
                        handleData={handleData}
                        index={index}
                        key={index}
                    />
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
              </>
           </Form>
        </div>
    );
}

export default Workflow;