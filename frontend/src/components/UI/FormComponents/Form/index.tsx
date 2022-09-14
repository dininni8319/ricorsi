import { string } from "yup";
import Input from '../Input/index';
import { selectPropsTributi } from "../selectPropsTributi";
import { FormProps, PropsInput } from "../../../interfaces/interfaces";

const Form: React.FC<FormProps> = ({ title, formArr, subMitBtn/*  onSubmit, redirect */ }) => {
    return (
        <form className="">
             {formArr.map(({ label, name, typeIn }:PropsInput , index: number) =>{
                return (
                    <Input
                       key={index}
                       label={label}
                       name={name}
                       typeIn={typeIn}
                    />
                )
             })}
              {selectPropsTributi?.title}
                <select
                    name='tributo'
                    id="Esito"
                    className="form-control"
                    required>
                        {
                            selectPropsTributi?.select.map(({ value }: {value: string},index: number)  => {
                                return (
                                    <option value={value} key={index}>{value}</option>
                                );
                            })
                        }
                </select>
            <button>{subMitBtn}</button>
        </form>
    )
}

export default Form;