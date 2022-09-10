import React from "react";
import logo from "../images/logo.svg";
import { Routes, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header page__header">
      <img src={logo} alt="лого" className="logo" />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="header__controls">
              <p className="header__user-info">{props.email}</p>
              <button
                className="header__button header__button_logged-out"
                onClick={props.handleLogOut}
              >
                Выйти
              </button>
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__button">
              Войти
            </Link>
          }
        />

        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__button">
              Регистрация
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
