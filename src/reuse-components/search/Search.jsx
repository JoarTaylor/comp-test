import React, { useState } from "react";


export default function Search({ searchArray, searchCallback }) {
  const [searchTerm, SetSearchTerm] = useState("");


  const handleChangeText = (e) => {
    SetSearchTerm(e.currentTarget.value);
  };

  const filterByValue = (array, string) => {
    return array.filter((o) =>
      Object.keys(o).some((key) =>
        JSON.stringify(o[key]).toLowerCase().includes(string)
      )
    );
  };

  const handleSearch = () => {
    const searchResult = filterByValue(searchArray, searchTerm.toLowerCase());
    searchCallback(searchResult, searchTerm);
  };

  return (
    <>
      <input
        onChange={(e) => handleChangeText(e)}
        id="site-search"
        type="search"
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
