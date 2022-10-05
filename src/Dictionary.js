import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  function handleResponse(response) {
    setResults(response.data[0]);
    return "";
  }

  function Search(event) {
    event.preventDefault();
    axios.get(url).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
