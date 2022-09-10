import React from "react";
import { Link } from "react-router-dom";
import EntranceForm from "./EntranceForm";

function Register({ handleRegister }) {
  return (
    <>
      <EntranceForm
        title="Регистрация"
        buttonText="Зарегистрироваться"
        onSubmit={handleRegister}
      />
      <p className="register__clue">
        Уже зарегистрированы?{" "}
        <Link className="register__clue" to="/sign-in">
          Войти
        </Link>
      </p>
    </>
  );
}

export default Register;
