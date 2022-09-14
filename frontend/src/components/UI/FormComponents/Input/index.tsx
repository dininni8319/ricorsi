import { PropsInput } from "../../../interfaces/interfaces";

const Input: React.FC<PropsInput> = ({ typeIn, name, label }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                type={typeIn}   
            />
           
        </div>
    ) 
}

export default Input;