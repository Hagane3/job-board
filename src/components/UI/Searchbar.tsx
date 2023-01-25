import classes from "./Searchbar.module.scss";

function SearchBar() {
  return (
    <div className={classes.searchbar}>
      <div className={classes.searchbar_container}>
        <input placeholder="Enter job position.." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
