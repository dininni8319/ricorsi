import { memo } from 'react';
import { faseCurrent } from '../../../Utilities/index';
import { ObjSelectType } from '../../../interfaces/interfaces';
import { SelectStyleComponent, Wrapper } from './style';

const SelectInput = ({
    selectProps,
    ricorso,
    handleData
}: {
    selectProps: any;
    ricorso?: object;
    handleData: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
    let newName = selectProps?.name;
    console.log();

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
                            value={
                                ricorso
                                    ? ricorso[newName as keyof object]
                                    : value
                            }
                            key={index}
                        >
                            {selectProps?.name == 'fase'
                                ? faseCurrent(value)
                                : value}
                        </option>
                    );
                })}
            </SelectStyleComponent>
        </Wrapper>
    );
};

export default memo(SelectInput);
