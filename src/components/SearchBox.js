import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <div className="input-group">
        <input
          className="form-control"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Search Movie"
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
