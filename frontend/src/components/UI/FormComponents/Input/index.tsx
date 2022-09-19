import { PropsInput } from "../../../interfaces/interfaces";
import { InputSection } from './style';

const Input: React.FC<PropsInput> = ({ typeIn, name, label, handleData }):any => {
    return (
        <InputSection>
            {/* <div className="input-wrapper"> */}
                <label htmlFor={name} className='font-bold input-label'>{label}</label>
                <input 
                    type={typeIn} 
                    className='input-style' 
                    onChange={handleData} 
                />
            {/* </div> */}
        </InputSection>
    ) 
}

export default Input;