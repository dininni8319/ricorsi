import { useContext } from 'react';
import { formRicorsiLabels } from '../../UI/FormComponents/defaultProps';
import { defaultRicorsiData } from '../../UI/FormComponents/defaultData';
import {
    selectPropsTributi,
    selectPropsTipologiaAtto,
    selectPropsEsito
} from '../../UI/FormComponents/selectPropsTributi';
import useInput from '../../../Hooks/useInput';
import { Input, SelectInput, TextArea, Form } from '../../UI/index';
import { isTextarea, validate } from '../../Utilities/index';
import { useParams } from 'react-router';
import useFetch from '../../../Hooks/useFetch';
import { ConfigContext } from '../../../Contexts/Config';
import { ObjFormType } from '../../interfaces/interfaces';

const Workflow = () => {
    let { slug } = useParams();
    let {
        api_urls: { backend }
    } = useContext(ConfigContext);

    let { payload }: any = useFetch(
        `/api/detail_ricorso/${slug}`
    );
    const { data, handleData } = useInput(defaultRicorsiData, slug);

    return (
        <div className="height-custom">
            <Form
                title="Avvia un Ricorso"
                createPath="crea_ricorso"
                navPath="ricorsi_detail"
                subMitBtn="Invio"
                data={data}
            >
                <>
                    {formRicorsiLabels?.formArr.map((input, index) => {
                        return isTextarea(input.id) ? (
                            <TextArea
                                handleData={handleData}
                                key={index}
                                // value={slug && payload[input.name]}
                                {...input}
                            />
                        ) : (
                            <Input
                                handleData={(e) => handleData(e)}
                                key={index}
                                {...input}
                                // value={slug && data && data[input.name]}
                            />
                        );
                    })}

                    <div className="md:flex">
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
};

export default Workflow;
