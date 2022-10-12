import { Link } from 'react-router-dom';
import { SearchStyleComponent } from './style';

const Search = ({
    title,
    children,
    handleChange
}: {
    title: string;
    children?: JSX.Element;
    handleChange: any;
}) => {
    return (
        <SearchStyleComponent>
            <>
                <input
                    type="text"
                    placeholder={`Cerca un ${title}`}
                    onChange={handleChange}
                    name="query"
                />
            </>

            {children}
        </SearchStyleComponent>
    );
};

export default Search;
