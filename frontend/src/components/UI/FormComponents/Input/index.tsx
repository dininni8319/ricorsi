import { PropsInput } from "../../../interfaces/interfaces";
import { InputSection } from "./style";
import { memo, useState } from "react";

const Input: React.FC<PropsInput> = (props) => {
  const [focused, setFocused] = useState(false);
  let { type, name, label, id, value, errorMessage, ...inputAttr } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };
  return (
    <InputSection>
      {/* <div className="input-wrapper"> */}
      <label htmlFor={name} className="font-bold input-label">
        {label}
      </label>
      <input
        type={type}
        className="input-style"
        onChange={(e) => props.handleData(e)}
        name={name}
        value={value}
        onBlur={handleFocus}
        focused={focused.toString()}
        {...inputAttr}
      />
      {/* </div> */}
      <span className="error-message">{errorMessage}</span>
    </InputSection>
  );
};

export default memo(Input);
