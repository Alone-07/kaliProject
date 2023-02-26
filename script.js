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
    mainCard.forEach((elem) => (elem.style.display = "none"));
    targetedCard.style.display = "block";
  }
});

console.log(mainCard);
