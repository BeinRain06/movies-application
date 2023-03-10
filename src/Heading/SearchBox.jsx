import "./SearchBox.css";

function SearchBox(props) {
  return (
    <div className="input_wrap">
      <input
        className="search_bar"
        placeholder="Search Movies..."
        value={props.searchValue}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
