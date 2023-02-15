import { useContext } from 'react';
import { ServiziFormData } from '../../UI/FormComponents/defaultProps';
import { defaultServizioData } from '../../UI/FormComponents/defaultData';
import
    { 
      selectTipologiaAttivita, 
      selectTipologiaServizi     
    } 
from '../../UI/FormComponents/selectPropsTributi';
import useInput from '../../../Hooks/useInput';
import { Input, Form, SelectInput } from '../../UI/index';
import { useParams } from 'react-router';
import useFetch from '../../../Hooks/useFetch';
import { ConfigContext } from '../../../Contexts/Config';

const UpdateServizio = () => {
    let { slug } = useParams();
    let {
        api_urls: { backend }
    } = useContext(ConfigContext);
    let {
        payload: { data: servizio }
    }: any = useFetch(`${backend}/api/cienneffe/detail_servizio/${slug}`);
    const { formData, handleData } = useInput(defaultServizioData, slug);
    
    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Aggiorna il servizio"
                navPath="detail_servizio"
                createPath="update_servizio"
                subMitBtn="Aggiorna"
                data={formData}
                method={'POST'}
            >
                <>
                    {ServiziFormData?.formArr.map((input, index) => {
                        return (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
                                value={servizio ? servizio[input?.name] : ''}
                            />
                        );
                    })}

                    <div className="md:flex">
                        <SelectInput
                            selectProps={selectTipologiaAttivita}
                            handleData={handleData}
                        />
                        <SelectInput
                            selectProps={selectTipologiaServizi}
                            handleData={handleData}
                        />
                    </div>
                </>
            </Form>
        </div>
    );
};

export default UpdateServizio;
