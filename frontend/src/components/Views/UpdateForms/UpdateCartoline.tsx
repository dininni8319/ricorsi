import { useContext } from 'react';
import { selectPropsEsitoCartoline } from '../../UI/FormComponents/selectPropsTributi';
import { defaultCartolineData } from '../../UI/FormComponents/defaultData';
import { cartolineFormData } from '../../UI/FormComponents/defaultProps';
import useInput from '../../../Hooks/useInput';
import { Input, SelectInput, TextArea, Form } from '../../UI/index';
import { useParams } from 'react-router';
import useFetch from '../../../Hooks/useFetch';
import { ConfigContext } from '../../../Contexts/Config';

const UpdateCartoline = () => {
    let { slug } = useParams();
    let {
        api_urls: { backend }
    } = useContext(ConfigContext);
    let {
        payload: { data: cartolina }
    }: any = useFetch(`${backend}/api/cienneffe/detail_cartoline/${slug}`);
    const { data, handleData } = useInput(defaultCartolineData, slug);
    
    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Aggiorna la Cartolina"
                navPath="detail_cartoline"
                createPath="update_cartolina"
                subMitBtn="Aggiorna"
                data={data}
                method={'POST'}
            >
                <>
                    {cartolineFormData?.formArr.map((input, index) => {
                        return (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
                                value={cartolina ? cartolina[input?.name] : ''}
                            />
                        );
                    })}

                    <div className="md:flex">
                        <SelectInput
                            selectProps={selectPropsEsitoCartoline}
                            handleData={handleData}
                        />
                    </div>
                </>
            </Form>
        </div>
    );
};

export default UpdateCartoline;
