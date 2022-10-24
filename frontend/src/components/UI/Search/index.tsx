import { SearchStyleComponent } from "./style";

const Search = ({
  title,
  children,
  handleChange,
  handleResetSearch,
}: {
  title: string;
  children?: JSX.Element;
  handleChange: any;
  handleResetSearch: any;
}) => {
  
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
