import { string } from "yup";
import Input from '../Input/index';
import { FormContainer } from "./style";
import { selectPropsTributi, selectPropsTipologiaAtto, selectPropsEsito } from "../selectPropsTributi";
import { FormProps, PropsInput } from "../../../interfaces/interfaces";
import SelectInput from '../SelectInput/index';

const Form: React.FC<FormProps> = ({ title, formArr, subMitBtn/*  onSubmit, redirect */ }) => {
    return (
        <FormContainer>
            <section className="form-row">
                {formArr.map(({ label, name, typeIn }:PropsInput , index: number) =>{
                    return (
                        <>
                            <Input
                                key={index}
                                label={label}
                                name={name}
                                typeIn={typeIn}
                            />
                        </>
                    )
                })}

                <SelectInput
                selectProps={selectPropsTributi}
                />

                <SelectInput
                selectProps={selectPropsTipologiaAtto}
                />
                <SelectInput
                selectProps={selectPropsEsito}
                />
                
                <button>{subMitBtn}</button>

            </section>
        </FormContainer>
    )
}

export default Form;