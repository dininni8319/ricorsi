import { PropsInput } from "../../../interfaces/interfaces";
import { InputSection } from '../Input/style';
import { memo } from "react";

const TextArea: React.FC<PropsInput> = ({ typeIn, name, label,index, ricorso, handleData }:PropsInput) => {
    let newName = name;
   
    return (
        <InputSection>
            {/* <div className="input-wrapper"> */}
                <label htmlFor={name} className='font-bold input-label'>{label}</label>
                <textarea 
                    // type={typeIn} 
                    className='input-style' 
                    onChange={(e) => handleData(e, index)}
                    name={name}>
                    </textarea>
                    {/* // value={ricorso[newName as keyof object]} */}
            {/* </div> */}
        </InputSection>
    ) 
}

export default memo(TextArea);