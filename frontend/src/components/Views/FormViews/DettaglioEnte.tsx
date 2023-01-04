import { ServiziFormData } from '../../UI/FormComponents/defaultProps';
import { defaultServizioData } from '../../UI/FormComponents/defaultData';
import { selectTipologiaAttivita, selectTipologiaServizi } from '../../UI/FormComponents/selectPropsTributi';
import useInput from '../../../Hooks/useInput';
import { Input, Form, SelectInput } from '../../UI/index';
import { useParams } from 'react-router';
import { memo } from "react";

const DettaglioEnte = () => {
    let { slug } = useParams();

    const { data, handleData } = useInput(defaultServizioData, slug);

    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Avvia un nuovo servizio"
                createPath={`servizio_create/${slug}`}
                navPath="detail_servizio"
                subMitBtn="Invio"
                data={data}
            >
                <>
                    {ServiziFormData?.formArr.map((input, index) => {
                        return (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
                                value={
                                    slug &&
                                    data &&
                                    data[input.name as keyof object]
                                }
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
            {/* {errors && <span></span>} */}
        </div>
    );
};

export default memo(DettaglioEnte);
