import { useParams } from 'react-router';
import useInput from '../../../Hooks/useInput';
import { defaultLottoData } from '../../UI/FormComponents/defaultData';
import { RiconciliazioneFormData } from '../../UI/FormComponents/defaultProps';
import {
    selectMeseRendicondazione
} from '../../UI/FormComponents/selectPropsTributi';
import { Input, SelectInput, Form } from '../../UI/index';

const UpdateRiconciliazione = () => {
    const { data, handleData } = useInput(defaultLottoData);
    const { slug } = useParams();

    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Aggiorna la riconciliazione"
                navPath="detail_riconciliazione"
                createPath="update_riconciliazione"
                subMitBtn="Aggiorna"
                data={data}
                method={'POST'}
            >
                <>
                    {RiconciliazioneFormData?.formArr.map((input, index) => {
                        return (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
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
