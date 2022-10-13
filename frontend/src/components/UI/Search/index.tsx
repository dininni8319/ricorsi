import { Link } from "react-router-dom";
import { SearchStyleComponent } from "./style";

const Search = ({
  title,
  children,
  handleChange,
  setSearchFC,
  setSearchedTerm,
}: {
  title: string;
  children?: JSX.Element;
  setSearchFC: any;
  handleChange: any;
  setSearchedTerm: any;
}) => {

  const handleResetSearch = (e: any) => {
    let val = e.target.value = '';
    setSearchedTerm(() => val);
    setSearchFC([]);
  }
  return (
    <SearchStyleComponent>
      <>
        <input
          type="text"
          placeholder={`Cerca un ${title}`}
          onChange={handleChange}
          name="query"
          onClick={handleResetSearch}
        />
      </>

      {children}
    </SearchStyleComponent>
  );
};

export default Search;
