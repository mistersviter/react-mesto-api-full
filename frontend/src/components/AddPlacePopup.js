import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function hanldeChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
  }
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          id="card-title-input"
          type="text"
          className="popup__input popup__input_type_card-title"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error card-title-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          id="card-image-input"
          type="url"
          className="popup__input popup__input_type_card-image"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={hanldeChangeLink}
        />
        <span className="popup__input-error card-image-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
