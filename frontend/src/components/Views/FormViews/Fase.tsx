import useInput from '../../../Hooks/useInput';
import { defaultFasiData } from '../../UI/FormComponents/defaultData';
import {
    selectStatoFase,
    selectEsitoSentenza,
    selectEsitoDefinitivo,
    selectTipologiaFile
} from '../../UI/FormComponents/selectPropsTributi';
import { fasiFormData } from '../../UI/FormComponents/defaultProps';
import { Input, SelectInput, Form, Modal, TextArea } from '../../UI/index';
import { useParams } from 'react-router';
import { baseURL } from '../../Utilities/index';
import useFetch from '../../../Hooks/useFetch';

const Fase = () => {
    const { data, handleData } = useInput(defaultFasiData);
    const { slug } = useParams();

    let { payload }: any = useFetch(
        `${baseURL}/api/cienneffe/last_fase/${slug}`,
        {
            verb: 'get'
        }
    );

    let val = selectStatoFase.values.filter(
        (val) => val.value >= payload?.lastFase?.fase
    );
    // we are deep coping the object
    let newSelectStateFase = JSON.parse(JSON.stringify(selectStatoFase));
    newSelectStateFase.values = [...val];

    let faseCur =
        Object.keys(val).length > 0 ? newSelectStateFase : selectStatoFase;

    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Avvia una Fase"
                createPath="create_fase"
                navPath="fase_detail"
                subMitBtn="Invio"
                data={data}
            >
                <>
                    <SelectInput
                        selectProps={faseCur}
                        handleData={handleData}
                    />

                    {fasiFormData?.formArr.map((input, index) => {
                        return input.id === 0 ? (
                            <TextArea
                                handleData={handleData}
                                key={index}
                                // value={slug && payload[input.name]}
                                {...input}
                            />
                        ) : (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
                                // value={payload[input.name as keyof object]}
                            />
                        );
                    })}

                    <div className="md:flex">
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
    );
};

export default Fase;
