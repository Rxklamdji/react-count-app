import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Searching Terms</h2>
      <strong>
        <button htmlFor="search">Search: </button>
      </strong>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

export default Search;
