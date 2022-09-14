import { ObjSelectType } from "../../../interfaces/interfaces";
import { SelectComponent, Wrapper } from "./style";

const SelectInput = ({ selectProps }: { selectProps:ObjSelectType }) => {
    return (
        <Wrapper>
            <label htmlFor='tributo' className='input-label'>{selectProps?.name}</label> 
            <SelectComponent
                name='tributo'
                id='tributo'
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
