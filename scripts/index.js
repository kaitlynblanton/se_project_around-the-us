const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* ELEMENTS FOR EDIT FORM MODAL */

const profileEditButton = document.querySelector(".js-profile-edit-button");
const profileEditModal = document.querySelector(".js-edit-profile-modal");
const profileEditForm = profileEditModal.querySelector(".js-modal-form");
const profileCloseModalButton = document.querySelector(
  ".js-profile-close-button"
);
const profileEditFormSubmit = document.querySelector(
  ".js-profile-submit-button"
);
const profileInputName = document.querySelector(".js-modal-input-name");
const profileInputDescription = document.querySelector(
  ".js-modal-input-description"
);
const profileName = document.querySelector(".js-profile-name");
const profileDescription = document.querySelector(".js-profile-description");

/* OPEN / CLOSE EDIT FORM MODAL */

profileEditButton.addEventListener("click", () => {
  profileInputName.value = profileName.textContent;
  profileInputDescription.value = profileDescription.textContent;

  profileEditModal.classList.add("modal_opened");
});

function closeProfileModal() {
  profileEditModal.classList.remove("modal_opened");
}

profileCloseModalButton.addEventListener("click", closeProfileModal);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileInputName.value;
  profileDescription.textContent = profileInputDescription.value;
  closeProfileModal();
}

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
