import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import InfoToolTip from "./InfoToolTip";
import authApi from "../utils/authApi";

function App() {  
  const [currentUser, setCurrentUser] = useState({});

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isRegistrationSucces, setIsRegistrationSucces] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");

  const goTo = useNavigate();

  useEffect(() => {
    if(loggedIn) {
      api
      .getInitialData()
      .then(([cards, userInfo]) => {
        setCards(cards.reverse());
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
    }    
  }, [loggedIn]);

  useEffect(() => {    
    const token = localStorage.getItem("jwt");
    if (token) {
      authApi
        .checkToken(token)
        .then((res) => {
          setEmail(res.email);
          setLoggedIn(true);
          goTo("/");
        })
        .catch((err) => {
          goTo("/sign-in");
        });
    } else {
      goTo("/sign-in");
    }
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsInfoToolTipOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleUpdateUser(newData) {
    api
      .updateUserInfo(newData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(newData) {
    api
      .updateUserAvatar(newData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.includes(currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteUserCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(data) {
    api
      .addUserCard(data)
      .then((newCard) => {
        console.log(newCard);
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  const handleRegister = (data) => {
    authApi
      .registerNewUser(data)
      .then(() => {
        goTo("/sign-in");
        setIsRegistrationSucces(true);
        setIsInfoToolTipOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrationSucces(false);
        setIsInfoToolTipOpen(true);
      });
  };

  const handleLogin = (data) => {
    authApi
      .login(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        setEmail(data.email);
        goTo("/");        
      })
      .catch((err) => {
        console.log(err);
        setIsInfoToolTipOpen(true);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    goTo("/sign-in");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header email={email} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="/sign-up"
          element={<Register handleRegister={handleRegister} />}
        ></Route>
        <Route
          path="/sign-in"
          element={<Login handleLogin={handleLogin} />}
        ></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute
              path="/"
              element={Main}
              loggedIn={loggedIn}
              cards={cards}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          }
        />
      </Routes>

      {loggedIn && <Footer />}

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <InfoToolTip
        isOpen={isInfoToolTipOpen}
        isRegistrationSucces={isRegistrationSucces}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
