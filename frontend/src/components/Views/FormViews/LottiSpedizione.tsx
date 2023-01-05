import { useState, useEffect, useCallback, useContext } from "react";
import useInput from '../../../Hooks/useInput';
import { defaultLottoData } from '../../UI/FormComponents/defaultData';
import { LottiSpedizioneFormData } from '../../UI/FormComponents/defaultProps';
import {
    selectEntrataTributo,
    selectTipologiaDocumenti,
    selectTipologiaSpedizione
} from '../../UI/FormComponents/selectPropsTributi';
import { Input, SelectInput, Form } from '../../UI/index';
import { SelectStyleComponent, Wrapper } from '../../UI/FormComponents/SelectInput/style';
import { ConfigContext } from "../../../Contexts/Config";
import useHttp from '../../../Hooks/useHttp';
import { EnteType, ServizioType } from "../../interfaces/interfaces";

const LottoSpedizione = () => {
    const { data, handleData } = useInput(defaultLottoData);
    const [currentEntities, setCurrentEntities] = useState<any>([]);
    const { api_urls: { backend } } = useContext(ConfigContext);
    const { ente_id } = data;
    
    const selectedEntity = currentEntities?.filter((entity: EnteType) => entity.id === Number(ente_id))[0];
    
    const handleCurrentEntities = useCallback(({ enti }: { enti: EnteType[] }) => {
        setCurrentEntities(() => [...enti])
    }, [])

    const {
        sendRequest: fetchCurrentEntities
    } = useHttp(handleCurrentEntities);

    useEffect(() => {
        fetchCurrentEntities({
            url: `${backend}/api/cienneffe/ente/`
        });
    }, [fetchCurrentEntities]);

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

                        <Wrapper>
                            <label htmlFor='Ente' className="input-label">
                                Ente
                            </label>
                            <SelectStyleComponent
                                name='ente_id'
                                onChange={(e) => handleData(e)}
                                required
                            >
                                {
                                    currentEntities?.map((entity: EnteType) => {
                                        return (
                                            <option value={entity.id}>{entity.descrizione_comune}</option>
                                        )
                                    }) 
                                }
                            </SelectStyleComponent>
                        </Wrapper>
                        <Wrapper>
                            <label htmlFor='Ente' className="input-label">
                                Servizi
                            </label>
                            <SelectStyleComponent
                                name='servizio_id'
                                onChange={(e) => handleData(e)}
                                required
                            >
                                { 
                                    // { selectedEntity[0]? }
                                      selectedEntity?.servizi?.map((servizio: ServizioType) => {
                                        return (
                                           <option value={servizio.id}>{servizio.tipologia_servizi}</option>           
                                        )
                                    }) 
                                }
                            </SelectStyleComponent>
                        </Wrapper>
                    </div>
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
