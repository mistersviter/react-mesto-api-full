import React from "react";
import successImage from "../images/registration_success.svg";
import errorImage from "../images/registration_error.svg";

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_type_registration ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <img
          src={
            !props.isOpen
              ? "#"
              : props.isRegistrationSucces
              ? successImage
              : errorImage
          }
          className="popup__registration-image"
          alt={
            props.isRegistrationSucces
              ? "Успешная регистрация"
              : "Ошибка регистрации"
          }
        />
        <p className="popup__registration-text">
          {props.isRegistrationSucces
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default InfoToolTip;
