import { useContext } from 'react';
import { EnteFormData } from '../../UI/FormComponents/defaultProps';
import { defaultEnteData } from '../../UI/FormComponents/defaultData';
import useInput from '../../../Hooks/useInput';
import { Input, Form } from '../../UI/index';
import { useParams } from 'react-router';
import useFetch from '../../../Hooks/useFetch';
import { ConfigContext } from '../../../Contexts/Config';

const UpdateEnte = () => {
    let { slug } = useParams();
    let {
        api_urls: { backend }
    } = useContext(ConfigContext);
    let {
        payload: { data: ente }
    }: any = useFetch(`${backend}/api/cienneffe/detail_ente/${slug}`);
    const { formData, handleData } = useInput(defaultEnteData, slug);
    
    return (
        <div className="height-custom">
            <Form
                id={slug}
                title="Aggiorna l'ente"
                navPath="detail_ente"
                createPath="update_ente"
                subMitBtn="Aggiorna"
                data={formData}
                method={'POST'}
            >
                <>
                    {EnteFormData?.formArr.map((input, index) => {
                        return (
                            <Input
                                handleData={handleData}
                                key={index}
                                {...input}
                                value={ente ? ente[input?.name] : ''}
                            />
                        );
                    })}
                </>
            </Form>
        </div>
    );
};

export default UpdateEnte;
