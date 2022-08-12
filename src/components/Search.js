import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="search-bar">
      <MdSearch className="search-icons" size="1.3em" />
      <input type="text" placeholder="type to search for note"></input>
    </div>
  );
};

export default Search;
