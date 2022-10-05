import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function Search(event) {
    event.preventDefault();
    alert(`Searching ${keyword}`);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          type="search"
          placeholder="Enter word..."
          onChange={handleKeyword}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary shadow"
        />
      </form>
    </div>
  );
}
