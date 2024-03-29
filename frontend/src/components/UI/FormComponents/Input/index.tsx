import { PropsInput } from '../../../interfaces/interfaces';
import { InputSection } from './style';
import { memo, useState } from 'react';

const Input: React.FC<PropsInput> = (props) => {
    const [focused, setFocused] = useState(false);

    let {
        type,
        name,
        label,
        id,
        value,
        errorMessage,
        handleData,
        ...inputAttr
    } = props;

    const handleFocus = (e: any) => {
        setFocused(true);
    };
    return (
        <InputSection checkBox={type === 'checkbox' ? true : false}>
            <label htmlFor={name} className="font-bold input-label">
                {label}
            </label>
            <input
                key={id}
                type={type}
                className="input-style"
                onChange={(e) => handleData(e)}
                name={name}
                defaultValue={value}
                onBlur={handleFocus}
                focused={focused.toString()}
                {...inputAttr}
            />
            <span className="error-message">{errorMessage}</span>
        </InputSection>
    );
};

export default memo(Input);
