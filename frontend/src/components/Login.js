import React from "react";
import EntranceForm from "./EntranceForm";

function Login({ handleLogin }) {
  return (
    <EntranceForm title="Вход" buttonText="Войти" onSubmit={handleLogin} />
  );
}

export default Login;
