const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '8b1d9511-936f-474d-a48e-0881c6bc032b',
    'Content-Type': 'application/json'
  }
}

// Selectors
const cardTemplate = '#card-template';
const popupWithImageSelector = '.popup_type_zoom';
const profileEditPopupSelector = '.popup_type_edit-profile';
const addCardPopupSelector = '.popup_type_add-card';
const cardsContainerSelector = '.places__cards';
const popupWithSubmitSelector = '.popup_type_delete-card';
const changeAvatarPopupSelector = '.popup_type_change-avatar';

const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error'
};

// Секция с профилем
const profileSection = document.querySelector('.profile');
const profileEditBtn = profileSection.querySelector('.profile__edit-profile-button');
const profileNameElement = profileSection.querySelector('.profile__title');
const profileInfoElement = profileSection.querySelector('.profile__description');
const addCardBtn = profileSection.querySelector('.profile__add-card-button');
const changeAvatarBtn = profileSection.querySelector('.profile__avatar-change-button');
const avatarElement = profileSection.querySelector('.profile__avatar');

// Попапы
// Попап аватара
const changeAvatarPopup = document.querySelector('.popup_type_change-avatar');
const changeAvatarContainer = changeAvatarPopup.querySelector('.popup__container');
const changeAvatarForm = changeAvatarContainer.querySelector('.popup__form');

// Попапы
// Попап профиля
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileContainer = editProfilePopup.querySelector('.popup__container');
const editProfileForm = editProfileContainer.querySelector('.popup__form');
const userNameInput = editProfileForm.querySelector('.popup__input_type_name');
const userInfoInput = editProfileForm.querySelector('.popup__input_type_description');

// Попапы
// Попап новой карточки
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardContainer = addCardPopup.querySelector('.popup__container');
const addCardForm = addCardContainer.querySelector('.popup__form');

export {
  cardTemplate,
  formSelectors,
  profileEditBtn,
  addCardBtn,
  editProfileForm,
  addCardForm,
  userNameInput,
  userInfoInput,
  popupWithImageSelector,
  profileEditPopupSelector,
  addCardPopupSelector,
  cardsContainerSelector,
  profileNameElement,
  profileInfoElement,
  config,
  popupWithSubmitSelector,
  changeAvatarBtn,
  changeAvatarPopupSelector,
  changeAvatarForm,
  avatarElement
};