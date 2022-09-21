import { ObjSelectType } from "../../../interfaces/interfaces";
import { SelectComponent, Wrapper } from "./style";

const SelectInput = ({ selectProps, handleData}: { selectProps:ObjSelectType, handleData: React.ChangeEventHandler<HTMLSelectElement>}) => {
    return (
        <Wrapper>
            <label htmlFor={selectProps?.name} className='input-label'>{selectProps?.title}</label> 
            <SelectComponent
                name={selectProps?.name}
                id={selectProps?.name}
                onChange={(e) => handleData(e)}
                required
                >
                    {
                        selectProps?.values.map(({ value },index: number)  => {
                            return (
                                <option value={value} key={index}>{value}</option>
                            );
                        })
                    }
            </SelectComponent>
        </Wrapper>
    )
}

export default SelectInput;
