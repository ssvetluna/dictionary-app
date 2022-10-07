import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import dictionary from "./dictionary.png";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    setResults(response.data[0]);
    return "";
  }
  function handleResponsePexels(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001e55bf2dc5cd047f6945f8bd4ebf4c6cd";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handleResponsePexels);
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
            <img src={dictionary} className="App-logo" alt="logo" />
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    setLoaded(true);
    search();
  }
}
