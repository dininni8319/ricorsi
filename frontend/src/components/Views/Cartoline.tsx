import Form from '../UI/FormComponents/Form/index';
import useInput from '../../Hooks/useInput';

import { defaultCartolineData } from'../UI/FormComponents/defaultData';
import { cartolineFormData } from "../UI/FormComponents/defaultProps";
import Input from "../UI/FormComponents/Input";
import SelectInput from "../UI/FormComponents/SelectInput";
import { selectPropsEsitoCartoline } from '../UI/FormComponents/selectPropsTributi';

const Cartoline = () => {

    const { data, handleData } = useInput(defaultCartolineData)
    
    return (
        <div className="height-custom">
            <Form
                title='Avvia una cartolina' 
                navPath="/" 
                createPath='create_cartolina'
                subMitBtn='Invio'
                data={data}
            >
              <>
              
                {cartolineFormData?.formArr.map(({ label, name, type }, index) => {
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

export default Cartoline;

  