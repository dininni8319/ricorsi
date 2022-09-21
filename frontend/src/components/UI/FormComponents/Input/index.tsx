import { PropsInput } from "../../../interfaces/interfaces";
import { InputSection } from './style';

const Input: React.FC<PropsInput> = ({ typeIn, name, label,index, handleData }:PropsInput) => {
    return (
        <InputSection>
            {/* <div className="input-wrapper"> */}
                <label htmlFor={name} className='font-bold input-label'>{label}</label>
                <input 
                    type={typeIn} 
                    className='input-style' 
                    onChange={(e) => handleData(e, index)}
                    name={name} 
                />
            {/* </div> */}
        </InputSection>
    ) 
}

export default Input;