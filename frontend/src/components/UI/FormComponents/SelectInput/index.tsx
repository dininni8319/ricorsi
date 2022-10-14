import { memo } from "react";
import { ObjSelectType } from "../../../interfaces/interfaces";
import { SelectStyleComponent, Wrapper } from "./style";

const SelectInput = ({
  selectProps,
  ricorso,
  handleData,
}: {
  selectProps: any;
  ricorso?: object;
  handleData: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  let newName = selectProps?.name;
  return (
    <Wrapper>
      <label htmlFor={selectProps?.name} className="input-label">
        {selectProps?.title}
      </label>
      <SelectStyleComponent
        name={selectProps?.name}
        id={selectProps?.name}
        onChange={(e) => handleData(e)}
        required
      >
        {selectProps?.values.map(({ value }: any, index: number) => {
          return (
            <option
              value={ricorso ? ricorso[newName as keyof object] : value}
              key={index}
            >
              {value}
            </option>
          );
        })}
      </SelectStyleComponent>
    </Wrapper>
  );
};

export default memo(SelectInput);
