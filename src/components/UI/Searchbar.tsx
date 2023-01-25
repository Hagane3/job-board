import classes from "./Searchbar.module.scss";
import { useContext, useRef } from "react";
import context from "../../context/jobsContext";

function SearchBar() {
  const { setSearchbarValueHandler } = useContext(context);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={classes.searchbar}>
      <div className={classes.searchbar_container}>
        <input placeholder="Enter job position.." ref={inputRef} />
        <button
          onClick={() => setSearchbarValueHandler(inputRef.current?.value)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
