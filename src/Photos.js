import React from "react";
import "./Photos.css";

export default function (props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-md-4" key={index}>
                  <a
                    href={photo.src.landscape}
                    target="_blank"
                    rel="norefferer"
                  >
                    <img
                      src={photo.src.tiny}
                      className="img-fluid"
                      alt={photo.photographer}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
