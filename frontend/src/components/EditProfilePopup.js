import React from "react";
import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  React.useEffect(() => {
    setName(currentUser.name ?? "");
    setDescription(currentUser.about ?? "");
  }, [props.isOpen, currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function hanldeChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          id="name-input"
          type="text"
          className="popup__input popup__input_type_name"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          id="description-input"
          type="text"
          className="popup__input popup__input_type_description"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={hanldeChangeDescription}
        />
        <span className="popup__input-error description-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
