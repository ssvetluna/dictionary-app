import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  function handleResponse(response) {
    console.log(response.data[0]);
    return "";
  }

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
