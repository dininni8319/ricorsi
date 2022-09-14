import { PropsInput } from "../../../interfaces/interfaces";
import { InputSection } from './style';

const Input: React.FC<PropsInput> = ({ typeIn, name, label }) => {
    return (
        <InputSection>
            <label htmlFor={name} className='font-bold input-label'>{label}</label>
            <input 
                type={typeIn} 
                className='input-style'  
            />
           
        </InputSection>
    ) 
}

export default Input;