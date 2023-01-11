import { useContext } from "react";
import { useParams } from 'react-router';
import useInput from '../../../Hooks/useInput';
import { defaultLottoData } from '../../UI/FormComponents/defaultData';
import { LottiSpedizioneFormData } from '../../UI/FormComponents/defaultProps';
import {
    selectEntrataTributo,
    selectTipologiaDocumenti,
    selectTipologiaSpedizione
} from '../../UI/FormComponents/selectPropsTributi';
import { Input, SelectInput, Form } from '../../UI/index';
import { ConfigContext } from '../../../Contexts/Config';
import useFetch from '../../../Hooks/useFetch';

const UpdateLottiSpedizione = () => {
    const { data, handleData } = useInput(defaultLottoData);
    const { slug } = useParams();
    let {
        api_urls: { backend }
    } = useContext(ConfigContext);
    
    let {
        payload: { data: riscossione }
    }: any = useFetch(`${backend}/api/cienneffe/detail_riscossione/${slug}`);

    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Aggiorna un Lotto di Spedizione"
                navPath="detail_riscossione"
                createPath="update_riscossione"
                subMitBtn="Aggiorna"
                data={data}
                method={'PATCH'}
            >
                <>
                    {LottiSpedizioneFormData?.formArr.map((input, index) => {
                        return (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
                                value={riscossione ? riscossione[input?.name] : ''}
                            />
                        );
                    })}

                    <div className="md:flex">
                        <SelectInput
                            selectProps={selectEntrataTributo}
                            handleData={handleData}
                        />
                        <SelectInput
                            selectProps={selectTipologiaDocumenti}
                            handleData={handleData}
                        />
                        <SelectInput
                            selectProps={selectTipologiaSpedizione}
                            handleData={handleData}
                        />
                    </div>
                </>
            </Form>
        </div>
    );
};

export default UpdateLottiSpedizione;
