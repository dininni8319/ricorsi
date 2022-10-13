import { PropsTextArea } from "../../../interfaces/interfaces";
import { InputSection } from "../Input/style";
import { memo } from "react";

const TextArea: React.FC<PropsTextArea> = ({
  label,
  name,
  value,
  handleData,
}: PropsTextArea) => {
  let newName = name;

  return (
    <InputSection>
      {/* <div className="input-wrapper"> */}
      <label htmlFor={name} className="font-bold input-label">
        {label}
      </label>
      <textarea
        className="input-style"
        onChange={(e) => handleData(e)}
        name={name}
        defaultValue={value}
      ></textarea>
      {/* // value={ricorso[newName as keyof object]} */}
      {/* </div> */}
    </InputSection>
  );
};

export default memo(TextArea);
