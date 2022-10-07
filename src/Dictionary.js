import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import dictionary from "./dictionary.png";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
    return "";
  }
  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <header className="App-header">
            <img src={dictionary} className="App-logo img-fluid" alt="logo" />
          </header>
          <br />

          <h1>What word do you want to look up?</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeyword}
            />
          </form>
          <div className="hint">i.e. kyiv, wine, yoga, coding</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    setLoaded(true);
    search();
  }
}
