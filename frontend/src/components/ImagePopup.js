import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_zoom ${props.card.link && "popup_opened"}`}>
      <div className="popup__zoom-container">
        <figure className="popup__zoom-figure">
          <img
            src={props.card.link ? props.card.link : "#"}
            className="popup__zoom-image"
            alt={props.card.name}
          />
          <figcaption className="popup__zoom-caption">
            {props.card.name}
          </figcaption>
        </figure>
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
