import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  let avatarRef = React.useRef("");

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          id="avatar-image-input"
          type="url"
          className="popup__input popup__input_type_avatar-image"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          ref={avatarRef}
        />
        <span className="popup__input-error avatar-image-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
