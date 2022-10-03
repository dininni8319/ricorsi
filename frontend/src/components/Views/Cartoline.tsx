import useInput from '../../Hooks/useInput';
import { defaultCartolineData } from'../UI/FormComponents/defaultData';
import { cartolineFormData } from "../UI/FormComponents/defaultProps";
import { Input, SelectInput, Form } from "../UI/index";
import { selectPropsEsitoCartoline } from '../UI/FormComponents/selectPropsTributi';

const Cartoline = () => {
    const { data, handleData } = useInput(defaultCartolineData)
    
    return (
        <div className="height-custom">
            <Form
                title='Avvia una Cartolina' 
                navPath="/" 
                createPath='crea_ricorso'
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

  