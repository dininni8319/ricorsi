import { useParams } from 'react-router';
import { useContext } from 'react';
import useInput from '../../../Hooks/useInput';
import { defaultLottoData } from '../../UI/FormComponents/defaultData';
import { RiconciliazioneFormData } from '../../UI/FormComponents/defaultProps';
import {
    selectMeseRendicondazione
} from '../../UI/FormComponents/selectPropsTributi';
import { Input, SelectInput, Form } from '../../UI/index';
import useFetch from '../../../Hooks/useFetch';
import { ConfigContext } from '../../../Contexts/Config';

const UpdateRiconciliazione = () => {
    const { formData, handleData } = useInput(defaultLottoData);
    const { slug } = useParams();
    let {
        api_urls: { backend }
    } = useContext(ConfigContext);

    let {
        payload: { data: riconciliazione }
    }: any = useFetch(`/api/detail_riconciliazione/${slug}`);
    
    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Aggiorna la riconciliazione"
                navPath="detail_riconciliazione"
                createPath="update_riconciliazione"
                subMitBtn="Aggiorna"
                data={formData}
                method={'POST'}
            >
                <>
                    {RiconciliazioneFormData?.formArr.map((input, index) => {
                        return (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
                                value={riconciliazione ? riconciliazione[input?.name] : ''}
                            />
                        );
                    })}

                    <div className="md:flex">
                        <SelectInput
                            selectProps={selectMeseRendicondazione}
                            handleData={handleData}
                        />
                    </div>
                </>
            </Form>
        </div>
    );
};

export default UpdateRiconciliazione;
