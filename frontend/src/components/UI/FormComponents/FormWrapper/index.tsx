import { FormContainer } from '../Form/style';
import { FormWrapperType } from '../../../interfaces/interfaces';
import { memo } from 'react';

//not in use at the moment, it's working!
const FormWrapper = ({ title, subMitBtn, handleSubmit }: FormWrapperType) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1 className="font-bold text-amber-500 text-3xl">{title}</h1>
            <section className="form-row">
                <button className="btn-send border-solid text-white mt-5 py-2">
                    {subMitBtn}
                </button>
            </section>
        </FormContainer>
    );
};

export default memo(FormWrapper);
