import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index > 0) {
          return (
            <div key={index}>
              <strong>Similar:</strong>
              <div className="definition">{definition.definition}</div>
              <div className="example">
                <em>{definition.example}</em>

                <div>
                  <br />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example">
                <em>{definition.example}</em>

                <div>
                  <br />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
