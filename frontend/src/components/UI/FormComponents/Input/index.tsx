import { PropsInput } from "../../../interfaces/interfaces";
import { InputSection } from './style';
import { memo } from "react";

const Input: React.FC<PropsInput> = ({ typeIn, name, label, id, value, handleData }:PropsInput) => {
    let newName = name;
    
    return (
        <InputSection>
            {/* <div className="input-wrapper"> */}
                <label htmlFor={name} className='font-bold input-label'>{label}</label>
                <input 
                    type={typeIn} 
                    className='input-style' 
                    onChange={(e) => handleData(e, id)}
                    name={name}
                    value={value}
                />
            {/* </div> */}
        </InputSection>
    ) 
}

export default memo(Input);