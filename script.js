let loginSignup = document.querySelector(".loginSignup");
let loginCard = document.querySelector(".loginCard");
let signUpCard = document.querySelector(".signUpCard");
let chooseContainer = document.querySelector(".chooseContainer");
let loginBtn = document.querySelector('[data-pass="loginCard"]');
let signUpBtn = document.querySelector('[data-pass="signUpCard"]');
let btnContainer = document.querySelector(".btnContainer");
let card = document.querySelectorAll(".card");
let mainCard = document.querySelectorAll(".mainCard");

function showHide(className) {
  card.forEach((elem) => {
    let bool = elem.classList.contains(className);
    if (bool) {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  });
}
chooseContainer.childNodes.forEach((elem) => {
  if (elem.nodeName == "#text") return;
  showHide("loginCard");
  loginBtn.classList.add("clicked");
  elem.addEventListener("click", (e) => {
    let dataSet = elem.dataset.pass;
    removeClicked(chooseContainer);
    elem.classList.add("clicked");
    showHide(dataSet);
  });
});

function removeClicked(elem) {
  elem.childNodes.forEach((elem) => {
    if (elem.nodeName == "#text") return;
    elem.classList.remove("clicked");
  });
}

btnContainer.addEventListener("click", (e) => {
  let target = e.target;
  let targetDataSet = target.dataset.card;
  let targetedCard = document.querySelector(`.${targetDataSet}`);

  if (target.classList.contains("btnContainer")) return;

  removeClicked(btnContainer);
  target.classList.add("clicked");

  if (targetedCard) {
    mainCard.forEach((elem) => {
      if (elem != targetedCard) {
        // elem.style.display = "none";
        elem.classList.add("none");
        elem.classList.remove("block");
      }
    });
    if (!targetedCard.classList.contains("block")) {
      targetedCard.classList.remove("none");
      targetedCard.classList.add("block");
    } else {
      targetedCard.classList.remove("block");
      targetedCard.classList.add("none");
      target.classList.remove("clicked");
    }
    // targetedCard.classList.toggle("block");
  }
});

let file = document.querySelector("#uploadFile");
let uploadConfirmCard = document.querySelector(".uploadConfirmCard");
let uploadCard = document.querySelector(".uploadCard");
let uploadConfirmSubmit = document.querySelector(".uploadConfirmSubmit");
let uploadFile = document.querySelector(".uploadFile");
let uploadFileName = document.querySelector(".uploadFileName");

file.addEventListener("change", (e) => {
  let value = file.value;
  let slashIndex = value.lastIndexOf("\\");
  let trim = value.substring(slashIndex + 1);
  uploadFileName.innerText = trim;
});

uploadConfirmSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!groupName.value || !groupPassword.value)
    return alert("fill all the inputs");
  uploadConfirmCard.style.display = "none";
  uploadCard.style.display = "flex";
});
uploadFile.addEventListener("click", (e) => {
  e.preventDefault();
  if (!uploadFileName.innerText) return alert("atleast choose 1 file!!");
  uploadFileName.innerText = "";
  uploadCard.parentElement.classList.toggle("block");
});

let loginSignupSubmit = document.querySelectorAll(
  '.loginSignup button[type="submit"]'
);

loginSignupSubmit.forEach((elem) => {
  let formContainerInput = document.querySelectorAll(".formContainer > input");
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.classList.add("none");
    return formContainerInput.forEach((elem) => (elem.value = ""));
  });
});

let downloadConfirmSubmit = document.querySelector(".downloadConfirmSubmit");
let downloadFileSubmit = document.querySelector(".downloadFileSubmit");
let downloadConfirmCard = document.querySelector(".downloadConfirmCard");
let downloadCard = document.querySelector(".downloadCard");

downloadConfirmSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  downloadConfirmCard.style.display = "none";
  downloadCard.style.display = "flex";
});

downloadCard.addEventListener("click", (e) => {
  e.preventDefault();
  downloadCard.parentElement.classList.toggle("block");
});
