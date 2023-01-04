import useInput from '../../../Hooks/useInput';
import { defaultLottoData } from '../../UI/FormComponents/defaultData';
import { LottiSpedizioneFormData } from '../../UI/FormComponents/defaultProps';
import {
    selectEntrataTributo,
    selectTipologiaDocumenti,
    selectTipologiaSpedizione
} from '../../UI/FormComponents/selectPropsTributi';
import { Input, SelectInput, Form } from '../../UI/index';

const LottoSpedizione = () => {
    const { data, handleData } = useInput(defaultLottoData);
    
    return (
        <div className="height-custom">
            <Form
                title="Avvia un Lotto di Spedizione"
                navPath="detail_riscossione"
                createPath="create_riscossione"
                subMitBtn="Invio"
                data={data}
                // method='POST'
            >
                <>
                    {LottiSpedizioneFormData?.formArr.map((input, index) => {
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

export default LottoSpedizione;
