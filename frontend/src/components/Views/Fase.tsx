import useInput from '../../Hooks/useInput';
import { defaultFasiData } from'../UI/FormComponents/defaultData';
import 
{ 
    selectStatoFase,
    selectEsitoSentenza, 
    selectEsitoDefinitivo,
    selectTipologiaFile,
} from "../UI/FormComponents/selectPropsTributi";

import { fasiFormData } from "../UI/FormComponents/defaultProps";
import { Input, SelectInput, Form } from "../UI/index";
import { selectPropsEsitoCartoline } from '../UI/FormComponents/selectPropsTributi';

const Fase = () => {
    const { data, handleData } = useInput(defaultFasiData)
    
    return (
        <div className="height-custom">
            <Form
                title='Avvia una Fase' 
                navPath="/" 
                createPath='create_fase'
                subMitBtn='Invio'
                data={data}
            >
              <>
              
                {fasiFormData?.formArr.map(({ label, name, type }, index) => {
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
                        selectProps={selectPropsEsitoCartoline}
                        handleData={handleData}
                    />
                </div> 
              </>
           </Form>
        </div>
      
    )
}

export default Fase;