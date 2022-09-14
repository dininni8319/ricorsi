import { string } from "yup";
import Input from '../Input/index';
import classes from './style.module.css';
import { selectPropsTributi, selectPropsTipologiaAtto, selectPropsEsito } from "../selectPropsTributi";
import { FormProps, PropsInput } from "../../../interfaces/interfaces";
import SelectInput from '../SelectInput/index';

const Form: React.FC<FormProps> = ({ title, formArr, subMitBtn/*  onSubmit, redirect */ }) => {
    return (
        <form className={`${classes['form-container']}`}>
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
        </form>
    )
}

export default Form;