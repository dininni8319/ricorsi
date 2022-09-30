import FormCartoline from "../UI/FormComponents/FormCartoline/index";
import { cartolineFormData } from'../UI/FormComponents/defaultProps';

const Cartoline = () => {
    return (
        <div className="height-custom">
            <FormCartoline 
                title='Avvio una Cartolina'
                formArr={cartolineFormData.formArr}
                subMitBtn={cartolineFormData.subMitBtn}
            />
        </div>
    )
}

export default Cartoline;
