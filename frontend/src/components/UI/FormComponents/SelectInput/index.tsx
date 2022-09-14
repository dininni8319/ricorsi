import { ObjSelectType } from "../../../interfaces/interfaces";
import { SelectComponent } from "./style";

const SelectInput = ({ selectProps }: { selectProps:ObjSelectType }) => {
    return (
        <div>
                <h3>{selectProps?.name}</h3> 
                <SelectComponent
                    name='tributo'
                    required>
                        {
                            selectProps?.values.map(({ value },index: number)  => {
                                return (
                                    <option value={value} key={index}>{value}</option>
                                );
                            })
                        }
                </SelectComponent>
        </div>
    )
}

export default SelectInput;
