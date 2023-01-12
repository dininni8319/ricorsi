import { useContext } from 'react';
import {
    selectStatoFase,
    selectEsitoSentenza,
    selectEsitoDefinitivo,
    selectTipologiaFile,
    tipologiaFile,
} from '../../UI/FormComponents/selectPropsTributi';
import { defaultFasiData } from '../../UI/FormComponents/defaultData';
import { fasiFormData } from '../../UI/FormComponents/defaultProps';
import useInput from '../../../Hooks/useInput';
import { Input, SelectInput, TextArea, Form } from '../../UI/index';
import { useParams } from 'react-router';
import useFetch from '../../../Hooks/useFetch';
import { ConfigContext } from '../../../Contexts/Config';

const UpdateFase = () => {
    let { slug } = useParams();
    let {
        api_urls: { backend }
    } = useContext(ConfigContext);
    
    let { payload }: any = useFetch(`${backend}/api/cienneffe/last_fase/${slug}`);
    // we are deep coping the object
    let val = selectStatoFase.values.filter(
        (val) => val.value > payload?.lastFase?.fase
        );
    let newSelectStateFase = JSON.parse(JSON.stringify(selectStatoFase));
    newSelectStateFase.values = [...val];
        
    let faseCur = Object.keys(val).length > 0 ? newSelectStateFase : selectStatoFase;
    const { formData, handleData } = useInput(defaultFasiData, slug);
     
    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Aggiorna la Fase"
                navPath="fase_detail"
                createPath="update_fase"
                subMitBtn="Aggiorna"
                data={formData}
                method={'POST'}
            >
                <>
                    <SelectInput
                        selectProps={faseCur}
                        handleData={handleData}
                    />
                     <div className="md:flex">
                        <SelectInput
                            selectProps={selectTipologiaFile}
                            handleData={handleData}
                        />
                    </div>
                    
                    {fasiFormData?.formArr.map((input, index) => {
                        return input.id === 0 ? (
                            <TextArea
                                handleData={handleData}
                                key={index}
                                value={payload?.lastFase ? payload?.lastFase[input?.name] : ''}
                                {...input}
                            />
                            ) : 
                            ( <Input
                                handleData={handleData}
                                key={index}
                                value={payload?.lastFase ? payload?.lastFase[input?.name] : ''}
                                {...input}
                            />)
                    })}

                    <div className="md:flex">
                        <SelectInput
                            selectProps={tipologiaFile}
                            handleData={handleData}
                        />
                        <SelectInput
                            selectProps={selectEsitoSentenza}
                            handleData={handleData}
                        />
                        <SelectInput
                            selectProps={selectEsitoDefinitivo}
                            handleData={handleData}
                        />
                    </div>
                </>
            </Form>
        </div>
    );
};

export default UpdateFase;
