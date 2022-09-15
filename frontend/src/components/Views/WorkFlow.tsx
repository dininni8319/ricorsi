import Form from '../UI/FormComponents/Form/index';
import { defaultProps } from '../UI/FormComponents/defaultProps';

const Workflow = () => {
    return (
        <div className="height-custom">
            <Form 
                title='Testing the Form'
                formArr={defaultProps.formArr}
                subMitBtn={defaultProps.subMitBtn}  
            />
        </div>
    );
}

export default Workflow;