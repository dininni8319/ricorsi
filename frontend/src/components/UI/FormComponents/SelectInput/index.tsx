import { ObjSelectType } from "../../../interfaces/interfaces";

const SelectInput = ({ selectProps }: { selectProps:ObjSelectType }) => {
    return (
        <div>
             {selectProps?.name}
                <select
                    name='tributo'
                    className="form-control"
                    required>
                        {
                            selectProps?.values.map(({ value },index: number)  => {
                                return (
                                    <option value={value} key={index}>{value}</option>
                                );
                            })
                        }
                </select>
        </div>
    )
}

export default SelectInput;
