import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  
  const handleChange = (e) => {
    setQuery(e.target.value);

    if(e.target.value.length > 3) {
      e.target.value && onSearch(e.target.value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      query && onSearch(query);
    }
  };

  return (
    <div class="mb-3">
      <label for="keyword" class="form-label">
        Search for a keyword
      </label>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="form-control"
        id="keyword"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default SearchBox;
