import { EnteFormData } from '../../UI/FormComponents/defaultProps';
import { defaultEnteData } from '../../UI/FormComponents/defaultData';
import useInput from '../../../Hooks/useInput';
import { Input, Form } from '../../UI/index';
import { useParams } from 'react-router';
import { memo } from "react";

const EnteForm = () => {
    let { slug } = useParams();

    const { data, handleData } = useInput(defaultEnteData, slug);

    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Crea un nuovo ente"
                createPath="ente_create"
                navPath="detail_ente"
                subMitBtn="Invio"
                data={data}
            >
                <>
                    {EnteFormData?.formArr.map((input, index) => {
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
                </>
            </Form>
            {/* {errors && <span></span>} */}
        </div>
    );
};

export default memo(EnteForm);
