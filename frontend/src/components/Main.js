import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile page__profile">
        <div className="profile__avatar-wrapper">
          <img
            src={currentUser.avatar}
            alt="аватар"
            className="profile__avatar"
          />
          <button
            type="button"
            aria-label="Изменить аватар"
            className="profile__avatar-change-button"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            type="button"
            aria-label="Редактировать профиль"
            className="button profile__edit-profile-button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить карточку"
          className="button profile__add-card-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places page__places">
        <ul className="places__cards">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
