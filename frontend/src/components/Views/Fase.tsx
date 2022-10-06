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
import { useParams } from 'react-router';

const Fase = () => {
    const { data, handleData } = useInput(defaultFasiData);
    const { slug } = useParams();
    
    return (
        <div className="height-custom">
            <Form
                id={slug}
                title='Avvia una Fase' 
                createPath='create_fase'
                navPath="fase_detail" 
                detailPath="last_fase"
                subMitBtn='Invio'
                data={data}
            >
              <>
                <SelectInput
                    selectProps={selectStatoFase}
                    handleData={handleData}
                />

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
                        selectProps={selectEsitoSentenza}
                        handleData={handleData}
                    />
                    <SelectInput
                        selectProps={selectEsitoDefinitivo}
                        handleData={handleData}
                    />
                     <SelectInput
                        selectProps={selectTipologiaFile}
                        handleData={handleData}
                    />
                </div> 
              </>
           </Form>
        </div>
      
    )
}

export default Fase;