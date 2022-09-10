import React from "react";

function EntranceForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePass(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      email,
      password,
    });
  }

  return (
    <form className="entrance-form" onSubmit={handleSubmit} noValidate>
      <p className="entrance-form__title">{props.title}</p>
      <input
        className="entrance-form__input"
        placeholder="Email"
        name="email"
        type="email"
        onChange={handleChangeEmail}
        value={email}
      />
      <input
        className="entrance-form__input"
        placeholder="Пароль"
        name="password"
        type="password"
        onChange={handleChangePass}
        value={password}
      />
      <button className="entrance-form__submit-button">
        {props.buttonText}
      </button>
    </form>
  );
}

export default EntranceForm;
